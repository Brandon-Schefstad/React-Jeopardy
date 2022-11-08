import React from 'react';
import ReactDOM from 'react-dom';
import 'App.css';
import 'reset.css';

//Components
import GameBoard from './components/GameBoard';
const App = () => {
	return (
		<div>
			<GameBoard />
		</div>
	);
};

export default App;
