/* @flow */
import React from 'react';
import {SwarmContainer} from '../SwarmContainer/SwarmContainer';

export class AppContainer extends React.Component {
    render() {
        return (
            <SwarmContainer
                width={500}
                height={500}
            />
        );
    }
}