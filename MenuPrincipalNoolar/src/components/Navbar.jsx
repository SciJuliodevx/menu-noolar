import React from 'react';
import '../components/css/navbar.css';
import 'boxicons'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img className='logo' src="../public/images/logo.png" alt="Logo" />
                <span class="logo-text">Noolar</span>
            </div>

            {/*Icone de Busca*/}
            <div className='search-icon'>
                <img className='search' src='../public/images/search.png' alt="search" />
            </div>

            <div className="navbar-links">
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#servicos">Serviços</a>
                <a href="#doacao">Doação</a>
                <a href="#relatos">Relatos</a>
            </div>

            {/* Icone do Usuário */}
            <div className="navbar-actions">
                <div className="profile">
                <img className="usuario" src='../public/images/User.png' alt="User" />
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
{/*Navbar pra celular*/}

