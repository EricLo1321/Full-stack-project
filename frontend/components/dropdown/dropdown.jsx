import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dropdownShow: false}
        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        debugger
        const currentState = this.state.dropdownShow;
        this.setState({dropdownShow: !currentState});
    } 

    render () {
    return (
    <div className="dropdown"> 
        <button className="dropdown-btn" onClick={this.toggleClass}>
            <img src={window.dropdown} alt="dropdown-icon" />
        </button>
        <div className={this.state.dropdownShow ? "dropdown-content-show" : "dropdown-content"} id="myDropdown">
            <h4>Home</h4>
            <h4>Public</h4>
            <h4>Find a job</h4>
            <h4>Teams</h4>
        </div>
    </div>
    )
}};

export default Dropdown;