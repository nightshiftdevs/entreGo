import React from 'react';
import { Link } from "react-router-dom";

import './header2.component.scss'

class Header2 extends React.Component {
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
          <Link to="/" className={this.state.scroll > this.state.top ? "header-logo2 header-logo2-change" : "header-logo2"}>entreGo</Link>
        </div>
      </header>
    );
  }
}

export {
  Header2
}
