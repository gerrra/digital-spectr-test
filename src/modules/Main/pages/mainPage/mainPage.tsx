import React, { useEffect, useState } from 'react';
import { LaunchesActions } from '../../actions/launchesActions';
import Launch from '../../model/launch';
import './mainPage.scss';
import { inject, observer } from 'mobx-react';
import { LaunchListParams } from '../../interfaces/launchListParams';
import { Launches } from '../../components/launches/launches';
import { LaunchStore } from '../../stores/launchStore';
import { ModalDialog } from '../../components/modalDialog/modalDialog';

interface MainPageComponentProps {
    launchStore?: LaunchStore;
}

const MainPageComponent: React.FC<MainPageComponentProps> = (props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [pastLaunchList, setPastLaunchList] = useState<Launch[]>([]);
    const [launchLists, setLaunchLists] = useState<LaunchListParams[]>(props.launchStore.getLaunchList());

    useEffect(
        () => {
            getPastLaunchList();
            if (!props.launchStore.getLaunchList()[0].launches.length) getUpcomingLaunchList();

            props.launchStore.launchList.observe_((value: any) => setLaunchLists(value.newValue));
            props.launchStore.showModalDialog.observe_((value: any) => setShowModal(value.newValue));
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
                props.launchStore.setLaunchList(newLaunchLists);
            });
    }

    return (
        <div>
            {
                showModal &&
                <ModalDialog
                    closeCallback={(update?: boolean) => props.launchStore.setShowModalDialog(false, update)}
                />
            }
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
                        dragInDrop={false}
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
                                updateShowModal={() => setShowModal(true)}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export const MainPage = inject('launchStore')(observer(MainPageComponent));
