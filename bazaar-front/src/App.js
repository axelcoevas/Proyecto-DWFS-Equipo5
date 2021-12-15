import "./App.css";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>

  );
};

export default App;
