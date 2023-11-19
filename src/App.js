import { useState ,useEffect} from "react";
import "./App.css";
import Listitem from "./component/Listitem";
import Inputitem from "./component/Inputitem";
import { taskcontext } from "./component/Taskcontext";

function App() {
  var todayDate = new Date();
  const str = todayDate.toLocaleDateString();

  const [taskName,setTaskName]=useState('');
  const [taskStatus,setTaskStatus] = useState('pending');
  const [mode,setMode] = useState('add');
  const [updateTaskName,setUpdateTaskName] = useState('')


  useEffect(() => {
    
  }, [mode])
  
  const [item, setItem] = useState([
    { name: "task1" ,status:'pending'},
    { name: "task2" ,status:'complete'},
    { name: "task3" ,status:'pending'},
  ]);

  const [itemdb,setItemdb] = useState(item);


  
  const btnClick = () => {

    if(mode==='update'){

      const index = item.findIndex(each => each.name === updateTaskName)
      item[index].name=taskName
      item[index].status=taskStatus
      setMode('add')
      setTaskName('')
    setTaskStatus('pending')



    }else{
      const obj={name:taskName,status:taskStatus}   
    
    //setItem([obj,...item]);  
    setItem((prevItem) => [...prevItem, obj]);
    setTaskName('')
    setTaskStatus('pending')

    }
    
  };

  const btnDelete=(e)=>{

     const item1 = item.filter((it)=> it.name !== e.currentTarget.value)
     setItem(item1)

  }

  const btnEdit = (e)=>{
    setMode('update')
    setUpdateTaskName(e.currentTarget.value)
    item.map((each)=>{
      if(each.name === e.currentTarget.value){
        setTaskName(each.name)
        setTaskStatus(each.status)
      }

    })

  }

  const btnFilter = (e)=>{

    setItem(...itemdb)
    console.log('itemdb' + itemdb.length)
    console.log('item len' + item.length)
    if(e.target.value === 'pending')
    {
      console.log('pending')
      setItem(item.filter((each)=> each.status==='pending'))
      console.log('item len' + item.length)

    }
    else if(e.target.value === 'complete')
    {
      console.log('complete')
      setItem(item.filter((each)=> each.status==='complete'))
      console.log('item len' + item.length)

    }
    else{
      console.log('all')
      setItem(item)
    }

  }

  return (
    
      <div className="">
      <h1 className="text-center mt-10 font-bold text-3xl text-gray-500">
        TODO LIST
      </h1>

      <taskcontext.Provider value={{taskName,setTaskName,taskStatus,setTaskStatus,btnDelete,btnEdit}}>
      <div className=" bg-slate-200 w-[50%] h-60 mx-auto mt-10 rounded-lg ">
        
        <Inputitem   />
       

        <div className="flex flex-row justify-between ">
          <button
            className="bg-blue-400 mx-5 text-white rounded border-spacing-1 p-2 w-28"
            onClick={()=>btnClick()}   disabled={taskName.length>0?false:true} >
             {mode === 'add' ?'  ADD':'UPDATE'}
          </button>
          <select name="status" id="" className="mr-5 bg-white" onChange={(e)=>btnFilter(e)}>
            <option value="all">ALL</option>
            <option value="complete">COMPLETE</option>
            <option value="pending">PENDING</option>
          </select>
        </div>
        <div className=" w-[100%]  mx-auto mt-5">
          {item.map((item1,index) => {
          return <Listitem name={item1.name} status={item1.status} key={index}/>;
          })}
        </div>
      </div>
      </taskcontext.Provider>
    </div>
   
  );
}

export default App;
