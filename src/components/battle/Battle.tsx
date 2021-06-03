import React from "react";
import "./Battle.css";
import { useEffect, useState } from "react";
import { Hamster } from "../../types/Hamster";

const Battle = () => {
  const [randomHamster, setRandomHamster] = useState<null | Hamster>(null);
  const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null);
  const [allInfoVisible, setAllInfoVisible] = useState(false);

  //Visar vinnande & förlorande  hamster
  const [leftWinner, setLeftWinner] = useState(false);
  const [rightWinner, setRightWinner] = useState(false);

  useEffect(() => {
    async function getRandomHamster(random: any) {
      const response = await fetch("/hamsters/random", { method: "GET" });
      const data: Hamster = await response.json();
      random(data);
    }

    getRandomHamster(setRandomHamster);
    getRandomHamster(setRandomHamster2);
  }, []);

  const handleSkipClick = () => {
	  setAllInfoVisible(false)
	  async function getRandomHamster(random: any) {
		const response = await fetch("/hamsters/random", { method: "GET" });
		const data: Hamster = await response.json();
		random(data);
	  }
  
	  getRandomHamster(setRandomHamster);
	  getRandomHamster(setRandomHamster2)
  };

  // Vinnande hamster
  async function putWinnerHamster(winner: Hamster) {
    const winnerUpdate = {
      wins: winner.wins + 1,
      games: winner.games + 1,
    };

    await fetch("/hamsters/" + winner.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(winnerUpdate),
    });
  }

  //Förlorande hamster

  async function putLoserHamster(loser: Hamster) {
    const loserUpdate = {
      defeats: loser.defeats + 1,
      games: loser.games + 1,
    };

    await fetch("/hamsters/" + loser.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loserUpdate),
    });
  }

  const randomHamsterLeft = () => {
    if (!randomHamster || !randomHamster2) return;
    setAllInfoVisible(true);
    setRightWinner(true);
    let winner = {
      ...randomHamster,
      wins: randomHamster.wins + 1,
      games: randomHamster.games + 1,
    };
    let loser = {
      ...randomHamster2,
      defeats: randomHamster.wins + 1,
      games: randomHamster.games + 1,
    };
    setRandomHamster(winner);
    setRandomHamster2(loser);
    putWinnerHamster(randomHamster);
    putLoserHamster(randomHamster2);

    console.log(winner, loser);
  };

  const randomHamsterRight = () => {
    if (!randomHamster2 || !randomHamster) return;
    setAllInfoVisible(true);
    setLeftWinner(true);
    let winner = {
      ...randomHamster2,
      wins: randomHamster.wins + 1,
      games: randomHamster.games + 1,
    };
    let loser = {
      ...randomHamster,
      defeats: randomHamster.defeats + 1,
      games: randomHamster.games + 1,
    };
    setRandomHamster2(winner);
    setRandomHamster(loser);
    putWinnerHamster(randomHamster2);
    putLoserHamster(randomHamster);

    console.log(winner, loser);
  };

  return (
    <main className="battle">
      {randomHamster ? (
        <div
          className="randomhamsterleft"
          key={randomHamster.id}
          onClick={randomHamsterLeft}
        >
          {randomHamster.imgName.startsWith("http") ? (
            <img src={randomHamster.imgName} alt="hamster" />
          ) : (
            <img src={`img/${randomHamster.imgName}`} alt="hamster" />
          )}
          <h2>{randomHamster.name}</h2>
          <p>{randomHamster.age} år</p>
          <p>Favoritmat: {randomHamster.favFood}</p>
          <p>Gillar att: {randomHamster.loves}</p>

          {allInfoVisible ? (
            <div>
              <div className="result">
                {leftWinner ? <h3>JAG FÖRLORADE... </h3> : <h2> JAG VANN! </h2>}{" "}
              </div>
              <h3>Vinster: {randomHamster.wins}</h3>{" "}
              <h3>Förluster: {randomHamster.defeats}</h3>
            </div>
          ) : (
            "Rösta för att ta del av resultat"
          )}
        </div>
      ) : (
        "Hämtar random hamster från API"
      )}

      <button className="random-btn" onClick={() => handleSkipClick()}>
        {" "}
        Hoppa över{" "}
      </button>

      {randomHamster2 ? (
        <div
          className="randomhamsterright"
          key={randomHamster2.id}
          onClick={randomHamsterRight}
        >
          {randomHamster2.imgName.startsWith("http") ? (
            <img src={randomHamster2.imgName} alt="hamster" />
          ) : (
            <img src={`img/${randomHamster2.imgName}`} alt="hamster" />
          )}
          <h2>{randomHamster2.name}</h2>
          <p>{randomHamster2.age} år</p>
          <p>Favoritmat: {randomHamster2.favFood}</p>
          <p>Gillar att: {randomHamster2.loves}</p>
          {allInfoVisible ? (
            <div>
              <div className="result">
                {rightWinner ? <h3>JAG FÖRLORADE... </h3> : <h2> JAG VANN!</h2>}{" "}
              </div>
              <h3>Vinster: {randomHamster2.wins}</h3>{" "}
              <h3>Förluster: {randomHamster2.defeats}</h3>
            </div>
          ) : (
            "Rösta för att ta del av resultat"
          )}
        </div>
      ) : (
        "Hämtar random hamster från API"
      )}
    </main>
  );
};

export default Battle;
