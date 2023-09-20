import React from "react";
import './userForm.scss'

class UserForm extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        const formData = [...new FormData(this.formRef)]
            .reduce((acc, [name, value]) => ({...acc, [name]: value}), {})

        console.log(formData)
    }

    setRef = node => {
        this.formRef = node
    }
    render() {
        return (
            <form ref={this.setRef} onSubmit={this.handleSubmit} className="login-form">
                <h1 className="form-title">Profile</h1>
                <div className="form-control">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" type="text" className="form-input"/>
                </div>
                <div className="form-control">
                    <label htmlFor="student" className="form-label">Student</label>
                    <input id="student" name="student" type="checkbox" className="form-input"/>
                </div>
                <div className="form-control">
                    <label htmlFor="occupation" id="occupation" className="form-label">Occupation</label>
                    <select name="occupation" className="form-input">
                        <option value="london">London</option>
                        <option value="new-york">New York</option>
                        <option value="sidney">Sidney</option>
                        <option value="berlin">Berlin</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="about" id="about" className="form-label">About</label>
                    <textarea name="about" className="form-input" />
                </div>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        )
    }
}

export default UserForm