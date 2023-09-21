import style from './about.module.css';
import im from '../../assets/im.jpg';
import henry from '../../assets/henry.jpg';
export default function About () {
    return(
        <div className={style.container}>
            <h1
                className={style.title}
            >Henry - Integration project</h1>
            <div className={style.desc}>
            <img src={im} alt={im} className={style.image}/>
            <p>

            Hola, mi nombre es Axel Choque, actualmente estoy estudiando en la plataforma de Henry, aplicando los mis conocimientos adquiridos hasta ahora hice esta página web. Usa ReactJS, NodeJS, CSS y Redux.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, repudiandae! Ipsum laudantium ipsa cumque distinctio exercitationem dolore asperiores enim eligendi molestiae soluta sunt dolor cum cupiditate nemo, expedita dolorum quaerat?</p>
            </div>
            <img src={henry} alt={henry} className={style.henry}/>
        </div>
    )
}