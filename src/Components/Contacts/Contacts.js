import React from 'react';
import style from "./Contacts.module.scss";

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
                    <div className={style.ttitleText}>
                        <h3>
                            Бронирование по телефону и мессенджерах:
                        </h3>
                    </div>
                    <div className={style.boxtel}>
                        <a className={style.tel} href="tel:+79173450607">
                            +7 917 345 06 07
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="https://api.whatsapp.com/send?phone=79173450607">
                            <div className={style.box1}>
                                WhatsApp
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" className={style.communication} href="https://t.me/jultava">
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
                            г.Уфа
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
