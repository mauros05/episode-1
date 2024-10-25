import './App.css';

function App() {

  const age = 14;
  const isGreen = false;

  return (
    <div className="App">
      { age >= 18 ? <h1>Puedes Votar!</h1> : <h1>No puedes Votar!</h1> }
      <h1 style={{ color: isGreen ? "green" : "red" }}>This is a color</h1>

      {isGreen && <button>This is a Button</button>}
    </div>
  );

  // return (
  // <div className="App">
  //   <User name="Mauricio" age={25} email="mauricio.gutley@gmail.com" />
  //   <User name="Concepcion" age={57} email="conchitamol26@hotmail.com" />
  // </div>
  // );
}

const User = (props) => {
  return (
  <div>
    <h1 className="name">{props.name}</h1>
    <h1>{props.age}</h1>
    <h1>{props.email}</h1>
  </div>
);
}

const getName = () => {  // This is JS function
  return "Mauricio";
}

const GetNameComponent = () => { // This is a React Component
  return <h1>Pedro</h1>
}


export default App;
