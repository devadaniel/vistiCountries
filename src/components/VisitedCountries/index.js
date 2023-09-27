import './index.css'

const VisitedCountries = props => {
  const {visitedList, onClickRemoveButton} = props
  const {id, imageUrl, name} = visitedList

  const onClickRemove = () => {
    onClickRemoveButton(id)
  }

  return (
    <li className="visited-list-item">
      <div className="visited-item-container">
        <img src={imageUrl} alt="thumbnail" className="image-url" />
        <div className="name-button-container">
          <p className="visited-name">{name}</p>
          <button
            className="remove-button"
            type="button"
            onClick={onClickRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  )
}

export default VisitedCountries
