import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export default function Result() {
	const { state: values } = useLocation();
	const [answer, setAnswer] = useState();
	const [word, setWord] = useState("");
	useEffect(() => {
		fetch("http://127.0.0.1:5000/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ ratios: [7.080794504, 196.369496, 22014.09253, 7.122276793, 333.7757766, 426.2051107, 14.28497025, 66.39629295, 3.96678617] }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data, typeof data);
				setAnswer(data);
				if (data == 0) {
					setWord("The water sample is not drinkable!");
				} else {
					setWord("The water sample is drinkable!");
				}
			});
	});
	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<Typography variant="h4" style={{color : word==="The water sample is not drinkable!" ? "red" : "green"}}>{word}</Typography>
		</div>
	);
}

// {'ratios': [7.080794504, 196.369496, 22014.09253, 7.122276793, 333.7757766, 426.2051107, 14.28497025, 66.39629295, 3.96678617]} => for 0
//[10.7618978,81.71089527,25999.95367,8.477393872,318.4272408,392.7040818,12.71635014,52.24697244,4.661798516] ==> 1
