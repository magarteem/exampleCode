import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";
import "./react-phone-input-2.css";
//import "react-phone-input-2/lib/material.css";

export const ReactPhoneInput_2 = () => {
  const [phone, setPhone] = useState("32");
  const set = (value: string) => {
    console.log(value);

    setPhone(value);
  };

  const t = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
    console.log(e.target, e.currentTarget);
  };

  useEffect(() => {
    console.log(phone);
  }, [phone]);

  console.log(phone);
  return (
    <section className="main-container">
      <div className="blockPhone">
        <PhoneInput
          inputClass="rr"
          country={"md"}
          value={phone}
          onChange={set}
          enableSearch
          preferredCountries={["md", "kz"]}
        />
        <input onChange={t} value={phone} />
      </div>
      <div className="rr">{phone}</div>
    </section>
  );
};
