 
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MovieDataProvider } from "./Context/allData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <MovieDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieDataProvider>
 
);
