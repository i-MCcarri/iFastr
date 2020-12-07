import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Timer /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})