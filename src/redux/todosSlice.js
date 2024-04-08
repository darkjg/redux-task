import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lista: [{
      
    }]
}

export const listaSlice = createSlice({
    name: "lista",
    initialState,
    reducers: {
        addLista: (state, action) => {
            const  objeto  = action.payload;
           
            state.lista.push(objeto)
        },
        deleteLista: (state, action) => {
            const { id } = action.payload;
            return state.lista.filter(tareas => tareas.id != id)

        }
    }

})
export const { addLista, deleteLista } = listaSlice.actions;
export default listaSlice.reducer;