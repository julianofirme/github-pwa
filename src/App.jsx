import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
