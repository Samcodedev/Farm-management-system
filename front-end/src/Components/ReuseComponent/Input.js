import React from 'react'

// bootstrap imports
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Input = ({name, area_label, aria_describedby, placeholder, type, onChange, as }) => {
  return (
    <InputGroup className="mb-3">
        <Form.Control 
          key={onChange}
          aria-label={area_label}
          aria-describedby={aria_describedby}
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          as={as}
          row={as === 'textarea'? 3 : ''}
        />
    </InputGroup>
  )
}

export default Input
