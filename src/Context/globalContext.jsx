import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!res.ok) {
        toast.error("Invalid credentials");
        throw new Error("Invalid credentials");
      }

      const data = await res.json();

      if (data) {
        toast.success("Login successful");
        Cookies.set("AuthUser", data.access_token, { expires: 30 });
        getUser().then((data) => setUser(data));
      }
      console.log(data);
    } catch (error) {
      console.error("Error in LoginFn:", error.message);
    }
  };
  const getUser = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${Cookies.get("AuthUser")}`,
        },
      });

      if (!res.ok) {
        throw new Error("Invalid Credentials");
      }

      const user = await res.json();
      console.log(user);
      return user;
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const register = async (userName, email, password) => {
    try {
      const checkEmail = await fetch("https://api.escuelajs.co/api/v1/users/is-available",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email})
      })
      const isAvailable = await checkEmail.json();
      console.log(isAvailable)
      if(!isAvailable.available){
        toast.error("Email already exists");
        return;
      }
      const res = await fetch("https://api.escuelajs.co/api/v1/users/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:userName, email, password,avatar: "https://picsum.photos/800"})
      });
      const userObj = await res.json();
      console.log(userObj);
      toast.success("User created successfully")
    } catch (error) {
      console.error( error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUser().then((data) => setUser(data));
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        login,
        email,
        setEmail,
        password,
        setPassword,
        user,
        userName,
        setUserName,
        register
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};