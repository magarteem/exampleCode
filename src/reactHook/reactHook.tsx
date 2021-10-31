import s from "./reactHook.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormValues = {
  numbers: number;
  expiry: number;
  cvc: number;
  Name: string;
  email: string;
  password: string;
  confirmPassword: string;
  selectValue: number;
};
const schema = yup.object().shape({
  numbers: yup
    .number()
    .typeError("Это не число")
    .positive("positive")
    .integer("integer")
    .required("required"),
  expiry: yup.number().required("No valid expiry"),
  cvc: yup.number().required("No valid cvc"),
  Name: yup.string().required("No valid Name"),
  email: yup.string().email().required("No valid email"),
  password: yup.string().min(4).max(8).required("No valid password"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  selectValue: yup.number().required("No valid selectValue"),
});

export const ReactHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log("Отправлено: ", data);
  };
  //console.log(watch());
  //console.log(errors);

  const sty = {
    backgroundColor: "#FFE8E8",
    border: "2px solid #DF1F3D",
  };

  return (
    <div className={s.divForm}>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <input
          style={errors.numbers && sty}
          type="tel"
          placeholder="number"
          {...register("numbers")}
        />
        {/*<p>{errors.numbers?.message}</p>*/}

        <input
          style={errors.expiry && sty}
          type="tel"
          placeholder="expiry"
          {...register("expiry")}
        />
        {/*<p>{errors.expiry?.message}</p>*/}

        <input
          style={errors.cvc && sty}
          type="tel"
          placeholder="cvc"
          {...register("cvc")}
        />
        {/*<p>{errors.cvc?.message}</p>*/}

        <input
          style={errors.Name && sty}
          type="text"
          placeholder="name"
          {...register("Name")}
        />
        {/*<p>{errors.Name?.message}</p>*/}

        <input
          style={errors.email && sty}
          type="text"
          placeholder="email"
          {...register("email")}
        />
        {/*<p>{errors.email?.message}</p>*/}

        <input
          style={errors.password && sty}
          type="text"
          placeholder="password"
          {...register("password")}
        />
        {/*<p>{errors.password?.message}</p>*/}

        <input
          style={errors.confirmPassword && sty}
          type="text"
          placeholder="confirmPassword"
          {...register("confirmPassword")}
        />
        {/*{errors.confirmPassword && "ERROR способ №2"}*/}

        <select {...register("selectValue")}>
          <option value="111">1111111</option>
          <option value="222">2222222</option>
          <option value="333">3333333</option>
        </select>

        <button type="submit">Click</button>
      </form>
    </div>
  );
};
