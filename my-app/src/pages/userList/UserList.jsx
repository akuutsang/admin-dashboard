import './userList.css'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
    return ( 
            <div className='userListUser'>
              <img className='userListImage' src={params.row.avatar} alt="" /> 
                {params.row.userName} 
            </div>

    );
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'transaction', headerName: 'Transaction', width: 100 },
  { field: 'action', headerName: 'Action', width: 150, renderCell: (params)=>{
    return(
      <>
       <button className='userListEdit'> Edit </button>
       < DeleteOutline className='userListDelete'/> 
      </>
    )
  }}

];

const rows = [
  { id: 1,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00"
  },
  { id: 2,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 3,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 4,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 5,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 6,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 7,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 8,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 9,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
  { id: 10,
    userName: 'Jon Snow', 
    avatar:
     "./assets/cuteCat.jpg",
    email:"jon@gmail.com",
    status:"active",
    transaction:"$120.00",
  },
];


export default function UserList() {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid  rows={rows}
      disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 7, 10]}
        checkboxSelection  />
    </div>
  )
}