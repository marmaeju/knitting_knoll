import { useEffect, useState } from 'react'
import StitchCard from '../components/StitchCard'
import axios from 'axios'

const Stitches = () => {
  const [stitches, setStitches] = useState([])
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    image: '',
    link: ''
  })
  const [deletedStitch, setDeletedStitch] = useState(false)
  const [addedStitches, toggleAddedStitches] = useState(false)

  useEffect(() => {
    const handleStitches = async () => {
      const res = await axios.get(
        'https://knitting-knoll-backend.herokuapp.com/stitches/'
      )
      setStitches(res.data)
    }
    handleStitches()
  }, [deletedStitch, formState])

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await axios.post(
      'https://knitting-knoll-backend.herokuapp.com/stitches/',
      formState
    )
    toggleAddedStitches(!addedStitches)
    setFormState({
      name: '',
      description: '',
      image: '',
      link: ''
    })
  }

  return (
    <div className="stitches-page">
      <div className="stitch-div">
        <h1>Stitches</h1>
        <div>
          <h4>Create new stitch in the form below!</h4>
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
            <label htmlFor="link">Link:</label>
            <input
              id="link"
              value={formState.link}
              onChange={handleChange}
              className="mobile-input"
            />
            <button>Create Stitch</button>
          </form>
        </div>
        <div>
          {stitches?.map((stitch) => (
            <StitchCard
              key={stitch.id}
              id={stitch.id}
              name={stitch.name}
              description={stitch.description}
              image={stitch.image}
              link={stitch.link}
              setDeletedStitch={setDeletedStitch}
              deletedStitch={deletedStitch}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stitches
