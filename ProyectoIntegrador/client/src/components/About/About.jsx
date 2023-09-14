import style from './about.module.css';
import im from '../../assets/im.jpg';

export default function About () {
    return(
        <div className={style.container}>
            <h1>Henry - Integration project</h1>
            <div className={style.desc}>
            <img src={im} alt={im} className={style.image}/>
            <p>

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sapiente tenetur voluptate veritatis illo ipsum quos quas laborum fugiat nesciunt a, libero facilis adipisci, molestias repellat alias quaerat excepturi minima.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, repudiandae! Ipsum laudantium ipsa cumque distinctio exercitationem dolore asperiores enim eligendi molestiae soluta sunt dolor cum cupiditate nemo, expedita dolorum quaerat?</p>
            </div>
        </div>
    )
}