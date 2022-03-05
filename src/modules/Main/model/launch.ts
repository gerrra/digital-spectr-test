import * as t from 'io-ts';
import LaunchRocket, { LaunchRocketType } from './launchRocket';

export const LaunchType = t.interface({
    details: t.union([t.string, t.null, t.undefined]),
    launch_year: t.union([t.string, t.null, t.undefined]),
    mission_name: t.union([t.string, t.null, t.undefined]),
    tentative_max_precision: t.union([t.string, t.null, t.undefined]),

    mission_id: t.union([t.array(t.string), t.null, t.undefined]),

    tbd: t.union([t.boolean, t.undefined]),
    upcoming: t.union([t.boolean, t.undefined]),
    is_tentative: t.union([t.boolean, t.undefined]),

    flight_number: t.union([t.number, t.null, t.undefined]),
    launch_date_unix: t.union([t.number, t.null, t.undefined]),
    launch_window: t.union([t.number, t.null, t.undefined]),

    launch_date_utc: t.union([t.string, t.number, t.null, t.undefined]),
    launch_date_local: t.union([t.string, t.number, t.null, t.undefined]),

    rocket: t.union([LaunchRocketType, t.undefined]),
});

export interface LaunchDTO extends t.TypeOf<typeof LaunchType> {
}

class Launch {
    details: string | null;
    launch_year: string | null;
    mission_name: string | null;
    tentative_max_precision: string | null;

    mission_id: string[];

    tbd: boolean | null;
    upcoming: boolean | null;
    is_tentative: boolean | null;

    flight_number: number | null;
    launch_window: number | null;
    launch_date_unix: number | null;

    launch_date_utc: Date | null;
    launch_date_local: Date | null;

    rocket: LaunchRocket | null;

    constructor(params: LaunchDTO) {
        this.details = params.details ?? null;
        this.launch_year = params.launch_year ?? null;
        this.mission_name = params.mission_name ?? null;
        this.tentative_max_precision = params.tentative_max_precision ?? null;

        this.mission_id = params.mission_id.length ? params.mission_id : [];

        this.tbd = params.tbd ?? null;
        this.upcoming = params.upcoming ?? null;
        this.is_tentative = params.is_tentative ?? null;

        this.flight_number = params.flight_number ?? null;
        this.launch_window = params.launch_window ?? null;
        this.launch_date_unix = params.launch_date_unix ?? null;

        this.launch_date_utc = params.launch_date_utc
            ? new Date(params.launch_date_utc)
            : null;
        this.launch_date_local = params.launch_date_local
            ? new Date(params.launch_date_local)
            : null;

        this.rocket = params.rocket
            ? new LaunchRocket(params.rocket)
            : null;
    };
}

export default Launch;
