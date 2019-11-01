import React from 'react';

// export default ({ name }) => <h1>Hello {name}!</h1>;


export default function Hello(props) {
  return <h1>Hello, {props.name}</h1>;
}
