import { useState } from "react";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreen from "./OuutputScreen";
import Button from "./Button";

const Calculator = () => {
// Calculator state
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    // Buttons click handler
  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;

    switch (value) {
      case "=": {
        if (question !== "") {
            try {
            // ⚙️ Vyhodnoť výraz
            const result = eval(question);

            // 🧮 Kontrola dělení nulou
            // Pokud výraz obsahuje "/" a výsledek je Infinity, zobraz chybu
            if (question.includes("/") && !isFinite(result)) {
                setAnswer("Nelze dělit nulou");
            } else {
                setAnswer(String(result));
            }

            setQuestion("");
            } catch {
            setAnswer("Math Error");
            }
        }
    break;
    }

      case "Clear": {
        setQuestion("");
        setAnswer("");
        break;
      }

      case "Delete": {
        setQuestion((prev) => prev.slice(0, -1));
        break;
      }

      default: {
        setQuestion((prev) => prev + value);
        break;
      }
    }
  };


  return (
    <article className="calculator frame">
        <CalculatorTitle value="Kalkulačka"/>
        <div className="mainCalc">
            <OutputScreen question={question} answer={answer} />
            <div className="button-grid">
                <div className="button-row">
                    <Button label={"Clear"}  handleClick={handleClick} className="clear"   /> 
                    <Button label={"Delete"} handleClick={handleClick} className="delete"/> 
                    <Button label={"."} handleClick={handleClick} /> 
                    <Button label={"/"} handleClick={handleClick} />
                </div>
                <div className="button-row">
                    <Button label={"7"} handleClick={handleClick} /> 
                    <Button label={"8"} handleClick={handleClick}/> 
                    <Button label={"9"} handleClick={handleClick}/> 
                    <Button label={"*"} handleClick={handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"4"} handleClick={handleClick}/> 
                    <Button label={"5"} handleClick={handleClick}/>
                    <Button label={"6"} handleClick={handleClick} />
                    <Button label={"-"} handleClick={handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"1"} handleClick={handleClick}/> 
                    <Button label={"2"} handleClick={handleClick}/> 
                    <Button label={"3"} handleClick={handleClick}/> 
                    <Button label={"+"} handleClick={handleClick}/>
                </div>
                <div className="button-row">
                    <Button label={"0"} handleClick={handleClick}/> 
                    <Button label={"="} handleClick={handleClick} className="equals"/>
                </div>
            </div> 
        </div>
    </article>
  )
};

export default Calculator;