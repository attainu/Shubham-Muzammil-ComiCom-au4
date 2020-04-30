import React from 'react'
import axios from "axios";
import {Redirect} from 'react-router-dom'

class AddComic extends React.Component {
    state = {
        fileSelected: [],
        name: "",
        description: "",
        regularPrice: "",
        discountedPrice: "",
        itemsInStock: "",
        publication: "",
        characters: "",
        tags: "",
        category: "",
        redirect: false
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        const data = new FormData() 
        for(let x = 0; x<this.state.fileSelected.length; x++) {
            data.append('photo', this.state.fileSelected[x])
        }
        data.append('tags', JSON.stringify(this.splitStringToArray(this.state.tags))) 
        data.append('category', JSON.stringify(this.splitStringToArray(this.state.category))) 
        data.append('characters', JSON.stringify(this.splitStringToArray(this.state.characters))) 
        data.append('name', this.state.name)
        data.append('description', this.state.description)
        data.append('regularPrice', this.state.regularPrice)
        data.append('discountedPrice', this.state.discountedPrice)
        data.append('itemsInStock', this.state.itemsInStock)
        data.append('publication',this.state.publication) 
        console.log(data)
        axios.post("/products", data, { // receive two parameter endpoint url ,form data 
        })
        .then(res => { // then print response status
            console.log(res.statusText)
            if(res.statusText === "OK") {
                alert("comic book added, redirecting to dashboard")
                this.setState({
                    redirect: true
                })
            }
        }) 
    }
    splitStringToArray = (string) => {
        const array = string.split(',');
        console.log(array)
        return array
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        
    }
    handleFileUpload = (e) => {
        this.setState({
            fileSelected: [...this.state.fileSelected, e.target.files[0]],
            loaded: 0,
        })
    }
    
    render() {
        const {name, description, itemsInStock, publication, regularPrice, tags, category, discountedPrice, characters, redirect} = this.state
        if (redirect) {
           return <Redirect to="/dashboard" />
        }
        return (
        <div>
            <h3 className="text-center">Add comic form</h3>
            <div className="container">
                <form onSubmit={this.handleSubmit} className="col-md-auto">
                    <div className="form-group">
                        <label htmlFor="name">Name of Comic</label>
                        <input type="text" name="name" value={name} className="form-control" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of Comic</label>
                        <textarea className="form-control" name="description" value={description} onChange={this.handleChange} required/>
                    </div>                        
                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <label>Regular Price </label>
                                <input type="number" name="regularPrice" value={regularPrice} className="form-control" onChange={this.handleChange} required />
                            </div>
                            <div className="form-group col-md-6">
                                 <label>Discounted Price </label>
                                 <input type="number" name="discountedPrice" value={discountedPrice} className="form-control" onChange={this.handleChange} required/>
                            </div>
                        </div> 
                        <div className="form-row ">
                            <div className="form-group col-md-6">
                                <label>Items In Stock </label>
                                <input type="number" name="itemsInStock" value={itemsInStock} className="form-control" onChange={this.handleChange} required/>
                            </div>
                            <div className="form-group col-md-6">
                                <label>Publication </label>
                                 <input type="text" name="publication" value={publication} className="form-control" onChange={this.handleChange} required/>
                            </div>
                        </div>    

                        <div className="form-group">
                            <label>Characters </label>
                            <input type="text" name="characters" value={characters} className="form-control" onChange={this.handleChange} required/>
                        </div>
                        
                        <div className="form-group">
                            <label>Tags </label>
                            <input type="text" name="tags" value={tags} className="form-control" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <label>Category </label>
                            <input type="text" name="category" value={category} className="form-control" onChange={this.handleChange} required/>
                        </div>
                        <small className="form-text text-muted">Comma separated values for multiple characters, tags and category.</small>

                        {/* Image Uploads */}
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label>Select Poster </label>
                                    <input type="file" className="form-control" multiple="" onChange={this.handleFileUpload}/>
                                </div>    
                            </div>
                            <div className="col">
                                <div className="form-group">
                                    <label>Select Main </label>
                                    <input type="file" className="form-control" multiple="" onChange={this.handleFileUpload}/>
                                </div>
                            </div>
                        </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )}
}

export default AddComic