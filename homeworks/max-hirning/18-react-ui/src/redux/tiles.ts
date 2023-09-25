import { tilesAPI } from '../controllers/api'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface ITile {
  id: number;
  url: string;
  last_name: string;
  first_name: string;
}

export interface ITilesStore {
  error: boolean;
  loading: boolean;
  data: null|ITile[];
}

const initialState: ITilesStore = {
  data: null,
  error: false,
  loading: false,
}

const tilesSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {
    refreshAll: (): ITilesStore => {
			return initialState;
		},
    refreshOne: (state: ITilesStore, { payload }: PayloadAction<number>): ITilesStore => {
      state.data?.splice(payload, 1); // using index in array, because sometimes api returns exact object, which I allready have
      return state;
		},
  },
  extraReducers: (builder) => {
    builder.addCase(getOneTile.rejected, (): ITilesStore => {
      return {
        data: null,
        error: true,
        loading: false,
      }
    }),
    builder.addCase(getOneTile.pending, (state: ITilesStore): ITilesStore => {
      state.loading = true;
      state.error = false;
      return state;
    }),
    builder.addCase(getOneTile.fulfilled, (state: ITilesStore, { payload }: PayloadAction<ITile>): ITilesStore => {
      state.loading = false;
      state.error = false;
      if(state.data) {
        state.data.push(payload);
      } else {
        state.data = [payload];
      }
      return state;
    })
  },
})

export const tilesReducer = tilesSlice.reducer;
export const { refreshAll, refreshOne } = tilesSlice.actions

export const getOneTile = createAsyncThunk('tiles/getOneTile', async () => {
  const response = await tilesAPI.getOne();
  if(!response) throw new Error('Network ERROR');
  return response
})