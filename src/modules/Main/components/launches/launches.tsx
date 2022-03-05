import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Launch from '../../model/launch';
import './launches.scss';
import { inject, observer } from 'mobx-react';
import { LaunchStore } from '../../stores/launchStore';
import { LaunchListParams } from '../../interfaces/launchListParams';
import { LAUNCHES_TYPE } from '../../emuns/launchType';
import { toast } from 'react-toastify';

interface LaunchesProps {
    title: string;
    launches?: Launch[];
    dragInDrop?: boolean;
    parent?: LaunchListParams;
    updateShowModal?: () => any;
    launchStore?: LaunchStore;
}

const LaunchesComponent: React.FC<LaunchesProps> = (props) => {
    const [launches, setLaunches] = useState<Launch[]>([]);

    useEffect(
        () => setLaunches(props.launches),
        [props.launches],
    )

    const dragOverHandler = (e: any) => {
        if (!props.dragInDrop) return;

        e.preventDefault();
        if (e.target.className === 'launches__item-child') {
            e.target.style.boxShadow = '0 0 10px 0 rgb(34 60 80 / 20%)';
        }
    }

    const dragLeaveHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    }

    const dragStartHandler = (e: any, parent: LaunchListParams, launch: Launch) => {
        props.launchStore.setSelectLaunch(launch);
        props.launchStore.setSelectLaunchList(parent);
    }

    const dragEndHandler = (e: any) => {
        e.target.style.boxShadow = 'none';
    }

    /**
     * Проверяем тип полёта, чтобы вывести предупреждающую модалку
     * @param e
     * @param parent
     */
    const checkLaunchType = (e: any, parent: LaunchListParams) => {
        if (parent.title === LAUNCHES_TYPE.LAUNCHES.name) {
            props.launchStore.setShowModalDialog(true);
            props.launchStore.updateCallback.set(() => dropCardHandler(e, parent));
        } else dropCardHandler(e, parent);
    }

    const dropCardHandler = (e: any, parent: LaunchListParams) => {
        const launchList: LaunchListParams[] = props.launchStore.getLaunchList();
        const currentItems: LaunchListParams = props.launchStore.getSelectLaunchList();
        const currentItem: Launch = props.launchStore.getSelectLaunch();

        if (!currentItems) return;

        parent.launches.push(currentItem);

        const currentIndex: number = currentItems.launches.indexOf(currentItem);
        currentItems.launches.splice(currentIndex, 1);

        props.launchStore.setLaunchList(launchList.map((launches: LaunchListParams) => {
            if (launches.id === parent.id) return parent;
            if (launches.id === currentItems.id) return currentItems;
            return launches;
        }));

        if (parent.title === LAUNCHES_TYPE.MY_LAUNCHES.name && parent.id !== currentItems.id) {
            toast(`Полёт ${currentItem.mission_name} успешно забронирован!`, { type: 'success' })
        }
        if (parent.title === LAUNCHES_TYPE.LAUNCHES.name) {
            toast(`Бронирование полёта ${currentItem.mission_name} успешно отменено!`, { type: 'success' })
        }
    }

    return (
        <div
            className={'launches'}
            onDragOver={dragOverHandler}
            onDrop={(e) => checkLaunchType(e, props.parent)}
        >
            <div
                className={'launches__item-title'}
            >
                {props.title}
            </div>
            <div
                className={'launches__item'}
            >
                {
                    launches.map((launch: Launch, index: number) => (
                        <Link
                            key={index}
                            draggable={props.dragInDrop}
                            className={'launches__item-child'}
                            to={`/card/${launch.flight_number}`}
                            onDragOver={dragOverHandler}
                            onDragLeave={dragLeaveHandler}
                            onDragStart={(e) => dragStartHandler(e, props.parent, launch)}
                            onDragEnd={dragEndHandler}
                        >
                            <h2
                                className={'launches__item-chid-mission-name'}
                            >
                                {launch.mission_name ?? ''}
                            </h2>
                            <div>
                                {launch.rocket?.rocket_name ?? ''}
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export const Launches = inject('launchStore')(observer(LaunchesComponent));
