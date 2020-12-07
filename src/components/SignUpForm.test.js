import React from 'react';
import ReactDOM from 'react-dom';
import SignUpForm from './SignUpForm';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><SignUpForm /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})