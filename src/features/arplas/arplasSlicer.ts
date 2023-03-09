import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";


export const getImagesArplas = createAsyncThunk('fetch/mainSliderSlice', async (arg, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3333/images-arplas');
        return await response.json();

    }catch (error){
        thunkAPI.rejectWithValue(error)
    }
})

export interface TArplas {
    url: string,
    name: string
}
const initialState: TArplas[] = []

const arplasSlider = createSlice({
    name: 'arplas-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImagesArplas.fulfilled, (state, action): TArplas[] => {
            state = action.payload
            return state
        }).addCase(getImagesArplas.rejected, (state,action) => {

        })
    }
})

    // .addCase(getPosts.fulfilled, (state,action:PayloadAction<Tpost>) => {
    //     for(let i = 0;i<action.payload.length;i++){
    //         state[i]={images:action.payload[i].images , _doc:action.payload[i]._doc}
    //     }
    // })
    // .addCase(getPosts.rejected, () => {
    //     console.error("Something was wrong");
    // });

export default arplasSlider.reducer;
