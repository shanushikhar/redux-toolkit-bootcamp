import { FormEvent, useState } from "react";
import {
  useAddNewNotesMutation,
  useFetchNotesQuery,
} from "../redux/slices/api";
import NoteItem from "./components/NoteItem";

function App() {
  const [addNotes, setAddnotes] = useState<string>("");

  const { data } = useFetchNotesQuery();
  const [addNewNotes, { isLoading }] = useAddNewNotesMutation();

  const handleAddNotes = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addNewNotes({ text: addNotes }).unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-3 bg-gray-900 text-white">
      <div className="__header w-full h-20 border border-gray-700 rounded">
        <form
          onSubmit={handleAddNotes}
          className="w-full h-full flex justify-center items-center gap-2"
        >
          <input
            className="p-2 rounded text-cyan-500"
            type="text"
            placeholder="Type Note here"
            value={addNotes}
            onChange={(e) => setAddnotes(e.target.value)}
          />
          <button className="p-2 rounded bg-blue-500" type="submit">
            Add Note
          </button>
        </form>
      </div>
      <div className="__notes grid grid-cols-[repeat(auto-fill, minmax(250px,1fr))] gap-3 p-3">
        {data?.map((item) => (
          <NoteItem key={item.id} text={item.text} itemId={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
