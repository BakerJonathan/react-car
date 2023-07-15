import {createSlice} from '@reduxjs/toolkit'

const rootSlice=createSlice({
    name:"root",
    initialState:{
        make_model:"Make+Model",
        max_speed:"Max Speed",
        mileage:"Mileage",
        price:"Price",
        title:"Title",
        accidents:"Accidents",
        fuel_type:"Fuel Type",
        description:"Description",
        location:"Location"
    },
    reducers:{
        chooseMakeModel: (state,action)=>{state.make_model=action.payload},
        chooseMaxSpeed: (state,action)=>{state.max_speed=action.payload},
        chooseMileage: (state,action)=>{state.mileage=action.payload},
        choosePrice: (state,action)=>{state.price=action.payload},
        chooseTitle: (state,action)=>{state.title=action.payload},
        chooseAccidents: (state,action)=>{state.accidents=action.payload},
        chooseFuelType: (state,action)=>{state.fuel_type=action.payload},
        chooseDescription: (state,action)=>{state.description=action.payload},
        chooseLocation: (state,action)=>{state.location=action.payload}
    }
})

export const reducer=rootSlice.reducer
export const {chooseMakeModel,chooseMaxSpeed,chooseMileage,choosePrice,chooseTitle,chooseAccidents,chooseFuelType,chooseDescription,chooseLocation}=rootSlice.actions