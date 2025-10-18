import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemActions } from "../store/itemSlice";
function FetchItems () {

  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  

  useEffect(() => {
  if(fetchStatus.fetchDone) return;  // it means fetching is complete...we don't have to do anything just return...

  const controller = new AbortController();
  const signal = controller.signal;
  
  dispatch(fetchStatusActions.markFetchingStarted());   // currentlyFetching => true;
  fetch("http://localhost:8080/items",{signal})
  .then((res) => res.json())
  .then(({items}) => {
     dispatch(fetchStatusActions.markfetchDone());      // markFetchDone => true;
     dispatch(fetchStatusActions.markFetchingEnded());    // currentlyFetching => false;
      dispatch(itemActions.addInitialItems(items[0]));
  })
  
  return () => {
     controller.abort();
  }

  },[fetchStatus])

   return (
     <>

     </>
   );
}

export default FetchItems;