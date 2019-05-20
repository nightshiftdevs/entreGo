import React from "react";
import './main.component.scss'

function Main(props) {
  const { children } = props;
  return (
    <main className="main">
    {children}
    </main>
  )
}

export {
  Main
}
