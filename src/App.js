import React, { useState, useEffect } from "react";
import "./styles.css";
import { Route, Link, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import SearchBar from "./SearchBar";
import SideBar from "./Sidebar";
import Newsfeed from "./Newsfeed";
import Header from "./Header";

const App = () => {
  const [messages, setMessages] = useState(null);
  const [users, setUsers] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSearchButton = () => {
    setSearch(searchTerm);
  };

  useEffect(() => {
    // Use the Fetch API:
    fetch(`https://tranquil-dusk-80347.herokuapp.com/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((error) => console.log("The hummingbird stopped humming!"));
  }, []);

  console.log(messages);

  return (
    <div className="App">
      <div className="container">
        <Header
          onChange={handleSearchInput}
          onClick={handleSearchButton}
          currentSearch={searchTerm}
        />

        <div className="row">
          <div className="col-sm-3">
            <SideBar />
          </div>
          <div className="col-sm-9">
            <Switch>
              <Route
                path="/profile/:user_id?"
                render={(props) => (
                  <ProfilePage messages={messages} {...props} />
                )}
              ></Route>

              <Route exact path="/">
                <Newsfeed messages={messages} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

/* const mockDataUser = [
  {
    id: 2,
    name: "Cristiani",
    email: "Cristiani@nomail.please",
    password: "simplePassword",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/2.png"
  },
  {
    id: 1,
    name: "Ellesia",
    email: "Ellesia@nomail.please",
    password: "noOneWillGuessThat",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/1.png"
  },
  {
    id: 5,
    name: "J",
    email: "J@nomail.please",
    password: "plainTextUhOh",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/5.png"
  },
  {
    id: 3,
    name: "Raphael",
    email: "Raphael@nomail.please",
    password: "unsafeP4ssw0rd",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/3.png"
  },
  {
    id: 4,
    name: "Teresa",
    email: "Teresa@nomail.please",
    password: "noOneWillGuessThatEither",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/4.png"
  }
];
const mock2Data = [
  {
    id: 1,
    text: "Let me introduce myself, my name is Elessia.",
    date: "2020-10-16T09:19:01.820Z",
    id_user: 1,
    name: "Ellesia",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/1.png"
  },
  {
    id: 2,
    text: "Hello, I'm Cristiani, nice to meet you.",
    date: "2020-10-16T09:19:01.820Z",
    id_user: 2,
    name: "Cristiani",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/2.png"
  },
  {
    id: 3,
    text: "My name is Raphael, this is my first message on Hummingbird!",
    date: "2020-10-16T09:19:01.820Z",
    id_user: 3,
    name: "Raphael",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/3.png"
  },
  {
    id: 4,
    text: "Hey, Teresa here, I'm on the Hummingbird frontend team.",
    date: "2020-10-16T09:19:01.820Z",
    id_user: 4,
    name: "Teresa",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/4.png"
  },
  {
    id: 5,
    text: "Hi, J here, I'm working on the API.",
    date: "2020-10-16T09:19:01.820Z",
    id_user: 5,
    name: "J",
    image_url: "https://pokeres.bastionbot.org/images/pokemon/5.png"
  }
]; */
