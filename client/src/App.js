import {useState, useEffect} from 'react';
import axios from './axios';
import { toast } from 'react-toastify';
import './App.css';
import Card from './Card';



// import Detail from './Detail';

function App(props) {
  const[items, setItems] = useState("");
  // const[query, setQuery] = useState("");
  
  const[text, setText] = useState("")
  // const[largeTitle, setLargeTitle] = useState([])
  // const[isLoading, setIsLoading]=useState(false)
 

  useEffect(()=>{
    // setIsLoading(true)
    const fetchData = async ()=>{
      const data = await axios.get("/search",{
        method:"GET", 
        headers:{
        "Content-Type": "application/json"
      }});
      console.log("search items>>>>>",data);
      
      
      setItems(data);
      
      
     
      
    }
    fetchData();
    // setIsLoading(false);
  },[])

  
 
    
const inputHandlers = (e) =>{
    e.preventDefault();
    if(!text){
      toast("Input is Empty")
    }
    else {
      var lowerCase = e.target.value.toLowerCase();
      setText(lowerCase);
      
    }
  }

  
   

  return( 

    <section className='section'>
    
    <form autoComplete="off">
      <input 
        type='text' 
        name="search" 
        placeholder="Search for something"
        onChange= {inputHandlers}
        />
      <button>Search</button>
    </form>
     <Card  input={text} items={items.data}/>
      </section>

         
    
  )
};  


export default App;
