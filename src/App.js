import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    email: "",
    newsletter: false,
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setUserData({ ...userData, [name]: value });
  }
  function handleNewsletterChange(event) {
    const { checked, name } = event.target;
    setUserData({ ...userData, [name]: checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(userData);
  }

  return (
    <div className="App">
      <h1>More USERS!</h1>
      <h2>Enter user credentials below:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name:</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={userData.age}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <div className="newsletter">
          <input
            required
            type="checkbox"
            name="newsletter"
            checked={userData.newsletter}
            onChange={handleNewsletterChange}
          />
          <label htmlFor="newsletter">
            Yes, I would like many more emails!
          </label>
        </div>
        <button type="submit">Submit your info</button>
      </form>
    </div>
  );
}

export default App;
