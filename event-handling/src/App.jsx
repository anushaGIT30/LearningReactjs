import './App.css';

function App() {
  function clickEvent() {
    alert("are you sure");
  }
  function mouseOverEvent() {
    alert("you are on a heading");
  }
  function handleInputChange(e) {
    console.log("value till now is:", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert("your form is submitted successfully");
  }

  return (
    <div>
      <h1 onMouseOver={mouseOverEvent}>This is a heading</h1>
      <br /> {/* Adds a line break */}
      <button onClick={clickEvent}>Click Me</button>
      <br /> {/* Adds a line break */}
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <br /> {/* Adds a line break */}
        <input
          type="text"
          placeholder="Enter any name"
          onChange={handleInputChange}
        />
        <br /> {/* Adds a line break */}
        <button>Submit</button>
        <br /> {/* interview question we have create arrow function after onclick event otherwise you get immediate without clicking the button */}
        <button onClick={() => alert("button is clicked")}>Button</button>
      </form>
    </div>
  );
}

export default App;
