import React from 'react';

function Input (props){
  return (
    <>
    <input className={props.className} placeholder={props.placeholder}></input>
    </>
  );
};

export default Input;