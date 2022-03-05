import Launch from "../model/launch";

export interface LaunchListParams {
    id: string;
    title: string;
    launches: Launch[];
};
