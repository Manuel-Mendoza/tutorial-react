import React from 'react';

import Card from './Card';
import DataBase from './DataBase/database';

function Top_card(){
    return(
    <section classNameName="top-cards">
        <div className="wrapper">
            <div className="grid">
                {
                    DataBase.map((data)=> <Card 
                    key={data.key}
                    red={data.red} 
                    icono={data.icono} 
                    username={data.username} 
                    followers={data.followers} 
                    siguiendo={data.siguiendo} />
                    )
                }
            </div>
        </div>
    </section>
    );
}

export default Top_card;