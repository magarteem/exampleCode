import Select from "react-select";
//npm i --save-dev @types/react-select
//npm i react-select
import flagUSA from "../../img/flagUSA.png";
import at from "../../img/at.svg";
import cy from "../../img/cy.svg";
import cz from "../../img/cz.svg";
import de from "../../img/de.svg";
import fi from "../../img/fi.svg";
import se from "../../img/se.svg";
import gb from "../../img/gb.svg";
import "./reactSelect_2.css";

export const ReactSelect_2 = () => {
  const styleCustom_Option = {
    mainOption: {
      display: "flex",
      alignItems: "center",
    },
    imgOption: {
      height: "20px",
      paddingLeft: "20px",
    },
  };
  const selectOptionData = [
    {
      value: `дом`,
      label: (
        <div style={styleCustom_Option.mainOption}>
          <img
            style={styleCustom_Option.imgOption}
            src={flagUSA}
            alt="flagUSA"
          />
          <span>дом</span>
        </div>
      ),
    },
    {
      value: `home`,
      label: (
        <div>
          <span>home</span>
          <img src={flagUSA} alt="flagUSA" />
        </div>
      ),
    },
    {
      value: `4343221`,
      label: "+4343221",
    },
  ];

  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      margin: 0,
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "50px",
      borderBottom: "2px solid green",
    }),
    singleValue: (provided: any, state: any) => ({
      ...provided,
      //background: "red",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      //background: "red",
    }),
    dropdownIndicator: (provided: any, state: any) => ({
      ...provided,
      //background: "green",
      color: "red",
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      border: "2px solid red",
    }),
  };

  return (
    <div>
      <Select
        classNamePrefix="selectPrefix"
        styles={customStyles}
        options={selectOptionData}
        placeholder="введите номер"
        menuIsOpen
      />
    </div>
  );
};
