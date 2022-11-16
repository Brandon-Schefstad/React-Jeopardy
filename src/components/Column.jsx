import React, { useEffect, useState } from 'react';
import Clue from './Clue';
import listOfCategories from './categories.js';
const Column = () => {
	const [column, setColumn] = useState();
	const [loaded, setLoaded] = useState(false);
	// Choose a random integer:
	function createRandomInt() {
		return Math.floor(Math.random() * 4081);
		//! New addition, saves querying for the entire list every time.
	}
	// Create the fetch URL using the title at the index from above
	function createURL(category) {
		const baseURL = 'https://jeopardy-game-api.herokuapp.com/clues/categories/';
		const endURL = category.replace(/[ ]/gi, '%20').replace(/['']/gi, '%27');
		//! New addition, allows for spaces and quotes in the request
		const completeURL = baseURL + endURL;
		return completeURL;
	}
	// Only accepting categories with the following clue value spread.
	const acceptedClueValues = ['$200', '$400', '$600', '$800', '$1000'];
	async function createColumn() {
		// Choose index
		const index = createRandomInt();
		// Find category name
		const categoryName = listOfCategories[index];
		// Turn it into a GET reuqest URL
		const completeURL = createURL(categoryName);
		// Fetch
		const response = await fetch(completeURL);
		const data = await response.json();
		// Filter to remove values other than acceptedclueValues
		const filteredResponse = data.filter((clue) => {
			return acceptedClueValues.includes(clue.value);
		});
		// If after the filter it is still length of 5, set is as the data for the column and finish loading.
		if (filteredResponse.length === 5) {
			setColumn(data);
			setLoaded(true);
		} else {
			// Otherwise, run this function again.
			createColumn();
		}
	}
	useEffect(() => {
		createColumn();
	}, []);
	return (
		<>
			{loaded ? (
				<div className="column">
					<h2 className="column__title">{column[0].category}</h2>
					{column.map((clue) => {
						return (
							<Clue
								value={clue.value}
								question={clue.question}
								answer={clue.answer}
							/>
						);
					})}
				</div>
			) : (
				<>Loading</>
			)}
		</>
	);
};

export default Column;
