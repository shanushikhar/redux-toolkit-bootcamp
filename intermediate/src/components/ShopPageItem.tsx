import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { updateCart } from "@/redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { RootStore } from "@/redux/store";

export default function ShopPageItem({ data }: { data: EcomItem }) {
  const dispatch = useDispatch();

  const cartData = useSelector((state: RootStore) => state.cartSlice.products);
  console.log("cart ", cartData);

  return (
    <div className="rounded flex flex-col bg-gray-800 p-3 gap-3 justify-between">
      <div className="flex flex-col gap-3 ">
        <img src={data.images[0][0]} alt="" />
        <div className="text-center text-green-400 font-bold">
          ${data.price}
        </div>
        <p className="font-semibold">{data.title}</p>
        <small className="text-gray-500 text-xs">{data.description}</small>
      </div>
      <Button onClick={() => dispatch(updateCart(data))} className="w-full">
        Add to Cart +
      </Button>
    </div>
  );
}
