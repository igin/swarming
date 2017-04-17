/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import {renderHelloWorld} from 'swarming';

class HelloMessage extends React.Component {
    props: {
        name: string
    };

    render() {
        return (
            <div>
                {
                    renderHelloWorld(this.props.name)
                }
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name='Swarming' />,
    document.getElementById('app-container')
);