import React, { useState } from 'react';
import PlayerCard from './PlayerCard';
import Button from './Button';

const Players = () => {
	const [playerCount, setPlayerCount] = useState([]);
	function incrementCount() {
		if (playerCount.length === 0) {
			setPlayerCount([1]);
		} else if (playerCount.length === 1) {
			setPlayerCount([1, 2]);
		} else if (playerCount.length === 2) {
			setPlayerCount([1, 2, 3]);
		} else if (playerCount.length === 3) {
			setPlayerCount([1, 2, 3, 4]);
		}
	}
	function decrementCount() {
		if (playerCount.length === 4) {
			setPlayerCount([1, 2, 3]);
		} else if (playerCount.length === 3) {
			setPlayerCount([1, 2]);
		} else if (playerCount.length === 2) {
			setPlayerCount([1]);
		} else if (playerCount.length === 1) {
			setPlayerCount([]);
		}
	}
	return (
		<div className="players">
			<div className="players__title">
				<h1>Score Board:</h1>
				<Button handleClick={incrementCount} text={'+'} />
				<Button handleClick={decrementCount} text={'-'} />
			</div>
			<div className="player__field">
				{playerCount.map((player) => {
					return <PlayerCard key={player} />;
				})}
			</div>
		</div>
	);
};

export default Players;
