import { Completion } from "./ai";
import {useState} from "react"


const GetJoke = async (topic) => {
    const joke = await Completion("Tell me a joke about " + topic);
    return joke.message;
  }


export const Joke = (topic) => {
    const [joke,setJoke] = useState("Why did the chicken cross the road?");   

    function OnButton() {
        setJoke("Loading joke...");
        let j = GetJoke("dogs").then((response) =>{ 
          setJoke(response);
    });

    }
    
    return (
        <><p>{joke}</p>
        <button onClick={OnButton}>Click me</button>
        </>
    );
}