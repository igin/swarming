/* @flow */
import {SwarmSimulationStrategy} from '../Strategies/SwarmSimulationStrategy';
import {Swarm} from '../Swarm/Swarm';


type SwarmSimulationEngineOptions = {

}

export class SwarmSimulationEngine {
    strategy: SwarmSimulationStrategy;

    constructor(strategy: SwarmSimulationStrategy, options: SwarmSimulationEngineOptions) {
        this.strategy = strategy;
    }

    simulateTimeStep(delta: number, swarm: Swarm): Swarm {
        return this.strategy.simulateTimeStep(delta, swarm);
    }
}