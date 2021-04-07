import "./App.css";
import { useState } from "react";

function App() {
  // Add states and eventHandlers here
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subscription, setSubscription] = useState(false);

  function handleNameChange(event) {
    const { value } = event.target;
    setUserName(value);
  }

  function handleSurnameChange(event) {
    const { value } = event.target;
    setUserSurname(value);
  }

  function handleAgeChange(event) {
    const { value } = event.target;
    setUserAge(value);
  }

  function handleEmailChange(event) {
    const { value } = event.target;
    setUserEmail(value);
  }

  function handleSubscriptionChange(event) {
    const { checked } = event.target;
    setSubscription(checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const userInfo = {
      userName,
      userSurname,
      userAge,
      userEmail,
      subscription,
    };
    console.log(userInfo);
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
          value={userName}
          onChange={handleNameChange}
        />
        <label htmlFor="lastName">Surname:</label>
        <input
          type="text"
          name="lastName"
          value={userSurname}
          onChange={handleSurnameChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={userAge}
          onChange={handleAgeChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userEmail}
          onChange={handleEmailChange}
        />
        <div className="newsletter">
          <input
            required
            type="checkbox"
            name="newsletter"
            checked={subscription}
            onChange={handleSubscriptionChange}
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
