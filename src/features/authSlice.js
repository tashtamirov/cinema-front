import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    signUp: false,
    signIn: false,
    error: null,
    token: localStorage.getItem("token"),  
}


 export  const authSignUp = createAsyncThunk(
    'auth/signup', async ({login, password}, thuncAPI) =>{
        try{
            const res = await fetch("http://localhost:4000/auth/users",{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({login,password})  
            })
            const json = await res.json()
            if(json.error){
                return thuncAPI.rejectWithValue(json.error)
            }
            return json
        } catch(error){
            thuncAPI.rejectWithValue(error)  
        }
    })

    export const authSignIn = createAsyncThunk(
        'auth/SignIn', async ({login, password}, thuncAPI)=>{
            try{
                const res = await fetch("http://localhost:4000/login",{
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({login, password})  
                })
                 const token = await res.json()
                 console.log(token)
                 if(token.error){
                  return thuncAPI.rejectWithValue(token.error)
                 }
                 localStorage.setItem('token', token)  
                 return token
            }  catch(error){
                thuncAPI.rejectWithValue(error)   
            }
        })


        export const authSlice = createSlice({
            name: 'application',
            initialState,
            reducers:{},
            extraReducers: (builder) =>{
                builder.addCase(authSignUp.fulfilled, (state, action)=>{ 
                    state.error =null
                    state.signUp = true
                })

                builder.addCase(authSignIn.fulfilled, (state, action)=>{
                    state.error = null
                    state.signIn = true   
                    state.token =action.payload 
                })

                builder.addCase(authSignIn.rejected, (state, action)=>{  
                    state.error = action.payload 
                  })
            }

        })

        export default authSlice.reducer  