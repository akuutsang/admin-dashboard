import "./products.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { productsRows } from "../../dummyData"
import { Link } from "react-router-dom"
import { useState } from "react";
export default function Products() {
    const [data,setData ]= useState(productsRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { 
        field: 'name', 
        headerName: 'Name', 
        width: 200,
        renderCell: (params)=>{
            return (
                <div className="productsUser">
                    <img className="productsImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        }  },
        { field: 'code', headerName: 'Code', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'price', headerName: 'Price', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
            return (
                <>
                  <Link to={"/products/"+params.row.id}>
                    <button className="productsEdit">Edit</button>
                  </Link>
                    <DeleteOutline className="productsDelete" onClick={()=>handleDelete(params.row.id)} />
                </>  
            )
        }},
    ];

    
        
    
  return (
    <div className="userList">
    <DataGrid
     rows={data} disableRowSelectionOnClick
     columns={columns}
     initialState={{
       pagination: {
         paginationModel: { page: 0, pageSize: 5 },
       },
     }}
     pageSizeOptions={[5, 10]}
     checkboxSelection
   />
 </div>
  )
}
