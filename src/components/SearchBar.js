import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super()
        this.state = { 
            term:''
        }
        this.onInputChange = this.onInputChange.bind(this)

    }
    
    // needs bind method
    onInputChange(e){
        console.log("e ->", e.target.value)
        this.setState({
            term: event.target.value
        })
    }


    // Without bind
    // The event.preventDefault() method stops the default action of an element from happening.
    // make sure that the page is not reloading
    onFormSubmit = (e)=> {
        e.preventDefault()
        // make sure we call
        // callback from parent component
        this.props.onFormSubmit(this.state.term)
    }

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={this.onInputChange} 
                            //onChange = {e=>this.setState({term:e.target.value})}
                            value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar