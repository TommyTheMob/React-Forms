import React from "react";
import './userForm.scss'

class UserForm extends React.Component {
    state = {
        name: '',
        student: '',
        occupation: '',
        about: ''
    }
    handleChange = event => {
        const { name, value, checked, type } = event.target

        const val = type === 'checkbox'
            ? checked
            : value

        this.setState({
            [name]: val
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="login-form">
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={this.handleChange} value={this.state.name} id="name" name="name" type="text" className="form-input"/>
                </div>
                <div className="form-control">
                    <label htmlFor="student" className="form-label">Student</label>
                    <input onChange={this.handleChange} value={this.state.student} id="student" name="student" type="checkbox" className="form-input"/>
                </div>
                <div className="form-control">
                    <label htmlFor="occupation" id="occupation" className="form-label">Occupation</label>
                    <select onChange={this.handleChange} value={this.state.occupation} name="occupation" className="form-input">
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="sidney">Sidney</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="about" id="about" className="form-label">About</label>
                    <textarea onChange={this.handleChange} value={this.state.about} name="about" className="form-input" />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default UserForm