import React from 'react';
import ReactDOM from 'react-dom';
import Accountable from './Accountable';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Accountable /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})