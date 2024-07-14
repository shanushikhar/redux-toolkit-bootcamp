import { useState } from "react";
import {
  useDeleteNewNotesMutation,
  useUpdateNotesMutation,
} from "../../redux/slices/api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function NoteItem({
  text,
  itemId,
}: {
  text: string;
  itemId: string | undefined;
}) {
  const [deleteNotes, { isLoading }] = useDeleteNewNotesMutation();
  const [updateNote, {}] = useUpdateNotesMutation();

  const [editNote, setEditNote] = useState<NoteItem["text"]>(text);

  const deleteNoteHandler = async () => {
    await deleteNotes(itemId).unwrap();
  };

  const saveEditedNotehander = async () => {
    await updateNote({ text: editNote, id: itemId }).unwrap();
  };

  return (
    <div className="flex gap-3 justify-between rounded border border-slate-700 p-3">
      <p>{text}</p>
      <div className="__btn_container flex flex-col gap-1"></div>
      <button
        onClick={() => deleteNoteHandler()}
        className="bg-red-500 text-white p-2 rounded h-fit disabled:bg-slate-500"
        disabled={isLoading}
      >
        {isLoading ? "Deleting.." : "Delete"}
      </button>
      {/* <button className="bg-green-500 text-white p-2 rounded h-fit">
        Edit
      </button> */}
      <AlertDialog>
        <AlertDialogTrigger className="bg-green-500 text-white p-2 rounded h-fit">
          Edit
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Do you want to edit this note?</AlertDialogTitle>
          </AlertDialogHeader>
          <input
            className="border border-gray-600"
            type="text"
            placeholder="type edited note here"
            value={editNote}
            onChange={(e) => setEditNote(e.target.value)}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={saveEditedNotehander}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default NoteItem;
