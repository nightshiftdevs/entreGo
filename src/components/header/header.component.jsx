import React from 'react';
import './header.component.scss'

function Header() {
  return (
    <header className="header">
      <div className="inside-container">
        <a className="header-logo" href="">entreGo</a>
        <nav>
          <ul className="header-nav">
            <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>H O M E</li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>A B O U T</li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>S E R V I C E S</li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>W O R K &nbsp; W I T H &nbsp; U S</li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"></a>C O N T A C T</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export {
  Header
}
