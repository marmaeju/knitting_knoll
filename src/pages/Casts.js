import { useEffect, useState } from 'react'
import { CreateMaterial, GetMaterials } from '../services/MaterialsServices'
import CastCard from '../components/CastCard'
import axios from 'axios'

const Casts = () => {
  const [casts, setCasts] = useState([])
  const [formState, setFormState] = useState({ type: '', link: '' })
  const [deletedCast, setDeletedCast] = useState(false)

  useEffect(() => {
    const handleCasts = async () => {
      const res = await axios.get('http://localhost:3001/casts/')
      setCasts(res.data)
    }
    handleCasts()
  }, [deletedCast])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    const res = await axios.post('http://localhost:3001/casts/', formState)
    setCasts(res)
    setFormState({ type: '', link: '' })
  }

  return (
    <div>
      <h1>casts</h1>
      <div>
        <h4>Create New Resource</h4>
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
          <button>Create Material</button>
        </form>
      </div>
      <div>
        {casts?.map((cast) => (
          <CastCard
            key={cast.id}
            id={cast.id}
            setDeletedCast={setDeletedCast}
            deletedCast={deletedCast}
          />
        ))}
      </div>
    </div>
  )
}

export default Casts
