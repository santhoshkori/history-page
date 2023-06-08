import {Component} from 'react'
import './index.css'
import MyHistoryItem from '../History items'

class MyHistoryPage extends Component {
  state = {searchinput: '', listhistory: this.props}

  Mysearch = event => {
    const searchvalue = event.target.value
    this.setState({searchinput: searchvalue})
  }

  ClickDeleteButton = id => {
    const {listhistory} = this.state
    const {HistoryList} = listhistory
    const deletefilteredlidt = HistoryList.filter(
      eachdelete => eachdelete.id !== id,
    )
    console.log(deletefilteredlidt)
    this.setState({listhistory: deletefilteredlidt})
  }

  render() {
    const {searchinput, listhistory} = this.state

    const {HistoryList} = listhistory

    const mylist = HistoryList.filter(eachhis =>
      eachhis.title.toLowerCase().includes(searchinput),
    )

    return (
      <div>
        <div className="bannercontainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="searcontainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchimgpx"
            />
            <input
              type="search"
              className="inputelesty"
              onChange={this.Mysearch}
            />
          </div>
        </div>
        <ul className="unorderlistty">
          {mylist.map(eachitem => (
            <MyHistoryItem
              Historyitem={eachitem}
              key={eachitem.id}
              myclick={this.ClickDeleteButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default MyHistoryPage
