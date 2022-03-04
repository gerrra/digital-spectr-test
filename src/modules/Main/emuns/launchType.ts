import { SimpleObject } from '../../Global/interfaces/simpleObject';

export enum LaunchesTypeEnum {
    LAUNCHES = 'LAUNCHES',
    MY_LAUNCHES = 'MY_LAUNCHES',
}

export interface LaunchesType {
    [value: string]: SimpleObject;

    LAUNCHES: SimpleObject;
    MY_LAUNCHES: SimpleObject;
}

export const LAUNCHES_TYPE: LaunchesType = {
    LAUNCHES: {
        value: 'LAUNCHES',
        name: 'LAUNCHES',
    },
    MY_LAUNCHES: {
        value: 'MY_LAUNCHES',
        name: 'MY LAUNCHES',
    },
};
