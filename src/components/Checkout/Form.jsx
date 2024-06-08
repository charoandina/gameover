import React from 'react'
import './Form.css'

function Form({dataForm, handleChangeInput,HandleSubmitForm}) {
  return (
    <form onSubmit={HandleSubmitForm} className='form-container contrail-one-regular'>
      <h2 className='title-form'>Completa el formulario y finaliza tu compra</h2>
        <label className='label-form'>Nombre</label>
        <input className='input-form' type="text" name='name' value={dataForm.name} onChange={handleChangeInput}/>

        <label className='label-form'>Telefono</label>
        <input className='input-form' type="text" name='phone' value={dataForm.phone} onChange={handleChangeInput}/>

        <label className='label-form'>Email</label>
        <input className='input-form' type="email" name='email' value={dataForm.email} onChange={handleChangeInput}/>

        <label className='label-form'>Confirmar Email</label>
        <input className='input-form' type="email" name="confirmEmail" value={dataForm.confirmEmail} onChange={handleChangeInput} />

        <button type="submit" className='contrail-one-regular end-button'>Finalizar compra</button>
    </form>
  )
}

export default Form