import style from './Main.module.css'
import logo from '../../asset/img/logo.png'
import foto from '../../asset/img/foto1.png'
import {BsFillTelephoneFill} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

export const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={style.header}>
                <div className={style.logo}>
                    <img src={logo}/>
                </div>
                <div className={style.deskriptor}>
                    <span>Мастер по добаюкиванию,</span>
                    <span>переринотальный психолог</span>
                </div>
                <div className={style.contactAdress}>
                    г.Уфа, Улица Аксакова 81/1
                </div>
                <div className={style.contactTelEmail}>
                    <div className={style.iconsGroup}>
                        <div>
                            <BsFillTelephoneFill color='white' size = '1em'/>
                        </div>
                        <div>
                            <FiMail color='white' size = '1em'/>
                        </div>
                    </div>
                    <div className={style.telEmailGroup}>
                        <span>+7 917 345 06 07</span>
                        <span>jultava@inbox.ru</span>
                        <span>Ежедневно с 9:00 до 20:00</span>
                    </div>
                </div>
            </div>
            <div className={style.mainGroup}>
                <div>
                    <div>
                        <h1>Добаюкивание</h1>
                    </div>
                    <div>
                        <h3>это телелесная практика, которая</h3>
                    </div>
                    <div className={style.block1}>
                            <h3>
                                Даёт возможность перепрожить
                                своё детство
                            </h3>
                        </div>
                        <div className={style.block1}>
                            <h3>
                                Создать опору в себе, заполнить
                                дефицит материнской любви
                            </h3>
                        </div>
                        <div className={style.block1}>
                            <h3>
                                Укрепить доверие миру и другим
                                людям
                            </h3>
                        </div>
                        <div className={style.block2}>
                            <h3>
                                Укрепить доверие миру и другим
                                людям
                            </h3>
                        </div>
                </div>
                <div>
                    <img src={foto}/>
                </div>
            </div>
        </div>
    );
};

