import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name} ${email} ${password}`);

    // clear fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
   <div className="container">
  <form className="form-box" onSubmit={handleSubmit}>
    
    <div className="form-group">
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4 className="preview">{name}</h4>
    </div>

    <div className="form-group">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h4 className="preview">{email}</h4>
    </div>

    <div className="form-group">
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h4 className="preview">{password}</h4>
    </div>

    <button type="submit">Submit</button>
  </form>
</div>
  );
};

export default Form;