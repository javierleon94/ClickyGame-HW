//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>REal Nemos Clicky Game!</h1>
		<h2>Click on the real nemos to earn a point, try not to click the same pic twice! Click all 12 pics, and you win.</h2>
	</header>
);

export default Jumbotron;