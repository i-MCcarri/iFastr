import React from 'react';
import ReactDOM from 'react-dom';
import Review from './Review';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Review /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})