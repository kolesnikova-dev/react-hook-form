import { FormContainer } from "./components";

import "./style.css";

const HEADER = "HOOKED";
const HEADER_ANCHOR = "Learn React Hook Form";
const LOGO = "https://avatars.githubusercontent.com/u/53986236?s=280&v=4";

function App() {
	return (
		<div className="flex flex-col gap-4">
			<header className="flex flex-col gap-4">
				<img src={LOGO} alt="logo" />
				<div className="flex items-center gap-2">
					<h1 className="text-(--color-purple) tracking-widest">{HEADER}</h1>
					<a
						href="https://react-hook-form.com/get-started"
						target="_blank"
						rel="noopener noreferrer"
					>
						{HEADER_ANCHOR}
					</a>
				</div>
			</header>
			<FormContainer />
		</div>
	);
}

export default App;
