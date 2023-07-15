import { Button } from '@mui/material'
import Input from "./Input"
import { useForm } from 'react-hook-form'

import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux'
import { chooseAccidents,chooseDescription,chooseFuelType,chooseLocation,chooseMakeModel,chooseMaxSpeed,chooseMileage,choosePrice,chooseTitle } from '../redux/slices/RootSlice'

interface CarProps {
  id?: string[];
  onClose: () => void;

}

const CarForm = (props:CarProps) => {
  const{register, handleSubmit}=useForm({})
  const dispatch=useDispatch();
  const store=useStore();
  
  const onSubmit=(data:any, event:any)=>{
    console.log(`ID: ${typeof props.id}`)
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length>0){
      server_calls.update(props.id[0],data)
      console.log(`Updated: ${data.make_model} ${props.id}`)
      setTimeout(()=>{window.location.reload()},1000);
      event.target.reset()
    }else{
      dispatch(chooseAccidents(data.accidents))
      dispatch(chooseDescription(data.description))
      dispatch(chooseFuelType(data.fuel_type))
      dispatch(chooseLocation(data.location))
      dispatch(chooseMakeModel(data.make_model))
      dispatch(chooseMaxSpeed(data.max_speed))
      dispatch(chooseMileage(data.mileage))
      dispatch(choosePrice(data.price))
      dispatch(chooseTitle(data.title))

      server_calls.create(store.getState())
      setTimeout(()=>{window.location.reload()},1000);
      event.target.reset()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div>
          <label htmlFor="make_model">Make and Model</label>
          <Input {...register('make_model')} name='make_model' placeholder="Make/Model" />
        </div>
        <div>
          <label htmlFor="max_speed">Max Speed</label>
          <Input {...register('max_speed')} name='max_speed' placeholder="Max Speed (strings ok)" />
        </div>
        <div>
          <label htmlFor="mileage">Mileage</label>
          <Input {...register('mileage')} name='mileage' placeholder="Mileage (int)" />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <Input {...register('price')} name='price' placeholder="Price (float 2 decimal points)" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="accidents">Accidents</label>
          <Input {...register('accidents')} name='accidents' placeholder="Accidents (int)" />
        </div>
        <div>
          <label htmlFor="fuel_type">Fuel Type</label>
          <Input {...register('fuel_type')} name='fuel_type' placeholder="Fuel Type" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name='description' placeholder="Description" />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Input {...register('location')} name='location' placeholder="Location" />
        </div>
        <div>
          <Button type='submit'>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}


export default CarForm