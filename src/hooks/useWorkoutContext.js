import { WorkoutsContext } from "../components/context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('useWorkoutContext must be use inside a WorkoutContextProvider')
    }
    return context;
}