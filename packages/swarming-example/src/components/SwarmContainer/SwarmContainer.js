/* @flow */
import React from 'react';
import {Swarm, Vector3} from 'swarming';
import {MainLoopWrapper} from '../MainLoopWrapper/MainLoopWrapper';
import {SwarmRenderer} from '../SwarmRenderer/SwarmRenderer';
import {SwarmSimulationEngine, ConstantVelocityStrategy} from 'swarming';

type SwarmState = {
    swarm: Swarm
};

type ApplicationState = {
    currentDelta: number,
    frameCount: number,
    swarmState: SwarmState
};

class SwarmMainLoopWrapper extends MainLoopWrapper<ApplicationState> {
}

type SwarmContainerProps = {};

export class SwarmContainer extends React.Component {
    props: SwarmContainerProps;
    state: {
        swarmEngine: SwarmSimulationEngine
    };

    constructor(props: SwarmContainerProps) {
        super(props);

        const defaultStrategy = new ConstantVelocityStrategy(new Vector3(10, 10, 0));
        const swarmEngine = new SwarmSimulationEngine(defaultStrategy, {});
        this.state = {
            swarmEngine: swarmEngine
        };
    }

    computeInitialApplicationState(): ApplicationState {
        return {
            currentDelta: 0,
            frameCount: 0,
            swarmState: {
                swarm: Swarm.fromPositionsWithInitialVelocity([
                        new Vector3(0, 0, 0),
                        new Vector3(20, 0, 0),
                        new Vector3(20, 20, 0),
                        new Vector3(0, 20, 0),
                    ],
                    new Vector3(10, 10, 0),
                    new Vector3(10, 10, 0))
            }
        }
    }

    computeNewApplicationState(delta: number, oldState: ApplicationState): ApplicationState {
        return {
            currentDelta: delta,
            frameCount: oldState.frameCount + 1,
            swarmState: {
                swarm: this.state.swarmEngine.simulateTimeStep(delta, oldState.swarmState.swarm)
            }
        }
    }

    render() {
        return (
            <div>
                <SwarmMainLoopWrapper
                    initialState={this.computeInitialApplicationState()}
                    updateState={(...args) => this.computeNewApplicationState(...args)}
                    render={(props: ApplicationState) => {
                       return (
                           <div>
                            <div>Frame Count: {props.frameCount}</div>
                            <div>Delta: {props.currentDelta}</div>
                            <SwarmRenderer swarm={props.swarmState.swarm} />
                           </div>
                       );
                    }}
                />
            </div>
        );
    }
}