import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");

try {
	if (root !== null && root !== undefined) {
		createRoot(root).render(
			<StrictMode>
				<App />
			</StrictMode>,
		);
	}
} catch (e) {
	throw new Error(
		e instanceof Error ? e.message : String(`Error in main: ${e}`),
	);
}
