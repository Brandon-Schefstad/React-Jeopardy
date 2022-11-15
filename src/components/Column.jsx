import React, { useEffect, useState } from 'react';
import Clue from './Clue';

const Column = ({ title }) => {
	const [clues, setClues] = useState([]);
	const baseURL = 'https://jeopardy-game-api.herokuapp.com/clues/categories/';
	const endURL = title.replace(/[ ]/gi, '%20').replace(/['']/gi, '%27');

	async function getClues() {
		try {
			const response = await fetch(baseURL + endURL);
			const data = await response.json();

			setClues(data);
		} catch (error) {}
	}
	useEffect(() => {
		getClues();
	}, []);

	return (
		<div className="column">
			{/* {endURL} */}
			<div>{title}</div>
			{clues.map((clue, index) => {
				return (
					<Clue
						key={index}
						question={clue.question}
						value={clue.value}
						answer={clue.answer}
					/>
				);
			})}
		</div>
	);
};

export default Column;
