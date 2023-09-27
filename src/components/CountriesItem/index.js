import './index.css'

const CountriesItem = props => {
  const {countriesName, onClickVisitButton} = props
  const {id, name, isVisited} = countriesName

  const text = isVisited ? 'Visited' : 'Visit'

  const onClickVisit = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="countries-names-list">
      <div className="country-name-button">
        <p className="countries-name">{name}</p>
        {isVisited ? (
          <p className="visited-text">{text}</p>
        ) : (
          <button className="button" type="button" onClick={onClickVisit}>
            {text}
          </button>
        )}
      </div>
    </li>
  )
}

export default CountriesItem
