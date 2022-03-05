import * as t from 'io-ts';
import LaunchRocketSecondStagePayloadOrbitParams, { LaunchRocketSecondStagePayloadOrbitParamsType } from './launchRocketSecondStagePayloadOrbitParams';

export const LaunchRocketSecondStagePayloadType = t.interface({
    orbit: t.union([t.string, t.null, t.undefined]),
    payload_id: t.union([t.string, t.null, t.undefined]),
    nationality: t.union([t.string, t.null, t.undefined]),
    payload_type: t.union([t.string, t.null, t.undefined]),
    
    norad_id: t.union([t.array(t.number), t.null, t.undefined]),
    customers: t.union([t.array(t.string), t.null, t.undefined]),
    orbit_params: t.union([t.array(LaunchRocketSecondStagePayloadOrbitParamsType), t.null, t.undefined]),

    reused: t.union([t.boolean, t.null, t.undefined]),

    payload_mass_kg: t.union([t.number, t.null, t.undefined]),
    payload_mass_lbs: t.union([t.number, t.null, t.undefined]),
});

export interface LaunchRocketSecondStagePayloadDTO extends t.TypeOf<typeof LaunchRocketSecondStagePayloadType> {
}

class LaunchRocketSecondStagePayload {
    orbit: string | null;
    payload_id: string | null;
    nationality: string | null;
    payload_type: string | null;

    norad_id: number[];
    customers: string[];
    orbit_params: LaunchRocketSecondStagePayloadOrbitParams[];

    reused: boolean | null;

    payload_mass_kg: number | null;
    payload_mass_lbs: number | null;

    constructor(params: LaunchRocketSecondStagePayloadDTO) {
        this.orbit = params.orbit ?? null;
        this.payload_id = params.payload_id ?? null;
        this.nationality = params.nationality ?? null;
        this.payload_type = params.payload_type ?? null;

        this.norad_id = params.norad_id;
        this.customers = params.customers;
        this.orbit_params = params.orbit_params.length
            ? params.orbit_params.map((orbit_param) => new LaunchRocketSecondStagePayloadOrbitParams(orbit_param))
            : [];

        this.payload_mass_kg = params.payload_mass_kg ?? null;
        this.payload_mass_lbs = params.payload_mass_lbs ?? null;
    }
}

export default LaunchRocketSecondStagePayload;
