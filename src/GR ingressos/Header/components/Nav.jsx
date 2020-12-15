import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


function Nav() {
  return (
    <nav>
        <ul>
            <li className="links">
                <Link className="ative-link" to="/Home">Home</Link>
            </li>
            <li>
                <Link className="ative-link"  to="/Cidades">Cidades</Link>
            </li>
            <li>
                <Link className="ative-link"  to="/Ajuda">Ajuda</Link>
            </li>
            <li>
                <Link className="ative-link"  to="/Contato">Contato</Link>
            </li>
            <li>
                <Link className="ative-link"  to="/Eventos">Eventos</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
