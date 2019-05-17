import React from "react";
import './main.component.scss'

function Main(props) {
  const { children } = props;
  return (
    <main>main{children}</main>
  )
}

export {
  Main
}
