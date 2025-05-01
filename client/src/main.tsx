import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./lib/i18n";

// Force dark theme
document.documentElement.classList.add("dark");

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
