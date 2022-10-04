import React, { useState } from "react";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const checkForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
    for (let combo in combos)
      combos[combo].forEach((pattern) => {
        console.log(squares[pattern[0]]);

        console.log(squares[pattern[1]]);
        console.log(squares[pattern[2]]);

        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //do nothing
        } else if (
          JSON.stringify(squares[pattern[0]]) ===
            JSON.stringify(squares[pattern[1]]) &&
          JSON.stringify(squares[pattern[1]]) ===
            JSON.stringify(squares[pattern[2]])
        ) {
          console.log("d");
          console.log(squares[pattern[0]].props.children[0]);
          setWinner(squares[pattern[0]]);
        }
      });
  };

  const handleClick = (num) => {
    let squares = [...cells];
    if (squares[num]) {
      return 0;
    }
    if (turn === "X") {
      squares[num] = (
        <div className="icons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/1024px-Grey_close_x.svg.png"
            alt="imagen x"
          ></img>
        </div>
      );
      console.log(squares[num].type);
      setTurn("O");
    } else {
      squares[num] = (
        <div>
          <img
            src="https://previews.123rf.com/images/photoart23d/photoart23d1808/photoart23d180800427/107098187-letra-o-gris-gris-aislado-en-blanco-representaci%C3%B3n-3d.jpg"
            alt="imagen o"
          />
        </div>
      );
      setTurn("X");
    }

    checkForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return (
      <td onClick={() => (winner == null ? handleClick(num) : null)}>
        {cells[num]}
      </td>
    );
  };

  //

  return (
    <>
      <div className="container">
        <table>
          {winner ? (
            <>
              <h1 className="color">{winner} Wins!</h1>
            </>
          ) : (
            <h1 className="turn">It is {turn} turn!</h1>
          )}
          <button className="star" onClick={() => handleRestart()}>
            Start over
          </button>
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>
            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>
            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicTacToe;
