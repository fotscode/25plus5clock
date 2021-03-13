import React, { Component } from 'react';


const audioRef="https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/SYNTH%20AND%20ELECTRONIC%20LOOPS/1382[kb]180_watch-beep-acid-melody.wav.mp3";

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state=({
      session:25,
      break:5,
      current:"Session",
      minutes:"25",
      seconds:"00",
      isRunning:false
    });
    
    this.handleReset=this.handleReset.bind(this);
    this.handleDecrementSession=this.handleDecrementSession.bind(this);
    this.handleDecrementBreak=this.handleDecrementBreak.bind(this);
    this.handleIncrementBreak=this.handleIncrementBreak.bind(this);
    this.handleIncrementSession=this.handleIncrementSession.bind(this);
    this.tick=this.tick.bind(this);
    this.handleToggle=this.handleToggle.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    document.getElementById("beep").load();
  }  
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (!this.state.isRunning) return
    let newCurrent=this.state.current;
    let newSeconds=Number(this.state.seconds);
    let newMinutes=Number(this.state.minutes);   
    
    if (this.state.seconds==="01"&&this.state.minutes==="00"){
      document.getElementById("beep").load();
      document.getElementById("beep").play();      
    }
    
    
    if (this.state.seconds==="00"&&this.state.minutes==="00"&&this.state.current==="Session"){
      newCurrent="Break";
      newMinutes=this.state.break;
      newSeconds="00";  
      if (newMinutes<10) newMinutes="0"+newMinutes; 
    } 
    else if (this.state.seconds==="00"&&this.state.minutes==="00"&&this.state.current==="Break"){
      newCurrent="Session";
      newMinutes=this.state.session;
      newSeconds="00";
      if (newMinutes<10) newMinutes="0"+newMinutes;  
    } 
    else{
      if (newSeconds>0){
        newSeconds--;
      } else{
        newSeconds="59";
        newMinutes--;
      } 
      if (newSeconds<10) newSeconds="0"+newSeconds;
      if (newMinutes<10) newMinutes="0"+newMinutes;  
    }

    this.setState({
      minutes: newMinutes ,
      seconds: newSeconds,
      current: newCurrent
    });
  }  
  
  handleToggle(){
    this.setState({
      isRunning:!this.state.isRunning
    });
  }
  
  handleReset(){
    this.setState({
      session:25,
      break:5,
      current:"Session",
      minutes:"25",
      seconds:"00",
      isRunning:false
    });
    document.getElementById("beep").load();
  }
  
  handleDecrementSession(){
    if (this.state.session<=1 || this.state.isRunning) return 
    else{
      let newSession=this.state.session-1;
      let newSeconds=this.state.seconds;
      let newMinutes=this.state.minutes;
      if (this.state.current==="Session"){
        newSeconds="00";
        newMinutes=newSession;
        if (newMinutes<10) newMinutes="0"+newMinutes; 
      } 
      this.setState({
        session:newSession,
        minutes:newMinutes,
        seconds:newSeconds
      });
    }
  };
    
  handleDecrementBreak(){
    if (this.state.break<=1||this.state.isRunning) return 
    else{
      let newBreak=this.state.break-1;
      let newSeconds=this.state.seconds;
      let newMinutes=this.state.minutes;
      if (this.state.current==="Break"){
        newSeconds="00";
        newMinutes=newBreak;
        if (newMinutes<10) newMinutes="0"+newMinutes; 
      }
      this.setState({
        break:newBreak,
        minutes:newMinutes,
        seconds:newSeconds
      });
    }    
  };
  
  handleIncrementSession(){
    if (this.state.session>=60||this.state.isRunning) return
    else{
      let newSession=this.state.session+1;
      let newSeconds=this.state.seconds;
      let newMinutes=this.state.minutes;
      if (this.state.current==="Session"){
        newSeconds="00";
        newMinutes=newSession;
        if (newMinutes<10) newMinutes="0"+newMinutes; 
      }
      this.setState({
        session:newSession,
        minutes:newMinutes,
        seconds:newSeconds
      });
    }
  }
  
  handleIncrementBreak(){
    if (this.state.break>=60||this.state.isRunning) return 
    else{
      let newBreak=this.state.break+1;
      let newSeconds=this.state.seconds;
      let newMinutes=this.state.minutes;
      if (this.state.current==="Break"){
        newSeconds="00";
        newMinutes=newBreak;
        if (newMinutes<10) newMinutes="0"+newMinutes;
      }
      this.setState({
        break:newBreak,
        minutes:newMinutes,
        seconds:newSeconds
      });
    }    
    
  }
  
  render(){
    return(
      <div id="clock-container">
        <h1 className="highlight">25 + 5 Clock</h1>
        <section id="config-section">
          <div className="cfg-elem">
            <label for="break-length" id="break-label">Break Length</label>
            <button
              aria-label="break increment"
              id="break-increment" 
              onClick={this.handleIncrementBreak}
              ><i className="fa fa-arrow-up fa-2x"></i>
            </button>
            <p id="break-length">{this.state.break}</p>
            <button 
              aria-label="break decrement"
              id="break-decrement"
              onClick={this.handleDecrementBreak}
              ><i className="fa fa-arrow-down fa-2x"></i>
            </button>
          </div>
          <div className="cfg-elem">
            <label id="session-label">Session Length</label>
            <button 
              aria-label="session increment"
              id="session-increment" 
              onClick={this.handleIncrementSession}
              ><i className="fa fa-arrow-up fa-2x"></i>
            </button>
            <p id="session-length">{this.state.session}</p>
            <button 
              aria-label="session decrement"
              id="session-decrement" 
              onClick={this.handleDecrementSession}
              ><i className="fa fa-arrow-down fa-2x"></i>
            </button> 
          </div>
        </section>
        <section id="timer-section">
          <div id="timer-container">
            <label id="timer-label">{this.state.current}</label>
            <audio id="beep" src={audioRef}></audio>
            <h2 id="time-left" className="highlight">{this.state.minutes}:{this.state.seconds}</h2>
          </div>
        </section>
        <section id="control-section">
          <button 
            id="start_stop" 
            aria-label="play/stop"
            onClick={this.handleToggle}>
            <i className="fa fa-play fa-2x"></i>
            <i className="fa fa-pause fa-2x"></i>
          </button>
          <button 
            id="reset" 
            aria-label="refresh"
            onClick={this.handleReset}>
            <i className="fa fa-refresh fa-2x"></i>
          </button>
        </section>
      </div>
    );
  }
}

export default Clock;