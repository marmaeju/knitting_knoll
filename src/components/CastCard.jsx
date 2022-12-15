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
    <div className='cast-card'> 
      <div>
        <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <img src={image}/>
        <p className='cast-description'>{description}</p>
        <a href={link} target='_blank' className='cast-link'>Tutorial</a>
        </div>
        <div className='cast-card-form'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Cast Name:</label>
          <input
            id="name"
            value={formState.name}
            onChange={handleChange}
            className="mobile-input"
          />
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={formState.description}
            onChange={handleChange}
            className="mobile-input"
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            value={formState.image}
            onChange={handleChange}
            className="mobile-input"
          />
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={handleChange} className='mobile-select'>
            <option>Default</option>
            <option value="Cast-On">Cast-On</option>
            <option value="Cast-Off">Cast-Off</option>
          </select>
          <label htmlFor="link">Link:</label>
          <input
            id="link"
            value={formState.link}
            onChange={handleChange}
            className="mobile-input"
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