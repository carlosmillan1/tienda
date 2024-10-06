import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    // Validaciones
    if (!email || !password) {
      setErrorMessage("Todos los campos son obligatorios.");
      setSuccessMessage("");
      return;
    }

    if (email !== registeredEmail || password !== registeredPassword) {
      setErrorMessage("El correo o la contraseña no son correctos.");
      setSuccessMessage("");
      return;
    }

    // Si pasa todas las validaciones, mostramos el mensaje de éxito
    setSuccessMessage("¡Inicio de sesión exitoso!");
    setErrorMessage("");
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Iniciar Sesión</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button  type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;