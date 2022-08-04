import React from "react";
import style from './App.module.css';
import {Main} from "./Components/Main/Main";
import {BlockOne} from "./Components/BlockOne/BlockOne";
import {BlockTwo} from "./Components/BlockTwo/BlockTwo";
import {Contacts} from "./Components/Contacts/Contacts";


function App() {
    return (
        <div className={style.app}>
            <Main/>
            <BlockOne/>
            <BlockTwo/>
            <Contacts/>
        </div>
    );
}

export default App;
