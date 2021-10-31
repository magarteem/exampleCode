import { ReactSelect_1 } from "./reactSelect_1/ReactSelect_1";
import { ReactSelect_2 } from "./reactSelect_2/ReactSelect_2";
import { ReactSelect_3 } from "./reactSelect_3/ReactSelect_3";

const style: any = {
  MaintSelect: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px 30px",
    margin: "10px 20px",
    background: "#b9c1b9",
  },
  MaintSelectDiv1: { flex: "0 0 49%" },
  MaintSelectDiv2: { flex: "0 0 49%" },
  MaintSelectDiv3: { flex: "0 0 49%" },
  MaintSelectDiv4: { flex: "0 0 49%" },
};

export const MaintSelect = () => {
  return (
    <div style={style.MaintSelect}>
      <div style={style.MaintSelectDiv1}>
        <ReactSelect_1 />
      </div>
      <div style={style.MaintSelectDiv2}>
        <ReactSelect_2 />
      </div>
      <div style={style.MaintSelectDiv3}>
        <ReactSelect_3 />
      </div>
      <div style={style.MaintSelectDiv4}>444</div>
    </div>
  );
};
