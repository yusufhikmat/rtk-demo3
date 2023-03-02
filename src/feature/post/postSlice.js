import { createSlice } from "@reduxjs/toolkit";



const initialState = [
{
    id:1,
    title:"learning redux toolkit",
    content:"It's been fun learning it so far",
},
{
    id:2,
    title:"learning redux toolkit and typescript",
    content:"just make it happen",
},
]
const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:(state, action)=>{
            state.push(action.payload)
        }
    }
})

export default postSlice.reducer
export const {postAdded} = postSlice.actions