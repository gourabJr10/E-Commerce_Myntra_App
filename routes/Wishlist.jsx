import { useSelector } from "react-redux";
import WishlistItem from "../src/components/WishlistItem";

function Wishlist() {



    const wishlist = useSelector((store) => store.wishlist);
    const items = useSelector((store) => store.items);

    const finalItems = items.filter((item) => {
        const itemIndex = wishlist.indexOf(item.id);
        return itemIndex >=0;
    })
    
  return (
    <>
      <div className="wishlistItems-container">
       {finalItems.map((item) => <WishlistItem item={item}></WishlistItem>)};
  </div>
    </>
  );
}

export default Wishlist;
