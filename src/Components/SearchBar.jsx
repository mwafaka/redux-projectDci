import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="container marginBottom">
        <div className="input-group  col-md-10">
          <input type="text" className="form-control" ref="search" />
          <span className="input-group-btn">
            <button
              className="btn btn-danger"
              type="button"
              onClick={event => {
                this.props.onSearchTerm(this.refs.search.value);
              }}
            >
              Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
