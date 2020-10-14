import React from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div id='navBtnWrapper'>
                <label htmlFor='back'></label>
                <button id='back' onClick={ () => this.props.history.goBack() }>Back</button>
                <label htmlFor='logOut'></label>
                <button id='logOut' ><a href='/'>Log-Out</a></button>
            </div>
        );
    }
}
export default withRouter(Nav);