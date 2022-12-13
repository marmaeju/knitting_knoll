import axios from 'axios'
import { useState } from 'react'

const CastCard = ({id, name, description, image, link, type, deletedCast, setDeletedCast}) => {
  const [formState, setFormState] = useState({ 
    name: '',
    description: '',
    image: '',
    link: '',
    type: '' 
  })
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    const res = await axios.put(`http://localhost:3001/casts/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteCast = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`http://localhost:3001/casts/${id}`)
    setDeletedCast(!deletedCast)
  }

  
  return (
    <div>
      <div>
        <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <img src={image}/>
        <p>{description}</p>
        <a href={link} target='_blank'>{link}</a>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Cast Name:</label>
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
          <button>Update Material</button>
        </form>
        </div>
        <div>
          <button onClick={deleteCast}>Delete Material</button>
        </div>
      </div>
    </div>
  )
}

export default CastCard