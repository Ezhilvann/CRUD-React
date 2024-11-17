import React,{ useState} from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Forms(){
    const[inputdata,setinputdata]=useState({name:'',course:'',city:'' });
    const[showinput,setshowinput]=useState([])
    const[updateinput,setupdateinput]=useState(null)
    
   
    const handlechange=(e)=>{
        const{name,value}=e.target;
        setinputdata({...inputdata,[name]:value})
       
    }
    const handlesubmit=(e)=>{
                e.preventDefault();
                if(inputdata.name.trim()===''||inputdata.city.trim()===''||inputdata.course.trim()===''){
                    alert("Please Enter the Details")
                    return false
                }
                if(updateinput!==null){
                    const updatechange=showinput.map((item,index)=>(index === updateinput ? inputdata : item))
                    setshowinput(updatechange)
                    alert("Successfully Updated");
                    setupdateinput(null)
                }
                else{
                setshowinput([...showinput,inputdata]);
                alert("Successfully Added");
                }
                
                setinputdata({name:'',course:'',city:''})
    }

  function updateedit(indexes){
        setinputdata(showinput[indexes])
        setupdateinput(indexes)

  }

   function delets(indexes){
    setshowinput(showinput.filter((data,index)=>index!==indexes))
    console.log("Delete is worked")
    alert("Successfully Deleted")
   }

    return(
        <div>
            <h2 className="text-xl font-mono font-thin ml-4 mt-4">CURD Operation using the REACT.JS</h2>
            
            <form className="flex gap-4 justify-center items-center mt-5" onSubmit={handlesubmit}>
            <div>
                <label htmlFor="course">Name:</label>
                <input type="text" className="border-b-2 border-gray-600 outline-none mx-3" name="name" placeholder="Enter name"
                 value={inputdata.name} onChange={handlechange} />
            </div>
            <div>
                <label htmlFor="course">Course:</label>
                <input type="text" className="border-b-2 border-gray-600 outline-none mx-3" name="course" placeholder="Enter Course" value={inputdata.course} onChange={handlechange}/>
            </div>
            <div>
                <label htmlFor="city">Native:</label>
                <input type="text" className="border-b-2 border-gray-600 outline-none mx-3" name="city" placeholder="Enter City " value={inputdata.city} onChange={handlechange} />
            </div>
            <button className="bg-green-400 px-4 py-1 rounded-md hover:bg-green-500 text-white" type="submit">Add-Data</button>
        </form>
        <table className="table-auto mx-auto mt-10 w-[100vh] border-collapse border border-slate-500">
            <thead className="text-lg  text-center bg-slate-400">
                <tr className="text-white">
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Native</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
            {showinput.map((item,index)=>( 
                 
                    <tr key={index} className="text-center">
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.city}</td>
                        <td><button onClick={()=>updateedit(index)} className="bg-green-400 px-4 py-1 rounded-md hover:bg-green-500 text-white"><FaEdit /></button></td>
                        <td><button onClick={()=>delets(index)} className="bg-red-500 px-4 py-1 rounded-md hover:bg-red-700 text-white"> <FaTrashAlt /> </button></td>
                       
                        </tr>
                    ))}
                    </tbody>
        </table>
        </div>
    );
}

export default Forms;