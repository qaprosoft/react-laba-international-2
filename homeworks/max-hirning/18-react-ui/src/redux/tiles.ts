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
  isRefreshingOne: boolean;
  isRefreshingAll: boolean;
}

const initialState: ITilesStore = {
  data: null,
  error: false,
  loading: false,
  isRefreshingOne: false,
  isRefreshingAll: false,
}

const tilesSlice = createSlice({
  name: 'tiles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOneTile.pending, (state: ITilesStore): ITilesStore => {
      state.loading = true;
      state.error = false;
      return state;
    }),
    builder.addCase(getOneTile.rejected, (state: ITilesStore): ITilesStore => {
      state.loading = false;
      state.error = true;
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
    }),


    builder.addCase(refreshOneTile.pending, (state: ITilesStore): ITilesStore => {
      state.isRefreshingOne = true;
      state.loading = true;
      state.error = false;
      return state;
    }),
    builder.addCase(refreshOneTile.rejected, (state: ITilesStore): ITilesStore => {
      state.isRefreshingOne = false;
      state.loading = false;
      state.error = true;
      return state;
    }),
    builder.addCase(refreshOneTile.fulfilled, (state: ITilesStore, { payload }: PayloadAction<{data: ITile, prevTileIndex: number}>): ITilesStore => {
      state.data?.splice(payload.prevTileIndex, 1, payload.data);
      state.isRefreshingOne = false;
      state.loading = false;
      state.error = false;
      return state;
    }),


    builder.addCase(getManyTiles.pending, (state: ITilesStore): ITilesStore => {
      state.isRefreshingAll = true;
      state.loading = true;
      state.error = false;
      return state;
    }),
    builder.addCase(getManyTiles.rejected, (state: ITilesStore): ITilesStore => {
      state.isRefreshingAll = false;
      state.loading = false;
      state.error = true;
      return state;
    }),
    builder.addCase(getManyTiles.fulfilled, (state: ITilesStore, { payload }: PayloadAction<ITile[]>): ITilesStore => {
      state.isRefreshingAll = false;
      state.loading = false;
      state.data = payload;
      state.error = false;
      return state;
    })
  },
})

export const tilesReducer = tilesSlice.reducer;

export const getOneTile = createAsyncThunk('tiles/getOneTile', async (): Promise<ITile> => {
  const response = await tilesAPI.getOne();
  if(!response) throw new Error('Network ERROR');
  
  return response;
})

export const getManyTiles = createAsyncThunk('tiles/getManyTiles', async (tilesNum: number): Promise<ITile[]> => {
  const response = await tilesAPI.getMany(tilesNum);
  if(!response) throw new Error('Network ERROR');
  
  return response
})

export const refreshOneTile = createAsyncThunk('tiles/refreshOneTile', async (prevTileIndex: number): Promise<{data: ITile, prevTileIndex: number}> => {
  const response = await tilesAPI.getOne();
  if(!response) throw new Error('Network ERROR');
  
  return {data: response, prevTileIndex };
})