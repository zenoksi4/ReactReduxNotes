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

    let datesContent = note.content?.match(/(\d+)([\/.-])(\d+)([\/.-])(\d+)/g)?.join(',');



    return(
        <tr className='border-b'>
            <td className="flex items-center ">
                <div className="p-3 bg-emerald-600 rounded-full m-3 text-slate-50">
                    {note.category === 'Task' && <i className="fa-solid fa-shop"></i>}
                    {note.category === 'Random Thought' && <i className="fa-regular fa-lightbulb"></i>}
                    {note.category === 'Idea' && <i className="fa-solid fa-head-side-virus"></i>}
                </div>
                {note.title}
            </td>

            <td className='py-3 px-6'>{note.created}</td>

            <td className='py-3 px-6'>{note.category}</td>

            <td className="py-3 px-6 max-w-[200px] truncate">{note.content}</td>

            <td className='py-3 px-6'>{datesContent}</td>

            <td className="py-3 px-6 flex ">

            {!isArchive && <ActiveItemIcons note = {note}/>}
            
            {isArchive && <ArchiveItemIcons note = {note}/>}

            </td>

        </tr>
    );
}

export default TableNotesItem;