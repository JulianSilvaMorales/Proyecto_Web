import React, { useState } from 'react';
import Registro from './Registro';
import Login from './Log in';

function Navbar({ onReservasClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [showRegistro, setShowRegistro] = useState(false);
  const [showInicioSesion, setShowInicioSesion] = useState(false);

  const emailRegistrado = 'usuario@ejemplo.com';
  const contraseñaRegistrada = 'contraseña123';

  return (
    <nav className="bg-red-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <div className="text-white text-2xl font-bold">
            Mambo Kings
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#Inicio" className="block text-gray-300 hover:text-white p-2">
              Inicio
            </a>
            <a href="#" className="block text-gray-300 hover:text-white p-2">
              Sobre nosotros
            </a>
            <a href="#" className="block text-gray-300 hover:text-white p-2">
              Menu
            </a>
            <a href="#Reservas" onClick={(e) => {
              e.preventDefault();
              onReservasClick();
            }} className="block text-gray-300 hover:text-white p-2">
              Reservas
            </a>
          </div>
        </div>
        <div className="flex-grow md:flex md:justify-center hidden">
          <input
            type="text"
            placeholder="Buscar..."
            className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <button onClick={() => setShowRegistro(true)} className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Registro
          </button>
          <Registro isVisible={showRegistro} onClose={() => setShowRegistro(false)} />
          <button onClick={() => setShowInicioSesion(true)} className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-600">
            Inicio de sesión
          </button>
          <Login
            isVisible={showInicioSesion}
            onClose={() => setShowInicioSesion(false)}
            emailRegistrado={emailRegistrado}
            contraseñaRegistrada={contraseñaRegistrada} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <a href="#Inicio" className="block text-gray-300 hover:text-white p-2">
            Inicio
          </a>
          <a href="#" className="block text-gray-300 hover:text-white p-2">
            Sobre nosotros
          </a>
          <a href="#" className="block text-gray-300 hover:text-white p-2">
            Menu
          </a>
          <a href="#Reservas" onClick={(e) => {
            e.preventDefault();
            onReservasClick();
          }} className="block text-gray-300 hover:text-white p-2">
            Reservas
          </a>
          <input
            type="text"
            placeholder="Buscar..."
            className="block w-full px-4 py-2 mt-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 text-black"
          />
          <button onClick={() => setShowRegistro(true)} className="block w-full bg-green-600 text-white px-4 py-2 mt-2 rounded-full hover:bg-green-600">
            Registro
          </button>
          <Registro isVisible={showRegistro} onClose={() => setShowRegistro(false)} />
          <button onClick={() => setShowInicioSesion(true)} className="block w-full bg-green-600 text-white px-4 py-2 mt-2 rounded-full hover:bg-green-600">
            Inicio de sesión
          </button> 
          <Login
            isVisible={showInicioSesion}
            onClose={() => setShowInicioSesion(false)}
            emailRegistrado={emailRegistrado}
            contraseñaRegistrada={contraseñaRegistrada} />
        </div>
      )}
    </nav>
  );
}

export default Navbar
