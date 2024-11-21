import { useState } from 'react';
import PropTypes from 'prop-types';

function Child({ onNameChange }) {
    const [inputName, setInputName] = useState('');
    
    const handleInputChange = (e) => {
        const newName = e.target.value;
        setInputName(newName);
        onNameChange(newName);  // Llamar a la función pasada por props
      };
    

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={inputName}
        onChange={handleInputChange}
      />
    </div>
  );
}

Child.propTypes = {
    onNameChange: PropTypes.func.isRequired,
  };    



export default Child;