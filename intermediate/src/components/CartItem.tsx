import { MdDelete } from "react-icons/md";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";

export default function CartItem({ data }: { data: EcomItem }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded p-3 flex justify-between items-center w-full gap-3 bg-slate-900">
      <div className="__item_info flex gap-2">
        <img className="w-20 shrink-0 rounded" alt="" />
        <div className="flex justify-start items-start flex-col gap-1">
          <b className="font-bold">{data.title}</b>
          <p className="bg-white p-3 py-1 rounded text-green-700 w-fit font-bold">
            ${data.price}
          </p>
        </div>
      </div>
      <Button size="icon" className="shrink-0" variant="destructive">
        <MdDelete size={20} />
      </Button>
    </div>
  );
}
