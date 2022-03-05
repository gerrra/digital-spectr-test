import * as t from 'io-ts';

export const LaunchRocketFairingsType = t.interface({
    ship: t.union([t.string, t.null, t.undefined]),

    reused: t.union([t.boolean, t.null, t.undefined]),
    recovered: t.union([t.boolean, t.null, t.undefined]),
    recovery_attempt: t.union([t.boolean, t.null, t.undefined]),

});

export interface LaunchRocketFairingsDTO extends t.TypeOf<typeof LaunchRocketFairingsType> {
}

class LaunchRocketFairings {
    ship: string | null;

    reused: boolean | null;
    recovered: boolean | null;
    recovery_attempt: boolean | null;

    constructor(params: LaunchRocketFairingsDTO) {
        this.ship = params.ship ?? null;

        this.reused = params.reused ?? null;
        this.recovered = params.recovered ?? null;
        this.recovery_attempt = params.recovery_attempt ?? null;
    }
}

export default LaunchRocketFairings;
