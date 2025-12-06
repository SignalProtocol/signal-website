import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./mixpanel"; // Initialize Mixpanel early

createRoot(document.getElementById("root")!).render(<App />);
