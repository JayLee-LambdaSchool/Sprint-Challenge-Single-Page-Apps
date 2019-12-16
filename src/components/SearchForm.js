import React, {useState, useEffect} from "react";
import axios from "axios";
import styles from "styled-components";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";

const Buttons = styles.button`
  margin: 10px;
  background-xolor: #3D373C;
  color: #E7E0DB;
`;

export default function SearchForm() {
  const [newData, setNewData] = useState([]);

  const [newQuery, setNewQuery] = useState("");

  useEffect(() =>{
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const characters = response.data.results.filter(char =>
          char.name.toLowerCase().includes(newQuery.toLowerCase())  
        );
        setNewData(characters);
      });
  }, [newQuery]);

  const handleInputChange = event => {
    setNewQuery(event.target.value);
  };
 
  return (
    <div>
      <form>

        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={newQuery}
          onChange={handleInputChange}
        />

        <Link to="/">
          <Buttons>Home</Buttons>
        </Link>
      </form>

      {newData.map(char => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            species={char.species}
            gender={char.gender}
          />
        );
      })}
    </div>
  );
}
