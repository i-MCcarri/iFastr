import React from 'react';
import ReactDOM from 'react-dom';
import LogInForm from './LogInForm';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><LogInForm /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})