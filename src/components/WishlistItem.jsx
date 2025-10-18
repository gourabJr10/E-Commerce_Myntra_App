import { IoHeartDislikeSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { wishlistActions } from "../store/wishlistSlice";

function WishlistItem ({item}) {

  const dispatch = useDispatch();

  const handleRemoveHeartBtn = () => {
      dispatch(wishlistActions.removeFromWishlist(item.id));
  }


    return (
       <>
                 <div className="wishListItem-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating?.stars} ⭐ | {item.rating?.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
          <div className="not-selected">
            <span onClick={handleRemoveHeartBtn}><IoHeartDislikeSharp /></span>
          </div>
        </div>
      </div>
       </>
    )
}

export default WishlistItem;