import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <Router>
      <AppRoutes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
