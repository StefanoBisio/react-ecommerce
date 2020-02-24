import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    
    /*See the object given by the React router by going on the page and inspect the components in the dev tools. On Router.Provider see the match value.
    On history.push() we could have just put .push(linkUrl). But by composing a string starting with the value of match.props we can make this component aware of his position in the project, and generate a link made of: 1. The current url it has been displayed on, and 2. The link we want the user to go to. 
    In case on the homepage the link will be '/hats' where '/' is given by the prop match.url, and 'hats' from the state in directory.component.jsx*/
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}} ></div>
        <div className="content">
            <div className="title">{title.toUpperCase()}</div>
            <div className="subtitle">Shop now</div>
        </div>
    </div>
)

/* Exporting withRouter allows this component to have access to the Router API, even though it is not called within a <Route> tag */
export default withRouter(MenuItem);