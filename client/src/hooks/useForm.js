import { useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value.trim(),
    }));
  };
  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value.trim() });
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    submitCallback(values);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
}
