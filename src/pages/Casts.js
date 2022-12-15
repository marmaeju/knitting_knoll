import { useEffect, useState } from 'react'
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
  const [addedCasts, toggleAddedCasts] = useState(false)

  useEffect(() => {
    const handleCasts = async () => {
      const res = await axios.get(
        'https://knitting-knoll-backend.herokuapp.com/casts/'
      )
      setCasts(res.data)
    }
    handleCasts()
  }, [deletedCast, formState])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      'https://knitting-knoll-backend.herokuapp.com/casts/',
      formState
    )
    toggleAddedCasts(!addedCasts)
    setFormState({
      name: '',
      description: '',
      image: '',
      link: '',
      type: ''
    })
  }

  return (
    <div className="casts-page">
      <div className="cast-div">
        <h1>Casts</h1>
        <div>
          <h4>Create new cast in the form below!</h4>
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
            <select id="type" onChange={handleChange} className="mobile-select">
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
            <button>Create Cast</button>
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
    </div>
  )
}

export default Casts
