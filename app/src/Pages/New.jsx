import { Button, Container, Typography } from "@mui/material";
import React from "react";
import ParamCard from "../Components/ParamCard";
import { data } from "../data";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function New() {
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<Container>
				<Typography variant="h4" align="center" sx={{ p: 2 }}>
					Water Sample Parameters
				</Typography>
				<Formik
					initialValues={{
						ph: "",
						Hardness: "",
						"Total dissolved Solids": "",
						Chloramines: "",
						Sulphates: "",
						Conductivity: "",
						"Organic Carbon": "",
						Trihalomethanes: "",
						Turbidity: "",
					}}
					onSubmit={(values) => {
						const temp = [];
						for (let par in values) {
							temp.push(values[par]);
						}
						console.log(temp);
						navigate("/result", { state: temp });
					}}
					validationSchema={Yup.object({
						ph: Yup.number("Please enter a number").required(
							"This is a requried field"
						),
						Hardness: Yup.number("Please enter a number").required(
							"This is a requried field"
						),
						"Total dissolved Solids": Yup.number(
							"Please enter a number"
						).required("This is a requried field"),
						Chloramines: Yup.number(
							"Please enter a number"
						).required("This is a requried field"),
						Sulphates: Yup.number("Please enter a number").required(
							"This is a requried field"
						),
						Conductivity: Yup.number(
							"Please enter a number"
						).required("This is a requried field"),
						"Organic Carbon": Yup.number(
							"Please enter a number"
						).required("This is a requried field"),
						Trihalomethanes: Yup.number(
							"Please enter a number"
						).required("This is a requried field"),
						Turbidity: Yup.number("Please enter a number").required(
							"This is a requried field"
						),
					})}
				>
					{(props) => {
						return (
							<form onSubmit={props.handleSubmit}>
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										justifyContent: "center",
									}}
								>
									{data.map((item) => (
										<ParamCard
											{...props}
											{...item}
											key={item.name}
										/>
									))}
								</div>
								<Button
									type="submit"
									variant="outlined"
									style={{
										marginTop: "10px",
										float: "right",
										marginRight: "45px",
									}}
								>
									Submit
								</Button>
							</form>
						);
					}}
				</Formik>
			</Container>
		</React.Fragment>
	);
}
