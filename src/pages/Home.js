import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/materials')}>Materials</button>
    </div>
  )
}

export default Home
