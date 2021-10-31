import flagUSA from "../img/flagUSA.png";
import at from "../img/at.svg";
import cy from "../img/cy.svg";
import cz from "../img/cz.svg";
import de from "../img/de.svg";
import fi from "../img/fi.svg";
import se from "../img/se.svg";
import gb from "../img/gb.svg";

const styles = [
  {
    display: "flex",
    alignItems: "flexEnd",
    justifyContent: "spaceBetween",
    width: "149px",
    background: "black",
  },
];

export const SelectFild1 = [
  {
    value: `888 827 06 06`,
    label: (
      <div className={`${styles}`}>
        <img src={flagUSA} alt="flagUSA" />
        <span>+888 827 06 06</span>
      </div>
    ),
  },
  {
    value: `0 69 84 84 540`,
    label: (<div className={{ styles }}>
      <img src={at} alt="at" />
      <span>+0 69 84 84 540</span>
    </div>
    ),
  },
  {
    value: `0 800 090 31 33`,
    label: (
      <div className={{ styles }}>
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
        <img src={fi} alt="fi" />
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



