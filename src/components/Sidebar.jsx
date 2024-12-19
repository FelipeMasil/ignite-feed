import styles from './Sidebar.module.css';

import { PencilLine } from '@phosphor-icons/react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>

            <img 
            className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=40&w=500" 
            />

            <div className={styles.profiles}>

                <img
                className={styles.avatar}
                 src="https://avatars.githubusercontent.com/u/45322010?v=4" 
                 />

                <strong>Felipe Manoel</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}