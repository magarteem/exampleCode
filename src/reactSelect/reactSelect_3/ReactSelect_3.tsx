import Select from "react-select";
import cy from "../../img/cy.svg";
import cz from "../../img/cz.svg";
import de from "../../img/de.svg";

export const ReactSelect_3 = () => {
  const selectOptionData = [
    {
      label: "cy",
      value: `cy`,
      color: "red",
    },
    {
      label: "cz",
      value: `cz`,
      color: "green",
    },
    {
      label: "de",
      value: `de`,
      color: "yellow",
    },
  ];

  const Option = ({ label }: any) => (
    <div>
      <img src={de} />
      {label}
    </div>
  );
  // !            ХЗ КАК РАБОТАЕТ.
  return (
    <div>
      <Select
        options={selectOptionData}
        components={{ Option }}
        placeholder="введите номер"
      />
    </div>
  );
};
