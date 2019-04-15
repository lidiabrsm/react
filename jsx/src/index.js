//import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create React components
const App = () => {
	const buttonText = {text:"Click me!"};

	return (
		<div>
			<label className="label" htmlFor="name">
				Enter Name:
			</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: 'blue', color: 'white'}}>
				{buttonText.text}
			</button>
		</div>
	);
};

//take the React component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);