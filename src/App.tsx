import {useState} from 'react'
import "./App.css";
import AddNoteButton from "./components/buttons/addnotebutton/AddNoteButton";
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import TableNotesActive from "./components/tablelist/tablenotes/tablenotesactive/TableNotesActive";
import TableNotesArchive from './components/tablelist/tablenotes/tablenotesarchive/TableNotesArchive';

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="container">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}/>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
      <TableNotesArchive/>
    </div>
  );
}

export default App;
