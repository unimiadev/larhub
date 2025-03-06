import React, { useState } from "react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();

  async function signInWithEmailPassword() {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");
      router.push("/#plans");
    } catch (err) {
      setError(err.message);
    }
  }

  function handleSignupClick(e) {
    e.preventDefault();
    const confirmSignup = window.confirm(
      "Após cadastrar sua conta, volte a essa página e realize o login"
    );
    if (confirmSignup) {
      window.open(
        "https://app.larhub.com.br/",
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <div className="container">
      <div className="login-box">
        <img
          src={
            "https://firebasestorage.googleapis.com/v0/b/imob-projeto-expmed.appspot.com/o/logo_larhub_semfundo.png?alt=media&token=e539ef33-1e3b-4adb-948d-287dadaaaf58"
          }
          alt="Logo"
          className="logo"
        />
        <h2>Acesse sua conta</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="forgot-password">
          <a href="#">Esqueci minha senha</a>
        </div>
        {error && <p className="error">{error}</p>}

        <button onClick={signInWithEmailPassword}>Entrar</button>

        <p className="signup-link">
          Ainda não possui conta?{" "}
          <a href="#" onClick={handleSignupClick}>
            Cadastre-se
          </a>
        </p>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap");

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: white;
        }

        .login-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 100%;
        }

        .logo {
          width: 150px;
          margin-bottom: 1rem;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #333;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Montserrat", sans-serif;
        }

        input {
          width: 100%;
          padding: 0.8rem;
          margin: 0.5rem 0;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1rem;
          font-family: "Roboto", sans-serif;
          background-color: #f0f2f5;
        }

        input:focus {
          outline: none;
          border-color: #0070f3;
          box-shadow: 0 0 5px rgba(0, 112, 243, 0.2);
        }

        .forgot-password {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          margin-top: 0.5rem;
        }

        .forgot-password a {
          color: #0070f3;
          font-size: 0.9rem;
          text-decoration: none;
          font-family: "Roboto", sans-serif;
        }

        .error {
          color: red;
          margin: 0.5rem 0;
          font-size: 0.9rem;
          font-family: "Roboto", sans-serif;
        }

        button {
          width: 100%;
          padding: 0.8rem;
          margin: 1rem 0;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
          font-family: "Roboto", sans-serif;
        }

        button:hover {
          background-color: #005bb5;
        }

        .signup-link {
          font-size: 0.9rem;
          color: #555;
          font-family: "Roboto", sans-serif;
        }

        .signup-link a {
          color: #0070f3;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
