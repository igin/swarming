/* @flow */
import React from 'react';
import {SwarmParticle} from 'swarming';

export class SwarmParticleRenderer extends React.Component {
    props: {
        swarmParticle: SwarmParticle
    };

    render() {
        const particle = this.props.swarmParticle;

        const triangleCenter = {x: particle.position.x, y: particle.position.y};
        const triangleFront = {
            x: triangleCenter.x + particle.orientation.x,
            y: triangleCenter.y + particle.orientation.y
        };
        const triangleLeft = {
            x: triangleCenter.x - particle.orientation.y,
            y: triangleCenter.y + particle.orientation.x
        };
        const triangleRight = {
            x: triangleCenter.x + particle.orientation.y,
            y: triangleCenter.y - particle.orientation.x
        };

        const points = [triangleFront, triangleLeft, triangleRight].map((point) => `${point.x} ${point.y}`).join(' ');

        return (
            <polygon
                points={points}
                fill='red'/>
        );
    }
}