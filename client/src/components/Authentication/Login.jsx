import { useState } from "react";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginImg from '../../assets/pexels-junior-teixeira-1064069-2047905.jpg';
function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user.emailVerified) {
        alert("Login successful");
        navigate('/home');
      } else {
        alert("Please verify your email");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const onGoogleSubmit = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center gap-5 text-white bg-black">
    <div>
      <img className=" h-[400px]" src={LoginImg} alt="Login" />
    </div>
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
      {/* <img className="size-24" src="https://websitedemos.net/plant-shop-04/wp-content/uploads/sites/160/2020/07/grow-plant-store-logo-green.svg" alt="Grow" /> */}
      <p className="font-bold text-3xl text-white   transition-all duration-300  hover:tracking-wider hover:border-none">Iv8.Tog  </p>
      <div className="flex flex-col gap-10 justify-center items-center">
        <input
          className="px-5 py-3 border-2 w-80  rounded-lg border-[#605ffc]"
          placeholder="Email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-5 py-3 border-2 w-80 border-[#605ffc] rounded-lg"
          placeholder="Password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <a className="ml-44 text-[#605ffc]" href="/reset-password">Forgot Password</a>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <button className="bg-white text-center text-black text-bold text-lg px-5 py-2 w-80 " onClick={onSubmit}>Login</button>
        <div className="bg-white flex items-center justify-center gap-5 text-black text-lg px-5 py-2 w-80 cursor-pointer" onClick={onGoogleSubmit}>
          <img className="w-8 bg-cover object-cover" src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google" />
          <span className="text-black">Login using Google</span>
        </div>
      </div>
      <a href="/register" className="text-[#605ffc]">Go to Register</a>
    </div>
    </div>
  );
}

export default Login;
