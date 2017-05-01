/* @flow */

export class Vector3 {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export class SwarmParticle {
    position: Vector3;
    velocity: Vector3;
    orientation: Vector3;

    constructor(position: Vector3, velocity: Vector3, orientation: Vector3) {
        this.position = position;
        this.velocity = velocity;
        this.orientation = orientation;
    }
}

export class Swarm {
    particles: Array<SwarmParticle>;

    constructor(particles: Array<SwarmParticle>) {
        this.particles = particles;
    }

    applyToAllParticles(mappingFunction: (SwarmParticle) => SwarmParticle) {
        this.particles = this.particles.map(mappingFunction);
    }

    static fromPositionsWithInitialVelocity(positions: Array<Vector3>, initialVelocity: Vector3, initialOrientation: Vector3): Swarm {
        const particles = positions.map((position) => new SwarmParticle(position, initialVelocity, initialOrientation));
        return new Swarm(particles);
    }
}