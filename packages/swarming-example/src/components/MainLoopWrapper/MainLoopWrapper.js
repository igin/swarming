/* @flow */

import React from 'react';
import MainLoop from 'mainloop.js';

type MainLoopWrapperPropsType<PropsType> = {
    initialState: PropsType,
    updateState: (delta: number, oldProps: PropsType) => PropsType,
    render: (props: PropsType) => React.Element<*>
};

export class MainLoopWrapper<PropsType> extends React.Component<void, MainLoopWrapperPropsType<PropsType>, void>
{
    props: MainLoopWrapperPropsType<PropsType>;
    childProps: PropsType;
    mainLoop: any;

    constructor(props: MainLoopWrapperPropsType<PropsType>) {
        super(props);

        this.childProps = props.initialState;
    }

    updateState(delta: number) {
        this.childProps = this.props.updateState(delta, this.childProps);
    }

    draw(interpolationPercentage: number) {
        this.forceUpdate();
    };

    componentWillMount() {
        this.mainLoop = MainLoop
            .setUpdate((...args) => this.updateState(...args))
            .setDraw((...args) => this.draw(...args));
    }

    componentDidMount() {
        this.mainLoop.start();
    }

    render() {
        return this.props.render(this.childProps);
    }
}
