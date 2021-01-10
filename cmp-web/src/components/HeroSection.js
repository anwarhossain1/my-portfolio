import React from 'react';
import '../App.css';
import './HeroSection.css';
import video from '../videos/video.mp4';
import { useState, useEffect } from "react";
const words = ["Front-end Developer...", "Programmer...","ReactJS enthusiast..."];



function HeroSection() {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (index === words.length) return;
    
        if ( subIndex === words[index].length + 1 && 
            index !== words.length - 1 && !reverse ) {
          setReverse(true);
          return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => prev + 1);
            return;
          }
          const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
          }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                      150, parseInt(Math.random() * 350)));
      
          return () => clearTimeout(timeout);
        }, [subIndex, index, reverse]);
      
        // blinker
        useEffect(() => {
          const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
          }, 500);
          return () => clearTimeout(timeout2);
        }, [blink]);





    return (
        <div className='hero-container'>
        <video src={video} type="video/mp4" autoPlay loop muted />
        <h1><strong>Hello</strong></h1>
        <p><strong>I'm Anwar Hossain</strong></p>
        <h3>I am a {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h3>
        <h4>Experienced in JavaScript with over 4 months of learning experience<br/> in building the web and working with technologies like ReactJS And NodeJS</h4>
        </div>
    )
}

export default HeroSection
