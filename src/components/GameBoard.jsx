import React, { useState, useEffect } from 'react';
import Column from './Column';

import Players from './Players';

const GameBoard = () => {
	const columns = [0, 1, 2, 3, 4];
	return (
		<div className="GameBoard">
			{columns.map((int) => {
				return <Column key={int} />;
			})}
			<Players />
		</div>
	);
};

export default GameBoard;
