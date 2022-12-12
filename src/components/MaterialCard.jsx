import axios from 'axios'
import { useState } from 'react'

const MaterialCard = ({type, link, id}) => {
  const [formState, setFormState] = useState({ type: '', link: '' })
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.put(`http://localhost:3001/materials/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteMaterial = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`http://localhost:3001/materials/${id}`)
  }

  return (
    <div>
      <div>
        <div>
        <p>{type}</p>
        <a href={link}>{link}</a>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            placeholder="Yarn or Pattern"
            value={formState.type}
            onChange={handleChange}
          />
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            placeholder="Link"
            value={formState.link}
            onChange={handleChange}
          />
          <button>Update Material</button>
        </form>
        </div>
        <div>
          <button onClick={deleteMaterial}>Delete Material</button>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard