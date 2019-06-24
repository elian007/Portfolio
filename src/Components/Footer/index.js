import React, {Fragment} from 'react'
import './style.css'
const Footer = () =>{
    return(
        <Fragment>
        <div class="drop">
            <div class="container">
                <h2 class="drop-title"><span>Me </span>envia uma mensagem</h2>
                <form action="">
                    <div class="form-input">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                    </div>
                    <input type="text" class="sub" placeholder="Your Subject"/>
                    <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" value="Send Message"/>
                </form>
            </div>
        </div>
        
        <div class="footer">
            <p> copyright &copy; 2019 </p>
        </div>
        </Fragment>
    )
}

export default Footer