import { useState } from 'react';
import Facebook from '../img/facebook.png'
import Instagram from '../img/instagram.png'
import Twitter from '../img/twitter.png'

function Footer() {
  return (

    <footer className="bg-red-900 text-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-semibold mb-4">Síguenos en redes sociales</h2>
          <ul className="flex justify-center md:justify-start space-x-6">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" className="w-8 h-8 hover:opacity-75" />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" className="w-8 h-8 hover:opacity-75" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="w-8 h-8 hover:opacity-75" />
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Nuestro Contacto</h2>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="text-center">
          <h2 className="text-white text-lg font-semibold mb-4">Donde Encontrarnos</h2>
          <p>Dirección: Calle 13 #7-69, Neiva, Huila</p>
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Hora de Apertura</h3>
          <p>Lunes a Viernes: 8:00 AM - 11:30 PM</p>
          <p>Sabado a Domingo: 9:00 AM - 10:00 PM</p>
        </div>
        <div className="text-center md:text-right">
          <h2 className="text-white text-lg font-semibold mb-4">Nuestra Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531643!3d-37.81627917975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779f58f23e29c!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631317056533!5m2!1sen!2sau"
            width="100%"
            height="150"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-600 pt-4">
        <p>&copy; 2024 Mambo Kings.Todos los derechos reservados.</p>
      </div>
    </footer>


  );



}

export default Footer