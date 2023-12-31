import React from "react";
import ReactDOM from "react-dom/client";
import { reportWebVitals } from "./reportWebVitals";
import { Metric } from "web-vitals";
import { App } from "./App";

import { GlobalStyle } from "./styles/global";
import { MenuProvider } from "./context/MenuContext";
import { ProjectsProvider } from "./context/ProjectsContext";
import { TechnologiesProvider } from "./context/TechnologiesContext";

const rootElement = document.getElementById("root");
const handleWebVitals = (metric: Metric) => {
  console.log(metric);
};

if (rootElement) {
  const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <GlobalStyle />
      <MenuProvider>
        <TechnologiesProvider>
          <ProjectsProvider>
            <App />
          </ProjectsProvider>
        </TechnologiesProvider>
      </MenuProvider>
    </React.StrictMode>
  );
} else {
  console.error("Element 'root' not found in the DOM.");
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(handleWebVitals);
