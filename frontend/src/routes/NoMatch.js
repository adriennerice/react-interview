import React from 'react';

// Page displayed if route is not found or not part of app
class NoMatch extends React.Component {
    render() {
      return (
        <div>
            <h1>404 Page Not Found</h1>
            <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
                </span>
            </h1>
        </div>
      )
    }

}

export default NoMatch;

