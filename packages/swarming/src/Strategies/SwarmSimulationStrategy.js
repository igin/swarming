/* @flow */
import {Swarm} from '../Swarm/Swarm';

export interface SwarmSimulationStrategy {
    simulateTimeStep(delta: number, swarm: Swarm): Swarm;
}