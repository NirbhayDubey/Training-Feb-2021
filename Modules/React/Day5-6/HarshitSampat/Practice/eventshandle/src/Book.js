import React, { Component } from "react";
//import Button from './Buttons'

// prop drilling passing method to children
//passing methods to childrencomponents to work with state
export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "John",
      showInfo: true,
    };
  }
  //   this.handleClic = this.handleClick.bind(this)

  // }
  // handleClick(){
  //   console.log('You Clicked me')
  //   console.log(this.state.count)
  // }
  // handleClick =()=>{
  //   console.log('you clicked me');
  //   console.log(this.state.count);

  // };

  //   addCount = () => {
  //     this.setState({
  //       count: this.state.count+1,
  //     });
  //   };
  //   lowerCount = () => {
  //       this.setState({count:this.state.count-1});
  //   };
  //   resetCount = () => {
  //       this.setState({count:0})
  //   };

  handelInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    // console.log(this.props)
    const { id, img, title, author } = this.props.info;
    //const { handleDelete } = this.props;

    const checkInfo = (info)=>{
      if(info===true){
        return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, asperiores?</p>
      }else{
        return null
      }
    }
    return (
      <article className="book">
        <img src={img} width="150" alt="book" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author: {author}</h6>
          <button type="button" onClick={this.handelInfo}>
            toggleInfo
          </button>
          {checkInfo(this.state.showInfo)}
          
          
          
          {/* ternary opearation */}
        {/* {this.state.showInfo?<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum inventore dolores sequi molestias ab explicabo consequatur expedita eveniet perferendis commodi.  </p>:null} */}


          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis maxime nulla porro error quod fuga aliquid natus
              debitis vitae nemo.
            </p>
          )} */}
          {/* and */}
 
          {/* <button type="button"  onClick={()=>handleDelete(id)}>Delete me</button> */}
          {/* <Button handleDelete = {handleDelete}></Button> */}
          {/* <h3>Count:{this.state.count}</h3>
          <h3>name:{this.state.name}</h3> */}
          {/* <button type="button" onClick={this.addCount}>
            add count
          </button>
          <button type="button" onClick={this.resetCount}>
            Reset count
          </button>
          <button type="button" onClick={this.lowerCount}>
            Lower count
          </button> */}
        </div>
      </article>
    );
  }
}
