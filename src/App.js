import "./App.css";
import ViewportProvider from "./viewport/ViewportProvider";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <ViewportProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ViewportProvider>
  );
}

export default App;
