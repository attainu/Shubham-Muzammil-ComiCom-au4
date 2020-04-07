import React from 'react'
import axios from "axios";

class AddComic extends React.Component {
    state = {
        fileSelected: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData() 
        //data.append('photo', this.state.fileSelected)
        for(let x = 0; x<this.state.fileSelected.length; x++) {
            data.append('photo', this.state.fileSelected[x])
        }
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
            fileSelected: [...this.state.fileSelected, e.target.files[0]],
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
                            <label>Select Poster </label>
                            <input type="file" className="form-control" multiple="" onChange={this.handleChange}/>
                            <label>Select Main </label>
                            <input type="file" className="form-control" multiple="" onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    
                    
                </div>
            
            </div>
        </div>
        </div>
    )}
}

export default AddComic
