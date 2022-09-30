
interface TableProps{
    children?: React.ReactNode
}

const Table: React.FC<TableProps> = ({children}) => {

    return(
        <table className='table-auto my-6 text-2xl shadow-md rounded-md truncate '>

            {children}
        </table>
    );
}


export default Table;