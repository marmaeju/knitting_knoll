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
    const res = await axios.put(`https://knitting-knoll-backend.herokuapp.com/casts/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteCast = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`https://knitting-knoll-backend.herokuapp.com/casts/${id}`)
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
        <a href={link} target='_blank'>Tutorial</a>
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
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={handleChange}>
            <option>Default</option>
            <option value="Cast-On">Cast-On</option>
            <option value="Cast-Off">Cast-Off</option>
          </select>
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            placeholder="Link"
            value={formState.link}
            onChange={handleChange}
          />
          <button>Update Cast</button>
        </form>
        </div>
        <div>
          <button onClick={deleteCast}>Delete Cast</button>
        </div>
      </div>
    </div>
  )
}

export default CastCard