import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class Connection extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    handleChange = event => {

        const pseudo = event.target.value
        this.setState({pseudo})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.setState({goToChat: true})
    }

    render(){
        if(this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }
        
        return(
            <div className="connectionBox">
                <form className="connection" onSubmit={this.handleSubmit}>
                    <input  value={this.state.pseudo} onChange={this.handleChange} type="text" placeholder="Pseudo" required></input>
                    <button type="submit">GO</button>
                </form>
            </div>
        )
    }
}

export default Connection