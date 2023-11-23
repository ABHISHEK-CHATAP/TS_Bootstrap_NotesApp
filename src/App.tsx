import { useState } from "react";
import { Note } from "./models/note.model";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col , Stack} from "react-bootstrap";

import Header from "./components/Header/Header.tsx";
import NotesList from "./components/NotesList/NotesList.tsx";
import CreateNote from "./components/CreateNote/CreateNote.tsx";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "note 1",
      text: "text 1",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  // const [notes, setNotes] = useState< {
  //     id: string;
  //     title: string;
  //     text: string;
  //     color: string;
  //     date: string;
  //   }[]
  // >([
  //    {
  //     id: new Date().toString(),
  //     title: "note 1",
  //     text: "text 1",
  //     color: "#dfdfdf",
  //     date: new Date().toString(),
  //   },
  // ]);

  return (
    <>
      <Header />
      <Container className="mt-3">
      <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        </Container>
<hr/>
     
      <Container>
        <Stack >
            <NotesList notes={notes} setNotes={setNotes} />
          </Stack>
          </Container>

       
    </>
  );
};

export default App;
