import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import Launch from '../../model/launch';
import './launches.scss';

interface LaunchesProps {
    title: string;
    launches: Launch[];
    dragInDrop?: boolean;
}

const Launches: React.FC<LaunchesProps> = (props) => {
    return (
        <div
            className={'launches'}
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
                    props.launches.map((launch: Launch, index: number) => (
                        <Link
                            key={index}
                            className={'launches__item-child'}
                            to={`/card/${launch.flight_number}`}
                        >
                            <h2
                                className={'launches__item-child-mission-name'}
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

export default Launches;
