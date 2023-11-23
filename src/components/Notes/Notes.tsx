import * as React from 'react';
import { Note } from '../../models/note.model';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap"


//tsrsfc = snippet of ts react FC

interface INotesProps {
    Note : Note,
    handleDelete : (id:string) => void
}

const Notes: React.FC<INotesProps> = ({Note, handleDelete}) => {
  return (
    <>
     <div className='mb-3'>
           <Card  style={{backgroundColor: Note.color}}>
            <Card.Body>
                <Card.Title>{Note.title}</Card.Title>
                <Card.Text>{Note.text}</Card.Text>
                <Card.Subtitle className="text-muted">{Note.date}</Card.Subtitle>
                 <Button className="mt-3" variant="danger" onClick={()=>handleDelete(Note.id)}>Delete</Button>     
            </Card.Body>
           </Card>

        </div>    
    </>
  );
};

export default Notes;
