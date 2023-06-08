import {
	Card,
	CardContent,
	Popover,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import { ReactComponent as PhLogo } from "./../assets/phLogo.svg";
import { ReactComponent as ConductivityLogo } from "./../assets/ConductivityLogo.svg";
import { ReactComponent as TriHaloLogo } from "./../assets/triHaloLogo.svg";
import { ReactComponent as TurbidityLogo } from "./../assets/turbidityLogo.svg";
import { ReactComponent as HardnessLogo } from "./../assets/hardnessLogo.svg";
import { ReactComponent as OrganicLogo } from "./../assets/carbon.svg";
import { ReactComponent as Tempo } from "./../assets/bond.svg";
import { ReactComponent as Cholre } from "./../assets/molee.svg";
import { ReactComponent as Finale } from "./../assets/filter-svgrepo-com.svg";

const images = {
	pHLogo: PhLogo,
	ConductivityLogo: ConductivityLogo,
	TrihalomethanesLogo: TriHaloLogo,
	TurbidityLogo: TurbidityLogo,
	HardnessLogo: HardnessLogo,
	SulphatesLogo: OrganicLogo,
	"Organic CarbonLogo": Tempo,
	ChloraminesLogo: Cholre,
	"Total dissolved SolidsLogo": Finale,
};

export default function ParamCard(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const Ins = images[`${props.name}Logo`]
		? images[`${props.name}Logo`]
		: PhLogo;
	return (
		<Card
			sx={{ padding: 0, flexBasis: "30%", margin: "10px" }}
			elevation={0}
			variant="outlined"
		>
			<CardContent
				sx={{
					margin: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				{<Ins style={{ width: "60px", height: "60px" }} />}
				<TextField
					error={props.errors.email && props.touched.email}
					value={props.values[props.name]}
					onChange={props.handleChange}
					onBlur={props.handleBlur}
					helperText={
						props.touched[props.name]
							? props.errors[props.name]
							: ""
					}
					type="number"
					label={props.name}
					name={props.name}
					style={{ marginLeft: "15px", marginRight: "15px" }}
					fullWidth
				/>
				<InfoIcon
					aria-owns={open ? "mouse-over-popover" : undefined}
					aria-haspopup="true"
					onMouseEnter={handlePopoverOpen}
					onMouseLeave={handlePopoverClose}
				/>
				<Popover
					id="mouse-over-popover"
					sx={{
						pointerEvents: "none",
					}}
					open={open}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "left",
					}}
					onClose={handlePopoverClose}
					disableRestoreFocus
				>
					<Typography p={1} style={{ width: "400px" }}>
						{props.description}
					</Typography>
				</Popover>
			</CardContent>
		</Card>
	);
}
