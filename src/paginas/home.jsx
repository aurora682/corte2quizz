import React from 'react';
import Hader from '../moleculas/header';
import FormCrearPreguntas from '../organismos/formCrearPreguntas';
function Home() {
  return (
    <>
      <Hader/>
      <div className='cuerpoHome'>
      <FormCrearPreguntas/>
      </div>
    </>
  )
}
export default Home
