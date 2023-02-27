import React, {useState} from 'react'

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSumbit = async (event) => {
        event.preventDefault();
        
        const workout = { title, load, reps };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/Json'
            }
        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
            console.log(error)
        }
        if(response.ok){
            setError(null)
            setTitle('')
            setLoad('')
            setReps('')

            console.log("New workout has been added", json)
        }

    }
    
  return (
    <form className='create' onSubmit={handleSumbit}>
        <h3>Add a new workout</h3>

        <label> Exercise Title : </label>
        <input
            value={title}
            type='text'
            onChange={(event) => setTitle(event.target.value)} 
        />

        <label> Load (in Kg): </label>
        <input
            value={load}
            type='number'
            onChange={(event) => setLoad(event.target.value)} 
        />  

        <label> Reps : </label>
        <input
            value={reps}
            type='text'
            onChange={(event) => setReps(event.target.value)} 
        />

        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm