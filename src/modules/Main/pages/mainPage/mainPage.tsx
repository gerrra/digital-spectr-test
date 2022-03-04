import React, { useEffect, useState } from 'react';
import { LaunchesActions } from '../../actions/launchesActions';
import Launch from '../../model/launch';
import './mainPage.scss';
import { inject, observer } from 'mobx-react';
import { LaunchListParams } from '../../interfaces/launchListParams';
import { Launches } from '../../components/launches/launches';
import { DragAndDropStore } from '../../stores/dragAndDropStore';

interface MainPageComponentProps {
    dragAndDropStore?: DragAndDropStore;
}

const MainPageComponent: React.FC<MainPageComponentProps> = (props) => {
    const [pastLaunchList, setPastLaunchList] = useState<Launch[]>([]);
    const [launchLists, setLaunchLists] = useState<LaunchListParams[]>(props.dragAndDropStore.getLaunchList());

    useEffect(
        () => {
            getPastLaunchList();
            getUpcomingLaunchList();
            props.dragAndDropStore.launchList.observe_((value: any) => setLaunchLists(value.newValue));
        },
        [],
    );

    /**
     * Получить список прошедших космических полетов
     */
    const getPastLaunchList = () => {
        LaunchesActions.pastLaunchList()
            .then((launches: Launch[]) => setPastLaunchList(launches));
    }

    /**
     * Получить список предстоящих космических полетов
     */
    const getUpcomingLaunchList = () => {
        LaunchesActions.upcomingLaunchList()
            .then((launches: Launch[]) => {
                const newLaunchLists: LaunchListParams[] = launchLists;
                newLaunchLists[0].launches = launches;
                props.dragAndDropStore.setLaunchList(newLaunchLists);
            })
    }

    return (
        <div
            className={'main-page'}
        >
            <h1
                className={'main-page__header'}
            >
                Explore the space
            </h1>
            <div
                className={'main-page__launches-wrap'}
            >
                <Launches
                    title={'PAST LAUNCHES'}
                    launches={pastLaunchList}
                />
                {
                    launchLists.map((launchList: LaunchListParams, index: number) => (
                        <Launches
                            dragInDrop
                            key={index}
                            parent={launchList}
                            title={launchList.title}
                            launches={launchList.launches}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export const MainPage = inject('dragAndDropStore')(observer(MainPageComponent));
