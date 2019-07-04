import React from 'react'
import './style.css'

const Contact = () =>{
    return(
        <div class="contact_skills">
            <div class="container">
                <div class="contact">
                    <h2 class="contact-title"><span>Contato</span></h2>
                    <ul class="contact-list">
                        <li class="contact-item">
                            <span>Nome</span>
                            Elian Marcos Veloso
                        </li>
                        <li class="contact-item">
                            <span>Nascimento</span>
                            07/08/1991
                        </li>
                        <li class="contact-item">
                            <span>Endereço</span>
                            Cornélio Procópio, PR - Brasil
                        </li>
                        <li class="contact-item">
                            <span>Whats</span>
                            (15)99756-6036
                        </li>
                        <li class="contact-item">
                            <span>Email</span>
                            elians.2016@alunos.utfpr.edu.br<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            elian.marcos@hotmail.com
                        </li>
                        
                    </ul>
                </div>
                
                <div class="skills">
                    <h2 class="skills-title">Algumas<span> skills</span></h2>
                    <p class="skills-desc">
                        Algumas das habilidades adquiridas com o curso e estágio.
                    </p>
                    <div class="bar">
                        <span class="title">Infraestrutura de Redes</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>

                    <div class="bar">
                        <span class="title">ReactJS</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>

                    <div class="bar">
                        <span class="title">NodeJS</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>

                    <div class="bar">
                        <span class="title">CSS3</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                    
                    <div class="bar">
                        <span class="title">HTML5</span>
                        <span class="perc"></span>
                        <div class="parent">
                            <span class="sp1"></span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact