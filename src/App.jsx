// Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
import './App.css'

const formTemplate = {
  name: '',
  email: '',
  review: '',
  comment: '',
}

//Hooks
import {useForm} from './hooks/useForm'
import {useState} from 'react'
function App() {
  const [data, setData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => { // funcao que atualiza o estado com o valor digitado no input
    setData((prev) => {  // recebe o estado anterior
    return {...prev, [key]: value} // retorna um novo objeto com os valores anteriores e o valor digitado no input
  })
  }
  const formComponents = [
   <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, // passa o estado e a funcao para atualizar o estado para os componentes
   <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
   <Thanks data={data} />];
  const {currentStep, currentComponent, changeStep, isLastStep, isFirtsStep} = useForm(formComponents); // passa os componentes para o hook

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulrio abaixo para avaliar o produto. </p>
      </div>
      <div className="form-container">
        <Steps currentStep = {currentStep} /> {/* passa o passo atual para o componente de passos */}
        <form onSubmit={(e) => changeStep(currentStep +1, e)}> {/* ao clicar no botao de avancar, chama a funcao changeStep com o indice do proximo passo e o evento */}
          <div className="inputs-container">{currentComponent}</div> {/* passa o componente atual para o container de inputs */}
          <div className="actions">
           {!isFirtsStep && ( 
           <button type="button" onClick={() => changeStep(currentStep -1)}> {/* ao clicar no botao de voltar, chama a funcao changeStep com o indice do passo anterior */}
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}
            {!isLastStep ? (
              <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
              </button>
            ) : (
              <button type="button">
              <span>Enviar</span>
              <FiSend />
              </button> 
            )}
          </div>
        </form>

      </div>
    </div>
  )
}

export default App
