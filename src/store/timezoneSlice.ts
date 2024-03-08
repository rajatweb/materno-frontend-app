import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TimezoneState {
    value: string
}

const initialState: TimezoneState = {
    value: '',
}

export const timezoneSlice = createSlice({
    name: 'timezone',
    initialState,
    reducers: {
        addTimeZoneMessage: (state, action: PayloadAction<string>) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addTimeZoneMessage } = timezoneSlice.actions

export default timezoneSlice.reducer