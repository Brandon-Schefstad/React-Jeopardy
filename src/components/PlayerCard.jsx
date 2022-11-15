import React, { useState } from 'react';
import Button from './Button';

const PlayerCard = ({ value }) => {
	const [score, setScore] = useState(0);
	function incrementScore() {
		const clue = document.querySelector('.cluecard--focus');

		const newScore =
			score + parseInt(clue.children[1].innerHTML.split('').splice(1).join(''));
		setScore(newScore);
	}
	function decrementScore() {
		const clue = document.querySelector('.cluecard--focus');
		const newScore =
			score - parseInt(clue.children[1].innerHTML.split('').splice(1).join(''));
		setScore(newScore);
	}
	return (
		<div className="playercard">
			{score}
			<div className="playercard__buttons">
				<Button
					className={'playercard__button'}
					handleClick={incrementScore}
					text={'+'}
				/>
				<Button
					className={'playercard__button'}
					handleClick={decrementScore}
					text={'-'}
				/>
			</div>
		</div>
	);
};

export default PlayerCard;
