import React from 'react';
import style from './BlockOne.module.scss'
import {TbPoint} from "react-icons/tb";

export const BlockOne = () => {
    return (
        <div className={style.blockOneContainer}>
            <div className={style.titlePage}>
                <h2>
                    Для чего необходима практика:
                </h2>
            </div>
            <div className={style.block2}>
                <div className={style.item}>
                    <TbPoint color='white' size='1.3em'/>
                    <span className={style.itemText}>
                    Добаюкивание - это дополучение родительской любви, признания, физической ласки во взрослом возрасте.
                </span>
                </div>
                <div className={style.item}>
                    <TbPoint color='white' size='1.3em'/>
                    <span className={style.itemText}>
                    Взрослый человек получает возможность добрать то, что не смог получить в детстве. Мы восполняем дефицит любви того времени - СЕЙЧАС.
                </span>
                </div>
                <div className={style.item}>
                    <TbPoint color='white' size='1.3em'/>
                    <span className={style.itemText}>
                    Это очень бережная практика. Мягкая и при этом невероятно глубокая. Мы как будто аккуратно вплываем в начало своей истории (зачатие, внутриутробное состояние, рождение, первый год жизни) и мягко трансформируем свой опыт того времени.
                </span>
                </div>
                <div className={style.item}>
                    <TbPoint color='white' size='1.3em'/>
                    <span className={style.itemText}>
                    В этой практике есть мама, любящая безусловно (ведь это простая женщина, с которой до практике вы даже не знакомы, она просто пропускает поток безусловной любви через себя) напитывающая, обеспечивающая безопасность, дающая пищу и остающаяся рядом что бы ни произошло.
                </span>
                </div>
                <div className={style.item}>
                    <TbPoint color='white' size='1.3em'/>
                    <span className={style.itemText}>
                    В этом и есть главный целительный эффект добаюкивания. «МЕНЯ ЛЮБЯТ ПРОСТО ТАК И МАМА ВСЕГДА РЯДОМ, как бы я себя ни вела, МАМА РЯДОМ».
                </span>
                </div>
            </div>
        </div>
    );
};
