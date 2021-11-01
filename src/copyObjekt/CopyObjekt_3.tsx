import { useState } from "react";

const dateCopyObjekt_3 = [
  {
    id: 1,
    btn1: "btn11",
    btn2: "btn1",
    backgroundColor_1: "yellow",
    backgroundColor_2: "#7e7ed7",
  },
  {
    id: 2,
    btn1: "btn22",
    btn2: "btn2",
    backgroundColor_1: "red",
    backgroundColor_2: "#000",
  },
  {
    id: 3,
    btn1: "btn33",
    btn2: "btn3",
    backgroundColor_1: "yellow",
    backgroundColor_2: "#7e7ed7",
  },
  {
    id: 4,
    btn1: "btn44",
    btn2: "btn4",
    backgroundColor_1: "red",
    backgroundColor_2: "yellow",
  },
];

export const CopyObjekt_3 = () => {
  const [date_3, setDate_3] = useState(dateCopyObjekt_3);

  const btnFU_1 = (id: number) => {
    console.log(date_3);
    let xxx = date_3.map((el) => {
      if (el.id == id) {
        return { ...el, id: `id=${id}`, btn1: "rererer" };
      }
      return el;
    });
    //@ts-ignore
    setDate_3(xxx);
    console.log(xxx);
  };

  const btnFU_2 = (id: number) => {
    console.log("btnFU_2");
  };

  return (
    <div>
      {date_3.map((e, index) => (
        <div key={index}>
          <button
            style={{ backgroundColor: e.backgroundColor_1 }}
            //@ts-ignore
            onClick={() => btnFU_1(e.id)}
          >
            btn1 \ id={e.id + " =" + e.btn1}
          </button>
          <button
            style={{ backgroundColor: e.backgroundColor_2 }}
            onClick={() => btnFU_2(e.id)}
          >
            btn2 \ id={e.btn2}
          </button>
          <br />
        </div>
      ))}
    </div>
  );
};
