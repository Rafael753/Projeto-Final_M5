import React from "react";
import Logo from "../../assents/img/logo.png";
import style from "../Footer/footer.module.css";

export default () => {
    return (
        <footer>
            <div class={style.rowFlex}>
                <div className={style.logo}>
                    <img src={Logo} className={style.logoimg} />
                    <h1 class={style.colorText}>
                        Projeto criado por GrupoI
                    </h1>
                </div>
            </div>
        </footer>
    );
};
