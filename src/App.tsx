import { BrowserRouter, NavLink, Route } from "react-router-dom";
import "./App.css";
import { ReactCountryRegionSelector } from "./reactCountryRegionSelector/ReactCountryRegionSelector";
import { ReactHook } from "./reactHook/reactHook";
import { ReactPhoneInput_2 } from "./react-phone-input-2/React-phone-input-2";
import { MaintSelect } from "./reactSelect/MainSelect";
import { ReactDatepicker } from "./react-datepicker/React-datepicker";
import { CopyObjektMain } from "./copyObjekt/_CopyObjektMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Test</h1>

        <NavLink to="/">
          <button style={{ cursor: "pointer" }}>react-hook</button>
        </NavLink>

        <NavLink to="/react-select">
          <button style={{ cursor: "pointer" }}>react-select</button>
        </NavLink>

        <NavLink to="/react-country-region-selector">
          <button style={{ cursor: "pointer" }}>
            react-country-region-selector
          </button>
        </NavLink>
        <NavLink to="/react-datepicker">
          <button style={{ cursor: "pointer" }}>react-datepicker</button>
        </NavLink>

        <NavLink to="/react-phone-number-input">
          <button style={{ cursor: "pointer" }}>
            react-phone-number-input
          </button>
        </NavLink>
        <NavLink to="/copyObjekt">
          <button style={{ cursor: "pointer" }}>copyObjekt</button>
        </NavLink>

        <hr />

        <Route exact path="/" render={() => <ReactHook />} />
        <Route path="/react-select" render={() => <MaintSelect />} />
        <Route
          path="/react-country-region-selector"
          render={() => <ReactCountryRegionSelector />}
        />
        <Route path="/react-datepicker" render={() => <ReactDatepicker />} />
        <Route
          path="/react-phone-number-input"
          render={() => <ReactPhoneInput_2 />}
        />
        <Route path="/copyObjekt" render={() => <CopyObjektMain />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
