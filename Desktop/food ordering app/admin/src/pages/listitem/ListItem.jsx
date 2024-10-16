import React, {useEffect, useState} from 'react'
import './ListItem.css'; 
import axios from 'axios'
import {toast} from 'react-toastify'

const ListItem = () => {

const url = "http://localhost:5000"
  const [list, setList] = useState([]);

  const fetchList = async() =>{
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);
    if (response.data.success) {
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default ListItem
