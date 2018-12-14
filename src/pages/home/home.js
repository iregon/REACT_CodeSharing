import React, { Component } from 'react';
import Header from '../../components/header/header'
import { withTheme } from '@material-ui/core/styles';



function Home(props) {
    return (
        <div>
            <Header></Header>

            <div>
                <p>
                    Home
            </p>
            </div>
        </div>
    );
}

export default withTheme()(Home);