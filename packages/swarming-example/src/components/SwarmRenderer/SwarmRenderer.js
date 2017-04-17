/* @flow */
import React from 'react';
import {Swarm} from 'swarming';

export class SwarmRenderer extends React.Component {
    props: {
        swarm: Swarm
    };

    render() {
        return (
            <div>
                {this.props.swarm.particles.map((particle) => (
                    <div>
                        <h1>{particle.position.x}</h1>
                        <div>{particle.position.y}</div>
                        <div>{particle.position.z}</div>
                    </div>
                    )
                )}
            </div>
        );
    }
}