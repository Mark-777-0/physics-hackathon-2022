import { useLayoutEffect } from "react";
import "./portfolio.scss";
import "animate.css/animate.min.css";
import 'aos/dist/aos.css';
import katex from 'katex';
import ReactMarkdown from 'react-markdown';
import RemarkMathPlugin from 'remark-math';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import LOGO from './cometLogo.svg'
import One from './One.svg'
import Two from './Two.svg'
import Three from './Three.svg'
export default function Portfolio() {


  
  const _mapProps = (props) => ({
    // ...props,
    escapeHtml: false,
    plugins: [
      RemarkMathPlugin
    ],
    renderers: {
      // ...props.renderers,
      math: ({ value }) => <BlockMath>{value}</BlockMath>,
      inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>
    }
  });
    
  return (
    <div className="portfolio" id="Explanation">
      
      <h2>
        <span className="bumper"> Explanation </span>
      </h2>
      
      <h3>  Galactic Pong </h3>
      
      <span className="line"> </span>
      
      <div id='explanation'> 

      
      <p><span class='title'> What is Galactic Pong?!</span></p> <p className="text">  <br></br>
      Welcome to the Virgo Super Cluster where the game of pong is played at a galactic scale. The rules are simple:
      <img className='logo' src={LOGO}></img>
      <br></br><br></br>
    <ol>
    <li>1.) Two players are located millions of kilometers apart from one another on opposite sides of the field of play. </li> 
    <li>2.) Both players have a paddle that can reflect the ball back towards their opponent</li> 
    <li>3.) A ball is randomly shot into the field of play. A player scores when the ball passes their opponent's paddle</li> 
    </ol>
    <br></br>
    However, keep in mind, at this scale, players often find themselves moving the paddle at nearly the speed of light to keep their opponents from scoring. At these speeds, relativistic effects play a role. Your paddle will undergo length contraction and time dilation if you move it too fast, making it harder to hit the ball. To make it even worse, there are black holes in the middle of the field affecting the trajectory of the ball.  </p>
    <p><span class='title'> How To Play</span></p><p className="text">  <br></br>
    The game starts paused. In this mode, players can add black holes to the field of play by clicking on the screen. Players can use the sliders located on the bottom left to change the universe's gravitational constant and speed of light. These sliders allow players to learn about the role of these important universal constants in an experimental and playful way. (They also impact the difficulty of the game!)
    <br></br><br></br>
Clicking the start button will start the game. A ball will be randomly generated and sent out into the field of play. Use the computer's cursor to control the paddle. Notice how changing the speed of light affects the length contraction of the paddle. 
<br></br><br></br>
On the top left there are three clocks demonstrating the flow of time of the observer at rest, the paddle moving at relativistic speeds, and the ball moving at similar speeds through a field of black holes. Notice how they start in sync at the beginning but start to differ when the paddle is moved or the ball moves close to a black hole.
<br></br><br></br>
Players can enjoy the game while listening to an original soundtrack composed by our teammate Mark Daniel (within the hours of hackathon!). To listen, <strong> hit the play button in the top right corner of the website.</strong> 

       </p>
       <p><span class='title'> Math and Physics</span></p>
       <p className="text">  <br></br>
       A paddle with proper length L0 travelling at velocity vp will have the following length in the frame of reference of an observer at rest.

       <img className='latex' src={One}/> 
       <br></br>
       
       The relativistic equations of motion of moving gravitational bodies are given by the Einstein-Infeld-Hoffmann equation. This equation is used to find the equation of motion of the ball moving through a field of black holes. In the case of galactic pong, the mass of the ball is assumed to be negligible compared to that of the black hole's. This greatly simplifies the Einstein-Infeld-Hoffmann equation as the velocity of the black holes remains zero at all times. The simplified equation is the following:
       <img className='latex'  src={Two}/> 

       <br></br>
       Being in close proximity to a black hole causes the ball's flow of time to dilate. With a proper time of t0, the time dilation of the ball due to the gravitation of a non-rotating black hole is the following: 

       <img className='latex'  src={Three}/> 
       The total time dilation takes into account every black hole in the field of play.
        </p>
        
        <p><span class='title'> References</span></p> <p className="text">
        <em>Carroll, S. (2003). Spacetime and Geometry: An Introduction to General Relativity. Benjamin Cummings. ISBN: 0805387323</em>

        </p>

      </div>


    </div>
  );
}
