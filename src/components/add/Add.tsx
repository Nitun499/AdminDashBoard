import { GridColDef } from '@mui/x-data-grid'
import './Add.scss'

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  



const Add = (props:Props) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        //add new item
        // mutation.mutate();
        props.setOpen(false)
      };
  return (
    <div className='adduser'>
      <div className="modal">
        <span onClick={()=>props.setOpen(false)} className="close">X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit} >
            {props.columns.filter(item=>item.field!=='id' && item.field!=='img')
            .map(column=>(
                <div className="item" key={column.field}>
                    <label>{column.headerName}</label>
                    <input type={column.type} placeholder={column.field} />
                </div>
            ))}
            <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Add
