import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { IoBagAdd } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { wishlistActions } from "../store/wishlistSlice";
import { BsHeartbreakFill } from "react-icons/bs";
function Homeitem ({item}) {

     const dispatch = useDispatch();

   const handleAddToBagBtn = () => {
       dispatch(bagActions.addToBag(item.id));
   }

   const handleRemoveBtn = () => {
      dispatch(bagActions.removeFromBag(item.id));
   }

   const bagItems = useSelector((store) => store.bag);    // bag is the array of id
   const idFound = bagItems.indexOf(item.id) >=0;   // it returns either true(if present) or false(if not present)
  
    const handleHeartBtn = () => {
        dispatch(wishlistActions.addToWishlist(item.id));
    }

    const handleRemoveFavouriteBtn = () => {
        dispatch(wishlistActions.removeFromWishlist(item.id));
    }

     const wishlist = useSelector((store) => store.wishlist);
     const itemIdFound = wishlist.indexOf(item.id) >=0;

    return (

       <>
           <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
         
      </div>
        {itemIdFound ? (
        <button type="button" class="btn btn-add-bag btn-warning" onClick={handleRemoveFavouriteBtn}><BsHeartbreakFill />Remove From Wishlist</button> ) :  (
             <button type="button" class="btn btn-add-bag btn-info" onClick={handleHeartBtn}><BsFillBox2HeartFill />Add to Wishlist</button>
        )
  }
       
    {idFound ? (
       <button type="button" class="btn btn-add-bag btn-danger" onClick={handleRemoveBtn}><IoBagRemove />Remove</button>
    ) : (
       <button type="button" class="btn btn-add-bag btn-success" onClick={handleAddToBagBtn}><IoBagAdd />Add to Bag</button>
    )
  }
      
 </div>
       </>
    )
}

export default Homeitem;

/*
<div className="favourite">
          <span onClick={handleHeartBtn}><BsFillBox2HeartFill /></span>
          </div> */