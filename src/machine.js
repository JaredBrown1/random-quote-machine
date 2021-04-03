import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteMachine = () => {
	const [quote, setQuote] = useState("");

	useEffect(() => {
		axios.get("https://api.quotable.io/random").then((res) => {
			setQuote(res.data);
		});
	}, []);

	const handleClick = (e) => {
		axios.get("https://api.quotable.io/random").then((res) => {
			setQuote(res.data);
		});
	};

	return (
		<div id="quote-box">
			<div id="text">{quote.content}</div>
			<div id="author">{quote.author}</div>
			<button id="new-quote" onClick={handleClick}>
				New Quote
			</button>
			<a id="tweet-quote"></a>
		</div>
	);
};

export default QuoteMachine;
