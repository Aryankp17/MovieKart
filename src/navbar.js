
import { Component } from "react";
import styles from "./nav.module.css"
export default class Navbar extends Component{
    render(){
        const{cartCount}= this.props;
        return(
            <div className={styles.nav}>
                <div className={styles.title}>Movie Kart</div>
                <div className={styles.iconContainer}>
                    <img alt="icon" src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" className={styles.icon}/>
                    <span className={styles.count}>{cartCount}</span>
                </div>
                
            </div>
        )
    }
}