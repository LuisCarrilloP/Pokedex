import { createSlice } from '@reduxjs/toolkit'


    // Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
    export const userSlice = createSlice({
        name: 'user',
        initialState: "",
        reducers: {
            changeUser: (state, action) => `${action.payload} Ketchum de pueblo paleta`
            
        }
    })

    export const { changeUser } = userSlice.actions

export default userSlice.reducer;