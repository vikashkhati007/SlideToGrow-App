import React from 'react'
import SliderComp from './SliderComp'
import { useState } from 'react'
import Title from './Title';

export default function SliderApp() {
    const [slidervalue ,setSliderValue] = useState(0);

    function SetSliderInput(e){
    setSliderValue(e.target.value);
    }

    let color;
    let bgcolor;
    let border;

    if(slidervalue > 20 ){
        bgcolor = "red"
        color = "white"
        border = "2px solid grey"
    }
    if(slidervalue > 40 && slidervalue <= 60){
        bgcolor = "lightgreen"
        color = "blue"
        border = "2px solid blue"
    }
    if(slidervalue > 60 && slidervalue <= 90){
        bgcolor = "blue"
        color = "white"
        border = "2px solid black"
    }
    if(slidervalue > 90){
        bgcolor = "black"
        color = "white"
        border = "2px solid yellow"
    }
  return (
    <div>
        <Title/>
      <SliderComp border = {border} color = {color} bgcolor = {bgcolor} SliderValue = {slidervalue} inputhandler = {SetSliderInput}/>
    </div>
  )
}
