import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <div className="particleswrapper">
      <Particles className="particles" params={{ 
          particles: { 
            number: { 
              value: 200, 
              density: { 
                enable: true, 
                value_area: 1000, 
              } 
            }, 
            line_linked: {
              enable: true,
	            opacity: 0
            }
          }, 
        }}/>
        </div>
        <div className="navbar">
          <p>Julian Cesaro</p>
        </div>
    </div>
  );
}

export default App;
