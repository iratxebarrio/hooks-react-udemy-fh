import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
//aqui recibe desde FormWithCustomHook el objeto inicial 



      const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };

      const onResetForm = () => {
        setFormState(initialForm)


      }

    return {
       ... formState, //lo desestructuramos
        onInputChange,
        onResetForm

    }


}