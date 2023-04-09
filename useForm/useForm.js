import { useState } from "react";

export const useForm = (initialForm = {} ) => {

const [formeState, setFormeState] = useState(initialForm);


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormeState({
      ...formeState,
      [name]: value,
    });
  };
    
    const onResetForm = () => {
        setFormeState(initialForm);
    }
  
    return {
        ...formeState,
        formeState,
        onInputChange,
        onResetForm
  }
}
