import React, { Component } from "react";

export default class Form extends Component {
    state={
        fname:"",
        lname:"",
        people:[]

    }
    handleChange=event=>{
    // const text=event.target.value;
    // this.setState({
    //     fname:text
    // })
    this.setState({
        [event.target.name]:event.target.value.toUpperCase()
    })
    }

    handleSubmit=event=>{
        event.preventDefault();
        const fname=this.state.fname
        const lname=this.state.lname
        if(fname.length>0 && lname.length>0)
        {
            const person=`${fname} ${lname} `;
            this.setState({
                people:[...this.state.people,person],
                fname:"",
                lname:""

            })
        }
    }
  render() {
    return (
      <section>
        <article>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange}/>
            <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />
            <button type="submit">submit</button>
          </form>
        </article>
        <article>
          <h1>People</h1>
          <div>{this.state.people}</div>
        </article>
      </section>
    );
  }
}
