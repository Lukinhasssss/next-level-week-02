import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Para fazer o processo de SPA, para isso basta substituir <a href por <Link to

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import api from '../../services/api';

function Landing() {
    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => { // Toda vez que a variável que está no array mudar a função passada como 1º param será executada de novo. Se eu quiser que a função execute apenas uma única vez assim que o componente for exibido em tela eu deixo o array vazio
        api.get('connections').then(response => { // Faça a requisição de 'connections' então (then) response pega a resposta e deixa ela disponível na arrow function
            // console.log(response)
            // const total = response.data.total
            const { total } = response.data // Faz uma desestruturação. Dá o mesmo resultado que setando a const total que foi definida logo acima

            setTotalConnections(total)
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={ logoImg } alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={ landingImg } alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={ studyIcon } alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={ giveClassesIcon } alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de { totalConnections } conexões já realizadas <img src={ purpleHeartIcon } alt="Coração roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;