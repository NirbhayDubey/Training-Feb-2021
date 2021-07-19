import React,{ useState} from 'react'
import logo from "../img/logo.png"
import {Link} from "react-router-dom"

const Header = (props) => {
    const [city,setCity] = useState("Ahmedabad")
    const [category,setCategory] = useState("buy")
    const [search,setSearch] = useState("")

    const handleCity = (e) => {
//        e.preventDefault();
        console.log(e.target.id)
        if(e.target.id === "Surat"){
            setCity("Surat")
        }
        else if(e.target.id === "Baroda"){
            setCity("Baroda")
        }
        else if(e.target.id === "Rajkot"){
            setCity("Rajkot")
        }
        else if(e.target.id === "Mumbai"){
            setCity("Mumbai")
        }
        else if(e.target.id === "Delhi"){
            setCity("Delhi")
        }
        else{
            setCity("Ahmedabad")
        }
    }


    const handleSearch = (e) => {
        if(e.target.id === "p1" || e.target.id === "p2" || e.target.id === "p3" || e.target.is === "p4"){
            setSearch("explore")
        }
    }

    return (
        <>
        <nav className="navbar bg-danger">
            <img className="navbar-brand" style={{width:"200px",height:"30px",marginLeft:"100px"}} alt="logo" src={logo}/>
            <div className="dropdown mr-auto" >
                <button className={`btn dropdown-toggle text-light`}  style={{outline:"none",boxShadow:"none"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {city}
                </button>
                {/* <Link className="dropdown-toggle text-light" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to={`/${city}`}>{city}</Link> */}
                <div className={`dropdown-menu `} aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" id="Ahmedabad" to={`/Ahmedabad/${category}`} onClick={handleCity}>Ahmedabad</Link>
                    <Link className="dropdown-item" id="Surat" to={`/Surat/${category}`} onClick={handleCity}>Surat</Link>
                    <Link className="dropdown-item" id="Baroda" to={`/Baroda/${category}`} onClick={handleCity}>Baroda</Link>
                    <Link className="dropdown-item" id="Rajkot" to={`/Rajkot/${category}`} onClick={handleCity}>Rajkot</Link>
                    <Link className="dropdown-item" id="Mumbai" to={`/Mumbai/${category}`} onClick={handleCity}>Mumbai</Link>
                    <Link className="dropdown-item" id="Delhi" to={`/Delhi/${category}`} onClick={handleCity}>Delhi</Link>
                </div>
            </div>
            <div className="dropdown ml-auto cursor-pointer" style={{marginRight:"-270px"}} >
                <button className={`btn dropdown-toggle text-light `} style={{outline:"none",boxShadow:"none"}}  id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Login
                </button>
                <div className={`dropdown-menu `} aria-labelledby="navbarDropdown">
                    {/* <a className="dropdown-item" href="/">Surat</a>
                    <a className="dropdown-item" href="/">Baroda</a>
                    <a className="dropdown-item" href="/">Rajkot</a>
                    <a className="dropdown-item" href="/">Mumbai</a>
                    <a className="dropdown-item" href="/">delhi</a> */}
                    <button className="btn btn-danger ml-4 mr-4" style={{width:"200px",height:"35px",borderRadius:"40px"}} type="button"><Link to="/bricks/user/login" style={{textDecoration:"none",color:"white"}}>Login</Link></button>
                    <text className="text-muted p-4" style={{fontSize:"14px"}}>New to Magicbricks ? <Link className="text-danger"  to="/bricks/user/registration">Sign Up</Link></text>
                </div>
            </div>
            <div className="btn btn-light ml-auto pt-1" style={{width:"200px",height:"35px",borderRadius:"40px",marginRight:"50px"}}><Link to={`/user/post/property`} style={{outline:"none",textDecoration:"none",color:"black"}}>Post Property
                <span className="budge bg-warning ml-1 px-2 " style={{borderRadius:"10px",fontSize:"11px"}} >FREE</span></Link>
            </div>
        </nav>


        <nav className="navbar bg-white border-bottom nav2">
            <div className="dropdown mr-auto " >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"50px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Buy
                </button>
                <div className={`dropdown-menu ml-5 dropdown-menu1`} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-3 mt-2 text-left text">
                                <text className="text">Popular Choices</text>
                                <hr />
                                <Link to={`/${city}/buy/explore/ready to move`} className="dropdown-item" >Ready to Move</Link>
                                <Link to={`/${city}/buy/explore/Owner Properties`} className="dropdown-item" >Owner Properties</Link>
                                <Link to={`/${city}/buy/explore/Budget Homes`}  className="dropdown-item" >Budget Homes</Link>
                                <Link to={`/${city}/buy/explore/Luxury Homes`}  className="dropdown-item" >Luxury Homes</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Property Types</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}/buy/propertytype/Flat`}>Flats in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/buy/propertytype/House`}>House/Villa in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/buy/propertytype/Plot`}>Plot in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/buy/propertytype/Office Space`}>Office Space in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/buy/propertytype/Commercial Shop`}>Commercial Shop in {city}</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Budget</text>
                                <hr />
                                <Link className="dropdown-item" to={`/${city}/buy/budget/50 Lac`} >Under &#8377; 50 Lac</Link>
                                <Link className="dropdown-item" to={`/${city}/buy/budget/50 Lac-1 Cr`} >&#8377; 50 Lac - &#8377; 1 Cr</Link>
                                <Link className="dropdown-item" to={`/${city}/buy/budget/1 Cr-1.5 Cr`} >&#8377; 1 Cr - &#8377; 1.5 Cr</Link>
                                <Link className="dropdown-item" to={`/${city}/buy/budget/1.5 Cr`} >Above &#8377; 1.5 Cr</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Explore</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`} >Builders</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Localities</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Projects</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Investment Hotspot</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Find an Agent</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Buying Tools</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`}>Propworth</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Rates &#38; Trends</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Buy vs Rent</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Tips and Guides</Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>





                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-1150px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Rent
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-1150px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-3 mt-2 text-left text">
                                <text className="text">Popular Choices</text>
                                <hr />
                                <Link to={`/${city}/Rent/explore/owner properties`} className="dropdown-item">Owner Properties</Link>
                                <Link to={`/${city}/Rent/explore/Verified Properties`} className="dropdown-item">Verified Properties</Link>
                                <Link to={`/${city}/Rent/explore/Furnished Homes`} className="dropdown-item">Furnished Homes</Link>
                                <Link to={`/${city}/Rent/explore/Bachelor Friendly Homes`} className="dropdown-item">Bachelor Freiendly Homes</Link>
                                <Link to={`/${city}/Rent/explore/Immediately Available`} className="dropdown-item">Immediately Available</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Property Types</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}/Rent/propertytype/Flats`}>Flats in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/Rent/propertytype/House`}>House/Villa in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/Rent/propertytype/PG`}>PG in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/Rent/propertytype/Office Space`}>Office Space in {city}</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}/Rent/propertytype/Commercial Shop`}>Commercial Shop in {city}</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Budget</text>
                                <hr />
                                <Link className="dropdown-item" to={`/${city}/Rent/budget/10000`} >Under &#8377; 10,000</Link>
                                <Link className="dropdown-item" to={`/${city}/Rent/budget/10000-15000`} >&#8377; 10,000 - &#8377; 15,000</Link>
                                <Link className="dropdown-item" to={`/${city}/Rent/budget/15000-25000`} >&#8377; 15,000 - &#8377; 25,000</Link>
                                <Link className="dropdown-item" to={`/${city}/Rent/budget/25000`} >Above &#8377; 25,000</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Explore</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`} >Localities</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Buy Vs Rent</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Find an Agent</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Share Requirement</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Property Services</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Rent Agreement</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Pay Rent <span className="budge bg-warning ml-1 px-2" style={{borderRadius:"5px",fontSize:"14px"}}>Flat &#8377;350 OFF</span></Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>





                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-1050px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    sell
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-1050px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-3 mt-2 text-left text">
                                <text className="text">For Owner</text>
                                <hr />
                                <Link to={`/user/post/property`} className="dropdown-item">Post Property <span className="budge bg-warning ml-1 px-2" style={{borderRadius:"20px",fontSize:"12px"}}>FREE</span></Link>
                                <Link to={`/${city}`} className="dropdown-item">My Dashboard</Link>

                                <hr />
                                <Link to={`/${city}`} className="dropdown-item">Sell / Rent Ad Packages</Link>
                                <text className="text-secondary" style={{fontSize:"14px",marginRight:"18px"}}>+91 1212 121 323 / </text><Link to={`/${city}`} className="text-secondary">Email Us</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">For Agent &#38; Builder</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`}>My Dashboard</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Ad Packages</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>iAdvantage</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Developer Lounge</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Sales Enquiry</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Selling Tools</text>
                                <hr />
                                <Link className="dropdown-item" to={`/${city}`} >Property Valuation</Link>
                                <Link className="dropdown-item" to={`/${city}`} >Find an Agent</Link>
                                <Link className="dropdown-item" to={`/${city}`} >Rates and Trends</Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>





                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-940px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home Loans
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-940px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-3 mt-2 text-left text">
                                <text className="text">Apply Now</text>
                                <hr />
                                <Link to={`/${city}`} className="dropdown-item">Home Loans</Link>
                                <Link to={`/${city}`} className="dropdown-item">Balance Transfer</Link>
                                <Link to={`/${city}`} className="dropdown-item">Loan Against Property</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Bank Partners</text>
                                <hr />
                                <Link className="dropdown-item" to={`/${city}`}>SBI Home Loan</Link>
                                <Link className="dropdown-item" to={`/${city}`}>HDFC Ltd Home Loan</Link>
                                <Link className="dropdown-item" to={`/${city}`}>PNB HFL Home Loan</Link>
                                <Link className="dropdown-item" to={`/${city}`}>ICICI Home Loan</Link>
                                <Link className="dropdown-item" to={`/${city}`}>Bajaj Housing</Link>
                                <Link className="dropdown-item" to={`/${city}`}>Bank of Baroda</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">PMAY</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >PMAY EMI Calculator</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >PMAY Subsidy Calculator</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >PMAY Eligiblity Calculator</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Calculators</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`} >Home Loan Eligiblity</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} >Home Loan EMI Calculator</Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>






                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-730px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Property Services
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-730px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-3 mt-2 text-left text">
                                <text className="text">Rent Services</text>
                                <hr />
                                <Link to={`/Pay Rent`} className="dropdown-item">Pay Rent</Link>
                                <Link to={`/Rent Agreement`} className="dropdown-item">Rent Agreement</Link>
                                <Link to={`/Rent Receipt`} className="dropdown-item">Generate Rent Receipt</Link>
                                <Link to={`/Tenant Vaerification`} className="dropdown-item">Tenant Verification</Link>
                                <Link to={`/Rental Furniture`} className="dropdown-item">Rental Furniture</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Buy / Sell Services</text>
                                <hr />
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`}>Property Lawyers</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Home Inspection</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Vastu</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`}>Design &#38; Decor</Link>
                            </div>
                            <div className="mx-3 mt-2 text">
                                <text className="text">Home Services</text>
                                <hr />
                                <Link className="dropdown-item" to={`/${city}`} >Packers &#38; Movers</Link>
                                <Link className="dropdown-item" to={`/${city}`} >Home Cleaning</Link>
                                <Link className="dropdown-item" to={`/${city}`} >Pest Control</Link>
                                <Link className="dropdown-item" to={`/${city}`} >Sanitization</Link>
                                <Link className="dropdown-item text-danger" to={`/${city}`} >View All Services <i class="fal fa-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>









                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-500px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-500px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="ml-3  mt-2 text-left text" >
                                <text className="text">News</text>
                                <hr style={{width:"100px" ,marginLeft:"0px"}}/>
                                <Link to={`/${city}`} className="dropdown-item" style={{width:"120px"}}>MB TV</Link>
                                <Link to={`/${city}`} className="dropdown-item" style={{width:"120px"}}>News</Link>
                                <Link to={`/${city}`} className="dropdown-item" style={{width:"120px"}}>City News</Link>
                            </div>
                            <div className=" mt-2 text" style={{marginLeft:"60px"}}>
                                <text className="text">Advice</text>
                                <hr style={{width:"100px" ,marginLeft:"0px"}}/>
                                <Link className="dropdown-item text-truncate" wrap="hard" to={`/${city}`} style={{width:"120px"}}>Research</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} style={{width:"120px"}}>Insights</Link>
                                <Link className="dropdown-item text-truncate" to={`/${city}`} style={{width:"120px"}}>Propindex</Link>
                            </div>
                            <div className="mt-2 mr-5 text" style={{marginLeft:"50px"}}>
                                <text className="text">Blog</text>
                                <hr style={{width:"100px" ,marginLeft:"0px"}}/>
                                <Link className="dropdown-item" to={`/${city}`}  style={{width:"120px"}}>Blog Collection</Link>
                                <Link className="dropdown-item" to={`/${city}`}  style={{width:"120px"}}>Lifestyle</Link>
                                <Link className="dropdown-item" to={`/${city}`}  style={{width:"120px"}}>Policies</Link>
                                <Link className="dropdown-item" to={`/${city}`}  style={{width:"120px"}}>Finance &#38; Legal</Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>







                <div className="dropdown" >
                <button className={`btn dropdown-toggle`}  style={{outline:"none",boxShadow:"none",marginLeft:"-300px"}} id="navbarDropdown" type="button"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Helps
                </button>
                <div className={`dropdown-menu dropdown-menu1`} style={{marginLeft:"-300px"}} aria-labelledby="navbarDropdown">
                        <div className=" d-flex">
                            <div className="mx-2 mt-2 text-left text">
                                <Link to={`/${city}`} className="dropdown-item ml-1" style={{width:"120px"}}>Help Center</Link>
                                <Link to={`/${city}`} className="dropdown-item ml-1" style={{width:"120px"}}>Sales Enquiry</Link>
                            </div>
                        </div>
                        </div>

                    {/* <div class="swiper-button-prev swiper-button-disabled" id="buyDrop-swiper-prev" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="true"></div>
                    <div class="swiper-button-next" id="buyDrop-swiper-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-dbcf16d31e78c10df" aria-disabled="false"></div> */}
                    
                </div>

        </nav>

        </>
    )
}

export default Header