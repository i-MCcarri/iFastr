import React from 'react';
import ReactDOM from 'react-dom';
import SignInBtn from './SignInBtn';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><SignInBtn /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})