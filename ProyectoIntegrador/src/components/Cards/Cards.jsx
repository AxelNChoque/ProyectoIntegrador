import Card from '../Card/Card';
import style from './cards.module.css';

export default function Cards({characters, onClose}) {
   return( 
      characters.length ? <div className={style.cardContainer}>
      {characters.map(character => {
         return <Card key={character.id} character={character} onClose={onClose}></Card>
      })}
      </div> : null
      );
}
