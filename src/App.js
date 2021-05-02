import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <h2>HomePage</h2>
      </div>
    </BrowserRouter>
  );
}
