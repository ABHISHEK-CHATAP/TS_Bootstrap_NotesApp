import * as React from "react";
import { Note } from "../../models/note.model";
import Notes from "../Notes/Notes";

interface INotesListProps {
  notes: Note[],
  setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const NotesList: React.FunctionComponent<INotesListProps> = ({ notes , setNotes}) => {
const handleDelete=(id:string) => {
// console.log("handleDeletee : " + id);
setNotes(notes.filter(note => note.id !== id));
}

  const renderNotes = ():JSX.Element[] => {
    return notes.map((note) => {
      return (<Notes key={note.id} Note={note} handleDelete= {handleDelete}/>)
    });
  };

  return (
    <>
      <h2 className="">Notes</h2> 
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;
