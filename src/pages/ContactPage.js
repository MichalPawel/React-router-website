import React, { Component } from 'react';
import { Prompt } from 'react-router';
import '../styles/ContactPage.css'
class ContactPage extends Component {
    state = {
        value: '',
    }
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            value: ''
        })
    }
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas!</h3>
                    <textarea placeholder='Wpisz wiadomość' value={this.state.value} onChange={this.handleChange}></textarea>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message='Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę?'
                />
            </div>
        );
    }
}

export default ContactPage;