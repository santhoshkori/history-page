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

    this.setState({listhistory: {HistoryList: deletefilteredlidt}})
  }

  render() {
    const {searchinput, listhistory} = this.state

    const {HistoryList} = listhistory

    const mylist = HistoryList.filter(eachhis =>
      eachhis.title.toLowerCase().includes(searchinput),
    )
    let mylisttoupdate
    if (mylist.length <= 0) {
      mylisttoupdate = (
        <ul className="nohistcontainer">
          <p>There is no history to show</p>
        </ul>
      )
    } else {
      mylisttoupdate = (
        <ul className="unorderlistty">
          {mylist.map(eachitem => (
            <MyHistoryItem
              Historyitem={eachitem}
              key={eachitem.id}
              myclick={this.ClickDeleteButton}
            />
          ))}
        </ul>
      )
    }

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
        {mylisttoupdate}
      </div>
    )
  }
}

export default MyHistoryPage
