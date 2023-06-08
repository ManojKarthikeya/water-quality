import React from "react";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "./Predict.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Navigate, useNavigate } from "react-router-dom";

export default function Predict() {
	const navigate = useNavigate();
	return (
		<div>
			<h1 style={{ marginLeft: "500px" }}>Enter the details</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					marginTop: "50px",
					gap: "20px",
				}}
			>
				<div className="flexCard">
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
				</div>
				<div className="flexCard">
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
					/>
				</div>
			</div>
			<Button
				style={{ marginLeft: "630px", marginTop: "50px" }}
				onClick={() => {
					navigate("/result");
				}}
				variant="contained"
			>
				Submit
			</Button>
		</div>
	);
}
