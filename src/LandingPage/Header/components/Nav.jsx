import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Nav.css';


function Nav() {
  return (
    <nav>
        <ul>
            <li className="link">
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Essências">Essências</Link>
            </li>
            <li>
                <Link to="/Arguiles">Arguiles</Link>
            </li>
            <li>
                <Link to="/Carrinho">Carrinho</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;
