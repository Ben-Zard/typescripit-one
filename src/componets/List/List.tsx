import {IMealList} from '../interface';
import {useState,FC} from 'react';
import AvailableMeal from "./AvailableMeals"
const Test: FC = () => {
const [meal,setMeal] = useState<IMealList[]>([]); 

  return (
    <>
    <AvailableMeal/>
  </>
  )
}

export default Test