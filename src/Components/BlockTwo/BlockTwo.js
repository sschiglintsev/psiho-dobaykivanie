import React from 'react';
import style from './BlockTwo.module.scss'

export const BlockTwo = () => {
    return (
        <div className={style.blockOneContainer}>
            <div className={style.titlePage}>
                <h2>
                    Варианты участия для вас:
                </h2>
            </div>
            <div className={style.blockContainer}>
                <div className={style.block3}>
                    <div className={style.item}>
                        <h3>
                            Приходите в роли ребенка,
                            если хотите:
                        </h3>
                        <span>
                            Восполнить детскую нехватку маминой любви
Вернуть себе базовое чувство доверия к миру и людям
Исцелить глубокие травмы отверженности, непринятости
Поверить в свои силы
                        </span>
                    </div>
                </div>
                <div className={style.blockGroup}>
                    <div className={style.block4}>
                        <div className={style.item}>
                            <h3>
                                Приходите в роли мамы,
                                если хотите:
                            </h3>
                            <span>
                            Любить своего ребенка безусловно
Почувствовать контакт и единение с ребенком
Осознать как это просто быть рядом
                            </span>
                        </div>
                    </div>
                    <div className={style.block5}>
                        <div className={style.item}>
                            <h3>
                                Приходите в роли папы,
                                если хотите:
                            </h3>
                            <span>
                                Узнать о том, какой вы папа и как можно вырасти в своих качествах
Развивать чуткость и мужественность одновременно
Учиться быть папой и оставаться с ребёнком, несмотря ни на что
Открыть сердце и разрешить себе чувствовать.
Стать более живым
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};