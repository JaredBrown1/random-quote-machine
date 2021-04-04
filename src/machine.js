import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
		<Card id="quote-box">
			<Card.Header>Random Quote Machine</Card.Header>
			<Card.Body>
				{" "}
				<div className="blockquote mb-0" id="text">
					{quote.content}
				</div>
				<div className="blockquote-footer" id="author">
					{quote.author}
				</div>
				<br />
				<div>
					{" "}
					<Button variant="primary" id="new-quote" onClick={handleClick}>
						New Quote
					</Button>
				</div>
				<br />
				<div>
					<a id="tweet-quote" href="https://twitter.com/intent/tweet">
						<FontAwesomeIcon icon={faTwitter} size="2x" />
					</a>
				</div>
			</Card.Body>
		</Card>
	);
};

export default QuoteMachine;
