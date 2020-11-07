/* eslint-disable react/jsx-pascal-case */
import Card_Small from './card-small';
import db_overviews from './DataBase/databaseoverview'


function Overviews(){
    return(
    <section className="overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    db_overviews.map(({icono, pageView, growth,red})=> <Card_Small 
                    key={red}
                    red={red}
                    icono={icono}
                    pageView={pageView}
                    growth={growth}
                    />)
                }
            </div>
        </div>
    </section>
    );
}

export default Overviews;