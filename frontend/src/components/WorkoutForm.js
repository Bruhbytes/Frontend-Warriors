import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [message, setmessage] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in')
      return
    }
    const user1=user.email

    const workout = {message,user1}

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setmessage('')
      // setLoad('')
      // setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
    // <form className="create" onSubmit={handleSubmit}>
    //   <h3>Add a New Workout</h3>

    //   <label>Excersize Title:</label>
    //   <input 
    //     type="text"
    //     onChange={(e) => setTitle(e.target.value)}
    //     value={title}
    //     className={emptyFields.includes('title') ? 'error' : ''}
    //   />

    //   <label>Load (in kg):</label>
    //   <input 
    //     type="number"
    //     onChange={(e) => setLoad(e.target.value)}
    //     value={load}
    //     className={emptyFields.includes('load') ? 'error' : ''}
    //   />

    //   <label>Reps:</label>
    //   <input 
    //     type="number"
    //     onChange={(e) => setReps(e.target.value)}
    //     value={reps}
    //     className={emptyFields.includes('reps') ? 'error' : ''}
    //   />

    //   <button>Add Workout</button>
    <form onSubmit={handleSubmit}  >
                          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
                              required
                              value={message}
                              onChange={(e) => { setmessage(e.target.value); console.log(message); } }></textarea>
                          <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  ">

                              Post
                          </button>
                      {/* </form> */}
      {error && <div className="error">{error}</div>}
     </form>
  )
}

export default WorkoutForm