import * as t from 'io-ts';

export const LaunchRocketSecondStagePayloadOrbitParamsType = t.interface({
    regime: t.union([t.string, t.null, t.undefined]),
    reference_system: t.union([t.string, t.null, t.undefined]),

    raan: t.union([t.number, t.null, t.undefined]),
    longitude: t.union([t.number, t.null, t.undefined]),
    period_min: t.union([t.number, t.null, t.undefined]),
    apoapsis_km: t.union([t.number, t.null, t.undefined]),
    mean_motion: t.union([t.number, t.null, t.undefined]),
    mean_anomaly: t.union([t.number, t.null, t.undefined]),
    eccentricity: t.union([t.number, t.null, t.undefined]),
    periapsis_km: t.union([t.number, t.null, t.undefined]),
    lifespan_years: t.union([t.number, t.null, t.undefined]),
    inclination_deg: t.union([t.number, t.null, t.undefined]),
    arg_of_pericenter: t.union([t.number, t.null, t.undefined]),
    semi_major_axis_km: t.union([t.number, t.null, t.undefined]),

    epoch: t.union([t.string, t.number, t.null, t.undefined]),
});

export interface LaunchRocketSecondStagePayloadOrbitParamsDTO extends t.TypeOf<typeof LaunchRocketSecondStagePayloadOrbitParamsType> {
}

class LaunchRocketSecondStagePayloadOrbitParams {
    regime: string | null;
    reference_system: string | null;

    raan: number | null;
    longitude: number | null;
    period_min: number | null;
    apoapsis_km: number | null;
    mean_motion: number | null;
    mean_anomaly: number | null;
    eccentricity: number | null;
    periapsis_km: number | null;
    lifespan_years: number | null;
    inclination_deg: number | null;
    arg_of_pericenter: number | null;
    semi_major_axis_km: number | null;

    epoch: Date | null;

    constructor(params: LaunchRocketSecondStagePayloadOrbitParamsDTO) {
        this.regime = params.regime ?? null;
        this.reference_system = params.reference_system ?? null;

        this.raan = params.raan ?? null;
        this.longitude = params.longitude ?? null;
        this.period_min = params.period_min ?? null;
        this.apoapsis_km = params.apoapsis_km ?? null;
        this.mean_motion = params.mean_motion ?? null;
        this.mean_anomaly = params.mean_anomaly ?? null;
        this.eccentricity = params.eccentricity ?? null;
        this.periapsis_km = params.periapsis_km ?? null;
        this.lifespan_years = params.lifespan_years ?? null;
        this.inclination_deg = params.inclination_deg ?? null;
        this.arg_of_pericenter = params.arg_of_pericenter ?? null;
        this.semi_major_axis_km = params.semi_major_axis_km ?? null;

        this.epoch = params.epoch
            ? new Date(params.epoch)
            : null;
    }
}

export default LaunchRocketSecondStagePayloadOrbitParams;
