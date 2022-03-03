import * as t from 'io-ts';
import moment from 'moment';
import LaunchRocketFirstStageCore, { LaunchRocketFirstStageCoreType } from './launchRocketFirstStageCore';

export const LaunchRocketFirstStageType = t.interface({
    cores: t.union([t.array(LaunchRocketFirstStageCoreType), t.null, t.undefined]),
});

export interface LaunchRocketFirstStageDTO extends t.TypeOf<typeof LaunchRocketFirstStageType> {
}

class LaunchRocketFirstStage {
    cores: LaunchRocketFirstStageCore[];

    constructor(params: LaunchRocketFirstStageDTO) {
        this.cores = params.cores.length
            ? params.cores.map((core) => new LaunchRocketFirstStageCore(core))
            : [];
    }
}

export default LaunchRocketFirstStage;
