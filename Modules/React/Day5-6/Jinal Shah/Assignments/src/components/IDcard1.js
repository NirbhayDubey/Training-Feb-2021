import React, {Component} from 'react'

export default class IDcard extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const { id,name,dob,cn,ca,img,pic } = this.props.info
    const { handleDelete } = this.props;
    return (
      <div class="card-group">
      <div class="card card-primary card-block"  >
        <div class="card-body">
          <Data img={img} pic={pic}></Data>
          <Personal id={id} name={name} dob={dob}></Personal>
          <CollegeComp cn={cn} ca={ca}></CollegeComp>
          {/* {this.props.children} */}
          <DeleteRecord id={id} handleDelete={handleDelete}></DeleteRecord>
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
      <img class="img rounded-circle" width="80px" src={url} alt=""/>
      <img class="img1 float-right" width="80px" src={props.pic} alt=""/> 
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

const DeleteRecord = (props) => {
  //console.log(props.id)
  return(
    <div>
      <button class="btn btn-danger" onClick={ () => props.handleDelete(props.id)} >Delete Record</button>
    </div>
  )
}

const Personal = (props) => {
  return(
    <section class="mt-5 pt-5">
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
