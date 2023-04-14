import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cuvjybvzmskhvdobddsj.supabase.co"
const supabaseApiKey = `${process.env.SUPABASE_API_KEY}`  // For the 
const supabase = createClient(supabaseUrl, supabaseApiKey);

function App() {



  let [newNotesArray,setNewNotesArray] = useState([])
  let notesArray



  useEffect(() => {
    
  }, [])
  

  let localnotes = localStorage.getItem("notes")
  if (localnotes === null) {
    notesArray = []

  } else {
    notesArray = JSON.parse(localnotes)
  }



  async function fetchNotes() {
    const { data } = await supabase.from("notes").select();
    console.log(data);
    return data
  }


  // Using the notes hook to constanly monitoring the state
  const [notes, setNotes] = useState(notesArray);

  function addtoNote(note) {
    setNotes((pre) => {
      notesArray = [...pre, note];
      localStorage.setItem("notes", JSON.stringify(notesArray));
      return notesArray
    });
  }

  function onDeleteItem(itemIndex) {
    setNotes(() => {
      notesArray = notes.filter((element, index) => {
        return itemIndex !== index;
      });
      localStorage.setItem("notes", JSON.stringify(notesArray));
      return notesArray


    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addtoNote} />

      {newNotesArray.map((element, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={element.title}
            content={element.content}
            deleteItem={onDeleteItem}
          />
        );
      })}
     

      <Footer />
    </div>
  );
}

export default App;
