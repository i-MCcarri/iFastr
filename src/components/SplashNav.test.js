import React from 'react';
import ReactDOM from 'react-dom';
import SplashNav from './SplashNav';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><SplashNav /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})