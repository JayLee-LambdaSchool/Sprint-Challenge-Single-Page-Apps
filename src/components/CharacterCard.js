import React from "react";
import styles from "styled-components";

const Cards = styles.div`
  border: 2px solid black;
  margin: 3%;
  background-color: #83D2E4;
  border-radius: 10px;
  padding: 3%;
`;

export default function CharacterCard(name, species, gender) {
  return (
    <Cards>
      <h3>Name:{name}</h3>
      <p>Species:{species}</p>
      <p>Gender:{gender}</p>
    </Cards>
  );
}
