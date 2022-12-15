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
    const res = await axios.put(`https://knitting-knoll-backend.herokuapp.com/stitches/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteStitch = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`https://knitting-knoll-backend.herokuapp.com/stitches/${id}`)
    setDeletedStitch(!deletedStitch)
  }
  
  return (
    <div className='stitch-card'>
      <div>
        <div>
        <h3>{name}</h3>
        <img src={image}/>
        <p className='stitch-description'>{description}</p>
        <a href={link} target='_blank' className='stitch-link'>Tutorial</a>
        </div>
        <div className='stitch-card-form'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Stitch Name:</label>
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
          <label htmlFor="link">Tutorial Link:</label>
          <input
            id="link"
            value={formState.link}
            onChange={handleChange}
            className="mobile-input"
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