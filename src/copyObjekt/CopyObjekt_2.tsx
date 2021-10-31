import { useState } from "react";

const dateCopyObjekt_2 = {
  key1: { id: 1, name: "Katy1", age: 32, sity: "Moskow1" },
  key2: { id: 2, name: "Katy2", age: 33, sity: "Moskow2" },
  key3: { id: 3, name: "Katy3", age: 34, sity: "Moskow3" },
  key4: { id: 4, name: "Katy4", age: 35, sity: "Moskow4" },
};

export const CopyObjekt_2 = () => {
  const [date_2, setDate_2] = useState(dateCopyObjekt_2);

  const changeClick_2 = () => {
    setDate_2({
      ...date_2,
      key3: { ...date_2.key3, age: (date_2.key3.age = 65) },
    });
  };

  return (
    <div>
      {Object.keys(date_2.key3).map((elem) => (
        <div key={elem}>{elem}</div>
      ))}
      <button onClick={changeClick_2}>Click_2</button>
    </div>
  );
};
