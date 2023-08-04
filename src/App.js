import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Main from "./components/Page/Page";
import Authentification from "./components/Authentification/Authentification";
import Officers from "./components/Officers/Officers";
import OfficersForm from "./components/OfficersForm/OfficersForm";
import Report from "./components/Report/Report";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Authentification type="login" />} />
          <Route
            path="/registration"
            element={<Authentification type="registration" />}
          />
          <Route path="/report" element={<Report />} />
          <Route path="/officers/create" element={<OfficersForm />} />
          <Route path="/officers/edit/:id" element={<OfficersForm />} />
          <Route path="/officers/:id" element={<Details type="officers" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

{
  /*
import "./App.css";
import Page from "./components/Page/Page";

function App() {
  return (
    <>
      <Page />
    </>
  );
}

export default App; */
}
