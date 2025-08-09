function Greetings({ isLoggedIn }) {
  return (
    <div>
        {isLoggedIn && <h1>Welcome to the website</h1>}
        {!isLoggedIn && <h1>Please login to continue</h1>}
    </div>
  );
}

export default Greetings;