import { Link } from 'react-router-dom';
import './homepage.css'
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () =>{
    const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AInswer</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
        
          Give rest to your mind because we are thinking for you. Ask a query and 
          get the solution.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Nick: Be tension free with Ainswer",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Josh: This is fire",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Misty: It helps me in every work ",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Lex:I feel like a king of the game",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
