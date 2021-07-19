import React, { Component } from 'react'
//import Button from "./Button"

export default class Book extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 1,
            showInfo : false
        };
    }
    // handleClick = () => {
    //     console.log("you clicked me")
    //     console.log(this.state.count)
    // }

    // addCount = () => {
    //     this.setState({count : this.state.count + 1})
    // }
    // lowerCount = () => {
    //     this.setState({count : this.state.count - 1})
    // }
    // resetCount =() => {
    //     this.setState({count : 0})
    // }

    handleInfo = () => {
        this.setState({
            showInfo : !this.state.showInfo
        })
    }

    render() {
        const {img,bookname,author} = this.props.book
        // const {handleDelete} = this.props
        // const checkinfo = (info) {
        //     if(info === true){
        //         return <p>this based on toggle and how it works</p>
        //     }
        //     else{
        //         return null
        //     }
        // } 

        return (
            <article className="book">
                <img src= {img} width="150" alt="book images"/>
                <div>
                    <h3>Title : {bookname}</h3>
                    <h5>Author : {author}</h5>
                    <button type="button" onClick={this.handleInfo}>toggle info</button>
                    {/* {checkinfo(this.state.showInfo)} */}
                    {this.state.showInfo?<p>this based on toggle and how it works</p>:null}
                    {/* {this.state.showInfo && (<p>this based on toggle and how it works</p>)}
                    <button type="button" onClick={() => handleDelete(book)}>Delete me</button> */}
                    {/* <Button handleDelete={handleDelete}/> */}
                    {/* <h3>Count : {this.state.count}</h3>
                    <button type="button" onClick={this.addCount}>add count</button>
                    <button type="button" onClick={this.resetCount}>reset</button>
                    <button type="button" onClick={this.lowerCount}>lower count</button> */}
                </div>
            </article>
        )
    }
}
