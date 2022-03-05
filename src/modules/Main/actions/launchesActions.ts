import { BaseAction } from "../../Global/actions/baseAction";
import Launch from "../model/launch";
import Capsule from "../model/launch";

export class LaunchesActions extends BaseAction {
    static DEFAULT_URL = 'https://api.spacexdata.com/v3/launches/';

    /**
     * Получение списка всех полётов
     */
    static list = (): Promise<Launch[]> => {
        return LaunchesActions.apiResource('')
            .then((launches: any[]) => launches.length
                ? launches.map((launch) => new Launch(launch))
                : [],
            );
    };

    /**
     * Получение сущности одного полёта
     * @param flight_number
     */
    static get = (flight_number: string): Promise<Launch> => {
        return LaunchesActions.apiResource(flight_number)
            .then((launch) => new Launch(launch));
    };

    /**
     * Получение списка предстоящих полётов
     */
    static upcomingLaunchList = (): Promise<Launch[]> => {
        return LaunchesActions.apiResource('upcoming')
            .then((launches: any[]) => launches.length
                ? launches.map((launch) => new Launch(launch))
                : [],
            );
    };

    /**
     * Получение списка прошедших полётов
     */
    static pastLaunchList = (): Promise<Launch[]> => {
        return LaunchesActions.apiResource('past')
            .then((launches: any[]) => launches.length
                ? launches.map((launch) => new Launch(launch))
                : [],
            );
    };
}