import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

function App() {
  const nameList = [
    {
      id: 1,
      first: "Bruce",
      last: "Wayne",
    },
    {
      id: 2,
      first: "Clark",
      last: "Kent",
    },
    {
      id: 3,
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="mario" msgCount={20} IsLoggedIn={true} />
      <Person first="Vishwas" last="Kumar" />
      <PersonList nameList={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
