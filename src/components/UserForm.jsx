import React from 'react';

// import { Container } from './styles';
const UserForm = ({data, updateFieldHandler}) => {
  return(
   <div>
    <div className="form-control">
      <label htmlFor="name">Nome:</label>
      <input type="text"
        name='text'
        id="name"
        placeholder='Digite o seu nome'
        required 
        value={data.name || ''}
        onChange={(e) => updateFieldHandler('name', e.target.value)} // ao digitar no input, chama a funcao updateFieldHandler com o nome do campo e o valor digitado
          />
    </div>
    
    <div className="form-control">
      <label htmlFor="email">E-mail:</label>
      <input type="email" 
      name='email'
       id="email" 
       placeholder='Digite o seu E-mail' 
       required 
       value={data.email || ''}
        onChange={(e) => updateFieldHandler('email', e.target.value)} // ao digitar no input, chama a funcao updateFieldHandler com o nome do campo e o valor digitado
        />
    </div>
  </div>
  )
};

export default UserForm;