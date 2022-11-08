import React, { useState } from 'react';

const LargeFocusClue = ({ slide1, slide2 }) => {
	const [slide, setSlide] = useState(slide1);

	function handleClick() {
		slide === slide1 ? setSlide(slide2) : setSlide(slide1);
	}
	return slide === slide1 ? (
		<div onClick={() => handleClick()} className="cluecard--focus">
			<h2 className="cluecard--focus__text">{slide}</h2>
		</div>
	) : (
		<div onClick={() => handleClick()} className="cluecard--focus">
			<h2 className="cluecard--focus__text">{slide}</h2>
		</div>
	);
};

export default LargeFocusClue;
