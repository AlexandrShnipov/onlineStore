import React, {Component} from "react";
import s from "./Preloader.module.scss";

class Preloader extends Component {
    render() {
        return (
            <div className={s.isLoadingContainer}>
                <div></div>
            </div>
        )
    }
}

export default Preloader;