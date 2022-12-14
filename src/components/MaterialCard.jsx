import axios from 'axios'
import { useState } from 'react'

const MaterialCard = ({name, type, link, id, setDeletedMaterial, deletedMaterial}) => {
  const [formState, setFormState] = useState({ type: '', link: '' })
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    const res = await axios.put(`https://knitting-knoll-backend.herokuapp.com/materials/${id}`, formState)
    setFormState({ type: '', link: '' })
  }

  const deleteMaterial = async (e) => {
    e.preventDefault()
    const res = await axios.delete(`https://knitting-knoll-backend.herokuapp.com/materials/${id}`)
    setDeletedMaterial(!deletedMaterial)
  }

  return (
    <div>
      <div>
        <div>
        <h3>{name}</h3>
        <p>{type}</p>
        <a href={link} target='_blank'>Tutorial</a>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Site Name:</label>
          <input
            id="name"
            placeholder="name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="type">Type:</label>
          <select id="type" onChange={handleChange}>
            <option>Default</option>
            <option value="Yarn">Yarn</option>
            <option value="Pattern">Pattern</option>
          </select>
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