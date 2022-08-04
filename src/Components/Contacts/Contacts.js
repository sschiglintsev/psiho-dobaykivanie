import React from 'react';
import style from "../BlockTwo/BlockTwo.module.css";

export const Contacts = () => {
    return (
        <div className={style.blockOneContainer}>
            <div>
                <div className={style.titlePage}>
                    <h2>
                        Записаться
                    </h2>
                </div>
                <div>
                    <input placeholder='Имя'/>
                    <input placeholder='Телефон'/>
                    <button>ЗАПИСАТЬСЯ НА ПРАКТИКУ</button>
                </div>
            </div>
            <div>
                <div className={style.titlePage}>
                    <h2>
                        Место проведения в г.Уфа
                    </h2>
                </div>
                <div>
                    <div>
                        <div>
                            ТЕЛЕФОН
                            8 917 345 06 07
                        </div>
                        <div>
                            АДРЕС
                            г.Уфа, ул.Аксакова
                        </div>
                    </div>
                    <div>
                        map
                    </div>
                </div>
            </div>
        </div>
    );
};
