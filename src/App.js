import React from 'react';
// import './App.css';
import './index.css';

function App() {
	let date = new Date();
  date = date.getHours();
  
  let greeting = '';
  
  const Styling={};
  
	if (date >= 1 && date < 12) {
    greeting = 'Good Morning';
    Styling.color='green';
	} else if (date >= 12 && date < 19) {
    greeting = 'Good Evening';
    Styling.color='orange';
	} else {
    greeting = 'Good night';
    Styling.color='black';
  }
  
	return (
		<div className="App">
      <div className="box">
      <h1 className="heading">Hello Sir, <span style={Styling}>{greeting}</span></h1>
      </div>
			
		</div>
	);
}

export default App;
