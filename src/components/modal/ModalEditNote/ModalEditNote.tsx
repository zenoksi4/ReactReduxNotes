import Modal from '../Modal';
import { useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { editNote } from '../../../store/noteSlice';
import ModalFormWrapper from '../ModalFormWrapper';


interface ModalEditNoteProps{
    active: boolean,
    setActive: (bol: boolean)=> void,
    note:{
        id:string,
        title: string,
        created: string,
        category: string,
        content: string,
    }
}

const ModalEditNote: React.FC<ModalEditNoteProps> = ({active, setActive, note}) => {
    const dispatch = useAppDispatch();
    const id = note.id;
    const created = note.created;

    const [title, setTitle] = useState(note.title)
    const [category, setCategory] = useState(note.category)
    const [content, setContent] = useState(note.content)
    const [valid, setValid] = useState('')

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log(note);
        setValid('');

        if(title.trim().length === 0 && content.trim().length === 0) {
            setValid('please enter valid fields')
            return
        }

        dispatch(editNote({id, title, created, category, content}));

        setTitle('');
        setCategory('Task');
        setContent('');
        setActive(false);
    }

    return(
        <Modal active={active} setActive={setActive}>
            <ModalFormWrapper>
                <h1 className='text-center text-4xl font-bold'>Edit Note</h1>
                {valid && <span>{valid}</span>}

                <form action="" onSubmit={(event) => (handleSubmit(event), {once: true})}>
                    <label htmlFor="">Title</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b' type="text" value={title} onChange={(e) => (setTitle(e.target.value), {once: true})}/><br/>

                    <label htmlFor="">Category</label><br/>
                    <select className='text-black rounded-lg bg-transparent cursor-pointer border-b-2' itemType="radio" value={category} onChange={(e) => (setCategory(e.target.value), {once: true})}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select><br/>

                    <label htmlFor="">Note</label><br/>
                    <input className='mb-4 w-full bg-transparent border-b' type="text" value={content} onChange={(e) => (setContent(e.target.value), {once: true})} /><br/>

                    <input type="submit" className='p-4 font-bold text-white ring-emerald-600 
                        shadow-[inset_0_0_40px_40px_rgb(5,150,105)]
                        hover:shadow-[inset_0_0_10px_0_rgb(5,150,105),0_0_10px_4px_rgb(5,150,105)] 
                        hover:text-gray-200 hover:bg-inherit cursor-pointer transition-shadow w-full'/><br/>
                    
                </form>
            </ModalFormWrapper>
        </Modal>
    );  
}

export default ModalEditNote;