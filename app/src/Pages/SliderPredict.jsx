import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Card, CardContent } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import "./SliderPredict.css";

const Input = styled(MuiInput)`
	width: 42px;
`;

export default function SliderPredict() {
	const navigate = useNavigate();

	const [phValue, setPhValue] = useState(7.080794504);
	const [hardValue, setHardValue] = useState(196.369496);
	const [tdsValue, setTdsValue] = useState(22014.09253);
	const [chValue, setChValue] = useState(7.122276793);
	const [sValue, setSValue] = useState(333.7757766);
	const [conValue, setConValue] = useState(426.2051107);
	const [orgValue, setOrgValue] = useState(14.28497025);
	const [triValue, setTriValue] = useState(66.39629295);
	const [turbValue, setTurbValue] = useState(3.96678617);

	const [answer, setAnswer] = useState(0);

	const phMin = 0;
	const phMax = 14;
	const hardMin = 47.432;
	const hardMax = 323.124;
	const tdsMin = 320.9426113;
	const tdsMax = 61227.19601;
	const chMin = 0.352;
	const chMax = 13.127;
	const sMin = 129;
	const sMax = 481.0306423;
	const conMin = 181.483754;
	const conMax = 753.3426196;
	const orgMin = 2.2;
	const orgMax = 28.3;
	const triMin = 0.738;
	const triMax = 124;
	const turbMin = 1.45;
	const turbMax = 6.739;

	const phSliderChange = (event, newVal) => {
		setPhValue(newVal);
	};
	const hardSliderChange = (event, newVal) => {
		setHardValue(newVal);
	};
	const tdsSliderChange = (event, newVal) => {
		setTdsValue(newVal);
	};
	const chSliderChange = (event, newVal) => {
		setChValue(newVal);
	};
	const sSliderChange = (event, newVal) => {
		setSValue(newVal);
	};
	const conSliderChange = (event, newVal) => {
		setConValue(newVal);
	};
	const orgSliderChange = (event, newVal) => {
		setOrgValue(newVal);
	};
	const triSliderChange = (event, newVal) => {
		setTriValue(newVal);
	};
	const turbSliderChange = (event, newVal) => {
		setTurbValue(newVal);
	};

	const phInputChange = (event) => {
		setPhValue(event.target.value === "" ? "" : Number(event.target.value));
	};
	const hardInputChange = (event) => {
		setHardValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};
	const tdsInputChange = (event) => {
		setTdsValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};
	const chInputChange = (event) => {
		setChValue(event.target.value === "" ? "" : Number(event.target.value));
	};
	const sInputChange = (event) => {
		setSValue(event.target.value === "" ? "" : Number(event.target.value));
	};
	const conInputChange = (event) => {
		setConValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};
	const orgInputChange = (event) => {
		setOrgValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};
	const triInputChange = (event) => {
		setTriValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};
	const turbInputChange = (event) => {
		setTurbValue(
			event.target.value === "" ? "" : Number(event.target.value)
		);
	};

	const phHandle = () => {
		if (phValue < phMin) {
			setPhValue(phMin);
		} else if (phValue > phMax) {
			setPhValue(phMax);
		}
	};
	const hardHandle = () => {
		if (hardValue < hardMin) {
			setHardValue(hardMin);
		} else if (hardValue > hardMax) {
			setHardValue(hardMax);
		}
	};
	const tdsHandle = () => {
		if (tdsValue < tdsMin) {
			setTdsValue(tdsMin);
		} else if (tdsValue > tdsMax) {
			setTdsValue(tdsMax);
		}
	};
	const chHandle = () => {
		if (chValue < chMin) {
			setChValue(chMin);
		} else if (chValue > chMax) {
			setChValue(chMax);
		}
	};
	const sHandle = () => {
		if (sValue < sMin) {
			setSValue(sMin);
		} else if (sValue > sMax) {
			setSValue(sMax);
		}
	};
	const conHandle = () => {
		if (conValue < conMin) {
			setConValue(conMin);
		} else if (conValue > conMax) {
			setConValue(conMax);
		}
	};
	const orgHandle = () => {
		if (orgValue < orgMin) {
			setOrgValue(orgMin);
		} else if (orgValue > orgMax) {
			setOrgValue(orgMax);
		}
	};
	const triHandle = () => {
		if (triValue < triMin) {
			setTriValue(triMin);
		} else if (triValue > triMax) {
			setTriValue(triMax);
		}
	};
	const turbHandle = () => {
		if (turbValue < turbMin) {
			setTurbValue(turbMin);
		} else if (turbValue > turbMax) {
			setTurbValue(turbMax);
		}
	};

	return (
		<React.Fragment>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "3%",
					justifyContent: "space-between",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "flex-start",
						maxWidth: "1200px",
					}}
				>
					<h1 style={{ flexBasis: "100%", textAlign: "center" }}>
						Enter the following values for the parameter
					</h1>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								ph
							</Typography>
							<Slider
								min={phMin}
								max={phMax}
								step={(phMax - phMin) / 100}
								size="small"
								value={
									typeof phValue === "number" ? phValue : 0
								}
								onChange={phSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={phValue}
								onChange={phInputChange}
								onBlur={phHandle}
								inputProps={{
									step: (phMax - phMin) / 100,
									min: phMin,
									max: phMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Hardness
							</Typography>
							<Slider
								min={hardMin}
								max={hardMax}
								step={(hardMax - hardMin) / 100}
								size="small"
								value={
									typeof hardValue === "number"
										? hardValue
										: 0
								}
								onChange={hardSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={hardValue}
								onChange={hardInputChange}
								onBlur={hardHandle}
								inputProps={{
									step: (hardMax - hardMin) / 100,
									min: hardMin,
									max: hardMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Total dissolved solids
							</Typography>
							<Slider
								min={tdsMin}
								max={tdsMax}
								step={(tdsMax - tdsMin) / 100}
								size="small"
								value={
									typeof tdsValue === "number" ? tdsValue : 0
								}
								onChange={tdsSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={tdsValue}
								onChange={tdsInputChange}
								onBlur={tdsHandle}
								inputProps={{
									step: (tdsMax - tdsMin) / 100,
									min: tdsMin,
									max: tdsMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Chloramines
							</Typography>
							<Slider
								min={chMin}
								max={chMax}
								step={(chMax - chMin) / 100}
								size="small"
								value={
									typeof chValue === "number" ? chValue : 0
								}
								onChange={chSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={chValue}
								onChange={chInputChange}
								onBlur={chHandle}
								inputProps={{
									step: (chMax - chMin) / 100,
									min: chMin,
									max: chMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Sulphates
							</Typography>
							<Slider
								min={sMin}
								max={sMax}
								step={(sMax - sMin) / 100}
								size="small"
								value={typeof sValue === "number" ? sValue : 0}
								onChange={sSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={sValue}
								onChange={sInputChange}
								onBlur={sHandle}
								inputProps={{
									step: (sMax - sMin) / 100,
									min: sMin,
									max: sMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Conductivity
							</Typography>
							<Slider
								min={conMin}
								max={conMax}
								step={(conMax - conMin) / 100}
								size="small"
								value={
									typeof conValue === "number" ? conValue : 0
								}
								onChange={conSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={conValue}
								onChange={conInputChange}
								onBlur={conHandle}
								inputProps={{
									step: (conMax - conMin) / 100,
									min: conMin,
									max: conMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Organic Carbon
							</Typography>
							<Slider
								min={orgMin}
								max={orgMax}
								step={(orgMax - orgMin) / 100}
								size="small"
								value={
									typeof orgValue === "number" ? orgValue : 0
								}
								onChange={orgSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={orgValue}
								onChange={orgInputChange}
								onBlur={orgHandle}
								inputProps={{
									step: (orgMax - orgMin) / 100,
									min: orgMin,
									max: orgMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Trihalomethanes
							</Typography>
							<Slider
								min={triMin}
								max={triMax}
								step={(triMax - triMin) / 100}
								size="small"
								value={
									typeof triValue === "number" ? triValue : 0
								}
								onChange={triSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={triValue}
								onChange={triInputChange}
								onBlur={triHandle}
								inputProps={{
									step: (triMax - triMin) / 100,
									min: triMin,
									max: triMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
					<Card style={{ flexBasis: "30%" }} className="questionCard">
						<CardContent>
							<Typography
								sx={{ fontWeight: "bold" }}
								gutterBottom
							>
								Turbidity
							</Typography>
							<Slider
								min={turbMin}
								max={turbMax}
								step={(turbMax - turbMin) / 100}
								size="small"
								value={
									typeof turbValue === "number"
										? turbValue
										: 0
								}
								onChange={turbSliderChange}
							/>
							<Input
								style={{ width: "40%" }}
								value={turbValue}
								onChange={turbInputChange}
								onBlur={turbHandle}
								inputProps={{
									step: (turbMax - turbMin) / 100,
									min: turbMin,
									max: turbMax,
									type: "number",
								}}
							/>
						</CardContent>
					</Card>
				</div>
				<div>
					<Button
						onClick={() => {
							navigate("/result", {
								state: [
									phValue,
									hardValue,
									tdsValue,
									chValue,
									sValue,
									conValue,
									orgValue,
									triValue,
									turbValue,
								],
							});
						}}
						startIcon={
							<ArrowForwardIcon style={{ fontSize: "40px" }} />
						}
						sx={{
							height: "100vh",
							paddingLeft: "30px",
							paddingRight: "15px",
						}}
					/>
				</div>
			</div>
		</React.Fragment>
	);
}
