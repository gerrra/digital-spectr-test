import { BaseAction } from "../../Global/actions/baseAction";

export class LaunchesActions extends BaseAction {
    static DEFAULT_URL = 'https://api.spacexdata.com/v5/launches/';

    /**
     * Получение последнего запуска
     */
    static latest = () => {
        return LaunchesActions.apiResource(
            'latest',
            REQUEST_METHOD.GET,
        );
    };
}