import { FormContainer } from "./components";

import "./style.css";

const HEADER = "HOOKED";
const HEADER_ANCHOR = "Learn React Hook Form";
const LOGO = "https://avatars.githubusercontent.com/u/53986236?s=280&v=4";

function App() {
	return (
		<div className="flex flex-col">
			<header>
				<img src={LOGO} alt="logo" className="mb-4" />
				<p>{HEADER}</p>
				<a
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
