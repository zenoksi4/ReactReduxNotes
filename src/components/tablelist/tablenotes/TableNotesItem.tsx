import './TableNotesItem.css'
import { ActiveItemIcons, ArchiveItemIcons } from './TableNotesItemIcons';

interface TableNotesItemProps{
    isArchive: boolean,
    note:{
    id:string,
    title: string,
    created: string,
    category: string,
    content: string,
    }
}

const TableNotesItem: React.FC<TableNotesItemProps> = ({isArchive, note}) => {
    let datesContent = note.content.match(/\d{2}([.-])\d{2}\1\d{4}/g)?.join(',');

    return(
        <tr>
            <td className="note-title">
                <div className="icon-title">
                    {note.category === 'Task' && <i className="fa-solid fa-shop"></i>}
                    {note.category === 'Random Thought' && <i className="fa-regular fa-lightbulb"></i>}
                    {note.category === 'Idea' && <i className="fa-solid fa-head-side-virus"></i>}
                </div>
                {note.title}
            </td>

            <td>{note.created}</td>

            <td>{note.category}</td>

            <td className="text-ellipsis">{note.content}</td>

            <td>{datesContent}</td>

            <td className="icons">

            {!isArchive && <ActiveItemIcons note = {note}/>}
            
            {isArchive && <ArchiveItemIcons note = {note}/>}

            </td>

        </tr>
    );
}

export default TableNotesItem;