import { useContext } from "react";
import Input from "../../Component/common/input";
import bg from "/bg.png"
import { GlobalContext } from "../../Context/globalContext";
const Register = () => {

  const {register,userName, setUserName,email ,setEmail ,password,setPassword} = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    register(userName,email, password);
  };
  return (
    <div className="h-screen flex gap-[50px] items-center">
      <img
        src={bg}
        alt="background-img"
        className="h-full w-[650px] object-cover"
      />
      <form
        action=""
        className="w-[455px] flex flex-col gap-[30px]"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <h2 className="font-bold text-[30px] text-[var(--dark)] ">
            Create New Account
          </h2>
          <p className="text-[var(--gray)]">Please enter details</p>
        </div>
        <div className="flex flex-col gap-[16px] justify-start">
          <div>
            <label
              htmlFor="User-field"
              className="text-[12px] text-[var(--dark)]"
            >
              User Name
            </label>
            <br/>
            <Input
              type={"text"}
              name={"User"}
              placeholder={'Robert Fox'}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email-field"
              className="text-[12px] text-[var(--dark)]"
            >
              Email Address
            </label>
            <br />
            <Input
              type={"email"}
              name={"Email"}
              placeholder={"Robertfox@exmple.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password-field"
              className="text-[12px] text-[var(--dark)]"
            >
              Password
            </label>
            <br />
            <Input
              type={"Password"}
              name={"Password"}
              placeholder={"Enter Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="bg-[var(--dark)] p-5 w-full text-white rounded-[10px]">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Register;
