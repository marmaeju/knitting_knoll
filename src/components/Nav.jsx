import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <h2>Knitting Knoll</h2>
      <section>
        <div className='home'>
          <Link to='/'>Home</Link>
        </div>
        <div className='pages'>
          <Link to='/materials'>Materials</Link>
          <Link to='/casts'>Casts</Link>
          <Link to='/stitches'>Stitches</Link>
        </div>
      </section>
    </nav>
  )
}

export default Nav