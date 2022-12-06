import { createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const contacteSlice = createSlice({
     name : "contact",
     initialState : {
        contacts : [
            {
            id: 1,
            name: "Mayank Kumar",
            email: "mayankkumar@gmail.com",
            phone: "+91767656526",
            status: "Active",
          },
          {
            id: 2,
            name: "Jitender Kumar",
            email: "jitenderskumar@gmail.com",
            phone: "+918878446746",
            status: "Inactive",
          },
          {
            id: 3,
            name: "James Gun",
            email: "jamesgun@gmail.com",
            phone: "+919768446746",
            status: "Active",
          },
          {
            id: 4,
            name: "James Bond",
            email: "jamesbind@gmail.com",
            phone: "+917768446746",
            status: "Inactive",
          }
        ],
          filter : "All",
          contact : {
            name: "",
            email: "",
            phone: "",
            status: ""
          }
     },
     reducers :{
        getAction: (state,action) =>{
             state.contact = state.contacts.find((item) =>item.id == action.payload)
        },
        addAction : (state, action) =>{
            const newData = {...action.payload, id : uuidv4()};
            state.contacts =[newData, ...state.contacts]
        },
        deleteAction : (state, action) =>{
           state.contacts = state.contacts.filter((item) => item.id !== action.payload)
        },
        updateAction:(state,action) =>{
             state.contacts = state.contacts.map((item) =>
                   item.id === action.payload.id ? action.payload : item
             )
        },
        filterAction:(state, action) =>{
             state.filter = action.payload
        }
     }
});

export const {addAction,deleteAction,getAction,updateAction,filterAction} = contacteSlice.actions
export default contacteSlice.reducer 