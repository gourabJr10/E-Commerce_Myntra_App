import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import BagSummary from "../src/components/BagSummary"
import BagItem from "../src/components/BagItem"
import { useSelector } from "react-redux"
function Bag () {

  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {      // now i have all the items record which are present in the bagItems
      const itemIndex = bagItems.indexOf(item.id);
      return itemIndex >=0;
})


    return (
      <>
     
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
           {finalItems.map((item) => <BagItem item={item}></BagItem>)}
        </div>
       
         <BagSummary/>

      </div>
    </main>
      
      </>
    )
}

export default Bag