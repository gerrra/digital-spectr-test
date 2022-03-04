import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { LaunchesActions } from '../../actions/launchesActions';
import Launch from '../../model/launch';
import './launchCard.scss';

interface LaunchCardMatchParams {
    [value: string]: string;

    flight_number: string;
}

interface CardInfoParams {
    name: string;
    value: string | number;
    hide: boolean;
}

const LaunchCard = () => {
    const { flight_number } = useParams<LaunchCardMatchParams>();
    const [launch, setLaunch] = useState<Launch | null>(null);

    useEffect(
        () => getLaunch(),
        [],
    );

    /**
     * Получить сущность полёта
     */
    const getLaunch = () => {
        LaunchesActions.get(flight_number)
            .then((launch: Launch) => setLaunch(launch));
    }

    /**
     * Выводимая информация о полёте
     */
    const cardInfo: CardInfoParams[] = [
        {
            name: 'Название полёта:',
            value: launch?.mission_name,
            hide: !launch?.mission_name,
        },
        {
            name: 'Номер рейса:',
            value: launch?.flight_number,
            hide: !launch?.flight_number,
        },
        {
            name: 'Дата запуска по местному времени:',
            value: moment(launch?.launch_date_local)
                .format('DD.MM.YYYY HH:mm'),
            hide: !launch?.launch_date_local,
        },
        {
            name: 'Название ракеты:',
            value: launch?.rocket?.rocket_name,
            hide: !launch?.rocket?.rocket_name,
        },
        {
            name: 'Детали:',
            value: launch?.details,
            hide: !launch?.details,
        },
    ];

    return (
        <div
            className={'launch-card'}
        >
            <div
                className={'launch-card__header'}
            >
                <h1>
                    Информация о космическом полёте
                </h1>
                <Link
                    className={'launch-card__button-back'}
                    to={'/'}
                >
                    Назад
                </Link>
            </div>
            {
                cardInfo
                    .filter((el: CardInfoParams) => !el.hide)
                    .map((info: CardInfoParams, index: number) => (
                        <div
                            key={index}
                            className={'launch-card__item'}
                        >
                            <h3
                                className={'launch-card__item-name'}
                            >
                                { info.name }
                            </h3>
                            <span
                                className={'launch-card__item-value'}
                            >
                                { info.value }
                            </span>
                        </div>
                    ))
            }
        </div>
    );
}

export default LaunchCard;
