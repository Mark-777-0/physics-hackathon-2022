//React
import {useEffect, useRef, useState} from 'react'
// import useScript from './sketches/useScript';
// import Helmet from "react-helmet";

//Styling
import './welcome.scss'
import Sketch from 'react-p5'
export default function Welcome() {

  const textRef = useRef();

  return (


    <div className='Simulation' id='Game'>
        <div id='sim'>

        <iframe src="https://kushasareen.github.io/galactic_pong/"></iframe>
        </div>
    </div>
  )
}
