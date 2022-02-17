import {useContext} from 'react'
import FavoritesContext from '../../store/favorites-context';
import Card from "../ui/Card";
import classes from "./Meetupitem.module.css";

function Meetupitem({ image, title, address, description ,id}) {

  const favoriesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoriesCtx.itemIsFavorite(id)

  function toggleFavoritesStatusHandler(){

    if(itemIsFavorite){
      favoriesCtx.removeFavorite(id);
    }else{
      favoriesCtx.addFavorite({
        id:id,
        title:title,
        description:description,
        image:image,
        address:address
      })
    }

  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? "Remove from Favorites" :"To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default Meetupitem;
