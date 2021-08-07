import React, { Component } from 'react'

class Formulaire extends Component {

    state = {
        message: '',
        length: this.props.length
    }

    createMessage = () => {
        const  {addMessage, pseudo, length} = this.props
        const message = {
            pseudo,
            message: this.state.message
        }
        addMessage(message)
        this.setState({message : '', length})
    }
    handleSubmit = event => {
        event.preventDefault()
        this.createMessage()
    }

    handleChange = event =>{
       const message = event.target.value
        this.setState({message})
        const length = this.props.length - message.length
        this.setState({length})
        
    }
    handleKeyUp = event =>{
        if(event.key === 'Enter'){
          this.createMessage()
        }
      }
    render() {
        return(
            <form className="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <textarea required maxLength={this.state.length} value={this.state.message} onKeyUp={this.handleKeyUp}/>
                <div className="info">{this.state.length}</div>
                <button type="submit">Send</button>
            </form>
        )
    }
}
export default Formulaire