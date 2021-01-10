import React from 'react';
import classes from './Footer.module.css';
function Footer() {
    return (
        <div className={classes.footer__container}>
            <ul>
              <li><a href="https://github.com/anwarhossain1" target="_blank"><img alt='github' src="https://www.flaticon.com/svg/static/icons/svg/270/270798.svg"/></a></li>
              <li><a href="#"><img src="https://www.flaticon.com/svg/static/icons/svg/185/185964.svg"/></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
            <p>Developed And Maintained By <a href='facebook.com'>Anwar Hossain</a></p>
        </div>
    )
}


// AIzaSyAuHMEW2xdfDoOlCIhI9mX0ztT2pXx6orQ

export default Footer
