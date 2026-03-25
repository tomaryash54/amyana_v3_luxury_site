
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { onCLS, onINP, onLCP } from "web-vitals"
import { trackWebVital } from "./utils/analytics"

onCLS(trackWebVital)
onINP(trackWebVital)
onLCP(trackWebVital)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
