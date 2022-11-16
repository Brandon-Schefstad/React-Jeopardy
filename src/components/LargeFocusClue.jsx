import React, { useState } from 'react';

const LargeFocusClue = ({ slide1, slide2, value, setSeen, setFocus }) => {
	const [slide, setSlide] = useState(slide1);
	function handleClick() {
		if (slide === slide2) {
			setSeen(true);
			setFocus(false);
		} else {
			slide === slide1 ? setSlide(slide2) : setSlide(slide1);
		}
	}
	if (slide === slide1) {
		return (
			<div onClick={() => handleClick()} className="cluecard--focus">
				<h2 className="cluecard--focus__text">{slide}</h2>
			</div>
		);
	} else if (slide === slide2) {
		return (
			<div onClick={() => handleClick()} className="cluecard--focus">
				<h2 className="cluecard--focus__text">
					{slide[0].toUpperCase() + slide.slice(1)}
				</h2>
				<p className="cluecard--focus__value">{value}</p>
			</div>
		);
	}
};

export default LargeFocusClue;
