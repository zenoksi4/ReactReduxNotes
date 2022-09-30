interface AddNoteButtonProps{
    setActive: (bol: boolean)=> void,
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({setActive}) => {

    return(
            <div>
                <div className="py-5 px-11 flex m-5 rounded-xl leading-4 text-center
                 uppercase font-bold text-white ring-emerald-600 
                 shadow-[inset_0_0_40px_40px_rgb(5,150,105)]
                    hover:shadow-[inset_0_0_10px_0_rgb(5,150,105),0_0_10px_4px_rgb(5,150,105)] hover:text-emerald-600 hover:bg-inherit cursor-pointer transition-shadow" onClick={() => setActive(true)}>
                    add note
                </div>
            </div>
    );
}


export default AddNoteButton;