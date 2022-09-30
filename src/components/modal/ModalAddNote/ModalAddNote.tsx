import Modal from '../Modal';
import {useState} from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { addNote } from '../../../store/noteSlice';
import ModalFormWrapper from '../ModalFormWrapper';

interface AddNoteModalProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
}

const ModalAddNote: React.FC<AddNoteModalProps> = ({active, setActive}) => {
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('Task')
    const [content, setContent] = useState('')
    const [valid, setValid] = useState('')

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        setValid('')

        if(title.trim().length === 0) {
            setValid('please enter valid fields')
            return
        }

        dispatch(addNote({title, category, content}));

        setTitle('');
        setCategory('Task');
        setContent('');
        setActive(false);
        
    }

    return(
        <Modal active={active} setActive={setActive}>
            <ModalFormWrapper>
                <h1 className='text-center text-4xl font-bold'>Add Note</h1>
                {valid && <span className='text-red-600 font-bold border-b-2 border-red-600'>{valid}</span>}

                <form action="" onSubmit={(event) => (handleSubmit(event))}>
                    <label htmlFor="">Title</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b' type="text" value={title} onChange={(e) => {setTitle(e.target.value); setValid('')}}/><br/>

                    <label htmlFor="">Category</label><br/>
                    <select className='text-black rounded-lg bg-transparent cursor-pointer border-b-2' itemType="radio" value={category} onChange={(e) => (setCategory(e.target.value))}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select><br/>

                    <label htmlFor="">Note</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b'   type="text" value={content} onChange={(e) => {setContent(e.target.value); setValid('')}} /><br/>

                    <input type="submit" className='p-4 font-bold text-white ring-emerald-600 
                        shadow-[inset_0_0_40px_40px_rgb(5,150,105)]
                        hover:shadow-[inset_0_0_10px_0_rgb(5,150,105),0_0_10px_4px_rgb(5,150,105)] 
                        hover:text-gray-200 hover:bg-inherit cursor-pointer transition-shadow w-full'/><br/>
                    
                </form>
            </ModalFormWrapper>
        </Modal>
    );  
}

export default ModalAddNote;