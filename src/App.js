import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Play from "./img/play.png"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Mono', monospace;
  }
  body{
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    max-width:1900px;
    margin:0 auto;
  }
`


const Container = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
const SubContainer = styled.div`
  border-radius:15px;
  width: 30em;
  height:40em;
  background-color:#191A18;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  @media (max-width:540px){
    background-color:transparent;
  }
`
const BtnDiv = styled.div`
  width:20em;
  display:flex;
  justify-content:space-between;
`
const Btn = styled.button`
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  width:7em;
  height:2em;
  border:none;
  border-radius:6px;
  color:#191A18;
  font-size:0.9rem;
  @media (max-width:540px){
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    border-radius:50%;
    width:5em;
    height:5em;
    color:#21d4fd;
  }
`
const Number = styled.h1`
  font-size:3rem;
  font-family: 'Press Start 2P', cursive;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  @media (max-width:540px){
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
  font-size:4rem;
  }
`
export default class App extends React.Component{
  state = {
    seconds: 0,
    minutes: 0
  }
  start = () =>{
    const Play = setInterval(() => {
      this.setState((prevState) => ({seconds: prevState.seconds > 58 ? 0 : prevState.seconds +1}))}, 1000
    )
    const Minutes = setInterval(() => {
      this.setState((prevState) => ({minutes: prevState.minutes +1}))}, 60000
    )
    this.pause = () =>{
      clearInterval(Play, Minutes)
    }
    console.log()
  }
  restart = () =>{
    this.setState({seconds: 0, minutes: 0})
  }
  componentDidMount(){
    document.title = "Timer"
  }
  render(){
    return(
      <Container>
        <GlobalStyle/>
        <SubContainer>
          <Number>{this.state.minutes}:{this.state.seconds}</Number>
          <BtnDiv>
            <Btn onClick={this.start}>Start</Btn>
            <Btn onClick={this.pause}>Pause</Btn>
            <Btn onClick={this.restart}>Restart</Btn>
          </BtnDiv>
        </SubContainer>
      </Container>
    )
  }
}
