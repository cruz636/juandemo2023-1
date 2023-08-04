import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_ebank_list = createAsyncThunk(
  "ebanks/api_v1_ebank_list",
  async payload => {
    const response = await apiService.api_v1_ebank_list(payload)
    return response.data
  }
)
export const api_v1_ebank_create = createAsyncThunk(
  "ebanks/api_v1_ebank_create",
  async payload => {
    const response = await apiService.api_v1_ebank_create(payload)
    return response.data
  }
)
export const api_v1_ebank_retrieve = createAsyncThunk(
  "ebanks/api_v1_ebank_retrieve",
  async payload => {
    const response = await apiService.api_v1_ebank_retrieve(payload)
    return response.data
  }
)
export const api_v1_ebank_update = createAsyncThunk(
  "ebanks/api_v1_ebank_update",
  async payload => {
    const response = await apiService.api_v1_ebank_update(payload)
    return response.data
  }
)
export const api_v1_ebank_partial_update = createAsyncThunk(
  "ebanks/api_v1_ebank_partial_update",
  async payload => {
    const response = await apiService.api_v1_ebank_partial_update(payload)
    return response.data
  }
)
export const api_v1_ebank_destroy = createAsyncThunk(
  "ebanks/api_v1_ebank_destroy",
  async payload => {
    const response = await apiService.api_v1_ebank_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ebanksSlice = createSlice({
  name: "ebanks",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_ebank_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_ebank_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_ebank_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_ebank_list,
  api_v1_ebank_create,
  api_v1_ebank_retrieve,
  api_v1_ebank_update,
  api_v1_ebank_partial_update,
  api_v1_ebank_destroy,
  slice: ebanksSlice
}
