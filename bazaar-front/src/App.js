import "./App.css";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Router>
    </>

  );
};

export default App;
