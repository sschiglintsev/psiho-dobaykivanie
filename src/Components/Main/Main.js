import style from './Main.module.css'
import logo from '../../asset/img/logo.png'
import photoMain from '../../asset/img/foto1.png'
import {BsFillTelephoneFill} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";

export const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <div className={style.desGroup}>
                    <span>Мастер по добаюкиванию,</span>
                    <span>переринотальный психолог</span>
                </div>
                <div className={style.contactLocation}>
                    <span>г.Уфа, Улица Аксакова 81/1</span>
                    <span>Ежедневно с 9:00 до 20:00</span>
                </div>
                <div className={style.contactTelEmail}>
                    <div className={style.iconsGroup}>
                        <div>
                            <BsFillTelephoneFill color='white' size='1.3em'/>
                        </div>
                        <div>
                            <BsWhatsapp color='white' size='1.3em'/>
                        </div>
                        <div>
                            <TbBrandTelegram color='white' size='1.3em'/>
                        </div>
                    </div>
                    <div className={style.telEmailGroup}>
                        <a className={style.communication} href="tel:+74951234567" >
                            +7 917 345 06 07
                        </a>
                        <a target="_blank" className={style.communication} href="tel:+74951234567" >
                            WhatsApp
                        </a>
                        <a target="_blank" className={style.communication} href="https://t.me/jultava" >
                            Telegram
                        </a>

                    </div>
                </div>
            </div>
            <div className={style.mainGroup}>
                <div className={style.text}>
                    <div>
                        <h1 className={style.h1Title}>ДОБАЮКИВАНИЕ</h1>
                        <div className={style.spanTitle}>
                            <span>ПО МЕТОДУ ВИКТОРИИ АВЕРКИЕВОЙ</span>
                        </div>
                    </div>
                    <div className={style.textHeader}>
                        <h2 className={style.h2TextHeader}>это телелесная практика, которая</h2>
                    </div>
                    <div className={style.block1}>
                        <span>Даёт возможность перепрожить</span>
                        <span>своё детство</span>
                    </div>
                    <div className={style.block1}>
                        <span> Создать опору в себе, заполнить</span>
                        <span>дефицит материнской любви</span>
                    </div>
                    <div className={style.block1}>
                        <span>Укрепить доверие миру и другим</span>
                        <span>людям</span>
                    </div>
                    <div>
                        <a target="_blank" href={'https://api.whatsapp.com/send?phone=79173450607&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%94%D0%BE%D0%B1%D0%B0%D1%8E%D0%BA%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'}>
                            <div className={style.block2}>
                                <span>ЗАПИСАТЬСЯ НА ПРАКТИКУ</span>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href={'https://docs.google.com/spreadsheets/d/19s9MjhX7Brrq3bzgL1vhnuUFGUDOjMbyaIrm-Jld_sA/edit?usp=sharing'}>
                            <div className={style.timetable_watch}>
                                <span>Смотреть расписание</span>
                            </div>
                        </a>
                    </div>

                </div>
                <div>
                    <img src={photoMain}/>
                </div>
            </div>
        </div>
    );
};

