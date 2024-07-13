import ShopPageItem from "@/components/ShopPageItem";
import { fetchDataAsyncThunk } from "@/redux/slices/storeSlice";
import { AppDispatch, RootStore } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const storeItems = useSelector(
    (state: RootStore) => state.storeSlice.products
  );
  const shopLoading = useSelector(
    (state: RootStore) => state.storeSlice.loading
  );

  useEffect(() => {
    dispatch(fetchDataAsyncThunk());
  }, []);

  return !shopLoading ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
      {storeItems.map((item) => {
        return <ShopPageItem key={item.id} data={item} />;
      })}
    </div>
  ) : (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      Loading Shop Items...
    </div>
  );
}
