import React from 'react';
import ReactDOM from 'react-dom';
import Support from './Support';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Support /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})