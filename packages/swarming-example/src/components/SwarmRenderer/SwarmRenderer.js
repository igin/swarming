/* @flow */
import React from 'react';
import {Swarm} from 'swarming';
import {SwarmParticleRenderer} from '../SwarmParticleRenderer/SwarmParticleRenderer';

export class SwarmRenderer extends React.Component {
    props: {
        swarm: Swarm
    };

    render() {
        return (
            <svg>
                {this.props.swarm.particles.map((particle) => (
                    <SwarmParticleRenderer swarmParticle={particle} />
                    )
                )}
            </svg>
        );
    }
}