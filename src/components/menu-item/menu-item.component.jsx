import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    
    // On history.push() we could have just put .push(linkUrl). But by composing a string starting with the value of match.props (a page property we can access thanks to withRouter) we can make this component aware of his position in the project, and generate a link starting with the current url it's been displayed on, plus the link we want.
    <div className={`${size} menu-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})`}} ></div>
        <div className="content">
            <div className="title">{title.toUpperCase()}</div>
            <div className="subtitle">Shop now</div>
        </div>
    </div>
)

export default withRouter(MenuItem);