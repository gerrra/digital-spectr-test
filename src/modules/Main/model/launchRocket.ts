import * as t from 'io-ts';
import LaunchRocketFairings, { LaunchRocketFairingsType } from './launchRocketFairings';
import LaunchRocketFirstStage, { LaunchRocketFirstStageType } from './launchRocketFirstStage';
import LaunchRocketSecondStage, { LaunchRocketSecondStageType } from './launchRocketSecondStage';

export const LaunchRocketType = t.interface({
    rocket_id: t.union([t.string, t.null, t.undefined]),
    rocket_name: t.union([t.string, t.null, t.undefined]),
    rocket_type: t.union([t.string, t.null, t.undefined]),

    second_stage: t.union([LaunchRocketSecondStageType, t.undefined]),
    fairings: t.union([LaunchRocketFairingsType, t.null, t.undefined]),
    first_stage: t.union([LaunchRocketFirstStageType, t.null, t.undefined]),
});

export interface LaunchRocketDTO extends t.TypeOf<typeof LaunchRocketType> {
}

class LaunchRocket {
    rocket_id: string | null;
    rocket_name: string | null;
    rocket_type: string | null;

    fairings: LaunchRocketFairings | null;
    first_stage: LaunchRocketFirstStage | null;
    second_stage: LaunchRocketSecondStage | null;

    constructor(params: LaunchRocketDTO) {
        this.rocket_id = params.rocket_id ?? null;
        this.rocket_name = params.rocket_name ?? null;
        this.rocket_type = params.rocket_type ?? null;

        this.fairings = params.fairings
            ? new LaunchRocketFairings(params.fairings)
            : null;
        this.first_stage = params.first_stage
            ? new LaunchRocketFirstStage(params.first_stage)
            : null;
        this.second_stage = params.second_stage
            ? new LaunchRocketSecondStage(params.second_stage)
            : null;
    }
}

export default LaunchRocket;
