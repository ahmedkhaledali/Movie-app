import React from "react";
import "./App.css";
import Footer from "./Composant/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Acceuil from "./Composant/Acceuil";
import Contact from "./Composant/contact";
import Favories from "./Composant/favories";
import { useState, useEffect } from "react";
import Admin from "./Composant/admin";
import axios from "axios";

function App() {
  const [Addfavorie, setAddfavorie] = useState(0);
  const getAdd = () => {
    setAddfavorie(Addfavorie + 1);
  };

  const [favorie, setfavorie] = useState([]);
  const getfavorie = (e) => {
    favorie.push(e);
    console.log(favorie);
  };

  const [input, setInput] = useState("");
  const handelchange = (event) => {
    setInput(event.target.value);
  };
  console.log(input);

  const [Movies, setMovies] = useState([]);
  const getMovies = () => {
    axios.get(`http://localhost:3005/posts`).then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(() => {
    getMovies();
  }, []);

  // const [input, setInput] = useState("");
  // const handelchange = (event) => {
  //   setInput(event.target.value);
  // };
  // console.log(input);

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Acceuil
            getAdd={getAdd}
            Addfavorie={Addfavorie}
            getfavorie={getfavorie}
            handelchange={handelchange}
            input={input}
            Movies={Movies}
          />
        </Route>
        <Route exact path="/contact">
          <Contact Addfavorie={Addfavorie} />
        </Route>
        <Route exact path="/favories">
          <Favories
            favorie={favorie}
            Addfavorie={Addfavorie}
            handelchange={handelchange}
            input={input}
          />
        </Route>
        <Route exact path="/admin">
          <Admin Movies={Movies} />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
