import './App.css';

function App() {
  return (
  <div className="App">
    <User name="Mauricio" age={25} email="mauricio.gutley@gmail.com" />
  </div>
  );
}

const User = (props) => {
  return (
  <div>
    <h1>{props.name}</h1>
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
