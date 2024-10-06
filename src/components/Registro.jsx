import React, { useState } from 'react';

const Registro = () => {
  // Definir los estados para email, contraseña y confirmación de contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validaciones
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Todos los campos son obligatorios.");
      setSuccessMessage("");
      return;
    }

    if (!emailRegex.test(email)) {
      setErrorMessage("Error de transcripción, ingrese un correo válido.");
      setSuccessMessage("");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres.");
      setSuccessMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("La contraseña y la confirmación no coinciden.");
      setSuccessMessage("");
      return;
    }

    // Si pasa todas las validaciones, mostramos el mensaje de éxito
    setSuccessMessage("Registro exitoso!");
    setErrorMessage("");

    // Guardar los datos para ser utilizados en el login
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Registro</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
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
        <div>
          <label>Confirmar contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Registro;