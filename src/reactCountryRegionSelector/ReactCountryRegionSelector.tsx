import { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import "./reactCountryRegionSelector.css";

export const ReactCountryRegionSelector = () => {
  const [getCountry, setCountry] = useState("");
  const [getRegion, setRegion] = useState("rerer");

  return (
    <section className="main-container">
      <div>
        <CountryDropdown
          classes="rr rcrs-country"
          value={getCountry}
          onChange={(place) => setCountry(place)}
          priorityOptions={["MD", "DE", "US", "CA"]}
          whitelist={["MD", "DE", "US", "CA"]}
          defaultOptionLabel="Select Country"
        />
        <RegionDropdown
          classes="rr tt"
          country={getCountry}
          value={getRegion}
          onChange={(place) => setRegion(place)}
          blankOptionLabel="регион"
          defaultOptionLabel="Выбрать  регион"
          name={"dsdsdsd"}
        />
      </div>
      {getCountry && (
        <>
          <div className="titleText">{getCountry}</div>
        </>
      )}
      {getRegion && (
        <>
          <div className="titleText">{getRegion}</div>
        </>
      )}
    </section>
  );
};
//https://codesandbox.io/s/zumg2?file=/src/Home.js

// <CountryDropdown />  и  <RegionDropdown />
//   value: '',
//   name: 'rcrs-country',
//   id: '',
//   classes: '',
//   showDefaultOption: true,
//   defaultOptionLabel="Select Country"
//   onChange: () => {},
//   labelType="short"
//   valueType="short"
//   priorityOptions={["MD", "DE", "US", "CA"]}
//   whitelist={["MD", "DE", "US", "CA"]}
//   blacklist: [],
//   disabled: false,
//   style={countryStyle}
//   disableWhenEmpty={true}
//}

//   <RegionDropdown />
//   disableWhenEmpty={true}
//   customOptions={["Иной вариант", "Иной вариант",]}
//   blankOptionLabel="55  регион"
//
//
//
//
