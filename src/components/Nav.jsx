import {Link} from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav>
        <h2>Knitting Knoll</h2>
        <section className='pages'>
          <div>
          <Link to='/'>Home</Link>
          </div>
          <div>
          <Link to='/materials'>Materials</Link>
          <Link to='/casts'>Casts</Link>
          <Link to='/stitches'>Stitches</Link>
          </div>
        </section>
      </nav>
    </header>
    
  )
}

export default Nav