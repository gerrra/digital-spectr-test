import * as t from 'io-ts';

export const LaunchRocketFirstStageCoreType = t.interface({
    core_serial: t.union([t.string, t.null, t.undefined]),
    landing_type: t.union([t.string, t.null, t.undefined]),
    landing_vehicle: t.union([t.string, t.null, t.undefined]),

    block: t.union([t.number, t.null, t.undefined]),
    flight: t.union([t.number, t.null, t.undefined]),

    legs: t.union([t.boolean, t.null, t.undefined]),
    reused: t.union([t.boolean, t.null, t.undefined]),
    gridfins: t.union([t.boolean, t.null, t.undefined]),
    land_success: t.union([t.boolean, t.null, t.undefined]),
    landing_intent: t.union([t.boolean, t.null, t.undefined]),
});

export interface LaunchRocketFirstStageCoreDTO extends t.TypeOf<typeof LaunchRocketFirstStageCoreType> {
}

class LaunchRocketFirstStageCore {
    core_serial: string | null;
    landing_type: string | null;
    landing_vehicle: string | null;
    
    block: number | null;
    flight: number | null;

    legs: boolean | null;
    reused: boolean | null;
    gridfins: boolean | null;
    land_success: boolean | null;
    landing_intent: boolean | null;

    constructor(params: LaunchRocketFirstStageCoreDTO) {
        this.core_serial = params.core_serial ?? null;
        this.landing_type = params.landing_type ?? null;
        this.landing_vehicle = params.landing_vehicle ?? null;

        this.block = params.block ?? null;
        this.flight = params.flight ?? null;

        this.legs = params.legs ?? null;
        this.reused = params.reused ?? null;
        this.gridfins = params.gridfins ?? null;
        this.land_success = params.land_success ?? null;
        this.landing_intent = params.landing_intent ?? null;
    }
}

export default LaunchRocketFirstStageCore;
