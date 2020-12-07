import React from 'react';
import ReactDOM from 'react-dom';
import Exertion from './Exertion';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Exertion /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})