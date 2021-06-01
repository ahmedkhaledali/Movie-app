import React, { useState } from "react";
import Boddy from "./body";
import Cards from "./Cards";
import New from "./New";
import Navbare from "./Navbar";

function Acceuil({
  getAdd,
  getfavorie,
  Addfavorie,
  handelchange,
  input,
  movies,
}) {
  // const [input, setInput] = useState("");
  // const handelchange = (event) => {
  //   setInput(event.target.value);
  // };
  // console.log(input);
  return (
    <div>
      <Navbare
        Addfavorie={Addfavorie}
        handelchange={handelchange}
        input={input}
      />
      <Boddy />
      <New />
      <div>
        <Cards
          input={input}
          getAdd={getAdd}
          getfavorie={getfavorie}
          movies={movies}
        />
      </div>
    </div>
  );
}

export default Acceuil;
