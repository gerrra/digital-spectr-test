import * as t from 'io-ts';
import LaunchRocketSecondStagePayload, { LaunchRocketSecondStagePayloadType } from './launchRocketSecondStagePayload';

export const LaunchRocketSecondStageType = t.interface({
    block: t.union([t.number, t.null, t.undefined]),

    payloads: t.union([t.array(LaunchRocketSecondStagePayloadType), t.null, t.undefined]),
});

export interface LaunchRocketSecondStageDTO extends t.TypeOf<typeof LaunchRocketSecondStageType> {
}

class LaunchRocketSecondStage {
    block: number | null;

    payloads: LaunchRocketSecondStagePayload[];

    constructor(params: LaunchRocketSecondStageDTO) {
        this.block = params.block ?? null;

        this.payloads = params.payloads.length
            ? params.payloads.map((payload) => new LaunchRocketSecondStagePayload(payload))
            : [];
    }
}

export default LaunchRocketSecondStage;
