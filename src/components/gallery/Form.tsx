import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [loves, setLoves] = useState("");
  const [favFood, setFavFood] = useState("");

  const [imageName, setImageName] = useState("");
  const [controlledText, setControlledText] = useState("");
  const [controlledText2, setControlledText2] = useState("");
  const [controlledText3, setControlledText3] = useState("");
  const [controlledText4, setControlledText4] = useState("");
  const [controlledText5, setControlledText5] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [ageTouched, setAgeTouched] = useState(false);
  const [loveTouched, setLoveTouched] = useState(false);
  const [favFoodTouched, setFavFoodTouched] = useState(false);
  const [imageTouched, setImageNameTouched] = useState(false);

  let nameIsValid: boolean = true;
  let nameErrorMessage: string = "";
  if (name === "") {
    nameIsValid = false;
    nameErrorMessage = "Vänligen fyll i din hamsters namn";
  }

  let nameClass = "";
  if (nameTouched) {
    nameClass = nameIsValid ? "valid" : "error";
  }


  const allowedAgeChar = "0123456789"
  let ageIsValid: boolean = true;
  let ageErrorMessage: string = "";
  if (age === "") {
    ageIsValid = false;
    ageErrorMessage = "Vänligen ange din hamsters ålder";
  } else if (!age.split('').every(char => allowedAgeChar.includes(char))) { 
		ageIsValid = false
		ageErrorMessage ='Vänligen skriv din hamsters ålder med siffror' 
	}


  let ageClass = "";
  if (ageTouched) {
    ageClass = ageIsValid ? "valid" : "error";
  }

  let loveIsValid: boolean = true;
  let loveErrorMessage: string = "";
  if (loves === "") {
    loveIsValid = false;
    loveErrorMessage = "Vänligen fyll i vad din hamster tycker om att göra.";
  }

  let loveClass = "";
  if (loveTouched) {
    loveClass = loveIsValid ? "valid" : "error";
  }

  let favFoodIsValid: boolean = true;
  let favFoodErrorMessage: string = "";
  if (favFood === "") {
    favFoodIsValid = false;
    favFoodErrorMessage = "Vänligen fyll i din hamsters favoritmat.";
  }

  let favFoodClass = "";
  if (favFoodTouched) {
    favFoodClass = favFoodIsValid ? "valid" : "error";
  }

  let imageNameIsValid: boolean = true;
  let imageNameErrorMessage: string = "";
  if (imageName === "") {
    imageNameIsValid = false;
    imageNameErrorMessage = "Vänligen lägg till en bild";
  }

  let imageClass = "";
  if (imageTouched) {
    imageClass = imageNameIsValid ? "valid" : "error";
  }

  let formIsInvalid =
    !nameIsValid ||
    !ageIsValid ||
    !favFoodIsValid ||
    !loveIsValid ||
    !imageNameIsValid;

  async function postHamster() {
    const newHamster = {
      name: controlledText,
      age: Number(controlledText2),
      loves: controlledText3,
      favFood: controlledText4,
      imgName: controlledText5,
      wins: 0,
      defeats: 0,
      games: 0,
    };

    console.log("Upload hamster", newHamster);
    const response = await fetch("/hamsters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHamster),
    });
    console.log(await response.text());
  }

  return (
    <div className="form">
      <div className="form-card">
        <h1> Ladda upp en hamster </h1>
        <section>
          <label>
            <input
              placeholder="Namn"
              onBlur={() => setNameTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setName(event.target.value);
                setControlledText(event.target.value);
              }}
              value={name}
              className={nameClass}
            />
          </label>
          {nameTouched ? (
            <div className="message-hidden"> {nameErrorMessage} </div>
          ) : null}
        </section>


        <section>
          <label>
            <input
              placeholder="Ålder"
              type="text"
              onBlur={() => setAgeTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setAge(event.target.value);
                setControlledText2(event.target.value);
              }}
              value={age}
              className={ageClass}
            />
          </label>
          {ageTouched ? (
            <div className="message-hidden">{ageErrorMessage}</div>
          ) : null}
        </section>

        <section>
          <label>
            <input
              placeholder="Älskar"
              type="text"
              onBlur={() => setLoveTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setLoves(event.target.value);
                setControlledText3(event.target.value);
              }}
              value={loves}
              className={loveClass}
            />
          </label>
          {loveTouched ? (
            <div className="message-hidden">{loveErrorMessage}</div>
          ) : null}
        </section>

        <section>
          <label>
            <input
              placeholder="Favoritmat"
              type="text"
              onBlur={() => setFavFoodTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setFavFood(event.target.value);
                setControlledText4(event.target.value);
              }}
              value={favFood}
              className={favFoodClass}
            />
          </label>
          {favFoodTouched ? (
            <div className="message-hidden">{favFoodErrorMessage}</div>
          ) : null}
        </section>

        <section>
          <label>
            <input
              placeholder="Bild"
              type="text"
              onBlur={() => setImageNameTouched(true)}
              onChange={(event) => {
                console.log("Controlled change", event.target.value);
                setImageName(event.target.value);
                setControlledText5(event.target.value);
              }}
              value={imageName}
              className={imageClass}
            />
          </label>
          {imageTouched ? (
            <div className="message-hidden">{imageNameErrorMessage}</div>
          ) : null}
        </section>

        <div>
          <button disabled={formIsInvalid} onClick={postHamster}>
           Spara hamster!
          </button>
        </div>
      </div>

      <div className="form-card">
        <h1>Here's your little champion! </h1>
        <p>Vad heter din hamster? {controlledText}</p>
        <p>Hur gammal är den? {controlledText2}</p>
        <p>Vad tycker den om att göra? {controlledText3}</p>
        <p>Vad är hens favoritmat? {controlledText4}</p>
        <div>
          {" "}
          <img className="img-hamster-form" src={controlledText5} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Form;
