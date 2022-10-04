import React from "react";
import { useState } from "react";
import TicTacToe from "./TicTacToe";
import "./TicTacToe.css";

const Player = () => {
  const [istictactoe, setIstictactoe] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const tictac = () => {
    if (player1 !== "" && player2 !== "") {
      setIstictactoe(true);
    } else {
      setIstictactoe(false);
    }
  };

  return (
    <>
      <h1>Tic Tac Toe in React.js</h1>

      {/*operador ternario*/}
      {istictactoe === true ? (
        <TicTacToe />
      ) : (
        <>
          <h1>Pick A Weapon</h1>
          <div className="player">
            <label>
              <h2 className="title">CHOOSE YOUR WEAPON</h2>
              <input
                className="input1"
                onChange={(event) => setPlayer1(event.target.value)}
                type="text"
                name="name"
                placeholder="Player 1 username"
              />
            </label>
            <label>
              <input
                className="input2"
                onChange={(event) => setPlayer2(event.target.value)}
                type="text"
                name="name"
                placeholder="Player 2 username"
              />
            </label>
            <button className="button1 icons" onClick={tictac}>
              <img
                src="https://previews.123rf.com/images/photoart23d/photoart23d1808/photoart23d180800130/107022476-letra-x-3d-amarillo-aislado-en-blanco-representaci%C3%B3n-3d.jpg"
                alt="imagen x"
              ></img>
            </button>
            <button className="button2">
              <img
                src="https://us.123rf.com/450wm/parinja/parinja1611/parinja161100041/68692110-representaci%C3%B3n-3d-de-la-letra-o-en-azul-sobre-un-fondo-blanco.jpg"
                alt="imagen O"
              ></img>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Player;
