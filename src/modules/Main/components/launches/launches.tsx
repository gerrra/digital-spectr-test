import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Launch from '../../model/launch';
import './launches.scss';
import { inject, observer } from 'mobx-react';
import { DragAndDropStore } from '../../stores/dragAndDropStore';
import { LaunchListParams } from '../../interfaces/launchListParams';

interface LaunchesProps {
    title: string;
    launches?: Launch[];
    dragInDrop?: boolean;
    parent?: LaunchListParams;
    dragAndDropStore?: DragAndDropStore;
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
        if (!props.dragInDrop) return;

        e.target.style.boxShadow = 'none';
    }

    const dragStartHandler = (e: any, parent: LaunchListParams, launch: Launch) => {
        if (!props.dragInDrop) return;

        props.dragAndDropStore.setSelectLaunch(launch);
        props.dragAndDropStore.setSelectLaunchList(parent);
    }

    const dragEndHandler = (e: any) => {
        if (!props.dragInDrop) return;

        e.target.style.boxShadow = 'none';
    }

    const dropCardHandler = (e: any, parent: LaunchListParams) => {
        if (!props.dragInDrop) return;

        const launchList: LaunchListParams[] = props.dragAndDropStore.getLaunchList();
        const currentItems: LaunchListParams = props.dragAndDropStore.getSelectLaunchList();
        const currentItem: Launch = props.dragAndDropStore.getSelectLaunch();

        parent.launches.push(currentItem);

        const currentIndex: number = currentItems.launches.indexOf(currentItem);
        currentItems.launches.splice(currentIndex, 1);

        props.dragAndDropStore.setLaunchList(launchList.map((b) => {
            if (b.id === parent.id) return parent;
            if (b.id === currentItems.id) return currentItems;
            return b;
        }));
    }

    return (
        <div
            className={'launches'}
            onDragOver={dragOverHandler}
            onDrop={(e) => dropCardHandler(e, props.parent)}
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

export const Launches = inject('dragAndDropStore')(observer(LaunchesComponent));
