import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import slaves from '../img/slaves.jpeg'
import favorito from '../img/favoritos.jpeg'
import imagen1 from '../img/imagen 1 G.jpeg'
import imagen2 from '../img/imagen 2 G.jpeg'
import imagen3 from '../img/imagen 3 G.jpeg'
import imagen4 from '../img/imagen 4 G.jpeg'
import imagen5 from '../img/imagen 5 G.jpeg'
import imagen6 from '../img/imagen 6 G.jpeg'

function Inicio() {
    return (
        <section id="Inicio" className="text-center py-12 bg-white">
            <Carousel />

            <div className="mt-8">
                <h3 className="text-lg text-gray-700">Bienvenido a</h3>
                <h2 className="text-4xl font-bold text-gray-800">El Rey del Mambo</h2>

                <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                    Nuestro Menú
                </button>
            </div>
            <div className="mt-12 flex flex-col md:flex-row items-center md:items-start mb-12">

                <div className="w-full md:w-1/3 h-80 bg-gray-300 flex items-center justify-center mb-6 md:mb-0 mx-auto md:ml-20">
                    <img src={slaves} alt={``} className="w-full h-full object-cover" />
                </div>


                <div className="w-full md:w-2/3 md:pl-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">SOBRE NOSOTROS</h2>
                    <p className="text-gray-700 mb-6">
                        Somos un restaurante dedicado a ofrecer los mejores asados de pollo
                        de la ciudad. Con ingredientes frescos
                        y una atención única, trabajamos día a
                        día para ofrecer una experiencia inolvidable a nuestros clientes.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Nuestros empleados son los más especializados en atender a los
                        clientes de manera única y dedicada,
                        tal como querría el gran Mambo King.
                    </p>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                        Más de Nosotros
                    </button>
                </div>
            </div>

            <div className="relative bg-gray-300 h-96 flex flex-col items-center justify-center mb-12">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${favorito})`, opacity: 0.5 }}>

                </div>

                <div className="absolute inset-0 bg-black opacity-30"></div>


                <div className="relative z-10 text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Nuestros Favoritos</h2>

                    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12 mb-8">

                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-4 mx-auto md:ml-20">Comidas</h3>
                            <ul className=" mx-auto md:ml-20">
                                <li className="mb-2">Pollo asado - $20.000</li>
                                <li className="mb-2">Nuggets de pollo - $25.000</li>
                                <li className="mb-2">Hamburguesa especial de la casa - $28.000</li>
                                <li className="mb-2">Salchipapa - $15.000</li>
                            </ul>
                        </div>


                        <div className="text-left">
                            <h3 className="text-2xl font-semibold mb-4 mx-auto md:ml-20">Bebidas</h3>
                            <ul className=" mx-auto md:ml-20">
                                <li className="mb-2">Gaseosa 1.5 - $8.000</li>
                                <li className="mb-2">Jugo natural - $5.000</li>
                                <li className="mb-2">Granizado - $10.000</li>
                                <li className="mb-2">Limonada - $3.000</li>
                            </ul>
                        </div>
                    </div>


                    <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-300">
                        Nuestro Menú
                    </button>
                </div>
            </div>

            <div className="py-12 bg-gray-100">
                <div className="container mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Galería</h2>
                </div>

                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen1} alt="" className="object-cover w-full h-full" />
                    </div>


                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen2} alt="" className="object-cover w-full h-full" />
                    </div>


                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen3} alt="" className="object-cover w-full h-full" />
                    </div>


                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen4} alt="" className="object-cover w-full h-full" />
                    </div>


                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen5} alt="" className="object-cover w-full h-full" />
                    </div>


                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img src={imagen6} alt="" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>

        </section>



    );
}

export default Inicio