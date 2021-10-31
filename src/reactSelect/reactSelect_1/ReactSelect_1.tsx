import { CSSProperties, useState } from "react";
import Select from "react-select";
import s from "./select.module.css";
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

export const ReactSelect_1 = () => {
  interface TypeSelect {
    value: string;
    label: any;
  }
  interface TypeStyle {
    display: string;
    alignItems: string;
    justifyContent: string;
    width: string;
    background: string;
  }

  function customTheme(theme: any) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green",
      },
    };
  }

  const selectFild = [
    {
      value: `888 827 06 06`,
      label: (
        <div className={s.container}>
          <img src={flagUSA} alt="flagUSA" style={{ height: "25px" }} />
          <span>+888 827 06 06</span>
        </div>
      ),
    },
    {
      value: `0 69 84 84 540`,
      label: (
        <div className={s.container}>
          <img src={at} alt="at" />
          <span>+0 69 84 84 540</span>
        </div>
      ),
    },
    {
      value: `0 800 090 31 33`,
      label: (
        <div className={s.container}>
          <img src={cy} alt="cy" />
          <span>+0 800 090 31 33</span>
        </div>
      ),
    },
    {
      value: `0 2 588 19 97`,
      label: (
        <div>
          <img src={cz} alt="cz" />
          <span>+0 2 588 19 97</span>
        </div>
      ),
    },
    {
      value: `911 23 01 82`,
      label: (
        <div>
          <img src={de} alt="de" />
          <span>+911 23 01 82</span>
        </div>
      ),
    },
    {
      value: `0 85 888 21 31`,
      label: (
        <div>
          <img src={fi} alt="fi" style={{ height: "25px" }} />
          <span>+0 85 888 21 31</span>
        </div>
      ),
    },
    {
      value: `0 975 180 460`,
      label: (
        <div>
          <img src={se} alt="se" />
          <span>+0 975 180 460</span>
        </div>
      ),
    },
    {
      value: `0 8 408 394 48`,
      label: (
        <div>
          <img src={gb} alt="gb" />
          <span>+0 8 408 394 48</span>
        </div>
      ),
    },
  ];

  const customStyles = {
    menu: (provided: CSSProperties, state: any) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 0,
      margin: 0,
      with: "100%",
    }),
    //@ts-ignore
    control: (provided, { selectProps: { width } }) => ({
      display: "flex",
      width: "100%",
      border: "2px solid green",
      background: "red",
      height: "60px",
    }),
    //@ts-ignore
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return {
        ...provided,
        display: "flex",
        alignItems: "center",
        fontSize: "20px",
        background: "#555",
        height: "100%",
      };
    },
  };
  const opp = () => {
    console.log("меню открыто или закрыто");
  };

  return (
    <div>
      <Select
        //@ts-ignore
        styles={customStyles}
        autoFocus
        options={selectFild}
        placeholder="введите номер"
        theme={customTheme}
        isSearchable
        onMenuOpen={opp}
        onMenuClose={opp}
      />
    </div>
  );
};
//isMulti
//onChange={(e) => setSelectData(e.target.value)}
//defaultMenuIsOpen={true} //меню открыто изначально
//menuIsOpen               //меню открыто постоянно
//noOptionsMessage={() => "Не выбранно"}
//isRtl  развернуть dropdownIndicator

//STYLE KEYS
//clearIndicator
//container
//control
//dropdownIndicator
//group
//groupHeading
//indicatorsContainer
//indicatorSeparator
//input
//loadingIndicator
//loadingMessage
//menu
//menuList
//menuPortal
//multiValue
//multiValueLabel
//multiValueRemove
//noOptionsMessage
//option
//placeholder
//singleValue
//valueContainer
