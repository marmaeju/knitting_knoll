import { useEffect, useState } from 'react'
import { CreateMaterial, GetMaterials } from '../services/MaterialsServices'
import CastCard from '../components/CastCard'
import axios from 'axios'

const Casts = () => {
  const [casts, setCasts] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    link: '',
    type: ''
  })
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
    setFormState({
      name: '',
      description: '',
      image: '',
      link: '',
      type: ''
    })
  }

  return (
    <div>
      <h1>casts</h1>
      <div>
        <h4>Create New Resource</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Stitch Name:</label>
          <input
            id="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            placeholder="description"
            value={formState.description}
            onChange={handleChange}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            placeholder="image"
            value={formState.image}
            onChange={handleChange}
          />
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            placeholder="Link"
            value={formState.link}
            onChange={handleChange}
          />
          <label htmlFor="type">Type:</label>
          <input
            id="type"
            placeholder="Cast-On or Cast-Off"
            value={formState.type}
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
            name={cast.name}
            description={cast.description}
            image={cast.image}
            link={cast.link}
            type={cast.type}
            setDeletedCast={setDeletedCast}
            deletedCast={deletedCast}
          />
        ))}
      </div>
    </div>
  )
}

export default Casts
