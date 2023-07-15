import { useState} from 'react'
import { server_calls } from '../api/server'

import {DataGrid,GridColDef} from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'
import Modal from './Modal'

import {  Button, Box } from '@mui/material'

const buttonSyle={
    border:'1px solid black',
    bgcolor:'rgb(235,235,230)',
    m:3,
    "&:hover":{bgcolor:'rgb(250,250,250)'},
    
    
}

const columns: GridColDef[]=[
  { field: 'id', headerName: "ID", width: 90, hide:true},
  {field:'make_model', headerName: 'Make Model',flex:2},
  {field:'max_speed', headerName: 'Max Speed',flex:1},
  {field:'mileage', headerName: 'Mileage',flex:1},
  {field:'price', headerName: 'Price',flex:1},
  {field:'title', headerName: 'Title',flex:1},
  {field:'accidents', headerName: 'Accidents',flex:1},
  {field:'fuel_type', headerName: 'Fuel Type',flex:1},
  {field:'description', headerName: 'Description',flex:4},
  {field:'location', headerName: 'Location',flex:3}
]




function Datatable() {

  let [open, setOpen]=useState(false);
  const {carData,getData}=useGetData()
  const[selectionModel,setSelectionModel]=useState<string[]>([])


  const handleOpen=()=>{setOpen (true)}
  const handleClose = ()=>{setOpen(false)}
  const deleteData = async () => {
    server_calls.delete(selectionModel[0])
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout(()=>{window.location.reload()},500)
}

  return (
  <Box sx={{backgroundColor:'rgb(200,200,200)', height:'94vh', }}>
    <Modal  
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />

    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
      <Button sx={buttonSyle} onClick={()=>handleOpen()}>Create</Button>
      <Button sx={buttonSyle} onClick={handleOpen}>Update</Button>
      <Button sx={buttonSyle} onClick={deleteData}>Delete</Button>
      {/* <Button sx={buttonSyle} onClick={getData}>getData</Button> */}
    </Box>

    <Box sx={{flexDirection:'col', height: 370,width:'90%', ml:'5%' }}>
    <DataGrid rows={carData} columns={columns} rowsPerPageOptions={[5]}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {setSelectionModel(item)}}
             />
             </Box>
  </Box>
  )
}

export default Datatable