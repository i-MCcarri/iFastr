import React from 'react';
import ReactDOM from 'react-dom';
import Methods from './Methods';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Methods /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})