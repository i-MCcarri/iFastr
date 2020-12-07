import React from 'react';
import ReactDOM from 'react-dom';
import Sustenance from './Sustenance';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Sustenance /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})