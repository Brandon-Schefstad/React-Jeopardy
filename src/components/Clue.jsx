import React, { useState } from 'react';
import LargeFocusClue from './LargeFocusClue';

const Clue = ({ value, question, answer }) => {
	// Focus = big
	// Seen = close + Green
	// Question = Slide1
	// Answer is Slide2

	const [focus, setFocus] = useState(false);
	const [seen, setSeen] = useState(false);
	const [checkAnswer, setCheckAnswer] = useState('');
	function handleClick() {
		setFocus(true);
	}

	if (!focus && !seen) {
		return (
			<>
				<div
					onClick={() => {
						handleClick();
					}}
					className="cluecard"
				>
					{value}
				</div>
			</>
		);
	} else if (focus) {
		return (
			<>
				<div
					onClick={() => {
						handleClick();
					}}
					className="cluecard"
				>
					{value}
				</div>
				<LargeFocusClue
					slide1={question}
					slide2={answer}
					value={value}
					setSeen={setSeen}
					setFocus={setFocus}
				/>
			</>
		);
	} else if (seen) {
		return (
			<>
				<div className="cluecard cluecard--seen"></div>
			</>
		);
	}
};

export default Clue;
