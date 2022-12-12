const MaterialCard = ({type, link}) => {
  return (
    <div>
      <div>
        <div>
        <p>{type}</p>
        <a href={link}>{link}</a>
        <button>Update</button>
        <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard