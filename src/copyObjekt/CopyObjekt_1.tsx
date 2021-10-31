import { useState } from "react";

const dateCopyObjekt_1 = [
  { id: 1, name: "Katy1", age: 32, sity: "Moskow1" },
  { id: 2, name: "Katy2", age: 33, sity: "Moskow2" },
  { id: 3, name: "Katy3", age: 34, sity: "Moskow3" },
  { id: 4, name: "Katy4", age: 35, sity: "Moskow4" },
];

export const CopyObjekt_1 = () => {
  const [date_1, setDate_1] = useState(dateCopyObjekt_1);

  const changeClick = () => {
    const xx = [...date_1];
    xx.map((el) => ([el.id, el.name] = [76, "65"]));
    setDate_1(xx);
  };

  return (
    <div>
      {date_1.map((e) => (
        <div>
          <li>{e.id}</li>
          <li>{e.name}</li>
          <li>{e.age}</li>
          <li>{e.sity}</li>
          <br />
        </div>
      ))}
      <button onClick={changeClick}>Click_1</button>
    </div>
  );
};
