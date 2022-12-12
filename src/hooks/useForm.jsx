import {useState} from 'react';

export function useForm(steps){
  const [currentStep, setCurrentStep] = useState(0); // qual passo do form está.
  function changeStep (i, e){ //funcao de mudar o passo que recebe o indice e o evento
    if (e) e.preventDefault(); //parar o evento de formulario, submit.   
    if(i < 0 || i >= steps.length) return; // se o indice for menor que 0 ou maior que o tamanho do array, retorna.
    setCurrentStep(i); // agrega o indice ao step atual
  }
  return{
    currentStep, // retorna o passo atual
    currentComponent: steps[currentStep], // retorna o componente do passo atual
    changeStep, // retorna a funcao de mudar o passo
    isLastStep: currentStep +1 === steps.length ? true : false, // se o passo atual + 1 for igual ao tamanho do array, retorna true, se nao, retorna false
    isFirtsStep: currentStep === 0 ? true : false, // se o passo atual for igual a 0, retorna true, se nao, retorna false
  }
}