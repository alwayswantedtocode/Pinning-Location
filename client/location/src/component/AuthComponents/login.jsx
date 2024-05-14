import React from "react";
import FormField from "../Inputs/FormField";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    login,
    handleLoginOnchange,
    validLogEmail,
    validLogPassword,
    onLoginSubmit,
    isLoading,
  } = useAuth();
  // const { loading } = useSelector((state) => state.auth);
  // const{}
  return (
    <div className=" flex flex-col w-[100%] h-max items-center justify-center p-[3rem] gap-[30px]">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="">Already have an acount? Sign in here</p>
      </div>
      <form className="flex flex-col gap-[30px] " onSubmit={onLoginSubmit}>
        <div
          className={`w-max h-max  text-lg  flex items-center justify-center rounded-[4px] border-2 ${
            validLogEmail || !login.Email
              ? "border-[#FAC03E]"
              : " border-[#eb524a]"
          }`}
        >
          <FormField
            placeholder="Email"
            type="text"
            name="Email"
            value={login.Email}
            onChange={(e) => handleLoginOnchange("Email", e)}
            required
            className="border-none focus:outline-none"
          />
        </div>

        <div
          className={`w-max h-max  text-lg  flex items-center justify-center rounded-[4px] border-2 ${
            validLogPassword || !login.Password
              ? "border-[#FAC03E]"
              : " border-[#eb524a]"
          }`}
        >
          <FormField
            placeholder="Password"
            type="password"
            name="Password"
            value={login.Password}
            onChange={(e) => handleLoginOnchange("Password", e)}
            required
            className="border-none focus:outline-none"
          />
        </div>

        <div className="mt-[0.6rem] text-lg font-semibold ">
          <button
            className="rounded-[4px] border-none bg-[#efc364] hover:bg-[#FAC03E] w-[6rem] h-[2.4rem] "
            type="submit"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
