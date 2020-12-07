import React from 'react';
import ReactDOM from 'react-dom';
import Nutrients from './Nutrients';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Nutrients /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})