import React from 'react';

export default function SliderComp(props) {

    let circlestyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: `${props.SliderValue * 4}px`,
        width: `${props.SliderValue * 4}px`,
        borderRadius: "50%",
        backgroundColor: `${!props.bgcolor ? "grey": props.bgcolor}`, 
        border: `${!props.border ? "2px solid black": props.border}`
    }
    const container = {
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap : "50px"
    }
    const valuenum = {
        display : "flex",
        justifyContent: "center",
        color : `${!props.color ? "white": props.color}`
    }
    const inputStyle = {
        appearance: "none",
        background: "grey",
        borderRadius: "20px",
        padding: "0px 5px",
        height: 20,
        width: "100%",
        margin: "20px",
        cursor :"pointer"
    }
  return (
    <div className='container' style = {container}>
        <input type="range" style = {inputStyle} value = {props.SliderValue} onInput = {props.inputhandler}/>
        <div className='circle' style = {circlestyle}>
            <p style = {valuenum} > {props.SliderValue} </p>
        </div>
    </div>
  )
}
