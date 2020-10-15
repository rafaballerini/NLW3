import React from "react";

//route import (<Link to> usado no lugar do <a href>)
import { Link } from 'react-router-dom';

//css import
import '../styles/pages/landing.css';

//image and icon import
import logoImg from '../images/logo.svg';
import { FiArrowRight } from 'react-icons/fi';


function landing(){
    return(
    <div id="page-landing">
        <div className="content-wrapper">

            <img src={logoImg} alt="Happy" />

            <main>
                <h1>Leve felicidade para o mundo!</h1>
                <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Jaraguá Do Sul</strong>
                <span>Santa Catarina</span>
            </div>

            <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
            </Link>
      
        </div>
    </div>
    );
}

export default landing;