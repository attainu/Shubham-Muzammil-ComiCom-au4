import React from 'react'
import axios from "axios";

class AddComic extends React.Component {
    state = {
        fileSelected: null
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData() 
        data.append('photo', this.state.fileSelected)
        console.log(data)
          axios.post("http://localhost:9090/products", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res.statusText)
        }) 
    }

    handleChange = (e) => {
        console.log(e.target.files)
        this.setState({
            fileSelected: e.target.files[0],
            loaded: 0,
        })
    }
    
    render() {
        return (
        <div>
            Add comic form
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" multiple="" onChange={this.handleChange}/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                    
                    
                </div>
            
            </div>
        </div>
        </div>
    )}
}

export default AddComic
