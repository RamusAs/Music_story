import { BrowserRouter as Router,
  useRoutes, } from "react-router-dom"
import { Detail, Home} from "./Pages";
import './App.css';
import './styles/index.css'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/detail/:id", element: <Detail /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
     <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;