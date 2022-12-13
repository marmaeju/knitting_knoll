import axios from 'axios'
import { useState } from 'react'

const StitchCard = ({id, name, description, image, link, deletedStitch, setDeletedStitch}) => {
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
    const res = await axios.put(`http://localhost:3001/stitches/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteStitch = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`http://localhost:3001/stitches/${id}`)
    setDeletedStitch(!deletedStitch)
  }
  
  return (
    <div>
      <div>
        <div>
        <h3>{name}</h3>
        <img src={image}/>
        <p>{description}</p>
        <a href={link} target='_blank'>Tutorial</a>
        </div>
        <div>
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
          <button>Update Stitch</button>
        </form>
        </div>
        <div>
          <button onClick={deleteStitch}>Delete Stitch</button>
        </div>
      </div>
    </div>
  )
}

export default StitchCard