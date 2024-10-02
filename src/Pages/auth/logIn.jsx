import { useContext } from "react";
import Input from "../../Component/common/input";
import background from "/register-bg.png"
import { GlobalContext } from "../../Context/globalContext";
const Login = () => {
  const { login,email ,setEmail ,password,setPassword} = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email,password)
    setEmail("")
    setPassword("")
  }
    return ( 
        <div className="h-screen flex gap-[50px] items-center">
          <img src={background} alt="background-img" className="h-full w-[650px] object-cover"/>
          <form action="" className="w-[455px] flex flex-col gap-[30px]" onSubmit={(e)=>{handleSubmit(e)}}>
              <div>
                <h2 className="font-bold text-[30px] text-[var(--dark)] ">Welcome👋</h2>
                <p className="text-[var(--gray)]">Please Login here</p>
              </div>
              <div className="flex flex-col gap-[16px] justify-start">
                <div>
                    <label htmlFor="email-field" className="text-[12px] text-[var(--dark)]">Email Address</label><br />
                    <Input type={"email"} name={"Email"} placeholder={"Robertfox@exmple.com"} value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="password-field" className="text-[12px] text-[var(--dark)]">Password</label><br />
                    <Input type={"Password"} name={"Password"} placeholder={"Enter Password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
              </div>
              <button className="bg-[var(--dark)] p-5 w-full text-white rounded-[10px]">Login</button>
          </form>
        </div>
     );
}
 
export default Login;