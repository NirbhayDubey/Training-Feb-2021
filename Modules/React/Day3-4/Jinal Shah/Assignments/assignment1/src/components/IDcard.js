import React, {Component} from 'react'

export default class IDcard extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { id,name,dob,cn,ca,img,pic } = this.props.info
    return (
      <div class="card-deck m-3 p-2 ">
      <div class="card bg-light text-center border-info font-weight-bold" >
        <div class="card-body">
          <Data img={img} pic={pic}></Data>
          <Personal id={id} name={name} dob={dob}></Personal>
          <CollegeComp cn={cn} ca={ca}></CollegeComp>
          {this.props.children}
        </div>
      </div>
    </div>
    )
  }
}

const Data = (props) => {
  const img = props.img
  const url =`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return(
    <section>
      <img class="float-left" width="80px" src={url} alt=""/>
      <img class="float-right" width="80px" src={props.pic} alt=""/> 
    </section>
  )
}

function CollegeComp (props){
  return (
    <section>
      <div>
        College Name :<br/>
      </div>
      <div>
        {props.cn} <br/>
      </div>
      <div>
        College Address :<br/>
      </div>
      <div>
        {props.ca} <br/>
      </div>
    </section>
  );
}

const Personal = (props) => {
  return(
    <section class="pt-5 mt-5">
      <div>
        ID : {props.id}<br/>
      </div>
      <div>
        Name : {props.name}<br/>
      </div>
      <div>
        Date of Birth : {props.dob}<br/>
      </div>
    </section>
  )
}
