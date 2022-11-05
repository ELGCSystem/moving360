import React from 'react';

export default function MessageBox(props) {
  return (
    <div  style={{ fontSize: '20px' }} className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  );
}