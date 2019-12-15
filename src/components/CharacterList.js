import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import styles from "styled-components";
import {Link} from "react-router-dom";

const Buttons = styles.button`
  margin: 10px;
  background-color: #3D373C;
  color: #E7E0DB;
`;

export default function CharacterList() {
  const [newCharacter, setNewCharacter] = useState([]);

    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/")    
        .then(response => {
          setNewCharacter(response.data.results);
          console.log(response);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
  }, []);

  return (
    <section className="character-list">
      <Link to="/">
        <Buttons>Home</Buttons>
      </Link>

      <Link to="/Search">
        <Buttons>Search</Buttons>
      </Link>

      {newCharacter.map(ind => (
        <CharacterCard
          key={ind.id}
          name={ind.name}
          species={ind.species}
          gender={ind.gender}
        />
      ))}
    </section>
  );
}
