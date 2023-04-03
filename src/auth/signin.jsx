import { useContext, useRef } from "react";
import { ThemeContext } from "../ThemeContext";

const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginUser, authUser, logOutUser } = useContext(ThemeContext);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
          loginUser(email, password);
        }}
      >
        <h1>Log in</h1>
        <input ref={emailRef} placeholder="enter email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button>submit</button>
        <div>{authUser ? "signed in" : "signed out"}</div>
        <div>
          {authUser && (
            <button type="button" onClick={logOutUser}>
              Logout
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signin;
