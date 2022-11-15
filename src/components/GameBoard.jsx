import React, { useState, useEffect } from 'react';
import Column from './Column';
import listOfCategories from './categories.js';
import Players from './Players';

const GameBoard = () => {
	const [categoryList, setCategoryList] = useState([]);
	const [loaded, setLoaded] = useState(false);
	let categories = [];
	async function checkCategory(category) {
		const baseURL = 'https://jeopardy-game-api.herokuapp.com/clues/categories/';
		const endURL = category.replace(/[ ]/gi, '%20').replace(/['']/gi, '%27');
		async function getClues() {
			try {
				const response = await fetch(baseURL + endURL);
				const data = await response.json();
				return data;
			} catch (error) {}
		}
		const checkVals = ['$200', '$400', '$600', '$800', '$1000'];
		let data = await getClues();
		data = data.filter((clue) => {
			return checkVals.includes(clue.value);
		});
		return data;
	}
	async function getCategories() {
		while (categories.length < 5) {
			const index = Math.floor(Math.random() * 4081);
			const pushCategory = listOfCategories[index];
			const data = await checkCategory(pushCategory);

			if (data.length === 5) {
				categories.push(pushCategory);
			}
		}
		setCategoryList(categories);
		setLoaded(true);
	}
	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="GameBoard">
			{categoryList.map((title, index) => {
				return <Column key={index} title={title} />;
			})}
			{loaded ? <Players /> : <></>}
		</div>
	);
};

export default GameBoard;
