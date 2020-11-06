import React from 'react';

import facebook from '../asset/Img//icon-facebook.svg';
import twitter from '../asset/Img//icon-twitter.svg';
import instagram from '../asset/Img//icon-instagram.svg';
import youtube from '../asset/Img//icon-youtube.svg';
import Card from './Card';


function Top_card(){
    return(
    <section classNameName="top-cards">
        <div className="wrapper">
            <div className="grid">
                <Card red="facebook" icono={facebook} username="@JhemaCm" followers="4.621" siguiendo="200" />
                <Card red="twitter" username="@ManuelMendozaVz" icono={twitter} followers="52" siguiendo="43" />
                <Card red="instagram" icono={instagram} username="@manumendoza2020" followers="44" siguiendo="38" />
                <Card red="youtube" icono={youtube} username="Manuel Mendoza" followers="15" siguiendo="7" />
            </div>
        </div>
    </section>
    );
}

export default Top_card;