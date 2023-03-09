import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const getImagesSlider = createAsyncThunk('fetch/mainSliderSlice', async (arg, thunkAPI) => {
    try {
        fetch('http://localhost:3333/images-main')
            .then(res => res.json)
            .then(data => data)

    }catch (error){
        thunkAPI.rejectWithValue(error)
    }
})

export interface ToDoState {
    imgUrl: string
}
const initialState: ToDoState[] = [
    {
        imgUrl: ''
    }
]

const mainSliderSlice = createSlice({
    name: 'main-slider-images',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getImagesSlider.fulfilled, (state, action) => {

        }).addCase(getImagesSlider.rejected, (state,action) => {

        })
    }
})


export default mainSliderSlice.reducer;
