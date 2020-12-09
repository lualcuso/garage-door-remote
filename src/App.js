import React from 'react';
import './App.css';
import Door from './Door';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      doorOneOpen: false,
      doorTwoOpen: false,
      doorOneCtn: 0,
      doorTwoCtn: 0,
      timeTakenOne: 0,
      timeTakenTwo: 0
    }
  }

  render() {
    return (
      <div className="app">
        <div className='doors'>
          <Door isOpen={this.state.doorOneOpen} 
                openCtn={this.state.doorOneCtn}
                timeTaken={this.state.timeTakenOne}/>
          <Door isOpen={this.state.doorTwoOpen} 
                openCtn={this.state.doorTwoCtn}
                timeTaken={this.state.timeTakenTwo}/>
        </div>
        
        <div className='buttons'>
          <button onClick={() => { 
            const startTime = performance.now();
            this.setState( 
              {
                doorOneOpen: !this.state.doorOneOpen,
                doorOneCtn: this.state.doorOneCtn + 1,

              }, () => {
                this.setState({ timeTakenOne: Math.round(performance.now() - startTime) })
              }
            )
          }}>Door #1</button>
          <button onClick={() => { 
            const startTime = performance.now();
            this.setState( 
              {
                doorTwoOpen: !this.state.doorTwoOpen,
                doorTwoCtn: this.state.doorTwoCtn + 1
              }, () => {
                this.setState({ timeTakenTwo: Math.round(performance.now() - startTime) })
              }
            )
          }}>Door #2</button>
        </div>
      </div>
    );
  }
}

export default App;
