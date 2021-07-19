import React, {Component} from 'react'

export default class IDcard2 extends Component {

  constructor(props){
    super(props)
    this.state = {
     showInfo : true
    }
  }
  
  handleInfo = () => {
    console.log('lnflieho')
    this.setState( state => ({
     showInfo : !this.state.showInfo
    }));
  }

  render() {

    console.log(this.props)
    const { id,name,dob,cn,ca,img,pic } = this.props.info
    const { handleDelete, handleInfo ,showInfo} = this.props;
    return (
     <div class="card-group mb-5" style={{height:'23rem'}} >
     
     <div class="card card-primary card-block">
      {this.state.showInfo ? 
        <div class="card-body">
          <Data img={img} pic={pic}></Data>
          <Personal id={id} name={name} dob={dob}></Personal>
          <CollegeComp cn={cn} ca={ca}></CollegeComp>
          <DeleteRecord id={id} handleDelete={handleDelete} ></DeleteRecord>
        </div>
       : null
     }
     <div class="card-footer">
        <button class="btn"  onClick={this.handleInfo} style={{color:'white', backgroundColor:'teal'}} >
         {this.state.showInfo ? 'hide info' : 'show info'}
        </button>
        </div>
      </div>
      </div>
    
    )
  }
}

const DeleteRecord = (props) => {
    return(
      <div>
       <br/>
        <button class="btn btn-danger" onClick={ () => props.handleDelete(props.id)} >
          Delete Record
        </button>
      </div>
    )
}

const ToggleRecord = (props) =>{
 return(
   <div>
     <button class="btn" onClick={() => props.handleInfo()} style={{color:'white', backgroundColor:'teal'}} >
      {props.showInfo ? 'Hide Card' : 'Show Card'}
      
     </button>
   </div>
 )
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

const Personal = (props) => {
  return(
    <section  class="mt-5 pt-5">
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

