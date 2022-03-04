import { IObservableValue, observable } from 'mobx';
import { LAUNCHES_TYPE } from '../emuns/launchType';
import { LaunchListParams } from '../interfaces/launchListParams';
import Launch from '../model/launch';

class LaunchStore {
    @observable showModalDialog: IObservableValue<boolean>;
    @observable updateCallback: IObservableValue<() => any>;
    @observable selectLaunch: IObservableValue<Launch | null>;
    @observable launchList: IObservableValue<LaunchListParams[]>;
    @observable selectLaunchList: IObservableValue<LaunchListParams | null>;

    constructor() {
        this.launchList = observable.box<LaunchListParams[]>([
            {
                id: '0',
                launches: [],
                title: LAUNCHES_TYPE.LAUNCHES.name,
            },
            {
                id: '1',
                launches: [],
                title: LAUNCHES_TYPE.MY_LAUNCHES.name,
            },
        ]);
        this.showModalDialog = observable.box<boolean>(false);
        this.selectLaunch = observable.box<Launch | null>(null);
        this.updateCallback = observable.box<() => any>(() => null);
        this.selectLaunchList = observable.box<LaunchListParams | null>(null);
    }

    /**
     * Получить полёт, выбранный для перемещения
     */
    getSelectLaunch = (): Launch | null => {
        return this.selectLaunch.get();
    };
 
    /**
     * Сохранить полёт, выбранный для перемещения
     */
    setSelectLaunch = (selectLaunch: Launch | null): void => {
        this.selectLaunch.set(selectLaunch);
    };

    /**
     * Получить таблицу, выбранную для перемещения
     */
    getSelectLaunchList = (): LaunchListParams | null => {
        return this.selectLaunchList.get();
    };
 
    /**
     * Сохранить таблицу, выбранную для перемещения
     */
    setSelectLaunchList = (selectLaunchList: LaunchListParams | null): void => {
        this.selectLaunchList.set(selectLaunchList);
    };

    /**
     * Получить все таблицы полётов
     */
    getLaunchList = (): LaunchListParams[] => {
        return this.launchList.get();
    };
 
    /**
     * Сохранить все таблицы полётов
     */
    setLaunchList = (launchList: LaunchListParams[]): void => {
        this.launchList.set(launchList);
    };

    /**
     * Получить флаг открытия модалки
     */
    getShowModalDialog = (): boolean => {
        return this.showModalDialog.get();
    };
 
    /**
     * Сохранить флаг открытия модалки
     */
    setShowModalDialog = (showModalDialog: boolean, update?: boolean): void => {
        this.showModalDialog.set(showModalDialog);
        if (update) this.updateCallback.get()();
    };
}

const launchStore = new LaunchStore();

export default launchStore;
export { LaunchStore };