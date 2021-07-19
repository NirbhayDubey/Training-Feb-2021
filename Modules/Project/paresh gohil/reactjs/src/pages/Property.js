import React, { useEffect, useState } from 'react'
import homeloan from "../img/home-loan.jpg"
import Property from "../services/Property"
import ListProperty from "../components/ListProperty"
import homeinspection from "../img/home-inspection.jpg"
import legalservice from "../img/legal-service.png"
import vastu from "../img/vastu.jpg"
import Searchproperty from "../components/Searchproperty"

const Propertys = (props) => {
    const [property,setProperty] = useState([])
    const {Property_Types} = property
    const [propertyname,setPropertyName] = useState(["Property Type"]) 
    const [budget,setBudget] = useState(["Budget"])
    const [pgtype,setPGtype] = useState(["PG Type"])
    const [lease,setLease] = useState("Lease")
    //const [city,setCity] = useState(props.match.params.city)
    // const [image,setImage] = useState([])

    // const [sqft,setSqft] = useState([])

    useEffect(() => {

        Property.getPropertyByCity(props.match.params.city).then((res) => {
            setProperty(res.data)
                // console.log(res.data)
                // res.data.forEach(property => {
                //     const {Property_Types} = property
                //     if(Property_Types === props.match.params.category){
                //         setProperty(property)
                        
                //     }
                        
                // });
        })
        // property.map((property) => {
        //     const {Property_City,Property_Address,Property_Type_id} = property
        //         Property.getPropertyImage(Property_City,Property_Address,Property_Type_id).then((res) => {
        //             setImage(res.data[0].Images.data)
        //         })
            
        //         Property.getPropertyDetails(Property_City,Property_Address,Property_Type_id).then((res) => {
        //             setSqft(res.data[0])
        //             console.log(res.data[0].superarea)
        //         })
                    
        // })
        

    },[props])

    console.log(property)
    return (
        <div className="container">
            <div className="container-fluid">
                { props.match.params.category === "buy" && 
                <div className="heading1">Welcome back! Let's continue your search</div>
                }
                { props.match.params.category === "Rent" && 
                <div className="heading1">Welcome back! Let's continue your search</div>
                }
                { props.match.params.category === "PG" && 
                <div className="heading1">Find a home away from <span style={{fontFamily:"Damion",fontSize:"45px"}}>home</span></div>
                }
                { props.match.params.category === "Plot" && 
                <div className="heading1">Pick your perfect piece of <span style={{fontFamily:"Damion",fontSize:"45px"}}>plot</span></div>
                }
                { props.match.params.category === "Commercial" && 
                <div className="heading1">Find your perfect <span style={{fontFamily:"Damion",fontSize:"45px"}}>workspace</span></div>
                }
                { props.match.params.category === "Post" && 
                <div className="heading1">Post your Property Ad for <span style={{fontFamily:"Damion",fontSize:"45px"}}>free</span></div>
                }

                    <Searchproperty props={props.match.params.city}/>
                


                {props.match.params.category === "buy" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                    <div className="d-inline-block ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Enter area or address" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"250px"}}/></div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {propertyname}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <label className="text-secondary font-weight-bold">Residential</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Flat
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown1">
                                        <button className="dropdown-item" id="1_BHK"  >1 BHK</button>
                                        <button className="dropdown-item" id="2_BHK"  >2 BHK</button>
                                        <button className="dropdown-item" id="3_BHK"  >3 BHK</button>
                                        <button className="dropdown-item" id="4_BHK"  >4 BHK</button>
                                        <button className="dropdown-item" id="5_BHK"  >5 BHK </button>
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown2" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        House
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown2">
                                        <button className="dropdown-item" id="1_BHK"  >1 BHK</button>
                                        <button className="dropdown-item" id="2_BHK"  >2 BHK</button>
                                        <button className="dropdown-item" id="3_BHK"  >3 BHK</button>
                                        <button className="dropdown-item" id="4_BHK"  >4 BHK</button>
                                        <button className="dropdown-item" id="5_BHK"  >5 BHK </button>
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown3" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Plot
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>




                                <label className="text-secondary font-weight-bold">Commercial</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Office Space
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-rupee-sign text-danger"></i> {budget}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center t1`} style={{width:"200px"}} aria-labelledby="navbarDropdown">
                                <input className="dropdown-item my-1 mx-5 w-50  border border-dark rounded" id="min" placeholder="Min" type="number" />
                                <input className="dropdown-item my-1 mx-5 border w-50 border border-dark rounded" id="max" placeholder="Max" type="number" />

                            </div>
                        </div>
                    </div>


                    <div className="mb-2 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-15px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"40px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }











                {props.match.params.category === "Rent" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                    <div className="d-inline-block ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Enter area or address" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"250px"}}/></div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {propertyname}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <label className="text-secondary font-weight-bold">Residential</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Flat
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown1">
                                        <button className="dropdown-item" id="1_BHK"  >1 BHK</button>
                                        <button className="dropdown-item" id="2_BHK"  >2 BHK</button>
                                        <button className="dropdown-item" id="3_BHK"  >3 BHK</button>
                                        <button className="dropdown-item" id="4_BHK"  >4 BHK</button>
                                        <button className="dropdown-item" id="5_BHK"  >5 BHK </button>
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown2" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        House
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown2">
                                        <button className="dropdown-item" id="1_BHK"  >1 BHK</button>
                                        <button className="dropdown-item" id="2_BHK"  >2 BHK</button>
                                        <button className="dropdown-item" id="3_BHK"  >3 BHK</button>
                                        <button className="dropdown-item" id="4_BHK"  >4 BHK</button>
                                        <button className="dropdown-item" id="5_BHK"  >5 BHK </button>
                                    </div>
                                </div>
                                <label className="text-secondary font-weight-bold">Commercial</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Office Space
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-rupee-sign text-danger"></i> {budget}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center t1`} style={{width:"200px"}} aria-labelledby="navbarDropdown">
                                <input className="dropdown-item my-1 mx-5 w-50  border border-dark rounded" id="min" placeholder="Min" type="number" />
                                <input className="dropdown-item my-1 mx-5 border w-50 border border-dark rounded" id="max" placeholder="Max" type="number" />

                            </div>
                        </div>
                    </div>


                    <div className="mb-2 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-15px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"40px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }








                {props.match.params.category === "PG" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                    <div className="d-inline-block ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Enter area or address" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"250px"}}/></div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {pgtype}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <label className="text-secondary font-weight-bold">Gender</label>
                                <hr className="mt-1 mx-4"/>
                                        <button className="dropdown-item" id="1_BHK"  >boys</button>
                                        <button className="dropdown-item" id="2_BHK"  >Girls</button>


                                <label className="text-secondary font-weight-bold">Looking For</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PG
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <button className="dropdown-item" id="1_BHK"  >Single Room</button>
                                        <button className="dropdown-item" id="2_BHK"  >Double Sharing Room</button>
                                        <button className="dropdown-item" id="2_BHK"  >Triple Sharing Room</button>
                                    </div>
                                </div>
                                <button className="dropdown-item" id="1_BHK"  >Room/Bed in a Shared-Flat</button>


                            </div>
                        </div>
                    </div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-rupee-sign text-danger"></i> {budget}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center t1`} style={{width:"200px"}} aria-labelledby="navbarDropdown">
                                <input className="dropdown-item my-1 mx-5 w-50  border border-dark rounded" id="min" placeholder="Min" type="number" />
                                <input className="dropdown-item my-1 mx-5 border w-50 border border-dark rounded" id="max" placeholder="Max" type="number" />

                            </div>
                        </div>
                    </div>


                    <div className="mb-2 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-15px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"40px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }







                {props.match.params.category === "Plot" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                    <div className="d-inline-block ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Enter area or address" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"250px"}}/></div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {propertyname}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <label className="text-secondary font-weight-bold">Residential</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Residential Plot
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown1">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Commercial Land
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown1">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Agricultural Land
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown1">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="ml-4" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-4 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-rupee-sign text-danger"></i> {budget}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center t1`} style={{width:"200px"}} aria-labelledby="navbarDropdown">
                                <input className="dropdown-item my-1 mx-5 w-50  border border-dark rounded" id="min" placeholder="Min" type="number" />
                                <input className="dropdown-item my-1 mx-5 border w-50 border border-dark rounded" id="max" placeholder="Max" type="number" />

                            </div>
                        </div>
                    </div>


                    <div className="mb-2 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-15px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"40px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }















                {props.match.params.category === "Commercial" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                        <div className="dropdown d-inline-block" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {lease}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <button className="dropdown-item" id="1_BHK"  >Buy</button>
                                <button className="dropdown-item" id="2_BHK"  >Lease</button>

                            </div>
                        </div>

                    <span className="ml-2" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="d-inline-block ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Enter area or address" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"200px"}}/></div>
                    <span className="ml-2" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-1 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-home-alt text-danger"></i> {propertyname}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown">
                                <label className="text-secondary font-weight-bold">Commercial</label>
                                <hr className="mt-1 mx-4"/>
                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Office Space
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>


                                <div className="dropright">
                                    <button className={`btn dropdown-toggle mb-1`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown1" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </button>
                                    <div className={`dropdown-menu text-center`} aria-labelledby="navbarDropdown3">
                                        <label>Area in sqft</label>
                                        <input className="dropdown-item my-1 border border-dark rounded" id="min" placeholder="Min" type="number" />
                                        <input className="dropdown-item border border border-dark rounded" id="max" placeholder="Max" type="number" />
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <span className="ml-1" style={{borderLeft:"1px solid grey",height:"0px"}}></span>
                    <div className="mb-2 ml-1 d-inline-block" >&nbsp; 
                        <div className="dropdown" >
                            <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginTop:"-10px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-rupee-sign text-danger"></i> {budget}
                            </button>
                            {/* <button className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</button> */}
                            <div className={`dropdown-menu text-center t1`} style={{width:"200px"}} aria-labelledby="navbarDropdown">
                                <input className="dropdown-item my-1 mx-5 w-50  border border-dark rounded" id="min" placeholder="Min" type="number" />
                                <input className="dropdown-item my-1 mx-5 border w-50 border border-dark rounded" id="max" placeholder="Max" type="number" />

                            </div>
                        </div>
                    </div>


                    <div className="mb-1 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-15px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"40px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }





                {props.match.params.category === "Post" && 
                <div className="container-fluid mb-5 searchbar " style={{width:"900px",height:"62px",borderRadius:"40px",border:"1px solid black"}}>
                    <div className="d-inline-block mt-3 ml-3"><i className='fas fa-map-marker-alt text-danger' ></i> <input placeholder="Let's Get Started" style={{fontSize:"18px",border:"none",outline:"none",display:"inline-block",width:"200px"}}/></div>
                    <div className="mb-1 d-inline-block " >&nbsp; 
                            <button className={`btn btn-danger font-weight-bold`}  style={{marginTop:"-5px",width:"170px",borderRadius:"30px",fontSize:"20px",marginLeft:"450px"}} type="button">
                            <i className="fas fa-search text-white" style={{fontSize:"16px"}}></i> search
                            </button>
                    </div>
                
                </div>

            }

        </div>

            { props.match.params.category === "buy" && 
            <div className="container-fluid " style={{marginLeft:"-80px"}}>
                <p style={{fontSize:"24px"}}>Popular Owner Properties</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>

                {property.map((property) => {
                    const {Property_Types} = property
                    if(Property_Types === props.match.params.category){
                        return( 
                            <ListProperty property={property}/>
                        )                             
                    }

                })} 
            </div>
            }


            { props.match.params.category === "Rent" && 
            <div className="container-fluid " style={{marginLeft:"-80px"}}>
                <p style={{fontSize:"24px"}}>Popular Owner Properties</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>

                {property.map((property) => {
                    const {Property_Types} = property
                    if(Property_Types === props.match.params.category){
                        return( 
                            <ListProperty property={property}/>
                        )                             
                    }

                })} 
            </div>
            }


            {props.match.params.category === "buy" && 
            <div className="container-fluid" style={{marginLeft:"-80px",width:"1260px"}}>
                <p style={{fontSize:"24px"}}>Property Services</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>
            
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={homeloan} alt="property images"/>
                    <div className="card-body">
                        <h5>Home Loans</h5>
                        <p className="text-secondary">View &#38; compare your best offers and apply online</p>
                    </div>
                </div>
                <div className="card mt-2  mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={homeinspection} alt="property images"/>
                    <div className="card-body">
                        <h5>Home Inspection</h5>
                        <p className="text-secondary mb-0 ">Make sure you're getting what your builder promised</p>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block mr-3  hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={legalservice} alt="property images"/>
                    <div className="card-body">
                        <h5>Legal Services</h5>
                        <p className="text-secondary mb-0 ">Get expert legal help for all property-related matters</p>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block  hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={vastu} alt="property images"/>
                    <div className="card-body">
                        <h5>Vastu</h5>
                        <p className="text-secondary mb-0 ">Consult the best Vastu Expert for your home or office</p>
                    </div>
                </div>
            </div>
            }


            {props.match.params.category === "Rent" && 
            <div className="container-fluid" style={{marginLeft:"-80px",width:"1260px"}}>
                <p style={{fontSize:"24px"}}>Property Services</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={`https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-packers-movers.jpg`} alt="property images"/>
                    <div className="card-body">
                        <h5>Packers and Movers</h5>
                        <p className="text-secondary">Home shifting and Vehicle shifting at Guaranteed lowest prices</p>
                    </div>
                </div>
                <div className="card mt-2  mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={`https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-rental-furniture.jpg`} alt="property images"/>
                    <div className="card-body">
                        <h5>Rental Furniture</h5>
                        <p className="text-secondary mb-0 ">Get premium furniture on rent for every need &#38; budget</p>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block mr-3  hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={`https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-rental-agreement.jpg`} alt="property images"/>
                    <div className="card-body">
                        <h5>Rental Agreement</h5>
                        <p className="text-secondary mb-0 ">Online agreement drafting &#38; stamping with home delivery</p>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block  hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <img className="card-img-top border-bottom img h-50" src={`https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-cleaning.jpg`} alt="property images"/>
                    <div className="card-body">
                        <h5>Home Cleaning</h5>
                        <p className="text-secondary mb-0 ">Keep your home and family safe with expert cleaning</p>
                    </div>
                </div>
            </div>
            }


            { props.match.params.category === "buy" &&
            <div className="container-fluid " style={{marginLeft:"-80px"}}>
                <p style={{fontSize:"24px"}}>Trending in {props.match.params.city}</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>
            
                {property.map((property) => {
                    const {Property_Types} = property
                    if(Property_Types === props.match.params.category){
                        return( 
                            <ListProperty property={property}/>
                        )                             
                    }
                })} 
            </div>
            }


            { props.match.params.category === "Rent" &&
            <div className="container-fluid " style={{marginLeft:"-80px"}}>
                <p style={{fontSize:"24px"}}>Trending in {props.match.params.city}</p>
                <hr className="border border-warning bg-warning rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>
            
                {property.map((property) => {
                    const {Property_Types} = property
                    if(Property_Types === props.match.params.category){
                        return( 
                            <ListProperty property={property}/>
                        )                             
                    }
                })} 
            </div>
            }

            <div className="container-fluid" style={{marginLeft:"-80px",width:"1260px"}}>
                <p style={{fontSize:"24px"}}>Tools &#38; Advice</p>
                <hr className="border border-primary bg-primary rounded" style={{width:"40px",height:"2px",marginLeft:"0px"}}/>
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <div className="  img img1" data-icon="rate-trends" ></div>
                    <div className="card-body">
                        <h5>Rates &#38; Trends</h5>
                        <p className="text-secondary">Know all about Property Rates &#38; Trends in your city</p>
                        <span className="text-danger font-weight-bold" >View now <i class="fal fa-arrow-right" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <div className="  img img1" data-icon="investment-hotspot" ></div>
                    <div className="card-body">
                        <h5>Investment Hotspot</h5>
                        <p className="text-secondary">Discover the top localities in your city for investment</p>
                        <span className="text-danger font-weight-bold" >View now <i class="fal fa-arrow-right" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <div className="  img img1" data-icon="research-insights" ></div>
                    <div className="card-body">
                        <h5>Research Insights</h5>
                        <p className="text-secondary">Get experts insights  and research reports on real estate</p>
                        <span className="text-danger font-weight-bold" >View now <i class="fal fa-arrow-right" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className="card mt-1 mb-3 d-inline-block mr-3 hover-shadow" style={{width:"18rem",height:"15rem",borderRadius:"10px"}}>
                    <div className="  img img1" data-icon="emi-calculator" ></div>
                    <div className="card-body">
                        <h5>EMI Calculator</h5>
                        <p className="text-secondary">Know how much you'll have to pay every month on your loan</p>
                        <span className="text-danger font-weight-bold" >View now <i class="fal fa-arrow-right" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Propertys