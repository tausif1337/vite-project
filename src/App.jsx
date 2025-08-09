import "./App.css";

function App() {
  function showAlert() {
    alert("Button clicked");
  }

  return (
    <>
      <button onClick={showAlert}>Click me</button>
    </>
  );
}

export default App;