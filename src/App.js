import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import "./App.scss";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  return !loading ? (
    <div className="App">
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  ) : (
    <Loader></Loader>
  );
}

export default App;
