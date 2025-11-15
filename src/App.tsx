import { Box } from "@mui/material";

import "./style.css";

const HEADER = "HOOKED";
const HEADER_ANCHOR = "Learn React Hook Form";
const LOGO = "https://avatars.githubusercontent.com/u/53986236?s=280&v=4";

const FormContainer = () => {
	return (
		<Box>
			<p className="text-3xl">I'm form</p>
		</Box>
	);
};

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={LOGO} className="App-logo" alt="logo" />
				<p>{HEADER}</p>
				<a
					className="RHF-link"
					href="https://react-hook-form.com/get-started"
					target="_blank"
					rel="noopener noreferrer"
				>
					{HEADER_ANCHOR}
				</a>
			</header>
			<FormContainer />
		</div>
	);
}

export default App;
