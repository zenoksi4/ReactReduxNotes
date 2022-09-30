import {useState} from 'react'
import AddNoteButton from "./components/buttons/addnotebutton/AddNoteButton";
import ModalAddNote from './components/modal/ModalAddNote/ModalAddNote';
import TableNotesActive from "./components/tablelist/tablenotes/tablenotesactive/TableNotesActive";
import TableNotesArchive from './components/tablelist/tablenotes/tablenotesarchive/TableNotesArchive';
import TableSummary from './components/tablelist/tablesummary/TableSummary';

function App() {
  const [modalActive, setModalActive] = useState(false)

  return (
    <div className="grid place-items-center">
      <TableNotesActive/>
      <AddNoteButton setActive={setModalActive}/>
      <ModalAddNote active={modalActive} setActive={setModalActive}/>
      <TableNotesArchive/>
      <TableSummary/>
    </div>
  );
}

export default App;
