import "./App.scss";
import "macro-css";
import "./_variables.scss";
import { Route, Routes } from "react-router-dom";
import routes from "./components/Routes";
function App() {
  
  return (
      <div className="wrapper clear">
        <Routes>
          {
            routes.map((route) => {
              return(
                <Route key={route.path} path={route.path} element={route.element} />
              )
            })
          }
        </Routes>
      </div>

      
  );
}

export default App;
