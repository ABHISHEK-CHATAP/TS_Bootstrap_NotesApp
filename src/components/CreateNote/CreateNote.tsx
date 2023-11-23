import React, {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap"
import { Note } from '../../models/note.model';
import {Alert} from "react-bootstrap"

interface ICreateNoteProps {
    notes: Note[],
    setNotes : React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({notes, setNotes}) => {

    const [error , setError] = useState<string>("");
   
    const titleRef = useRef<HTMLInputElement | null>(null);
    const textRef = useRef<HTMLTextAreaElement | null>(null);
    const colorRef = useRef<HTMLInputElement | null>(null);

     // this function is not going to return anything i'm gonna add void here
       const HandleSubmit = (e : React.FormEvent<HTMLFormElement>): void=>{
           e.preventDefault();
           if(titleRef.current?.value == "" || textRef.current?.value == ""){
            return setError("All feilds are mandatory")
           }
           setError("");
           setNotes([...notes, {
            id : new Date().toString(),
            title : (titleRef.current as HTMLInputElement).value,
            text : (textRef.current as HTMLTextAreaElement).value,
            color: (colorRef.current as HTMLInputElement).value,
            date : new Date().toString(),
           }])

        //    (titleRef.current as HTMLInputElement).value == "";
        //    (textRef.current as HTMLTextAreaElement).value == " " ;
        //    (colorRef.current as HTMLInputElement).value == "" ;
       }


  return(
    <>
    <h2>Create Notes</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form className='mt-3 mb-3' onSubmit={(e)=> HandleSubmit(e)}>
       <Form.Group className='mb-3' controlId='formBasicTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Enter Title for note' ref={titleRef}/>
       </Form.Group>

       <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Text</Form.Label>
        <Form.Control type='text' placeholder='Enter your notes' as="textarea" rows={3} ref={textRef}/>
       </Form.Group>

       <Form.Group className='mb-3' >
        <Form.Label htmlFor='colorInput'>Notes Color 🖼 </Form.Label>
        <Form.Control type='color' id='colorInput' defaultValue="#dfdfdf" title='choose ur color' ref={colorRef}/>
       </Form.Group>
   <Button type="submit" variant="primary">Submit</Button>
    </Form>
    


    
    </>
  ) ;
};

export default CreateNote;
