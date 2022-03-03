import React, { useEffect, useState } from 'react';
import { LaunchesActions } from '../../actions/launchesActions';
import Launch from '../../model/launch';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './mainPage.scss';
import Launches from '../../components/launches/launches';

const MainPage = () => {
    const [pastLaunchList, setPastLaunchList] = useState<Launch[]>([]);
    const [bookingLaunchList, setBookingLaunchList] = useState<Launch[]>([]);
    const [upcomingLaunchList, setUpcomingLaunchList] = useState<Launch[]>([]);

    useEffect(
        () => {
            getPastLaunchList();
            getUpcomingLaunchList();
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
            .then((launches: Launch[]) => setUpcomingLaunchList(launches));
    }

    const onDragEnd = (result: DropResult) => {

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
                <DragDropContext
                    onDragEnd={onDragEnd}
                >

                </DragDropContext>
                <Launches
                    dragInDrop
                    title={'LAUNCHES'}
                    launches={upcomingLaunchList}
                />
                <Launches
                    dragInDrop
                    title={'MY LAUNCHES'}
                    launches={bookingLaunchList}
                />
            </div>
        </div>
    );
}

export default MainPage;
