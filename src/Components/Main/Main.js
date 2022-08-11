import style from './Main.module.css'
import logo from '../../asset/img/logo.png'
import photoMain from '../../asset/img/foto1.png'
import {BsFillTelephoneFill} from "react-icons/bs";
import {FiMail} from "react-icons/fi";

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
                    г.Уфа, Улица Аксакова 81/1
                </div>
                <div className={style.contactTelEmail}>
                    <div className={style.iconsGroup}>
                        <div>
                            <BsFillTelephoneFill color='white' size='1.3em'/>
                        </div>
                        <div>
                            <FiMail color='white' size='1.3em'/>
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
                <div className={style.text}>
                    <div>
                        <h1 className={style.h1Title}>ДОБАЮКИВАНИЕ</h1>
                        <div className={style.spanTitle}>
                            <span >ПО МЕТОДУ ВИКТОРИИ АВЕРКИЕВОЙ</span>
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
                    <div className={style.block2}>
                        <span>ЗАПИСАТЬСЯ НА ПРАКТИКУ</span>
                    </div>
                </div>
                <div>
                    <img src={photoMain}/>
                </div>
            </div>
        </div>
    );
};

