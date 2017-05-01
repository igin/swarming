/* @flow */
import {SwarmSimulationStrategy} from './SwarmSimulationStrategy';
import {Swarm, Vector3, SwarmParticle} from '../Swarm/Swarm';

export class ConstantVelocityStrategy implements SwarmSimulationStrategy {
    velocity: Vector3;

    constructor(velocity: Vector3) {
        this.velocity = velocity;
    }

    simulateTimeStep(delta: number, swarm: Swarm): Swarm {
        swarm.applyToAllParticles((particle) => {
            const newPosition = new Vector3(
                particle.position.x + (this.velocity.x * 0.001 * delta),
                particle.position.y + (this.velocity.y * 0.001 * delta),
                particle.position.z + (this.velocity.z * 0.001 * delta)
            );
            return new SwarmParticle(newPosition, this.velocity, particle.orientation);
        });
        return swarm;
    }
}