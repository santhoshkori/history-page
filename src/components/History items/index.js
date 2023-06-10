import './index.css'

const MyHistoryItem = props => {
  const {Historyitem, myclick} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = Historyitem

  const Deleteclick = () => {
    myclick(id)
  }

  return (
    <li className="liststy">
      <p>{timeAccessed}</p>
      <div className="childlistcontainer">
        <div className="titledomainurl">
          <img src={logoUrl} alt="domain logo" className="logopx" />
          <h1 className="headingtitle">{title}:</h1>
          <p>{domainUrl}</p>
        </div>
        <button
          className="btnsty"
          data-testid="delete"
          type="button"
          onClick={Deleteclick}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default MyHistoryItem
