import React from 'react';

function PathTemplates({ name, index, lastIndex }) {
  if(index ===0 || index === lastIndex){
    if(index===lastIndex){
      return <><span className="mdi mdi-arrow-right-bold text-gray-500"/>
      <span className="font-bold">${name}</span></>
    }else{
      return <span className="font-bold">${name}</span>
    }
  } else{
    return <><span className="mdi mdi-arrow-right-bold text-gray-500"/>
    <span className="text-gray-600">${name}</span></>
  }
}

export default PathTemplates;