import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }

  // NOTE functions like this can also be used to handle events
  // naming convention - on/handle + elementName + eventName
  // onInputChange(e) {
  //   this.setState({ term: e.target.value })
  // }

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Bar</label>
            {/* onChange attribute is a fixed name and is a even handler */}
            {/* we can also define a seperate function for this */}
            <input
              type="text"
              value={this.state.term.toLowerCase()}
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
