import './AddNoteButton.css'

interface AddNoteButtonProps{
    setActive: (bol: boolean) => void,
    children?: React.ReactNode,

}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive, children}) => {

    return(
            <div className='wrap'>
                <a className="add-note__btn" onClick={() => setActive(true)}>
                    {children}
                </a>
            </div>
    );
}


export default AddNoteButton;