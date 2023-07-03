import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import ButtonEvent from "./components/ButtonEvent";
import InputEvent from "./components/InputEvent";
import StyleProps from "./components/StyleProps";
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
      <ButtonEvent
        handleClick={() => {
          console.log("button clicked");
        }}
        handleClickEvent={(event, id) => {
          console.log(event);
          console.log(id);
        }}
      />
      <InputEvent
        value="hello"
        handleChange={() => {}}
        handleChangeEvent={(e) => {
          console.log(e);
        }}
      />
      <StyleProps styles={{ border: "1px solid red", padding: "1rem" }} />
    </div>
  );
}

export default App;
