import React from 'react';
import style from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <div className={style.blockOneContainer}>
            <div>
                <div className={style.titlePage}>
                    <h2>
                        Контакты
                    </h2>
                </div>
                <div className={style.box}>
                    <div>
                        <h3>
                            Бронирование по телефону и мессенджерах:
                        </h3>
                    </div>
                    <div className={style.boxtel}>
                        <a className={style.tel} href="tel:+74951234567">
                            +7 917 345 06 07
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="tel:+74951234567">
                            <div className={style.box1}>
                                WhatsApp
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="tel:+74951234567">
                            <div className={style.box2}>
                                Telegram
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="https://vk.com/jultava">
                            <div className={style.box3}>
                                VK
                            </div>
                        </a>
                    </div>
                    <div>
                        <div className={style.boxPlaceTitle}>
                            <h3>
                                Место проведения
                            </h3>
                        </div>
                        <div className={style.boxPlaceText}>
                            г.Уфа, Верхнеторговая площадь 4, этаж 6, студия 624
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.boxFooter}>
                JUJA - студия развития женщины
            </div>
        </div>
    );
};
