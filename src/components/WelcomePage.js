import React from "react";
import {Link} from "react-router-dom";
import styles from "styled-components";

const Buttons = styles.button`
  margin: 10px;
  background-color: #3D373C;
  color: #E7E0D8;
`;

const Page = styles.section`
  display: flex;
  justify-content: center;
`;

const Img = styles.img`
  margin-left: 3%;
`;

export default function WelcomePage() {
  return (
    <Page className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Fan Site!</h1>

        <Link to="/Characters">
          <Buttons>Characters</Buttons>
        </Link>

        <Link to="/Search">
          <Buttons>Search</Buttons>
        </Link>

        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
      </header>
    </Page>
  );
}
