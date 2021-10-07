import React from 'react';

function DisplayText(props) {
    const {id, text, color, size, weight, handleRemoveTextData} = props;
  return (
    <div>
        <span style={{color:color, fontSize:size, fontWeight:weight}}>{text}</span>
        <button onClick={() => handleRemoveTextData(id)}>삭제</button>
    </div>
  );
}

export default DisplayText;