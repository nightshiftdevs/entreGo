import React from 'react';

import { addClass, removeClass } from '../../helpers/dom'
import './header.component.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector('header');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <header className={this.state.scroll > this.state.top ? "header-background" : ""}>
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
    );
  }
}

export {
  Header
}
