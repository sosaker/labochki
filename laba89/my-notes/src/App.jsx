// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Button, CardBody, CardFooter, CardHeader, Heading,
         Input, Separator, Textarea, Card, Text, Select, 
         createListCollection, Portal} from "@chakra-ui/react";
import './App.css';
import CreateNoteForm from "./components/CreateNoteForm";
import Note from "./components/Note";
import Filters from "./components/Filters";
import { useEffect } from "react";
import { useState } from "react";
import { fetchNotes, createNote } from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc",
  });

  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes(filter);
      setNotes(notes);

      //console.log(notes);
    };

    fetchData();
  }, [filter]);

  const onCreate = async (note) => {
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }


  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <div className="flex flex-col gap-5">
          <Input placeholder="Поиск" />
          <Filters filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <ul className="flex flex-col gap-5 w-1/2">
        {notes.map((n) => (
          <li key={n.id}>
            <Note
              title={n.title}
              description={n.description}
              createdAt={n.createdAt}
            />
          </li>
        ))}

      </ul>
      
    </section>
  );
}

export default App;
