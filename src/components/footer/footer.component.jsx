import React from "react";
import './footer.component.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const github = 'https://github.com/ByeBye-Sama/entreGo';
  const facebook = '';
  const instagram = '';

  return (
    <footer className="footer">
      <ul>
        <li><a href={facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href={instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href={github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
      <p className="copyright">Copyright 2019 | <b>entreGo</b></p>
    </footer>
  )
}

export {
  Footer
}
