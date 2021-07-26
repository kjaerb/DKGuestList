import React from 'react';

class CheckCard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: [],
            status: []
        }
    }

    render() {
        return(
            <div className={`check-card ${this.props.key}`}>
                <h1 className="guest-name">{this.props.name}</h1>
                <div className="input-box">
                    <input className="arrived" type="checkbox"/>
                </div>
            </div>
        );
    }
}

export default CheckCard;