import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
       <div >
     <button onClick={handleLogin}>
       <h2>LOGIN</h2> 
      </button>
    </div>
  );
}
export default Login;