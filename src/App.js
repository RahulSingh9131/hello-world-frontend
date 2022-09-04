import {useState,useEffect,useCallback} from "react"
import './App.css';
import axios from 'axios';
import Card from "./components/Card";

function App() {
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(0);
  const [loading,setLoading]=useState(true);
  const LIMIT=5;

  const fetchProducts= useCallback(async ()=>{
    try {
      const response= await axios.get(`https://dummyjson.com/products?skip=${page}&limit=${LIMIT}`);
      setProducts((prev)=>[...prev,...response?.data?.products]);
      setLoading(false);
    } catch (error) {
      console.log("fetchProducts error",error);
    }
  },[page])

  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]);

  const handleScroll=()=>{
    if(window.innerHeight+document.documentElement.scrollTop+1>document.documentElement.scrollHeight){
      setLoading(true);
      setPage((prev)=>prev+5);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[])

  return (
    <div className="container">
      <h1>Rahul Singh</h1>
      <h3>HelloWorld Assignment</h3>
      <h3>Pagination on scroll</h3>
      <div className="product-container">
          {products && products.map((item)=>(
            <div className="product-card" key={item.id}>
              <Card key={item.id} item={item}/>
            </div>
          ))}
      </div>
      {loading && <h1 className="loading">Loading...</h1>}
    </div>
  );
}

export default App;
