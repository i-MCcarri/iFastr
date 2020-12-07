import React from 'react';
import ReactDOM from 'react-dom';
import Tools from './Tools';
import { BrowserRouter as Router} from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Router><Tools /></Router>, div);

    ReactDOM.unmountComponentAtNode(div);
})