import { useState } from "react";

export default function PagesCalculadora({a, b}){
    const [values, setValues] = useState({a, b});
    const resultado = values.a + values.b;

    function onChange(ev){
      setValues({
        ...values,
        [ev.target.name]: Number(ev.target.value),
      });
    }
  

  return (
    <div>
      <label htmlFor="Calculadora">Calculadora</label><br />

      <input name="a" type="text" values={values.a} onChange={onChange} /><br />
      <input name="b" type="text" values={values.b} onChange={onChange} /><br />

      A soma de  {values.a} + {values.b} = {resultado}
    </div>
  );
}

