import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [nayoks, setNayoks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setNayoks(data));
  }, []);



  // const nayoks = [{name:'Shakib khan', age:55}, {name:'wwwwwww', age:null},{name:'ssssssssss', age:55}, {name:'xxxxxxxx', age:55},{name:'Imran Hashmi', age:55}]

  return (
    <div className="App">
      <MovieCounter />
      {nayoks.map((nayok) => (
        <Nayok
          name={nayok.name}
          email={nayok.email}
          city={nayok.address.city}
          lat={nayok.address.geo.lat}
          lng={nayok.address.geo.lng}
          key={nayok.id}
        >
          {" "}
        </Nayok>
      ))}
    </div>
  );
}

const Nayok = ({ name, email, city, lat, lng }) => {
  const nyokStyle = {
    border: "2px solid red",
    margin: "5px",
  };

  return (
    <div style={nyokStyle}>
      <h1>I am {name} </h1>
      <h3>My email {email || 30} </h3>
      <h3>I live in {city}</h3>
      <h3>
        My geo location latitude :{lat} longitude :{lng}
      </h3>
    </div>
  );
};

const MovieCounter = () => {
  const [count, setCount] = useState(5);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
      <h5>Number of Movies: {count} </h5>
      <MovieDisplay movies={count + 1.5} />
    </div>
  );
};

const MovieDisplay = ({ movies }) => {
  return (
    <div>
      <h4>I have acted in {movies} movies</h4>
    </div>
  );
};

export default App;
