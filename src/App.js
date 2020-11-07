/* eslint-disable react/jsx-pascal-case */
import React, {Fragment} from 'react';
import Header from './Components/header';
import Top_Card from './Components/top-card';
import Overviews from './Components/overview';
import Switch from './Components/swich';

import "./asset/Css/styles.css";

function App() {
  return (
    <Fragment>
      <Header>
        <Switch/>
      </Header>
      <Top_Card/>
      <Overviews/>
    </Fragment>
  );
}

export default App;
