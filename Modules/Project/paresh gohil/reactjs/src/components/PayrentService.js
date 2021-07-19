import React, { useState } from 'react'
import "../css/PayrentService.scss"

const PayrentService = () => {
	const [explore,setExplore] = useState("")

	const handleService = (e) => {
		if(e.target.id === "section_exploreServices"){
			setExplore("non-sticky")
		}
		else{
			setExplore("")
		}
	}


	
    return (
		<>
        <div class="hero">
          <div class="hero__content">
            <div class="hero__container">
                <div class="hero__breadcrumb">            
                    <ul class="hero__breadcrumb__list" itemScope="" itemType="https://schema.org/BreadcrumbList">
                        <li class="hero__breadcrumb__list--item" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                          <a href="https://www.magicbricks.com/" itemProp="item"><span itemProp="name">Home</span></a>
                          <meta itemProp="position" content="1"/>
                        </li>
                        <li class="hero__breadcrumb__list--item" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                          <a href="https://www.magicbricks.com/property-services/" itemProp="item"><span itemProp="name">Property Services</span></a>
                          <meta itemProp="position" content="2"/>
                        </li>
                        <li class="hero__breadcrumb__list--item" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                        	<span itemProp="name">Pay Rent</span>
                        	<meta itemProp="position" content="3"/>
                        </li>
                    </ul>
                </div>
            <div class="hero__secure-shild">
                <div class="hero__secure-shild--body">
                  <span class="svg-ico">
                  {/*  */}
                  {/* xml:space="preserve" */}
                    <svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
                    <path fill="#F5F6F6" d="M26,5.8c-2.9-0.2-5.7-1.5-7.7-3.5l-0.6-0.6c-0.9-0.9-2.5-0.9-3.4,0l-0.6,0.6C11.6,4.3,8.9,5.6,6,5.8
                      C4.7,5.9,3.8,7,3.8,8.2v3.5c0,7.8,4.2,15.1,11.1,18.9c0.3,0.2,0.8,0.3,1.2,0.3c0.4,0,0.8-0.1,1.2-0.3c6.8-3.9,11.1-11.1,11.1-18.9
                      V8.3C28.2,7,27.3,5.9,26,5.8z"></path>
                    <path fill="#2DB34A" d="M21.3,19.9c0,0.6-0.5,1-1,1h-8.5c-0.6,0-1-0.5-1-1v-5.8c0-0.6,0.5-1,1-1h0.8v-2.4c0-1.5,1.2-2.6,2.6-2.6h1.7
                      c1.5,0,2.6,1.2,2.6,2.6v2.4h0.8c0.6,0,1,0.3,1,0.9L21.3,19.9L21.3,19.9z"></path>
                    <path fill="#FFFFFF" d="M16,15c-0.7,0-1.2,0.5-1.2,1.2c0,0.4,0.2,0.7,0.5,0.9L15,18.4c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.3,0.2,0.4,0.2
                      h1.1c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.1-0.3,0.1-0.4l-0.3-1.2c0.3-0.2,0.5-0.6,0.5-0.9C17.2,15.6,16.7,15,16,15z M16.9,10h-1.7
                      c-0.4,0-0.8,0.3-0.8,0.8v2.4h3.2v-2.4C17.6,10.3,17.3,10,16.9,10L16.9,10z"></path>
                    </svg></span>
                  India's Safest Platform<br/>for Rent Transfers
                </div>
              </div>
              {/* <!-- <div class="hero__sub-title">Pay Rent & Win Big with</div>
              <h1 class="hero__title">Magicbricks <span class="text-uppercase">Cashback Fest</span></h1>
              <div class="hero__offer-validity">March 11<sup>th</sup> - April 17<sup>th</sup></div> --> */}
              <h1 class="hero__title">Pay Rent Using Your Credit Card</h1>

              <ul class="hero__list">
                <li class="hero__list--item">Cashback &amp; rewards upto Rs 23,000</li>
                <li class="hero__list--item">10-50 % off on Top Brands</li>
              </ul>






                <div class="hero__carousel swiper-container swiper-container-horizontal swiper-container-wp8-horizontal" id="creditCardSwiper">
                  <div class="swiper-wrapper cc-offer" id="payrent-offers" style={{width: "1564px", transitionDuration: "0ms", transform: "translate3d(-1296px, 0px, 0px)"}}><div class="cc-offer__card swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get Rs. 2,021 worth of vouchers">Get Rs. 2,021 worth of vouchers</strong>
        				<div class="sub-text" title="Get Rs. 2,021 worth of vouchers">for paying rent for 3 consecutive months with your HDFC Bank Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/HDFC-Logo.jpg" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="34">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get up to Rs.3,000 cashback">Get up to Rs.3,000 cashback</strong>
        				<div class="sub-text" title="Get up to Rs.3,000 cashback">for paying rent for 3 consecutive months on your Citibank Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/updtdCitiCCLogo.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="33">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide" data-swiper-slide-index="0" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">ASSURED CASHBACK</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get flat 5% Cashback upto Rs.350">Get flat 5% Cashback upto Rs.350</strong>
        				<div class="sub-text" title="Get flat 5% Cashback upto Rs.350">Pay with any credit or debit card through Payzapp</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/pay-zapp.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="4">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get up to Rs.1,000 cashback">Get up to Rs.1,000 cashback</strong>
        				<div class="sub-text" title="Get up to Rs.1,000 cashback">for paying rent for 3 consecutive months on your Bank of Baroda Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/BoBCCLogo.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="31">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-active" data-swiper-slide-index="2" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get Flat Rs.200 cashback+1%*">Get Flat Rs.200 cashback+1%*</strong>
        				<div class="sub-text" title="Get Flat Rs.200 cashback+1%*">Rewards by paying rent through your Amazon Pay ICICI Bank Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/Updated1AmazonICICILogo.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="32">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-next" data-swiper-slide-index="3" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get Rs. 2,021 worth of vouchers">Get Rs. 2,021 worth of vouchers</strong>
        				<div class="sub-text" title="Get Rs. 2,021 worth of vouchers">for paying rent for 3 consecutive months with your HDFC Bank Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/HDFC-Logo.jpg" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="34">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide" data-swiper-slide-index="4" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get up to Rs.3,000 cashback">Get up to Rs.3,000 cashback</strong>
        				<div class="sub-text" title="Get up to Rs.3,000 cashback">for paying rent for 3 consecutive months on your Citibank Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/updtdCitiCCLogo.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="33">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">ASSURED CASHBACK</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get flat 5% Cashback upto Rs.350">Get flat 5% Cashback upto Rs.350</strong>
        				<div class="sub-text" title="Get flat 5% Cashback upto Rs.350">Pay with any credit or debit card through Payzapp</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/pay-zapp.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="4">T&amp;C apply</div>
        			  </div>
        			</div><div class="cc-offer__card swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style={{width: "300px", marginRight: "24px"}}>
        			  <div class="cc-offer__tag"><div class="cc-offer__tag--text">EXCLUSIVE OFFER</div></div>
        			  <div class="cc-offer__desc">
        				<strong title="Get up to Rs.1,000 cashback">Get up to Rs.1,000 cashback</strong>
        				<div class="sub-text" title="Get up to Rs.1,000 cashback">for paying rent for 3 consecutive months on your Bank of Baroda Credit Card</div>
        			  </div>
        			  <div class="cc-offer__footer">
        				<div class="cc-offer__brand">
        				  <img src="https://img.staticmb.com/mbimages/appimages/mailers/BoBCCLogo.png" alt=""/>
        				</div>
        				<div class="cc-offer__link js-offer-detail" data-type="offer" data-id="31">T&amp;C apply</div>
        			  </div>
        			</div></div>
                  {/* <!-- Add Pagination --> */}
                  <div class="swiper-button-prev">
                    <span class="caret-left"></span>
                  </div>
                  <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                  <div class="swiper-button-next">
                    <span class="caret-right"></span>
                  </div>
                </div>

              {/* <!-- <p class="hero__disclaimer">*Offers are provided by banks</p> --> */}
            </div>
          </div>
        </div>

		
		
		<div class={`rent-widget ${explore}`}>
		  {/* <!-- <div class="rent-widget__heading">Fill in your details</div> --> */}
		  <div class="mb-form__container rent-widget__main-form">

		    <div class="paying-for">
		      <div class="radio radio--horizontal">
		        <div class="radio__title">I am paying for the month:</div>
		        <div class="radio__group">

		          <div class="radio__item" onclick="setDDValue('payMonth','May'); fireGtmOnInput('payMonth')">



		                <input class="radio__input" type="radio" id="May" autocomplete="off" name="payingForMonth"/>


		            <label for="May" class="radio__label">May</label>

		            </div>

		          <div class="radio__item" onclick="setDDValue('payMonth','Jun'); fireGtmOnInput('payMonth')">


		            <input class="radio__input" checked="" type="radio" id="Jun" autocomplete="off" name="payingForMonth"/>



		            <label for="Jun" class="radio__label">Jun</label>

		            </div>

		          <div class="radio__item" onclick="setDDValue('payMonth','Jul'); fireGtmOnInput('payMonth')">



		                <input class="radio__input" type="radio" id="Jul" autocomplete="off" name="payingForMonth"/>


		            <label for="Jul" class="radio__label">Jul</label>

		            </div>

		        </div>
		      </div>
		    </div>

		    <div class="mb-form__col-group">
		      <div class="mb-form__col">
		        <div class="mb-form__row">
		          <label class="mb-form__label">Rent amount</label>
		          <div class="mb-form__prefix">
		            <div class="mb-form__prefix__pre">₹</div>
		            <input type="number" id="rentAmount" name="rentAmount" maxlength="6" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onblur="checkRequiredForFieldPay(this.id); fireGtmOnInput(this.id)" onkeypress="validateNumber(event)" autocomplete="off" class="mb-form__input"/>
		          </div>
		          <div class="mb-form__error">Enter a valid amount</div>
		        </div>
		      </div>
		      <div class="mb-form__col">
		        <div class="mb-form__row">
		          <label class="mb-form__label">Residing city</label>
		          <input type="text" id="city" onblur="checkRequiredForFieldPay(this.id)" name="city" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		        </div>
		      </div>
		    </div>

		    <div class="mb-form__col-group">
		      <div class="mb-form__col">
		        <div class="mb-form__row">
		          <label class="mb-form__label">Landlord name</label>
		          <input type="text" id="landlordName" name="landlordName" autocomplete="off" onblur="checkRequiredForFieldPay(this.id); fireGtmOnInput(this.id)" class="mb-form__input"/>
		          <div class="mb-form__error">Error example</div>
		        </div>
		      </div>
		      <div class="mb-form__col">
		        <div class="mb-form__row focused-fixed focused">
		          <label class="mb-form__label">Landlord mobile number</label>
		          <div class="mb-form__prefix has-mobile">
		            <div class="mb-form__prefix__pre">
		              <div class="form__prefix">
		                <div class="isd-select">
		                  <select name="landLordISD" id="landLordISD" class="mb-form__select-native" onchange="setIsdVal(this.value,'+')">

		                        <option value="50">IND +91</option>

		                        <option value="51">USA +1</option>

		                        <option value="53">ARE +971</option>

		                        <option value="54">CAN +1</option>

		                        <option value="55">AUS +61</option>

		                        <option value="56">PAK +92</option>

		                        <option value="57">SAU +966</option>

		                        <option value="58">KWT +965</option>

		                        <option value="59">ZAF +27</option>

		                        <option value="60">AFG +93</option>

		                        <option value="61">ALB +355</option>

		                        <option value="62">DZA +213</option>

		                        <option value="63">ASM +684</option>

		                        <option value="64">AND +376</option>

		                        <option value="65">AGO +244</option>

		                        <option value="66">AIA +264</option>

		                        <option value="67">ATG +268</option>

		                        <option value="68">ARG +54</option>

		                        <option value="69">ARM +374</option>

		                        <option value="71">AZE +994</option>

		                        <option value="72">BHS +1242</option>

		                        <option value="73">BHR +973</option>

		                        <option value="74">BGD +880</option>

		                        <option value="75">BRB +1246</option>

		                        <option value="76">BLR +375</option>

		                        <option value="78">BLZ +501</option>

		                        <option value="79">BMU +1441</option>

		                        <option value="80">BTN +975</option>

		                        <option value="81">BOL +591</option>

		                        <option value="82">BIH +387</option>

		                        <option value="83">BWA +267</option>

		                        <option value="84">BRA +55</option>

		                        <option value="85">BRN +673</option>

		                        <option value="87">BFA +226</option>

		                        <option value="88">BDI +257</option>

		                        <option value="89">KHM +855</option>

		                        <option value="90">CMR +237</option>

		                        <option value="91">CPV +238</option>

		                        <option value="92">CYM +345</option>

		                        <option value="93">CAF +236</option>

		                        <option value="94">TCD +235</option>

		                        <option value="95">CHL +56</option>

		                        <option value="96">CHN +86</option>

		                        <option value="97">COL +57</option>

		                        <option value="98">COM +269</option>

		                        <option value="99">COD +243</option>

		                        <option value="100">COG +242</option>

		                        <option value="101">COK +682</option>

		                        <option value="102">CRI +506</option>

		                        <option value="103">CIV +225</option>

		                        <option value="105">CUB +53</option>

		                        <option value="109">DJI +253</option>

		                        <option value="110">DMA +767</option>

		                        <option value="111">DOM +1</option>

		                        <option value="112">TLS +670</option>

		                        <option value="113">ECU +593</option>

		                        <option value="114">EGY +20</option>

		                        <option value="115">SLV +503</option>

		                        <option value="116">GNQ +240</option>

		                        <option value="117">ERI +291</option>

		                        <option value="119">ETH +251</option>

		                        <option value="120">FLK +500</option>

		                        <option value="121">FRO +298</option>

		                        <option value="122">FJI +679</option>

		                        <option value="125">GUF +594</option>

		                        <option value="126">PYF +689</option>

		                        <option value="127">GAB +241</option>

		                        <option value="128">GMB +220</option>

		                        <option value="129">GEO +995</option>

		                        <option value="131">GHA +233</option>

		                        <option value="132">GIB +350</option>

		                        <option value="134">GRL +299</option>

		                        <option value="135">GRD +473</option>

		                        <option value="136">GLP +590</option>

		                        <option value="137">GUM +671</option>

		                        <option value="138">GTM +502</option>

		                        <option value="139">GIN +224</option>

		                        <option value="140">GNB +245</option>

		                        <option value="141">GUY +592</option>

		                        <option value="142">HTI +509</option>

		                        <option value="143">HND +504</option>

		                        <option value="144">HKG +852</option>

		                        <option value="146">ISL +354</option>

		                        <option value="147">IDN +62</option>

		                        <option value="148">IRN +98</option>

		                        <option value="149">IRQ +964</option>

		                        <option value="151">ISR +972</option>

		                        <option value="153">JAM +1</option>

		                        <option value="154">JPN +81</option>

		                        <option value="155">JOR +962</option>

		                        <option value="156">KAZ +7</option>

		                        <option value="157">KEN +254</option>

		                        <option value="158">KIR +686</option>

		                        <option value="159">MDA +82</option>

		                        <option value="160">KGZ +996</option>

		                        <option value="161">LAO +856</option>

		                        <option value="163">LBN +961</option>

		                        <option value="164">LSO +266</option>

		                        <option value="165">LBR +231</option>

		                        <option value="166">LBY +218</option>

		                        <option value="167">LIE +423</option>

		                        <option value="170">MAC +853</option>

		                        <option value="171">MKD +389</option>

		                        <option value="172">MDG +261</option>

		                        <option value="173">MWI +265</option>

		                        <option value="174">MYS +60</option>

		                        <option value="175">MDV +960</option>

		                        <option value="176">MLI +223</option>

		                        <option value="178">MTQ +596</option>

		                        <option value="179">MRT +222</option>

		                        <option value="180">MUS +230</option>

		                        <option value="181">MYT +269</option>

		                        <option value="182">MEX +52</option>

		                        <option value="183">FSM +691</option>

		                        <option value="184">KOR +373</option>

		                        <option value="185">MCO +377</option>

		                        <option value="186">MNG +976</option>

		                        <option value="187">MSR +664</option>

		                        <option value="188">MAR +212</option>

		                        <option value="189">MOZ +258</option>

		                        <option value="190">MMR +95</option>

		                        <option value="191">NAM +264</option>

		                        <option value="192">NRU +674</option>

		                        <option value="193">NPL +977</option>

		                        <option value="194">ANT +599</option>

		                        <option value="196">NCL +687</option>

		                        <option value="197">NZL +64</option>

		                        <option value="198">NIC +505</option>

		                        <option value="199">NER +227</option>

		                        <option value="200">NGA +234</option>

		                        <option value="201">NIU +683</option>

		                        <option value="202">NFK +672</option>

		                        <option value="203">PRK +850</option>

		                        <option value="204">NOR +47</option>

		                        <option value="205">OMN +968</option>

		                        <option value="206">PAN +507</option>

		                        <option value="207">PNG +675</option>

		                        <option value="208">PRY +595</option>

		                        <option value="209">PER +51</option>

		                        <option value="210">PHL +63</option>

		                        <option value="211">PCN +649</option>

		                        <option value="214">PRI +939</option>

		                        <option value="215">QAT +974</option>

		                        <option value="216">REU +262</option>

		                        <option value="218">RUS +7</option>

		                        <option value="219">RWA +250</option>

		                        <option value="220">WSM +685</option>

		                        <option value="221">SMR +378</option>

		                        <option value="222">STP +239</option>

		                        <option value="223">SEN +221</option>

		                        <option value="224">SCG +381</option>

		                        <option value="225">SYC +248</option>

		                        <option value="226">SLE +232</option>

		                        <option value="227">SGP +65</option>

		                        <option value="230">SLB +677</option>

		                        <option value="231">SOM +252</option>

		                        <option value="233">LKA +94</option>

		                        <option value="234">SHN +290</option>

		                        <option value="235">KNA +869</option>

		                        <option value="236">LCA +758</option>

		                        <option value="237">SPM +508</option>

		                        <option value="238">VCT +784</option>

		                        <option value="239">SDN +249</option>

		                        <option value="240">SUR +597</option>

		                        <option value="241">SWZ +268</option>

		                        <option value="243">CHE +41</option>

		                        <option value="244">SYR +963</option>

		                        <option value="245">TWN +886</option>

		                        <option value="246">TJK +992</option>

		                        <option value="247">TZA +255</option>

		                        <option value="248">THA +66</option>

		                        <option value="249">TGO +228</option>

		                        <option value="250">TKL +690</option>

		                        <option value="251">TON +676</option>

		                        <option value="252">TTO +868</option>

		                        <option value="253">TUN +216</option>

		                        <option value="254">TUR +90</option>

		                        <option value="255">TKM +993</option>

		                        <option value="256">TCA +649</option>

		                        <option value="257">TUV +688</option>

		                        <option value="258">UGA +256</option>

		                        <option value="259">UKR +380</option>

		                        <option value="260">URY +598</option>

		                        <option value="261">UZB +998</option>

		                        <option value="262">VUT +678</option>

		                        <option value="263">VEN +58</option>

		                        <option value="264">VNM +84</option>

		                        <option value="265">VGB +284</option>

		                        <option value="266">VIR +340</option>

		                        <option value="267">WLF +681</option>

		                        <option value="268">YEM +967</option>

		                        <option value="269">YUG +381</option>

		                        <option value="270">RNR +260</option>

		                        <option value="271">ZWE +263</option>

		                  </select>
		                  <span class="isd-display" id="isdDisplay">+91</span>
		                </div>
		              </div>
		            </div>
		            <input type="number" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onblur="checkRequiredForFieldPay(this.id); fireGtmOnInput(this.id)" maxlength="10" id="landlordMobile" name="landlordMobile" autocomplete="off" class="mb-form__input" placeholder="Mobile Number"/>
		          </div>
		          <div class="mb-form__error">Enter valid mobile number</div>
		          <div id="errMsgIndiaToShow" class="mb-form__hint">
		            <span class="mb-form__info-icn"></span>
		            Your landlord gets an update
		          </div>
		        </div>
		      </div>
		    </div>

		    <div class="use-landlords">
		      <div class="radio-o radio--horizontal">
		        <div class="radio-o__title">Use Landlord's<sup style={{color:"#d8232a"}}>*</sup> :</div>

		        {/* <!-- Radio to be activated in Phase 2 --> */}
		        <div class="radio-o__group">
		          <div class="radio-o__item m-r-10">
		            <input class="radio-o__input js-rent-transaction-type" onclick="setAccontDetails('accountNo');
		fireGtmAndEcomm(event,'Payment mode selection changed','Rent Details Form', 'payment mode selected', 'Account No', 'Account No');" type="radio" name="rentTransactionType" id="llBankAccount"/>
		            <label for="llBankAccount" class="radio-o__label">Bank Account Number</label>
		          </div>
		          <div class="radio-o__item">
		            <input class="radio-o__input js-rent-transaction-type" onclick="setAccontDetails('upi');
		fireGtmAndEcomm(event,'Payment mode selection changed','Rent Details Form', 'payment mode selected', 'upi', 'upi');" type="radio" name="rentTransactionType" id="llUPI"/>
		            <label for="llUPI" class="radio-o__label">UPI ID</label>
		          </div>
		        </div>
		      </div>
		    </div>

		    <div class="mb-form__col-group">
		      <div class="mb-form__col">
		        <div class="mb-form__row" id="payrent-ifsc-field" style={{display: "none"}}>
		          <label class="mb-form__label">IFSC Code</label>
		          <input type="text" style={{textTransform: "uppercase"}} id="ifsc" name="ifsc" onblur="checkRequiredForFieldPay(this.id); verifyIfsc();fireGtmOnInput(this.id)" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		        </div>
		        <div class="mb-form__row" id="payrent-upi-field" style={{display: "none"}}>
		          <label class="mb-form__label">UPI ID</label>
		          <input type="text" id="upi" onblur="fireGtmOnInput(this.id); verifyVpa()" maxlength="45" name="upi" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		          <div id="upiVerify" class="mb-form__success mb-form__success--has-icon">Verified!</div>
		        </div>
		      </div>
		      <div class="mb-form__col">
		        <div class="mb-form__row" id="payrent-landlordpan-field" style={{display: "none"}}>
		          <label class="mb-form__label">Landlord PAN <span id="panoptional" class="font-12">(optional)</span></label>
		          <input type="text" id="landLordPAN" name="landLordPAN" onblur="checkRequiredForFieldPay(this.id);fireGtmOnInput(this.id)" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		        </div>
		      </div>
		    </div>







		    <div class="mb-form__col-group" id="accountDetails" style={{display: "none"}}>
		      <div class="mb-form__col">
		        <div class="mb-form__row">
		          <label class="mb-form__label">Account number</label>
		          <input type="number" onkeypress="validateNumber(event)" style={{webkittextsecurity: "disc"}} minlength="9" maxlength="18" oninput=" if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onblur="validteAccountNumber();fireGtmOnInput(this.id)" id="accNo" name="accNo" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		        </div>
		      </div>
		      <div class="mb-form__col">
		        <div class="mb-form__row">
		          <label class="mb-form__label">Re-enter account number</label>
		          <input type="number" onkeypress="validateNumber(event)" id="reAccNo" minlength="9" maxlength="18" name="reAccNo" oninput="if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" onblur="validteAccountNumber(true);fireGtmOnInput(this.id)" autocomplete="off" class="mb-form__input"/>
		          <div class="mb-form__error">error example</div>
		        </div>
		      </div>
		    </div>



		  </div>
		  <div class="rent-widget__footer">

		    <div class="mb-form__col-group">

		      <div class="mb-form__col">
		        <div id="ladnlordUserTxnValidMsg" class="rent-widget--limit-error"></div>
		      </div>

		      <div class="mb-form__col">
		        <a id="ladnlordUserTxnValidDiv" href="#!" onclick="checkRequiredForRent('Landlord',true);" class="mb-form__cta">
		          Make Payment
		          <span class="svg-ico">
				  {/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
				  {/* xml:space="preserve" */}
		            <svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
		            <path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
		                                      s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
		                                      C31,15.6,30.8,15.2,30.5,14.9z"></path>
		            </svg>
		          </span>
		        </a>
		      </div>
		    </div>
		    <div class="form__disclaimer">By continuing, I agree to <a href="https://www.magicbricks.com/propertyservices/pay-property-rent-tnc.html" target="_blank" rel="noreferrer" class="mb-form__disclaimer-link">Pay Rent T&amp;C</a></div>
		  </div>


		</div>






		<div class="container-fluid ">
			<div class="container">
				<div class="payrent__section-left">
					<section class="mkt-place__section">
						<div class="mkt-place__section__title">
							<div class="mkt-place__section__title--text1"><h2>How it Works</h2></div>
							<div class="mkt-place__section__title--text2">It's easy, quick, and the most rewarding way to pay your monthly rent.</div>
						</div>
						<div class="mkt-place__how-works has-payrent">
							<ul class="mkt-place__how-works__list">
								<li class="mkt-place__how-works__list--item">
									<div class="mkt-place__how-works__list--item--graphic ico-choose-package"></div>
									<div class="mkt-place__how-works__list--item--title">1. Provide your rent and <br/>landlord's account details</div>
								</li>
								<li class="mkt-place__how-works__list--item">
									<div class="mkt-place__how-works__list--item--graphic ico-make-payment"></div>
									<div class="mkt-place__how-works__list--item--title">2. Make payment using <br/>your credit card</div>
								</li>
								<li class="mkt-place__how-works__list--item">
									<div class="mkt-place__how-works__list--item--graphic ico-lanlord-get-rent"></div>
									<div class="mkt-place__how-works__list--item--title">3. Landlord gets the rent <br/>within 1 working day</div>
								</li>
							</ul>
						</div>
					</section>
				</div>
			</div>
		</div>




		<div class="container-fluid ">
			<div class="container">
				<div class="payrent__section-left">
					<section class="mkt-place__section">
					<div class="mkt-place__section__title">
						<div class="mkt-place__section__title--text1"><h2>Magicbricks Promise</h2></div>

							<div class="mkt-place__section__title--text2">We're committed to making your rent payments more secure, easy and rewarding.</div>

					</div>
					<div class="mkt-place__promise">

						<ul class="mkt-place__promise__list">
							<li class="mkt-place__promise__list--item">
								<div class="mkt-place__promise__list--item--graphic">
									<span class="svg-ico step-1">
									{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
									{/* xml:space="preserve" */}
										<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
											<path fill="#303030" stroke="#FCF0F0" d="M14,30.3l1.5,0.7c0.2,0.1,0.4,0.1,0.6,0l1.7-0.7c5.9-2.5,9.8-8.4,9.8-14.9V7.7
												c0-0.3-0.2-0.5-0.4-0.7l-11-5.9C16,1,15.7,1,15.5,1.1L4.8,7C4.6,7.2,4.4,7.4,4.4,7.7v7.7C4.4,21.9,8.2,27.7,14,30.3
												C14,30.3,14,30.3,14,30.3z"></path>
											<path fill="#FFFFFF" d="M6.1,8.2l9.7-5.5l10,5.5v7.1c0,5.9-3.4,11.2-8.7,13.4l0,0l-1.3,0.6l-1.2-0.5c-5.2-2.3-8.5-7.6-8.5-13.4V8.2z
												"></path>
											<path fill="#D8262A" d="M20.4,12.1l-5.6,5.5l-2.3-2.3l-1.2,1.1l3.5,3.4l6.8-6.6L20.4,12.1z"></path>
										</svg>
									</span>
								</div>
								<div class="mkt-place__promise__list--item__content">
									<div class="mkt-place__promise__list--item__content--title">100% Secure Payments</div>
									<div class="mkt-place__promise__list--item__content--text">Rest assured when you pay your rent through Magicbricks, all your information is secure. We never store your credit card details.</div>
								</div>
							</li>
							<li class="mkt-place__promise__list--item">
								<div class="mkt-place__promise__list--item--graphic">
									<span class="svg-ico step-2">
									{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
									{/* xml:space="preserve" */}
										<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
											<path fill="#303030" stroke="#303030" stroke-width="0.5" d="M1.4,29.8h26.9c0.2,0,0.4-0.2,0.4-0.4v-0.9c0-6.2-4.9-8.4-9.5-8.4h-0.3
												v-2.4c1.3-0.8,2.4-2.1,3.1-3.6h1c1.1,0,2.1-0.9,2.1-2v-2c0-1.1-0.9-2-2.1-2H22V6.8c0-3.3-2.7-5.9-6.1-5.9h-2c-3.4,0-6.1,2.7-6.1,5.9
												V8H6.9c-1.1,0-2.1,0.9-2.1,2v2c0,1.1,0.9,2,2.1,2h1c0.6,1.5,1.6,2.7,2.9,3.5c0,0,0,0,0,0.1v2.4h-0.3c-4.6,0-9.6,2.2-9.6,8.4v0.9
												C1,29.6,1.2,29.8,1.4,29.8L1.4,29.8z"></path>
											<path fill="#FFFFFF" d="M13.9,1.6h2c2.8,0,5.2,2.2,5.3,4.9c-1.4-2.3-3.7-3.7-6.3-3.7c-2.6,0-5,1.4-6.3,3.7C8.7,3.8,11,1.6,13.9,1.6z
												 M24.2,10.1v2c0,0.7-0.6,1.3-1.3,1.3H22V8.8h0.9C23.6,8.8,24.2,9.3,24.2,10.1z M7.8,13.4H6.9c-0.7,0-1.3-0.6-1.3-1.3v-2
												c0-0.7,0.6-1.3,1.3-1.3h0.9C7.8,8.8,7.8,13.4,7.8,13.4z"></path>
											<path fill="#FFFFFF" d="M8.9,14.5c1.8,0.7,2.9,0.8,3.5,0.8c0.2,0.7,0.8,1.2,1.5,1.2h1.8c0.9,0,1.6-0.7,1.6-1.5
												c0-0.9-0.7-1.5-1.6-1.5h-1.8c-0.7,0-1.4,0.5-1.5,1.2c-0.5,0-1.8-0.2-3.9-1.1V8.3c1-2.9,3.5-4.8,6.4-4.8c2.9,0,5.4,1.9,6.4,4.8v5.3
												l0,0c-1,2.7-3.6,4.5-6.3,4.5C12.4,18.1,10.1,16.7,8.9,14.5L8.9,14.5z"></path>
											<path fill="#FFFFFF" d="M14.9,18.8c1.1,0,2.1-0.3,3.1-0.7v2.1l-0.2,0.1c-1.9,1.1-4.2,1.1-6.1,0l-0.2-0.1V18
												C12.6,18.5,13.7,18.8,14.9,18.8z"></path>
											<path fill="#FFFFFF" d="M1.7,28.5c0-1.8,0.6-7.7,8.8-7.7h0.5l0.3,0.2c1.1,0.6,2.2,0.9,3.4,0.9c1.2,0,2.4-0.3,3.4-0.9l0.3-0.2h0.6
												c8.2,0,8.8,5.9,8.8,7.7V29H1.7L1.7,28.5L1.7,28.5z"></path>
											<circle fill="#FFFFFF" stroke="#303030" cx="25.9" cy="26" r="5.1"></circle>
											<path fill="#D8262A" d="M13.1,14.9c0-0.5,0.4-0.8,0.8-0.8h1.8c0.5,0,0.8,0.4,0.8,0.8c0,0.5-0.4,0.8-0.8,0.8h-1.8
												C13.5,15.7,13.1,15.4,13.1,14.9z M28.2,23.9L24.9,27l-1.3-1.3l-0.7,0.7l2,2l3.9-3.8L28.2,23.9z"></path>
										</svg>
									</span>
								</div>
								<div class="mkt-place__promise__list--item__content">
									<div class="mkt-place__promise__list--item__content--title">Transparency</div>
									<div class="mkt-place__promise__list--item__content--text">A digital rent receipt will be automatically generated and mailed to your registered email address, every time you pay the rent.</div>
								</div>
							</li>
							<li class="mkt-place__promise__list--item">
								<div class="mkt-place__promise__list--item--graphic">
									<span class="svg-ico step-3">
									{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
									{/* xml:space="preserve" */}
										<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
											<path fill="#FFFFFF" d="M25,30.4h2.4c1,0,1.9-0.8,1.9-1.9V10.4c0-1-0.8-1.9-1.9-1.9h-3h1.4H4.6c-1,0-1.9,0.8-1.9,1.9
												s0.8,1.9,1.9,1.9h19.8L25,30.4L25,30.4z"></path>
											<path fill="#FFFFFF" d="M26.1,13.9v14.7c0,1-0.8,1.9-1.9,1.9H4.6c-1,0-1.9-0.8-1.9-1.9V12.3h21.8C25.4,12.3,26.1,13,26.1,13.9
												L26.1,13.9z"></path>
											<path fill="#D8262A" d="M29.3,17.1c0,1.1-0.9,2-2,2h-7.1c-1.7,0-3.1,1.4-3.1,3c0,1.7,1.4,3,3.1,3H27c1.2,0,2.2-1,2.2-2.2
												C29.3,22.9,29.3,17.1,29.3,17.1z"></path>
											<path fill="#333333" d="M27.4,7.9H24c-0.3,0-0.6,0.3-0.6,0.6c0,0.3,0.3,0.6,0.6,0.6h3.4c0.7,0,1.3,0.6,1.3,1.3v6.7
												c0,0.8-0.6,1.4-1.4,1.4h-0.6v-4.3c0-1.4-1.1-2.5-2.5-2.5h-8.7V9.9c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6v1.8H4.6
												c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3h3.9c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6H4.6c-1.4,0-2.5,1.1-2.5,2.5l0,0.1
												c0,0,0,0,0,0v18c0,1.4,1.1,2.5,2.5,2.5h22.8c1.4,0,2.5-1.1,2.5-2.5V10.4C29.9,9,28.8,7.9,27.4,7.9z M28.7,19.2v3.7
												c0,0.9-0.7,1.6-1.6,1.6h-6.8c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h7.1C27.8,19.6,28.3,19.5,28.7,19.2z M3.3,28.5V12.5
												c0.4,0.2,0.8,0.4,1.3,0.4h19.6c0.7,0,1.3,0.6,1.3,1.3v4.3h-5.3c-2,0-3.6,1.6-3.6,3.6c0,2,1.6,3.6,3.6,3.6h5.3v2.8
												c0,0.7-0.6,1.3-1.3,1.3H4.6C3.9,29.8,3.3,29.2,3.3,28.5L3.3,28.5z M27.4,29.8h-1.1c0.2-0.4,0.4-0.8,0.4-1.3v-2.8H27
												c0.6,0,1.2-0.2,1.6-0.5v3.4C28.7,29.2,28.1,29.8,27.4,29.8z"></path>
											<path fill="#333333" d="M19.1,10.3c1.5,0,2.8-1.2,2.8-2.8c0-1.5-1.2-2.8-2.8-2.8c-1.5,0-2.8,1.2-2.8,2.8
												C16.4,9.1,17.6,10.3,19.1,10.3z M19.1,6c0.9,0,1.6,0.7,1.6,1.6S20,9.2,19.1,9.2c-0.9,0-1.6-0.7-1.6-1.6S18.2,6,19.1,6z M13.4,6.5
												c1.5,0,2.8-1.2,2.8-2.8c0-1.5-1.2-2.8-2.8-2.8c-1.5,0-2.8,1.2-2.8,2.8C10.7,5.3,11.9,6.5,13.4,6.5z M13.4,2.2c0.9,0,1.6,0.7,1.6,1.6
												c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C11.8,2.9,12.5,2.2,13.4,2.2z M21.6,3.1h0.3v0.3c0,0.3,0.3,0.6,0.6,0.6
												s0.6-0.3,0.6-0.6V3.1h0.3c0.3,0,0.6-0.3,0.6-0.6S23.8,2,23.4,2h-0.3V1.6c0-0.3-0.3-0.6-0.6-0.6s-0.6,0.3-0.6,0.6V2h-0.3
												C21.3,2,21,2.2,21,2.6S21.3,3.1,21.6,3.1z M10.9,7.3v2.4c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6V7.3c0-0.3-0.3-0.6-0.6-0.6
												C11.2,6.7,10.9,7,10.9,7.3z"></path>
											<path fill="#FFFFFF" d="M20,22.2c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4
												c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2,0-0.3,0.1-0.4,0.2C20.1,21.9,20,22,20,22.2z"></path>
											<path fill="#333333" d="M6,16.2c-0.3,0-0.6,0.3-0.6,0.6v4.8c0,0.3,0.3,0.6,0.6,0.6c0.3,0,0.6-0.3,0.6-0.6v-4.8
												C6.6,16.5,6.4,16.2,6,16.2z M6,23.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.4c0,0.2,0.1,0.3,0.2,0.4
												c0.1,0.1,0.3,0.2,0.4,0.2c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4c0-0.2-0.1-0.3-0.2-0.4C6.3,23.1,6.2,23.1,6,23.1L6,23.1z"></path>
										</svg>
									</span>
								</div>
								<div class="mkt-place__promise__list--item__content">
									<div class="mkt-place__promise__list--item__content--title">Better Savings</div>
									<div class="mkt-place__promise__list--item__content--text">Get rewarded for your biggest monthly expense and maximize your savings. Plus stand a chance to win exclusive offers from banks.</div>
								</div>
							</li>
						</ul>
					</div>
					</section>
				</div>
			</div>
		</div>





		<div class="container-fluid">
			<div class="container">
				<div class="payrent__section-left">
					<section class="mkt-place__section">
					<div class="mkt-place__section__title">
						<div class="mkt-place__section__title--text1"><h2>Any Questions? We are here to help</h2></div>
					</div>
					<div class="mkt-place__faq" itemScope="" itemType="https://schema.org/FAQPage">
						<ul class="mkt-place__faq__accordion">
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'How to pay rent online through Magicbricks?', '1/7', '','');"><h3>How to pay rent online through Magicbricks?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer" style={{display: "none"}}><p itemProp="text">You can pay rent through Magicbricks, whether you are a registered user or a new user. All you need is a credit card and the bank account/UPI details of your landlord to complete the transaction.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'Should you pay rent with a credit card?', '2/7', '','');"><h3>Should you pay rent with a credit card?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Your rent is probably your biggest fixed monthly expense. So why not earn some rewards on this payment every month? Credit cards offer reward points, cashback, air miles or even instant discounts on your spends. In addition, when you pay rent with your credit card, you get upto 45 days of interest-free credit period.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'How to get cashback for paying rent online?', '3/7', '','');"><h3>How to get cashback for paying rent online?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Depending on the credit card you are using, you can earn cashback, instant discount, reward points, air miles, etc. The way these rewards are credited to your account may vary from bank to bank.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'How long will it take to transfer the rent to landlord's account?', '4/7', '','');"><h3>How long will it take to transfer the rent to landlord's account?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Once you complete the payment successfully, it usually takes upto 1 working day to transfer the rent to your landlord's bank account.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'Is it safe to pay rent with a credit card through Magicbricks?', '5/7', '','');"><h3>Is it safe to pay rent with a credit card through Magicbricks?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Paying rent through Magicbricks is 100% safe and secure. We doesn't store any of your confidential information, including your credit card details.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'Are there any extra charges for paying house rent online?', '6/7', '','');"><h3>Are there any extra charges for paying house rent online?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">A small processing fee is charged for paying rent online with a credit card. This fee is 1% of the transaction amount if you are using either a VISA or a Mastercard credit card.</p></div>
							</li>
							<li class="mkt-place__faq__accordion--item" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
								<div class="mkt-place__faq__accordion--title" itemProp="name" onclick="fireGtmAndEcomm(event,'pay_rent_faq','FAQ', 'Shall I get the receipt of paying rent through credit card?', '7/7', '','');"><h3>Shall I get the receipt of paying rent through credit card?</h3></div>
								<div class="mkt-place__faq__accordion--content" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p itemProp="text">Once your rent payment is successfully processed and transferred to the landlord's account, you will get a digital rent receipt on your registered email address.</p></div>
							</li>
						</ul>
					</div>
					</section>
				</div>
			</div>
		</div>








		<div class="container-fluid explore-services" id="section_exploreServices">
			<div class="container">
				<section class="mkt-place__section has-payrent">
					<div class="mkt-place__section__title">
						<div class="mkt-place__section__title--text1 text-white">Explore Other Services</div>
					</div>
					<div class="mkt-place__explore">
						<div class="mkt-place__explore__slider">
							<div class="mkt-place__swiper nav-arrow-top no-shadow" id="swiper-explore-services">
								<div class="swiper-button-next"><a href="#!"></a></div>
								<div class="swiper-button-prev swiper-button-disabled"><a href="#!"></a></div>
								<div class="swiper-container swiper-container-horizontal swiper-container-wp8-horizontal">	
									<div class="swiper-wrapper" style={{transitionDuration: "0ms", transform: "translate3d(0px, 0px, 0px)"}}>
										<div class="swiper-slide swiper-slide-active" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Pay Rent', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/pay-property-rent-online.html?');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-pay-rent">
														{/* xml:space="preserve" */}
														{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
															<svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
																<path fill="#303030" stroke="#FFFFFF" stroke-width="0.3" d="M30.4,1.7H1.6C1.3,1.7,1,1.9,1,2.3v19
																	c0,0.3,0.3,0.6,0.6,0.6h4.3c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.2,0.6,0.3c0.4,0.1,0.9,0,1.3-0.2l0.4-0.2v8c0,0.3,0.3,0.6,0.6,0.6h4.8
																	c0.3,0,0.6-0.3,0.6-0.6v-5.1H17v5.2c0,0.3,0.3,0.6,0.6,0.6h4.8c0.3,0,0.6-0.3,0.6-0.6v-8.1l0.8,0.5c0.3,0.2,0.6,0.2,0.9,0.2
																	c0.4,0,0.9-0.2,1.2-0.5h1.6c1.9,0,3.5-1.6,3.5-3.5V2.3C31,1.9,30.7,1.7,30.4,1.7z M21.8,20.9v8.2h-3.6V24c0-0.3-0.3-0.6-0.6-0.6h-4
																	c-0.3,0-0.6,0.3-0.6,0.6v5.2H9.4V21l6.2-3.7L21.8,20.9C21.8,20.9,21.8,20.9,21.8,20.9z M24.4,21l-8.5-5c-0.1-0.1-0.2-0.1-0.3-0.1
																	c-0.1,0-0.2,0-0.3,0.1l-8.1,4.8c-0.1,0.1-0.2,0.1-0.3,0c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.2-0.1-0.5,0.2-0.6l8.7-5.1
																	c0.1-0.1,0.3-0.1,0.5,0l9.1,5.3c0.2,0.1,0.3,0.4,0.2,0.6C24.9,21.1,24.7,21.2,24.4,21z M10.6,16.3L9.5,17v-2.1h1.1V16.3z M27.5,20.6
																	h-1.1c0-0.6-0.3-1.1-0.8-1.4l-9.1-5.3c-0.5-0.3-1.2-0.3-1.7,0l-3,1.8v-1.3c0-0.3-0.3-0.6-0.6-0.6H8.8c-0.3,0-0.6,0.3-0.6,0.6v3.4
																	L6.1,19c-0.6,0.3-0.9,1-0.8,1.6H2.2V17h4.3c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6H2.2v-13h27.6v12.9h-6.4
																	c-0.3,0-0.6,0.3-0.6,0.6S23,17,23.3,17h6.4v1.3C29.8,19.6,28.8,20.6,27.5,20.6z"></path>
																<path fill="#D8262A" stroke="#FFFFFF" stroke-width="0.6" d="M24,11.9c1.9,0,3.4-1.5,3.4-3.4S25.8,5.2,24,5.2
																	c-0.5,0-1.1,0.1-1.5,0.4c-0.5-0.2-1-0.4-1.5-0.4c-1.9,0-3.4,1.5-3.4,3.4s1.5,3.4,3.4,3.4c0.5,0,1.1-0.1,1.5-0.4
																	C22.9,11.8,23.4,11.9,24,11.9z M21.8,8.5c0-0.6,0.2-1.1,0.6-1.5c0.4,0.4,0.6,0.9,0.6,1.5c0,0.6-0.2,1.1-0.6,1.5
																	C22,9.7,21.8,9.1,21.8,8.5z M26.1,8.5c0,1.2-1,2.1-2.1,2.1c-0.1,0-0.3,0-0.4,0c0.5-0.6,0.7-1.3,0.7-2.1S24,7,23.6,6.4
																	c0.1,0,0.3,0,0.4,0C25.1,6.4,26.1,7.4,26.1,8.5z M18.8,8.5c0-1.2,1-2.1,2.1-2.1c0.1,0,0.3,0,0.4,0c-0.5,0.6-0.7,1.3-0.7,2.1
																	s0.3,1.5,0.7,2.1c-0.1,0-0.3,0-0.4,0C19.7,10.7,18.8,9.8,18.8,8.5z"></path>
																<path fill="#D8262A" d="M7.1,7.9H6c-0.3,0-0.6,0.3-0.6,0.6S5.6,9.1,6,9.1h1.1c0.3,0,0.6-0.3,0.6-0.6S7.4,7.9,7.1,7.9z M11.4,7.9H9.5
																	c-0.3,0-0.6,0.3-0.6,0.6s0.3,0.6,0.6,0.6h1.9c0.3,0,0.6-0.3,0.6-0.6S11.8,7.9,11.4,7.9z M15,7.9h-1.1c-0.3,0-0.6,0.3-0.6,0.6
																	s0.3,0.6,0.6,0.6H15c0.3,0,0.6-0.3,0.6-0.6S15.3,7.9,15,7.9z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Pay Rent</div>
														<div class="mkt-place__explore__card__content--text">Enjoy the convenience of paying your rent using your credit card, while earning cashback, reward points, and air miles*.</div>
														<div class="mkt-place__explore__card__content--hint">* Offers are provided by banks</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide swiper-slide-next" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Rent Agreement', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/rentalagreement/index.html?');">

												{/* <!-- <a href="https://www.magicbricks.com/rentalagreement/" target="_blank"> --> */}
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-rent-agreement">
														{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
																<path fill="#303030" d="M6.5,13.4h11.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4H6.5c-0.2,0-0.4,0.2-0.4,0.4
																	C6.1,13.3,6.3,13.4,6.5,13.4z M6.5,9.9h11.2c0.2,0,0.4-0.2,0.4-0.4s-0.2-0.4-0.4-0.4H6.5c-0.2,0-0.4,0.2-0.4,0.4S6.3,9.9,6.5,9.9z
																	 M6.5,6.5h11.2c0.2,0,0.4-0.2,0.4-0.4c0-0.2-0.2-0.4-0.4-0.4H6.5c-0.2,0-0.4,0.2-0.4,0.4C6.1,6.3,6.3,6.5,6.5,6.5z M13.9,16.2H6.2
																	c-0.2,0-0.4,0.2-0.4,0.4C5.9,16.8,6,17,6.2,17h7.7c0.2,0,0.4-0.2,0.4-0.4C14.3,16.4,14.1,16.2,13.9,16.2z"></path>
																<path fill="#303030" d="M24.3,1L24.3,1L6.2,1C4.3,1,2.8,2.5,2.8,4.3v24c0,0.1,0.1,0.3,0.2,0.3c0.1,0.1,0.3,0,0.4,0
																	L5.5,27l2.1,1.6c0.1,0.1,0.3,0.1,0.5,0l2.1-1.6l2.1,1.6c0.1,0.1,0.3,0.1,0.5,0l2.3-1.8c0,0,0,0,0,0l0.3-0.3L14.8,26l-0.3,0.3
																	l-2.1,1.6l-2.1-1.6c-0.1-0.1-0.3-0.1-0.5,0l-2.1,1.6l-2.1-1.6c-0.1-0.1-0.3-0.1-0.5,0l-1.7,1.4V4.3c0-1.4,1.2-2.6,2.6-2.6h16.1
																	c-0.6,0.6-1,1.4-1,2.2v12.9H22v-5.7h4.8c0.2,0,0.4-0.2,0.4-0.4V4C27.2,2.4,25.9,1.1,24.3,1L24.3,1z M26.4,10.4H22V4
																	c0-1.2,1-2.2,2.2-2.2c1.2,0,2.2,1,2.2,2.2V10.4z"></path>
																<path fill="#303030" d="M6.2,19.3h3.4v0l-0.2,0.3c-0.1,0.1-0.1,0.2-0.1,0.2H8.4c0.1,0.2,0.2,0.3,0.3,0.6h1c0,0,0,0,0,0
																	l-0.3,0.5c0,0,0,0,0,0H8.6c0,0.2-0.1,0.4-0.2,0.6C8.2,21.8,8,22,7.8,22c-0.3,0.2-0.6,0.3-0.9,0.3v0c0,0,0.1,0.1,0.2,0.3l1.7,2.1v0.1
																	c0,0,0,0,0,0H8l-2-2.5l0,0v-0.5l0,0c0.1,0,0.3,0,0.4,0c0.7,0,1.2-0.3,1.4-0.8c0-0.1,0-0.2,0-0.2h-2c0,0,0,0,0,0l0.3-0.5c0,0,0,0,0,0
																	h1.6v0c-0.1-0.2-0.3-0.3-0.5-0.5c-0.2-0.1-0.4-0.1-0.5-0.1H5.9v0L6.2,19.3C6.2,19.3,6.2,19.3,6.2,19.3z"></path>
																<path fill="#D8262A" d="M21.9,16.5c-4,0-7.3,3.3-7.3,7.3c0,4,3.3,7.3,7.3,7.3c4,0,7.3-3.3,7.3-7.3
																	C29.2,19.7,25.9,16.5,21.9,16.5z M21.9,30.3c-3.6,0-6.5-2.9-6.5-6.5c0-3.6,2.9-6.5,6.5-6.5s6.5,2.9,6.5,6.5
																	C28.4,27.3,25.5,30.3,21.9,30.3z"></path>
																<path fill="#D8262A" d="M22.2,18.4l-3.5,2.8c0,0,0,0-0.1,0l-1.1,0.9c-0.1,0.1-0.2,0.2-0.1,0.3c0,0.1,0.1,0.2,0.2,0.3
																	c0.1,0,0.3,0,0.4-0.1l0.5-0.4V27c0,0.2,0.2,0.3,0.4,0.3h7c0.2,0,0.4-0.2,0.4-0.3v-4.8l0.5,0.4c0.2,0.1,0.4,0.1,0.5,0
																	c0.1-0.1,0.1-0.4,0-0.5l-4.6-3.7C22.5,18.2,22.3,18.2,22.2,18.4L22.2,18.4z M25.5,26.7h-6.3v-5.1l3.2-2.5l3.1,2.5V26.7z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Rent Agreement</div>
														<div class="mkt-place__explore__card__content--text">Protect your rights as a tenant or landlord with a carefully-drafted and stamped rent agreement - delivered right at your doorstep.</div>
														<span class="svg-ico arrow">
														{/* xmlns:xlink="https://www.w3.org/1999/xlink" */}
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Packers &amp; Movers', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/propertyservices/packers-and-movers?inc=Pay_Rent');">

												{/* <!-- <a href="https://www.magicbricks.com/rentalagreement/" target="_blank"> --> */}
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-rent-agreement">
															<svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
															<path fill="#303030" d="M1.5,3.1C1.2,3.1,1,3.4,1,3.7v16.1c0,0.3,0.2,0.5,0.5,0.5h16.1c0.3,0,0.5-0.2,0.5-0.5V3.7
															c0-0.3-0.2-0.5-0.5-0.5L1.5,3.1L1.5,3.1z M2.1,4.2h4.8v4.3C6.9,8.7,7,8.9,7.2,9c0.2,0.1,0.4,0.1,0.6,0l1.8-1.4l1.8,1.4
															c0.2,0.1,0.4,0.1,0.6,0c0.2-0.1,0.3-0.3,0.3-0.5V4.2h4.8v15h-15V4.2z M19.8,10.1c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.1,0.4,0,0.5
															c0.1,0.2,0.3,0.3,0.5,0.3h4l3.1,5.6c0,0.1,0.1,0.1,0.2,0.2l3,2v5.6h-1.1c-0.3-1.8-1.8-3.2-3.7-3.2c-2.1,0-3.7,1.7-3.7,3.7
															c0,2.1,1.7,3.7,3.7,3.7c1.9,0,3.4-1.4,3.7-3.2h1.7c0.3,0,0.5-0.2,0.5-0.5v-6.4c0-0.2-0.1-0.3-0.2-0.4l-3.1-2.1l-3.2-5.8
															c-0.1-0.2-0.3-0.3-0.5-0.3C24,10.1,19.8,10.1,19.8,10.1z M19.8,12.3c-0.3,0-0.5,0.2-0.5,0.5v3.7c0,0.3,0.2,0.5,0.5,0.5h4.8
															c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.1-0.4,0-0.5c-0.1-0.2-0.3-0.3-0.5-0.3h-4.3v-2.7h2.1c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.1-0.4,0-0.5
															c-0.1-0.2-0.3-0.3-0.5-0.3L19.8,12.3L19.8,12.3z M11.2,14.9c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.1,0.4,0,0.5c0.1,0.2,0.3,0.3,0.5,0.3
															h4.3c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.1-0.4,0-0.5c-0.1-0.2-0.3-0.3-0.5-0.3L11.2,14.9L11.2,14.9z M11.2,17.1
															c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.1,0.4,0,0.5c0.1,0.2,0.3,0.3,0.5,0.3h2.1c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.1-0.4,0-0.5
															c-0.1-0.2-0.3-0.3-0.5-0.3L11.2,17.1L11.2,17.1z M1.5,21.3c-0.3,0-0.5,0.2-0.5,0.5v3.2c0,0.3,0.2,0.5,0.5,0.5h1.6
															c0.3,1.8,1.8,3.2,3.7,3.2c2.1,0,3.7-1.7,3.7-3.7c0-2.1-1.7-3.8-3.7-3.8c-1.9,0-3.4,1.4-3.7,3.2H2.1v-2.7c0-0.1-0.1-0.3-0.2-0.4
															C1.8,21.4,1.7,21.3,1.5,21.3z M6.9,22.4c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7c-1.5,0-2.6-1.2-2.7-2.6c0,0,0-0.1,0-0.1
															C4.3,23.6,5.4,22.4,6.9,22.4L6.9,22.4z M25.1,22.4c1.5,0,2.6,1.2,2.7,2.6c0,0,0,0.1,0,0.1c0,1.5-1.2,2.6-2.7,2.6
															c-1.5,0-2.7-1.2-2.7-2.7C22.4,23.6,23.6,22.4,25.1,22.4z M12.3,24.6c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.1,0.4,0,0.5
															c0.1,0.2,0.3,0.3,0.5,0.3h7.5c0.2,0,0.4-0.1,0.5-0.3c0.1-0.2,0.1-0.4,0-0.5c-0.1-0.2-0.3-0.3-0.5-0.3L12.3,24.6L12.3,24.6z"></path>
															<path fill="#D8262A" d="M8,4.2h3.2v3.2l-1.3-1c-0.2-0.1-0.5-0.1-0.6,0L8,7.4V4.2z M6.9,24c-0.6,0-1.1,0.5-1.1,1.1
															c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1C8,24.5,7.5,24,6.9,24z M25.1,24c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1
															c0.6,0,1.1-0.5,1.1-1.1C26.2,24.5,25.7,24,25.1,24z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Packers &amp; Movers</div>
														<div class="mkt-place__explore__card__content--text">Make your house shifting easy and stress-free with the Best Packers &amp; Movers near you at Guaranteed Lowest Prices.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Home Loan', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/homeloan/home');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-home-loan">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
																<path fill="#303030" d="M1.5,12.3h3.7v15.5c0,0.3,0.2,0.5,0.5,0.5h12.9c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H6.1V11.8
																	c0-0.3-0.2-0.5-0.5-0.5H2.9l12.7-9.3l12.7,9.3h-2.7c-0.3,0-0.5,0.2-0.5,0.5v6.6c0,0.3,0.2,0.5,0.5,0.5c0.3,0,0.5-0.2,0.5-0.5v-6.1
																	h3.7c0.2,0,0.4-0.1,0.4-0.3c0.1-0.2,0-0.4-0.2-0.5l-3.8-2.7l0,0V4.4c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5v3.6l-9.5-6.9
																	c-0.2-0.1-0.4-0.1-0.5,0L1.2,11.5C1,11.6,1,11.8,1,12C1.1,12.2,1.3,12.3,1.5,12.3z"></path>
																<path fill="#D8262A" d="M25.6,20.2c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4C31,22.6,28.6,20.2,25.6,20.2z
																	 M25.6,30C23,30,21,28,21,25.6s2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5S28.1,30,25.6,30z"></path>
																<path fill="#D8262A" d="M23.9,23h3.4v0l-0.2,0.3C27,23.5,27,23.5,27,23.5h-0.9c0.1,0.2,0.2,0.3,0.3,0.6h1c0,0,0,0,0,0L27,24.6
																	c0,0,0,0,0,0h-0.6c0,0.2-0.1,0.4-0.2,0.6c-0.2,0.3-0.4,0.4-0.6,0.5c-0.3,0.2-0.6,0.3-0.9,0.3v0c0,0,0.1,0.1,0.2,0.3l1.7,2.1v0.1
																	c0,0,0,0,0,0h-0.7l-2-2.5v-0.5l0,0c0.1,0,0.3,0,0.4,0c0.7,0,1.2-0.3,1.4-0.8c0-0.1,0-0.2,0-0.2h-2c0,0,0,0,0,0l0.3-0.5l0,0h1.6v0
																	c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.1-0.4-0.1-0.5-0.1h-0.9v0L23.9,23C23.9,23,23.9,23,23.9,23z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Home Loan</div>
														<div class="mkt-place__explore__card__content--text">Dream home beyond your budget? Let our trusted lending partners help you get the right home loan today.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32">
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Home Cleaning', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/home-cleaning-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-home-cleaning">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#010101" stroke="#FEF3F2" stroke-width="0.4" d="M18.2,29.6h-14V16h19.1v2.7c0,0.3,0.3,0.6,0.6,0.6
																	c0.3,0,0.6-0.3,0.6-0.6V16h1.1c0,0,0,0,0,0c0.3,0,0.6-0.3,0.6-0.6c0-0.1,0-0.3-0.1-0.4l-4.4-8.9c-0.1-0.2-0.3-0.3-0.5-0.3h-7.3H8.1
																	H6.4C6.2,5.8,6,5.9,5.9,6l-4.5,9c-0.1,0.2-0.1,0.4,0,0.6C1.5,15.8,1.7,16,1.9,16H3v14c0,0.3,0.3,0.7,0.6,0.7h14.6
																	c0.3,0,0.6-0.3,0.6-0.6S18.5,29.6,18.2,29.6z M12.6,5.8H9.2H12.6z M6.7,6.9h1.9h4.5h7.5l3.9,7.9h-0.8H3.6H2.8L6.7,6.9z"></path>
																<path fill="#010101" stroke="#FEF3F2" stroke-width="0.6531" d="M17.6,19.4c0-0.3-0.3-0.6-0.6-0.6h-6.7
																	c-0.3,0-0.6,0.3-0.6,0.6v6.8c0,0.3,0.3,0.6,0.6,0.6h6.7c0.3,0,0.6-0.3,0.6-0.6V19.4z M16.5,22.2h-2.2V20h2.2V22.2z M13.1,20v2.3
																	h-2.2V20H13.1z M10.9,23.4h2.2v2.3h-2.2V23.4z M14.3,25.6v-2.3h2.2v2.3H14.3z"></path>
																<path fill="#D8262A" stroke="#FEF3F2" stroke-width="0.4" d="M26,20.5l4.7-18.8c0.1-0.3-0.1-0.6-0.4-0.7
																	c-0.3-0.1-0.6,0.1-0.7,0.4l-4.7,18.8c-1.8,0-3.4,2.1-3.9,4.2c0,0.1,0,0.2,0,0.3l-1.6,3.9c-0.1,0.2-0.1,0.3,0,0.5
																	c0.1,0.1,0.2,0.3,0.4,0.3l1.7,0.4c0.1,0,0.3,0,0.4,0l0.8-0.4l0,0.1c-0.1,0.3,0.1,0.6,0.4,0.7l3.3,0.8c0,0,0.1,0,0.1,0
																	c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.2-0.4l0.4-4.2c0.1-0.1,0.1-0.1,0.1-0.2C28,23.9,27.5,21.3,26,20.5z M25.9,29.7l-2.1-0.5
																	l0.2-0.7c0.1-0.2,0-0.4-0.2-0.6c-0.2-0.1-0.4-0.2-0.6-0.1l-1.7,0.8l-0.9-0.2l1.3-3.2l2.1,0.5l2.1,0.5L25.9,29.7z M26.5,25.2
																	l-4.3-1.1c0.6-1.7,2-3,3-2.8C26.2,21.6,26.7,23.4,26.5,25.2z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Home Cleaning</div>
														<div class="mkt-place__explore__card__content--text">Turn your home into a naturally calming, healthy and an enjoyable place to be with our professional home cleaning service.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






												<a href="#!" target="_blank" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Sanitization', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/sanitization-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-sanitization">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#303030" stroke="#FCF0F0" stroke-width="0.5" d="M11,26L11,26l-2,0v2.6c0,0.8,0.6,1.4,1.4,1.4h11.8
																	c0.8,0,1.4-0.6,1.4-1.4V26h-3.7c-0.3,0.6-0.9,1-1.6,1h-4.5c-0.7,0-1.3-0.4-1.6-1H11z M10,25h2v-3.5H9V25H10z M21.5,12.2L21.5,12.2
																	l1.2,1.9l0,0l1.3,2c0.3,0.5,0.5,1,0.5,1.6v10.9c0,1.3-1.1,2.4-2.4,2.4H10.4C9.1,31,8,29.9,8,28.6v-8.8c0-1,0.5-1.9,1.3-2.5l3.7-2.6
																	v-1.6l-0.9-1.4C12,11.7,12,11.6,12,11.5v-0.9c0-0.6,0.5-1.1,1.1-1.1h0.4V7c-0.1,0-0.2,0-0.3-0.1l-0.6-0.4l-2.7,4.7
																	c-0.1,0.2-0.3,0.2-0.4,0.2c-0.1,0-0.3-0.1-0.4-0.1l-0.2-0.2c-0.6-0.6-0.8-1.5-0.6-2.4l1-3.3H9c-0.6,0-1-0.4-1.1-1L7.6,2.3
																	c0-0.3,0.1-0.6,0.3-0.9C8.1,1.1,8.4,1,8.7,1H14h1h2.1C19.8,1,22,3.2,22,5.9v0.6C22,6.8,21.8,7,21.5,7h-3v2.5h0.7
																	c0.4,0,0.7,0.2,0.9,0.5L21.5,12.2z M21,13.3L21,13.3l-1.7-2.7c0,0-0.1-0.1-0.1-0.1h-6c-0.1,0-0.1,0.1-0.1,0.1v0.7l0.9,1.4
																	C14,12.8,14,12.9,14,13v2c0,0.2-0.1,0.3-0.2,0.4l-3.9,2.8c-0.5,0.4-0.9,1-0.9,1.6v0.7h3c0.1-0.9,0.9-1.5,1.7-1.5h4.5
																	c0.9,0,1.6,0.6,1.7,1.5h3.5v-2.8c0-0.4-0.1-0.8-0.3-1.1l-1.6-2.5l0,0L21,13.3z M15,2h-1v0h-2.5v2.7L13.6,6H21V5.9
																	C21,3.7,19.3,2,17.1,2L15,2L15,2z M8.9,4.4C8.9,4.5,9,4.5,9,4.5h1.5V2H8.7c0,0-0.1,0-0.1,0c0,0,0,0.1,0,0.1L8.9,4.4z M9.4,10.1
																	l2.4-4.1l-0.9-0.6h-0.5L9.3,9.1C9.2,9.4,9.2,9.8,9.4,10.1z M14.5,7v2.5h3V7H14.5z M23.5,25v-3.5H20V25H23.5z M13,20.8v4.5
																	c0,0.4,0.3,0.7,0.8,0.8h4.5c0.4,0,0.7-0.3,0.8-0.8v-4.5c0-0.4-0.3-0.7-0.8-0.8h-4.5C13.3,20,13,20.3,13,20.8z"></path>
																<path fill="#D8262A" stroke="#FCF0F0" stroke-width="0.5" d="M6.7,15.1l-1.5-0.8l-0.8-1.5c-0.1-0.2-0.3-0.3-0.4-0.3
																	s-0.4,0.1-0.4,0.3l-0.8,1.5l-1.5,0.8C1.1,15.1,1,15.3,1,15.5s0.1,0.4,0.3,0.4l1.5,0.8l0.8,1.5c0.1,0.2,0.3,0.3,0.4,0.3
																	s0.4-0.1,0.4-0.3l0.8-1.5l1.5-0.8C6.9,15.9,7,15.7,7,15.5S6.9,15.1,6.7,15.1L6.7,15.1z M4.6,15.9c-0.1,0-0.2,0.1-0.2,0.2L4,17
																	l-0.4-0.8c0-0.1-0.1-0.2-0.2-0.2l-0.8-0.4l0.8-0.4c0.1,0,0.2-0.1,0.2-0.2L4,14l0.4,0.8c0,0.1,0.1,0.2,0.2,0.2l0.8,0.4L4.6,15.9z"></path>
																<path fill="#D8262A" stroke="#FCF0F0" stroke-width="0.5" d="M30.7,7.1l-1.5-0.8l-0.8-1.5c-0.1-0.2-0.3-0.3-0.4-0.3
																	c-0.2,0-0.4,0.1-0.4,0.3l-0.8,1.5l-1.5,0.8C25.1,7.1,25,7.3,25,7.5s0.1,0.4,0.3,0.4l1.5,0.8l0.8,1.5c0.1,0.2,0.3,0.3,0.4,0.3
																	c0.2,0,0.4-0.1,0.4-0.3l0.8-1.5l1.5-0.8C30.9,7.9,31,7.7,31,7.5S30.9,7.1,30.7,7.1z M28.6,7.9c-0.1,0-0.2,0.1-0.2,0.2L28,9l-0.4-0.8
																	c0-0.1-0.1-0.2-0.2-0.2l-0.8-0.4l0.8-0.4c0.1,0,0.2-0.1,0.2-0.2L28,6l0.4,0.8c0,0.1,0.1,0.2,0.2,0.2l0.8,0.4L28.6,7.9z"></path>
																<polygon fill="#D8262A" stroke="#FCF0F0" stroke-width="0.5" points="15.5,25 16.5,25 16.5,23.5 18,23.5 18,22.5 
																	16.5,22.5 16.5,21 15.5,21 15.5,22.5 14,22.5 14,23.5 15.5,23.5 "></polygon>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Sanitization</div>
														<div class="mkt-place__explore__card__content--text">Ensure a safer indoor environment for yourself and your loved ones with the help of sanitization service professionals.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






												<a href="#!" target="_blank" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Pest control', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/pest-control-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-pest-control">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#010101" d="M26,17.4H27c0.1-0.7-0.1-0.9-0.5-0.9C26.1,16.5,26,16.8,26,17.4L26,17.4z M15.8,30
																	c0.8,0,1.6,0,2.5,0c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.4-0.5c-0.8,0-1.7,0-2.5,0V30z M8,30c0.8,0,1.6,0,2.4,0
																	c0.3,0,0.5-0.2,0.5-0.5c0-0.2-0.2-0.5-0.4-0.5c-0.8,0-1.6,0-2.5,0V30z M13.5,12.6L13.5,12.6c0.7,0,1.5,0,2.2,0
																	c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.1-0.3,0.1-0.5c-0.1-0.2-0.3-0.3-0.5-0.3c-1,0-2.1,0-3.1,0c-0.2,0-0.4-0.1-0.6-0.1
																	c-0.9-0.4-1.7-0.9-2.6-1.3c-0.2-0.1-0.3-0.1-0.5-0.1c-0.3,0-0.4,0.2-0.5,0.5c-0.1,0.3,0.1,0.5,0.4,0.7c0.7,0.4,1.4,0.8,2.1,1.2
																	c0.1,0.1,0.3,0.1,0.5,0.1C12.1,12.6,12.8,12.6,13.5,12.6L13.5,12.6z M8,2C6.9,2,6,2.8,6,3.9C6,5,6.9,5.8,7.9,5.8c1.1,0,2-0.8,2-1.9
																	C9.9,2.9,9.1,2,8,2L8,2z M8,28.1h1.5c0.3-2,0.6-4,0.9-6c-0.8-0.3-1.6-0.5-2.4-0.7V28.1z M5,16v-0.4c0-2.2,0-4.5,0-6.7
																	c0-0.3,0.1-0.6,0.1-0.9c0-0.1,0.2-0.3,0-0.4C5,7.5,4.9,7.3,4.8,7.3c-0.6,0-1.1,0-1.7,0V16H5z M10.4,15c0-0.5,0-1,0-1.5
																	c0-0.2-0.1-0.3-0.2-0.4c-0.7-0.4-1.3-0.7-1.9-1.1c-0.8-0.5-1-1.4-0.6-2.1c0.4-0.7,1.3-1,2.1-0.6c0.2,0.1,0.4,0.2,0.6,0.3
																	c0-0.3,0-0.5,0-0.8c0-0.7-0.4-1.1-1.1-1.1c-0.7,0-1.5,0-2.2,0C6.4,7.8,6,8.2,6,8.9c0,2,0,3.9,0,5.9V15H10.4z M10.4,17.1V16H6
																	c-0.1,2.3,1.2,4.2,3.4,4.8c1.2,0.3,2.5,0.6,3.8,0.9c0.4,0.1,0.6,0.3,0.7,0.7c0.1,0.3,0.2,0.7,0.3,1c0.5,1.5,0.9,3,1.4,4.4
																	c0,0.1,0.1,0.2,0.2,0.2c0.4,0,0.9,0,1.3,0c0-0.1,0-0.2-0.1-0.3c-0.5-2.3-1.1-4.6-1.6-6.8c0-0.2-0.1-0.3-0.3-0.4
																	c-1.7-0.8-3.4-1.7-5.1-2.5c-0.1-0.1-0.2-0.1-0.3-0.2c0.2-0.3,0.3-0.6,0.4-0.8C10.2,17.1,10.3,17.1,10.4,17.1L10.4,17.1z M8.5,6.8
																	c0.3,0,0.6,0,1,0c1.1,0,1.9,0.8,1.9,1.9c0,0.4,0,0.8,0,1.2c0,0.1,0.1,0.2,0.2,0.3c0.3,0.2,0.6,0.3,0.8,0.4c0.1,0.1,0.3,0.1,0.4,0.1
																	c1,0,1.9,0,2.9,0c0.7,0,1.2,0.3,1.5,0.9c0,0.1,0.2,0.2,0.3,0.2c2.6,0.6,5.1,1.3,7.7,1.9c0.5,0.1,0.9,0.2,1.4,0.4
																	c0.3,0.1,0.5,0.3,0.5,0.6c0,0.1,0,0.2,0,0.2c0,0.4,0,0.8,0.4,1c0.3,0.1,0.4,0.5,0.5,0.9c0.1,0.4,0,0.8,0,1.2c0,0.3-0.2,0.4-0.5,0.4
																	c-0.7,0-1.3,0-2,0c-0.3,0-0.4-0.2-0.5-0.4c0-0.4,0-0.9,0-1.3c0-0.4,0.3-0.7,0.6-0.9c0.3-0.1,0.4-0.3,0.3-0.6c0-0.1,0-0.1,0-0.2
																	c-0.5-0.1-1.1-0.3-1.6-0.4c-2.3-0.6-4.7-1.2-7-1.7c-0.2,0-0.3,0-0.4,0.1c-0.3,0.4-0.7,0.7-1.3,0.7c-1.3,0-2.6,0-4,0
																	c-0.1,0-0.2,0-0.4,0c0,0.1,0,0.2,0,0.3c0,1.2,0,2.3,0,3.5c0,0.2,0.1,0.3,0.3,0.4c1.4,0.7,2.7,1.4,4.1,2c0.3,0.2,0.5,0.4,0.6,0.8
																	c0.6,2.4,1.1,4.9,1.7,7.3c0,0.1,0,0.2,0.1,0.2c0.2,0,0.3,0,0.5,0.1c0.7,0.2,1.1,0.9,1,1.5C19.6,30.4,19,31,18.3,31c-1,0-2,0-3,0
																	c-0.3,0-0.5-0.2-0.5-0.5c0,0,0,0,0-0.1c0.2-1.4-0.2-2.7-0.7-4c-0.4-1.2-0.7-2.3-1.1-3.5c-0.1-0.2-0.1-0.3-0.4-0.3
																	c-0.4-0.1-0.9-0.2-1.4-0.3c-0.3,1.9-0.6,3.8-0.8,5.8c0.1,0,0.2,0.1,0.3,0.1c0.7,0.2,1.2,0.8,1.1,1.6c-0.1,0.7-0.7,1.3-1.4,1.3
																	c-0.9,0-1.9,0-2.8,0C7.2,31,7,30.8,7,30.4c0-3.1,0-6.3,0-9.4c0-0.2-0.1-0.4-0.2-0.5c-1-0.9-1.5-2.1-1.7-3.4c-0.1,0-0.2,0-0.3,0
																	c-0.7,0-1.4,0-2,0c-0.5,0-0.6-0.2-0.6-0.6c0-3.1,0-6.2,0-9.4c0-0.5,0.2-0.6,0.7-0.6c0.7,0,1.3,0,2,0c0.3,0,0.6,0.1,0.8,0.3
																	C5.7,6.8,5.8,6.9,5.9,7C6,7,6.1,7,6.1,7C6.6,6.9,7,6.8,7.3,6.7C6.6,6.6,5.9,6.2,5.5,5.4C5,4.7,4.9,3.9,5.2,3.1
																	C5.5,1.8,6.9,0.9,8.3,1c1.4,0.2,2.6,1.3,2.6,2.7C11,5.2,10,6.4,8.5,6.8L8.5,6.8z"></path>
																<path fill="#FAE9E9" d="M17,31.2c-0.4,0-0.8,0-1.2,0l-0.4,0c-0.4,0-0.7-0.3-0.7-0.7c0,0,0-0.1,0-0.1c0.1-1.3-0.2-2.6-0.7-3.9
																	c-0.3-1-0.6-2-0.9-3L12.8,23c0-0.1-0.1-0.2-0.2-0.2c-0.3-0.1-0.6-0.1-1-0.2l-0.2,0l-0.8,5.4c0,0,0.1,0,0.1,0c0.8,0.2,1.4,1,1.3,1.8
																	c-0.1,0.8-0.8,1.4-1.6,1.5c-0.4,0-0.8,0-1.3,0l-1.5,0c-0.6,0-0.8-0.3-0.8-0.8l0-0.9c0-2.8,0-5.7,0-8.5c0-0.2,0-0.3-0.2-0.4
																	c-1-0.9-1.5-2-1.7-3.4c0,0-0.1,0-0.1,0l-2,0c-0.6,0-0.8-0.2-0.8-0.8V7c0-0.6,0.3-0.8,0.9-0.8l1.2,0c0.3,0,0.6,0,0.9,0l0.1,0
																	c0.4,0,0.7,0.1,0.9,0.4C5.8,6.6,5.9,6.7,6,6.8c0,0,0,0,0.1,0c0.2,0,0.4-0.1,0.5-0.1c-0.5-0.3-1-0.6-1.3-1.2C4.8,4.8,4.7,3.9,5,3.1
																	c0.4-1.4,1.8-2.4,3.3-2.3C9.8,1,11,2.2,11.1,3.7c0.1,1.2-0.6,2.3-1.6,2.9c1.2,0,2.1,0.9,2.1,2.1c0,0.2,0,0.3,0,0.5
																	c0,0.2,0,0.5,0,0.7c0,0,0,0.1,0.1,0.1c0.2,0.1,0.5,0.3,0.8,0.4c0.1,0,0.2,0.1,0.3,0.1c0.5,0,1.1,0,1.6,0l1.3,0c0.8,0,1.3,0.3,1.6,1
																	c0,0,0.1,0.1,0.2,0.1c2,0.5,4,1,6,1.5l2.2,0.6c0.3,0.1,0.6,0.1,0.9,0.2c0.4,0.1,0.6,0.4,0.6,0.8c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2
																	c0,0.4,0,0.6,0.3,0.8c0.3,0.2,0.5,0.6,0.6,1c0.1,0.4,0.1,0.8,0,1.1l0,0.2c0,0.4-0.3,0.6-0.7,0.6c-0.7,0-1.3,0-2,0
																	c-0.4,0-0.6-0.3-0.6-0.6c0-0.5,0-0.9,0-1.3c0-0.5,0.3-0.9,0.7-1.1c0.2-0.1,0.2-0.2,0.2-0.4c0,0,0-0.1,0-0.1l-2.8-0.7
																	c-1.9-0.5-3.8-0.9-5.7-1.4c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0.1c-0.3,0.5-0.8,0.8-1.4,0.8l-4.1,0c0,0,0,0.1,0,0.1l0,1c0,0.8,0,1.6,0,2.5
																	c0,0.1,0,0.2,0.2,0.2c0.6,0.3,1.1,0.6,1.7,0.8c0.8,0.4,1.6,0.8,2.4,1.2c0.4,0.2,0.6,0.5,0.7,0.9c0.5,1.9,0.9,3.9,1.4,5.8l0.3,1.5
																	c0,0,0,0.1,0,0.1l0,0c0.1,0,0.3,0,0.4,0.1c0.8,0.2,1.3,1,1.2,1.8c-0.1,0.8-0.8,1.4-1.5,1.5C17.9,31.2,17.4,31.2,17,31.2z M11.2,22
																	l0.6,0.2c0.3,0.1,0.6,0.2,0.9,0.2c0.3,0.1,0.4,0.2,0.5,0.5l0.1,0.5c0.3,1,0.6,2,0.9,3c0.5,1.3,0.8,2.7,0.7,4.1
																	c0,0.2,0.1,0.3,0.3,0.3l0.4,0c0.9,0,1.7,0,2.6,0c0.6,0,1.1-0.5,1.1-1.1c0.1-0.6-0.3-1.2-0.9-1.3c-0.1,0-0.2,0-0.3-0.1l-0.3,0
																	L17.9,28c0-0.1,0-0.1,0-0.2l-0.3-1.5c-0.5-1.9-0.9-3.9-1.4-5.8c-0.1-0.3-0.2-0.5-0.5-0.6c-0.8-0.4-1.6-0.8-2.4-1.2
																	c-0.6-0.3-1.1-0.6-1.7-0.8c-0.3-0.1-0.4-0.3-0.4-0.6c0-0.8,0-1.6,0-2.5l0-1c0-0.1,0-0.1,0-0.2l0-0.3l4.5,0c0.5,0,0.9-0.2,1.1-0.6
																	c0.1-0.1,0.2-0.3,0.6-0.2c1.9,0.5,3.8,1,5.7,1.4l3.1,0.8l0,0.3c0,0,0,0.1,0,0.1c0.1,0.4-0.1,0.6-0.4,0.8c-0.3,0.1-0.5,0.4-0.5,0.8
																	c0,0.4,0,0.8,0,1.3c0,0.1,0.1,0.2,0.3,0.2c0.7,0,1.3,0,2,0c0.1,0,0.3,0,0.3-0.2l0-0.2c0-0.3,0-0.7,0-1c-0.1-0.3-0.2-0.6-0.4-0.7
																	c-0.6-0.3-0.6-0.8-0.5-1.2c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0-0.2-0.1-0.3-0.3-0.4c-0.3-0.1-0.6-0.1-0.9-0.2l-2.2-0.6
																	c-2-0.5-4-1-6-1.5c-0.2,0-0.4-0.2-0.4-0.3c-0.3-0.5-0.7-0.8-1.3-0.8l-1.3,0c-0.5,0-1.1,0-1.6,0c-0.1,0-0.3,0-0.5-0.1
																	c-0.3-0.2-0.6-0.3-0.9-0.4c-0.1-0.1-0.3-0.3-0.3-0.4c0-0.2,0-0.5,0-0.7c0-0.2,0-0.3,0-0.5c0-1-0.8-1.7-1.7-1.7L9.1,7L8.5,7l0-0.4
																	c1.4-0.3,2.3-1.5,2.3-2.9c-0.1-1.3-1.1-2.4-2.5-2.5c-1.3-0.1-2.5,0.7-2.9,2C5.1,3.9,5.2,4.7,5.7,5.3c0.5,0.8,1.2,1.1,1.7,1.2v0.4
																	L7.1,7C6.8,7.1,6.5,7.1,6.2,7.2l-0.1,0c-0.1,0-0.2,0-0.3-0.1C5.6,7,5.5,6.9,5.4,6.8C5.3,6.6,5.1,6.5,4.8,6.5c-0.3,0-0.6,0-0.9,0
																	l-1,0l-0.1,0C2.4,6.5,2.3,6.6,2.3,7v9.4c0,0.4,0.1,0.4,0.4,0.4l2,0c0.1,0,0.1,0,0.2,0l0.2,0l0,0.2c0.2,1.3,0.7,2.4,1.6,3.3
																	c0.2,0.2,0.3,0.4,0.3,0.7c0,2.8,0,5.7,0,8.5l0,0.9c0,0.4,0.1,0.4,0.4,0.4l1.5,0c0.4,0,0.8,0,1.3,0c0.6,0,1.2-0.5,1.2-1.1
																	c0.1-0.6-0.3-1.2-1-1.4c-0.1,0-0.1,0-0.2-0.1l-0.3-0.1L11.2,22z M17.2,30.2l-1.6,0v-1.4l1.6,0c0.4,0,0.7,0,1.1,0
																	c0.4,0,0.6,0.3,0.6,0.7c0,0.2-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.5,0.2C17.9,30.2,17.6,30.2,17.2,30.2z M16,29.8l1.2,0
																	c0.3,0,0.7,0,1,0c0.1,0,0.2,0,0.2-0.1c0,0,0.1-0.1,0.1-0.2c0-0.1,0-0.3-0.2-0.3c-0.4,0-0.7,0-1.1,0l-1.2,0V29.8z M9.4,30.2l-1.6,0
																	v-1.4l1.6,0c0.4,0,0.7,0,1.1,0c0.2,0,0.3,0.1,0.4,0.2c0.1,0.1,0.2,0.3,0.2,0.5c0,0.4-0.3,0.7-0.7,0.7C10.1,30.2,9.7,30.2,9.4,30.2z
																	 M8.2,29.8l1.2,0c0.3,0,0.7,0,1,0c0.2,0,0.3-0.1,0.3-0.3c0-0.1,0-0.2-0.1-0.2c0,0-0.1-0.1-0.2-0.1c-0.4,0-0.7,0-1.1,0l-1.2,0V29.8z
																	 M16.4,28.3c-0.2,0-0.5,0-0.7,0c-0.2,0-0.4-0.3-0.4-0.4c-0.4-1.1-0.7-2.3-1.1-3.4l-0.3-1c0-0.1-0.1-0.2-0.1-0.3
																	c-0.1-0.2-0.2-0.5-0.2-0.7c-0.1-0.3-0.2-0.4-0.6-0.5c-1.4-0.3-2.6-0.6-3.8-0.9c-2.2-0.6-3.7-2.6-3.5-5l0-0.2h4.7v1.6l-0.4-0.1
																	L10,17.8l1.4,0.7c1.3,0.6,2.6,1.3,3.8,1.9c0.2,0.1,0.4,0.3,0.4,0.5c0.4,1.6,0.8,3.3,1.2,4.9l0.5,1.9c0,0.1,0,0.1,0,0.2l0.1,0.3
																	L16.4,28.3z M15.8,27.9c0.2,0,0.4,0,0.6,0l0.4,0c0,0,0,0,0,0l-0.5-1.9c-0.4-1.6-0.8-3.3-1.2-4.9c0-0.1-0.1-0.2-0.2-0.3
																	c-1.3-0.6-2.6-1.3-3.8-1.9L9.4,18l0.6-1.2l0.2,0v-0.6h-4c0,2.1,1.2,3.8,3.2,4.4c1.2,0.3,2.4,0.6,3.8,0.9c0.5,0.1,0.8,0.4,0.9,0.8
																	c0,0.2,0.1,0.4,0.2,0.7c0,0.1,0.1,0.2,0.1,0.3l0.3,1c0.4,1.1,0.7,2.3,1.1,3.4C15.8,27.8,15.8,27.9,15.8,27.9z M9.7,28.3H7.8v-7.2
																	l2.8,0.9L9.7,28.3z M8.2,27.9h1.1l0-0.1l0.8-5.6l-2-0.6V27.9z M27.2,17.6h-1.3l0-0.2c0-0.5,0-0.8,0.2-1c0.1-0.1,0.3-0.2,0.5-0.2h0
																	c0.2,0,0.4,0.1,0.5,0.2c0.2,0.2,0.2,0.5,0.2,1L27.2,17.6z M26.2,17.2h0.6c0-0.3,0-0.4-0.1-0.5c0,0-0.1-0.1-0.2-0.1v-0.2l0,0.2
																	c-0.1,0-0.2,0-0.2,0.1C26.3,16.8,26.2,16.9,26.2,17.2z M5.2,16.2H2.9V7.1l1.1,0c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0.1,0.4,0.2
																	c0,0,0.1,0.1,0.1,0.1C5.6,7.6,5.5,7.9,5.4,8c0,0,0,0,0,0.1l0,0.1C5.3,8.4,5.3,8.6,5.3,8.9c0,1.7,0,3.4,0,5.2L5.2,16.2z M3.3,15.8
																	h1.5l0-1.7c0-1.7,0-3.4,0-5.2C4.9,8.6,4.9,8.3,5,8L5,8c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1C5,7.7,4.9,7.7,4.9,7.6c0,0-0.1-0.1-0.1-0.1
																	c-0.2,0-0.5,0-0.7,0l-0.7,0V15.8z M10.6,15.2H5.8l0-6.4c0-0.8,0.5-1.3,1.3-1.3l0.9,0c0.4,0,0.9,0,1.3,0c0.8,0,1.3,0.5,1.3,1.3
																	c0,0.2,0,0.3,0,0.5l0,0.6l-0.5-0.3C10,9.6,9.8,9.5,9.7,9.5C9,9.2,8.2,9.4,7.9,10c-0.4,0.7-0.2,1.5,0.5,1.9c0.7,0.4,1.3,0.8,1.9,1.1
																	c0.2,0.1,0.3,0.3,0.3,0.5c0,0.3,0,0.7,0,1L10.6,15.2z M6.2,14.8h4l0-0.2c0-0.4,0-0.7,0-1c0-0.1,0-0.1-0.1-0.2
																	c-0.6-0.3-1.3-0.7-2-1.1C7.3,11.7,7,10.7,7.5,9.8c0.3-0.6,0.9-0.9,1.6-0.9c0.3,0,0.5,0.1,0.8,0.2c0.1,0.1,0.2,0.1,0.3,0.2
																	c0-0.2,0-0.3,0-0.4C10.2,8.3,9.9,8,9.4,8C8.9,8,8.5,8,8,8L7.1,8C6.5,8,6.2,8.3,6.2,8.9l0,4.2L6.2,14.8z M12.3,12.8c-0.3,0-0.7,0-1,0
																	c-0.2,0-0.4-0.1-0.5-0.1c-0.5-0.3-1-0.6-1.5-0.9l-0.6-0.3c-0.4-0.2-0.5-0.5-0.5-0.9c0.1-0.4,0.3-0.6,0.7-0.7c0.2,0,0.4,0,0.6,0.1
																	c0.4,0.2,0.8,0.4,1.2,0.6c0.4,0.2,0.9,0.4,1.3,0.7c0.1,0.1,0.3,0.1,0.5,0.1c0.5,0,1.1,0,1.6,0l1.4,0c0.5,0,0.7,0.3,0.7,0.5
																	c0,0.2,0,0.5-0.1,0.7c-0.1,0.2-0.4,0.2-0.6,0.2c-0.3,0-0.7,0-1,0l-1,0L12.3,12.8z M9,10.3L9,10.3c-0.3,0-0.3,0.2-0.4,0.3
																	c0,0.1,0,0.3,0.3,0.5l0.6,0.3c0.5,0.3,1,0.6,1.5,0.9c0.1,0.1,0.2,0.1,0.4,0.1c0.3,0,0.6,0,1,0l1.1,0l1.2,0c0.3,0,0.7,0,1,0
																	c0.1,0,0.3-0.1,0.3-0.1c0-0.1,0.1-0.2,0-0.3c0,0,0-0.1-0.3-0.1l-1.4,0c-0.5,0-1.1,0-1.6,0c-0.2,0-0.5-0.1-0.7-0.2
																	c-0.4-0.2-0.9-0.4-1.3-0.7c-0.4-0.2-0.8-0.4-1.2-0.6C9.3,10.3,9.1,10.3,9,10.3z M8,6L8,6c-1.2,0-2.1-1-2.1-2.1c0-1.2,1-2.1,2.2-2.1
																	h0c0.6,0,1.1,0.2,1.5,0.6c0.4,0.4,0.6,0.9,0.6,1.5C10.1,5.1,9.1,6,8,6z M8,2v0.2c-1,0-1.7,0.8-1.8,1.7c0,0.9,0.8,1.7,1.7,1.7l0,0
																	c1,0,1.8-0.8,1.8-1.7c0-0.5-0.2-0.9-0.5-1.2C8.9,2.4,8.5,2.2,8,2.2L8,2z"></path>
																<path fill="#D8262A" d="M26.9,25.1c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5
																	C26.4,24.9,26.7,25.1,26.9,25.1 M25.9,27.5c0,0.5,0.1,0.9,0.4,1.2c0.3,0.3,0.7,0.3,1.1,0c0.6-0.6,0.6-1.8,0-2.4
																	c-0.3-0.3-0.8-0.3-1.1,0C26.1,26.7,26,27.1,25.9,27.5 M29.9,25.4c-0.3,0.5-0.4,1.1-1.1,1.3c0,0.3,0.1,0.6,0.1,0.9h0.9v1
																	c-0.3,0-0.6,0-0.9,0c-0.2,0-0.3,0.1-0.3,0.3c0.8,0.1,0.9,0.8,1.2,1.4c-0.3,0.1-0.6,0.3-0.9,0.4c-0.1-0.2-0.2-0.4-0.3-0.6
																	c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.2-0.7,0c-0.5,0.3-1.1,0.3-1.6,0c-0.3-0.2-0.7-0.1-0.9,0.3c-0.1,0.2-0.2,0.4-0.3,0.6
																	c-0.3-0.1-0.6-0.3-0.9-0.4c0.3-0.5,0.4-1.2,1.2-1.4c0-0.2-0.1-0.3-0.3-0.3c-0.3,0-0.6,0-0.9,0v-1h0.9c0-0.3,0.1-0.6,0.1-0.9
																	c-0.7-0.2-0.7-0.8-1.1-1.3c0.3-0.1,0.6-0.3,0.9-0.4c0.1,0.2,0.2,0.4,0.3,0.6c0.2,0.3,0.3,0.4,0.6,0c-0.3-0.4-0.5-0.8-0.3-1.3
																	c0.1-0.3,0.3-0.6,0.6-0.8c0.5-0.4,1.3-0.4,1.8,0.1c0.6,0.5,0.7,1.2,0.2,2c0.3,0.3,0.4,0.3,0.5,0c0.1-0.2,0.2-0.4,0.3-0.6
																	C29.3,25.1,29.6,25.2,29.9,25.4"></path>
																<path fill="#010101" d="M24.6,19c0.3,0.1,0.6,0.2,0.9,0.3c-0.2,0.4-0.3,0.9-0.5,1.3c-0.3-0.1-0.6-0.2-0.9-0.3
																	C24.3,19.9,24.4,19.5,24.6,19 M28.7,19c0.1,0.4,0.3,0.8,0.4,1.3c-0.3,0.1-0.6,0.2-0.9,0.3c-0.1-0.4-0.3-0.9-0.4-1.3
																	C28.1,19.2,28.4,19.1,28.7,19 M26.2,20.3h1v-1h-1V20.3z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Pest Control</div>
														<div class="mkt-place__explore__card__content--text">Keep your home and office pest-free and your surroundings healthy with a professional pest control treatment.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Vastu', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/vastu-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-vastu">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#303030" stroke="#FFFFFF" stroke-width="0.4" d="M16,1C7.7,1,1,7.7,1,16s6.7,15,15,15s15-6.7,15-15
																	C31,7.7,24.3,1,16,1z M16,30C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14C30,23.7,23.7,30,16,30z"></path>
																<path fill="#303030" stroke="#FFFFFF" stroke-width="0.4" d="M16,3.5C9.1,3.5,3.5,9.1,3.5,16S9.1,28.5,16,28.5
																	S28.5,22.9,28.5,16C28.5,9.1,22.9,3.5,16,3.5z M16,27.5C9.6,27.5,4.5,22.4,4.5,16S9.6,4.5,16,4.5S27.5,9.6,27.5,16
																	C27.5,22.3,22.3,27.5,16,27.5z"></path>
																<path fill="#303030" stroke="#FFFFFF" stroke-width="0.4" d="M23.4,8.6c-0.2-0.2-0.4-0.2-0.6-0.1l-8.9,5.1
																	c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.2c0,0,0,0,0,0l-5.1,8.9c-0.1,0.2-0.1,0.4,0.1,0.6c0.2,0.2,0.4,0.2,0.6,0.1l8.9-5.1c0,0,0,0,0,0
																	c0.1,0,0.1-0.1,0.2-0.2c0,0,0,0,0,0l5.1-8.9C23.6,9,23.5,8.8,23.4,8.6L23.4,8.6z M10.3,21.7l3.9-6.8l2.9,2.9L10.3,21.7z M17.8,17.1
																	l-2.9-2.9l6.8-3.9L17.8,17.1z"></path>
																<path fill="#D8262A" d="M8,15.5H6c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2c0.3,0,0.5-0.2,0.5-0.5S8.3,15.5,8,15.5z M26,15.5h-2
																	c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h2c0.3,0,0.5-0.2,0.5-0.5S26.3,15.5,26,15.5z M16,8.5c0.3,0,0.5-0.2,0.5-0.5V6
																	c0-0.3-0.2-0.5-0.5-0.5S15.5,5.7,15.5,6v2C15.5,8.3,15.7,8.5,16,8.5z M16,23.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5
																	s0.5-0.2,0.5-0.5v-2C16.5,23.7,16.3,23.5,16,23.5z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Vastu</div>
														<div class="mkt-place__explore__card__content--text">Freshen up your home with the help of Vastu. Discover how this ancient science can help bring happiness and health to your home.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






													<a href="#!" target="_blank" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Property Inspection', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/property-inspection-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-property-inspection">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#D8262A" stroke="#FCF0F0" stroke-width="0.5" d="M17.9,11.6L17.9,11.6l-4.5-4.5c-0.2-0.2-0.5-0.2-0.7,0l-4.5,4.5h0l-1,1
																	c-0.2,0.2-0.2,0.5,0,0.7s0.5,0.2,0.7,0L8,13.2v4.3C8,17.8,8.2,18,8.5,18H12c0.3,0,0.5-0.2,0.5-0.5V15h1v2.5c0,0.3,0.2,0.5,0.5,0.5
																	h3.5c0.3,0,0.5-0.2,0.5-0.5v-4.3l0.1,0.1c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7L17.9,11.6L17.9,11.6z
																	 M17,17h-2.5v-2.5c0-0.3-0.2-0.5-0.5-0.5h-2c-0.3,0-0.5,0.2-0.5,0.5V17H9v-4.8l4-4l4,4V17L17,17z"></path>
																<path fill="#303030" stroke="#FCF0F0" stroke-width="0.5" d="M13,3C7.5,3,3,7.5,3,13s4.5,10,10,10s10-4.5,10-10S18.5,3,13,3z M13,22
																	c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S18,22,13,22z M26.8,23.2c-0.1-0.1-0.2-0.1-0.4-0.1l0,0c-0.1,0-0.3,0.1-0.4,0.1l-1.4,1.4
																	c-0.2,0.2-0.2,0.5,0,0.7c0.2,0.2,0.5,0.2,0.7,0l1.1-1.1l3.1,3.1c0.3,0.3,0.4,0.7,0.4,1.1c0,0.4-0.2,0.8-0.4,1.1
																	c-0.6,0.6-1.5,0.6-2.1,0l-5.9-5.9c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7l5.9,5.9c0.5,0.5,1.1,0.7,1.8,0.7c0.6,0,1.3-0.2,1.8-0.7
																	c0.5-0.5,0.7-1.1,0.7-1.8c0-0.7-0.3-1.3-0.7-1.8C30.3,26.7,26.8,23.2,26.8,23.2z"></path>
																<path fill="#303030" stroke="#FCF0F0" stroke-width="0.5" d="M23.6,20.8c-0.2,0.2-0.2,0.5,0,0.7l1.1,1.1c0.1,0.1,0.2,0.1,0.4,0.1
																	c0.1,0,0.3,0,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7l-1.1-1.1C24.1,20.6,23.8,20.6,23.6,20.8z M29,12.2V17h-2v-2.5c0-0.3-0.2-0.5-0.5-0.5
																	c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5h3c0.3,0,0.5-0.2,0.5-0.5v-4.3l0.1,0.1c0.1,0.1,0.2,0.1,0.4,0.1
																	c0.1,0,0.3,0,0.4-0.1c0.2-0.2,0.2-0.5,0-0.7l-1-1h0l-4.5-4.5c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7L29,12.2L29,12.2z
																	 M25,13c0-6.6-5.4-12-12-12S1,6.4,1,13s5.4,12,12,12S25,19.6,25,13z M13,24C6.9,24,2,19.1,2,13C2,6.9,6.9,2,13,2s11,4.9,11,11
																	S19.1,24,13,24z"></path>
																</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Property Inspection</div>
														<div class="mkt-place__explore__card__content--text">Get an unbiased assessment of the condition of property you're looking to buy/rent and protect yourself from various unwanted risks.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">






											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Legal Services', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com//propertyservices/legal-service-in-bangalore');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-legal-services">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#D8262A" fill-opacity="0.8" stroke="#FFFFFF" stroke-width="0.2" d="M20.2,15.4c-0.1,0.1-0.1,0.3-0.2,0.4
																	c-0.1,0.4,0,0.8,0.1,1.1c0.2,0.3,0.5,0.6,0.9,0.7c0.1,0,0.3,0.1,0.4,0.1c0.3,0,0.5-0.1,0.7-0.2l3.5-2c0.6-0.3,0.9-1.1,0.7-1.7
																	c-0.2-0.7-0.8-1.1-1.5-1.1c-0.7-2-1.8-3.9-3.2-5.6c0.4-0.6,0.3-1.3-0.2-1.8c-0.5-0.5-1.2-0.6-1.8-0.2l-3.5,2c-0.6,0.3-0.9,1-0.7,1.7
																	c0.2,0.7,0.8,1.1,1.5,1.1c0,0,0,0,0,0c0.2,0.5,0.4,1,0.6,1.6L2,20c-0.7,0.4-1.1,1.2-1,2c0.1,0.8,0.7,1.5,1.5,1.7
																	C3,23.8,3.5,23.7,4,23.5L19.2,14C19.5,14.5,19.9,15,20.2,15.4L20.2,15.4z M25,13.7c0.2,0,0.4,0.2,0.5,0.4c0.1,0.2,0,0.5-0.2,0.6l0,0
																	l-3.5,2c-0.1,0.1-0.3,0.1-0.4,0.1c-0.2-0.1-0.3-0.2-0.4-0.4c0-0.2,0.1-0.4,0.2-0.5l3.5-2C24.8,13.7,24.9,13.7,25,13.7
																	C25,13.7,25,13.7,25,13.7z M22.7,10.2c0.5,0.9,0.9,1.8,1.3,2.8l-3,1.8c-0.6-0.8-1.2-1.6-1.7-2.5c-0.5-0.9-0.9-1.8-1.3-2.8l3-1.8
																	C21.7,8.5,22.2,9.3,22.7,10.2L22.7,10.2L22.7,10.2z M16.6,8.6c-0.1-0.2-0.1-0.6,0.2-0.7l3.5-2c0.1-0.1,0.3-0.1,0.4-0.1
																	c0.1,0,0.2,0.1,0.3,0.2c0.1,0.2,0.1,0.6-0.2,0.7l-3.5,2c-0.1,0.1-0.3,0.1-0.4,0.1C16.8,8.8,16.7,8.7,16.6,8.6z M3.5,22.6
																	c-0.3,0.2-0.7,0.2-1,0C2.2,22.4,2,22.1,2,21.8c0-0.4,0.2-0.7,0.5-0.8l15.6-8.6c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.2,0.3,0.3,0.4
																	L3.5,22.6z"></path>
																<path fill="#010101" fill-opacity="0.8" stroke="#FFFFFF" stroke-width="0.2" d="M29.5,24.2H29v-0.5c0-0.8-0.7-1.5-1.5-1.5h-6
																	c-0.8,0-1.5,0.7-1.5,1.5v0.5h-0.5c-0.8,0-1.5,0.7-1.5,1.5v1c0,0.3,0.2,0.5,0.5,0.5h12c0.3,0,0.5-0.2,0.5-0.5v-1
																	C31,24.9,30.3,24.2,29.5,24.2L29.5,24.2z M21,23.7c0-0.3,0.2-0.5,0.5-0.5h6c0.3,0,0.5,0.2,0.5,0.5v0.5h-7C21,24.2,21,23.7,21,23.7z
																	 M30,26.2H19v-0.5c0-0.3,0.2-0.5,0.5-0.5h10c0.3,0,0.5,0.2,0.5,0.5V26.2L30,26.2z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Legal Services</div>
														<div class="mkt-place__explore__card__content--text">Get the best legal advice you need before you sign a real estate deal and protect yourself from expensive legal disputes and scams.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Tenant Verfication', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/tenantverification/index.html');">

												{/* <!-- <a href="https://www.magicbricks.com/tenantverification/index.html" target="_blank"> --> */}
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-tenant-verification">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#303030" d="M25.7,1.1c-5.3,1-9.3,1.5-12.1,1.5c-2.7,0-6.9-0.5-12.4-1.5C1,1.2,0.9,1.6,0.9,1.8v14.5c0,3,1.9,6.6,4.4,8.4
																	l7.8,5.3c0.1,0.1,0.3,0.1,0.5,0l4.6-3.2l-0.5-0.7l-4.4,3L5.8,24c-2.3-1.6-4.1-4.9-4.1-7.7V2C7,3,10.9,3.4,13.5,3.4
																	C16.1,3.4,19.9,3,25,2v5.6h0.8V1.8C25.8,1.6,25.8,1.2,25.7,1.1L25.7,1.1z M17.2,11.8l-5.1,4.7l-2.6-2.8c-0.2-0.2-0.4-0.2-0.6,0
																	c-0.2,0.2-0.2,0.4,0,0.6l2.9,3.1c0.2,0.2,0.4,0.2,0.6,0l5.4-5c0.2-0.2,0.2-0.4,0-0.6C17.7,11.6,17.4,11.6,17.2,11.8z"></path>
																<path fill="#D8262A" d="M30.9,25.3c-0.1-1-0.7-1.9-1.6-2.3l0,0l-1.8-0.7v-0.6c0,0,0,0,0-0.1l0,0l0,0l0,0l0,0l0,0c0,0,0,0,0,0l0,0
																	l0,0l0,0c0,0,0,0,0,0l0,0c0,0,0,0,0,0l0,0c0,0-0.1,0-0.1,0l-1-0.4v0c1.7-0.7,2.9-2.4,3-4.3c0.7-0.3,1.1-1.1,0.9-1.8
																	c-0.1-0.4-0.4-0.7-0.7-0.9l0.1-1.2c0.1-2-0.8-3.8-2.5-4.8c-1.7-1-3.8-1-5.5,0c-1.7,1-2.6,2.9-2.5,4.8l0.1,1.2
																	c-0.4,0.2-0.7,0.5-0.7,0.9c-0.2,0.8,0.2,1.5,0.9,1.8c0.1,1.9,1.3,3.5,3,4.3l-1,0.4c-0.2,0.1-0.3,0.2-0.3,0.4v0.6L19.2,23
																	c0,0,0,0,0,0c-0.9,0.4-1.5,1.3-1.6,2.3l0,0v5.4c0,0.2,0.2,0.4,0.4,0.4h12.5c0.2,0,0.4-0.2,0.4-0.4V25.3
																	C30.9,25.3,30.9,25.3,30.9,25.3L30.9,25.3z M26.6,22.5L26.6,22.5l-1.1,1.5l-0.4-0.3c0-0.1,0-0.1-0.1-0.1l0.9-0.6l0,0L26.6,22.5
																	L26.6,22.5z M24.1,24.1L24.1,24.1l0.3,0.1l0.8,3.3l-1,1.3l-1-1.3L24.1,24.1L24.1,24.1z M21,9.3c1.3-1.4,3.3-1.8,5-1
																	c1.7,0.7,2.8,2.5,2.6,4.4l-0.1,1.1l-0.5-1.9c0,0,0,0,0-0.1c-0.4-0.8-1.1-1.4-2-1.4l-0.4,0c-0.1,0-0.3,0.1-0.4,0.2
																	c-0.8,1.2-2.3,1.8-3.7,1.7l-0.8-0.1c-0.2,0-0.3,0-0.4,0.1c-0.1,0.1-0.2,0.3-0.2,0.4L20,14.1l-0.1,0l-0.1-1.5
																	C19.7,11.4,20.1,10.2,21,9.3z M20,16.3L20,16.3c0-0.2-0.1-0.4-0.3-0.4c-0.2,0-0.4-0.2-0.5-0.3c-0.1-0.2-0.1-0.4-0.1-0.6
																	c0-0.1,0.1-0.2,0.2-0.3c0.1,0.1,0.1,0.1,0.2,0.1l0,0c0.7,0.3,0.9,0.3,1.1,0.2c0.1-0.1,0.2-0.2,0.2-0.3l0.1-1.8l0.5,0.1
																	c1.7,0.2,3.3-0.5,4.3-1.8l0.2,0c0.6,0,1.1,0.4,1.3,0.9l0.7,2.9c0,0.1,0.1,0.3,0.3,0.3c0.1,0,0.3,0,0.4-0.1l0.4-0.4c0,0,0,0,0.1-0.1
																	c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0,0.4-0.1,0.6c-0.1,0.2-0.3,0.3-0.5,0.3c-0.2,0-0.3,0.2-0.3,0.4v0c0,2.3-1.9,4.2-4.2,4.2
																	C21.9,20.5,20,18.6,20,16.3z M24.2,21.3c0.4,0,0.8,0,1.1-0.1c0,0,0,0,0,0.1v1.1l-1.1,0.8l-1.1-0.7v-1.2
																	C23.5,21.2,23.8,21.3,24.2,21.3L24.2,21.3z M21.8,22.5l0.6,0.4c0,0,0.1,0.1,0.1,0.1l0.9,0.6c0,0,0,0,0,0l-0.5,0.3L21.8,22.5
																	L21.8,22.5z M30,30.3H18.4v-4.9c0.1-0.7,0.5-1.3,1.1-1.6l1.8-0.6l1.2,1.6c0.1,0.2,0.4,0.2,0.6,0.1l0.1,0l-0.7,2.6
																	c0,0.1,0,0.2,0.1,0.3l1.4,1.9c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.3-0.1,0.3-0.2l1.4-1.9c0.1-0.1,0.1-0.2,0.1-0.3l-0.7-2.6
																	c0.2,0.1,0.4,0.1,0.5-0.1l1.2-1.6l1.8,0.6c0.6,0.3,1,0.9,1.1,1.6C30,25.4,30,30.3,30,30.3z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Tenant Verfication</div>
														<div class="mkt-place__explore__card__content--text">Find out exactly who you are letting in. Let us conduct reference check and police verification of your prospective tenant today.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Design &amp; Decor', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/decor/');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-decor">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
																<path fill="#303030" d="M15.4,16.8h-0.8v-1.9c0-1,0.9-1.9,1.9-1.9h12.8c0.6,0,1.1-0.5,1.1-1.1V7c0-0.6-0.5-1.1-1.1-1.1h-2.7v2.6
																	c0,1-0.9,1.9-1.9,1.9H5.3c-1,0-1.9-0.9-1.9-1.9v-6c0-1,0.9-1.9,1.9-1.9h19.5c1,0,1.9,0.9,1.9,1.9v2.6h2.7c1,0,1.9,0.9,1.9,1.9v4.9
																	c0,1-0.9,1.9-1.9,1.9H16.5c-0.6,0-1.1,0.5-1.1,1.1V16.8z M5.3,1.4c-0.6,0-1.1,0.5-1.1,1.1v6c0,0.6,0.5,1.1,1.1,1.1h19.5
																	c0.6,0,1.1-0.5,1.1-1.1v-6c0-0.6-0.5-1.1-1.1-1.1H5.3z"></path>
																<path fill="#D8262A" d="M28.2,3.3h-1.5v4.5h1.5V3.3z"></path>
																<path fill="#303030" d="M15.8,31.4h-1.5c-1.9,0-3.4-1.5-3.4-3.4v-7.6c0-0.5,0.2-1,0.6-1.3l2.3-2.3c0.4-0.4,0.8-0.6,1.3-0.6
																	c0,0,0,0,0,0c0.5,0,1,0.2,1.3,0.6l2.2,2.2c0.4,0.4,0.6,0.8,0.6,1.3V28C19.2,29.9,17.7,31.4,15.8,31.4z M15,17
																	c-0.3,0-0.6,0.1-0.8,0.3L12,19.6c-0.2,0.2-0.3,0.5-0.3,0.8V28c0,1.4,1.2,2.6,2.6,2.6h1.5c1.4,0,2.6-1.2,2.6-2.6v-7.6
																	c0-0.3-0.1-0.6-0.3-0.8l-2.2-2.2C15.6,17.1,15.3,17,15,17C15,17,15,17,15,17z M3.8,5.9H1.1V5.1h2.6V5.9z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Design &amp; Decor</div>
														<div class="mkt-place__explore__card__content--text">Turn your home into a space that reflects your personality. Connect with the industry-leading brands right away to get started.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
										<div class="swiper-slide" style={{width: "384px", marginRight: "24px"}}>
											<div class="mkt-place__explore__card card_shadow">

											<a href="#!" onclick="fireGtmAndEcomm(event,'home_services_explore_services','Explore Other Services', 'Rental Furniture', '', '','Category','Bangalore','','','','','');fireUrl(event,'https://www.magicbricks.com/furniture-on-rent/');">
													<div class="mkt-place__explore__card--graphic">
														<span class="svg-ico ico-rental-furniture">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path fill="#303030" stroke="#FFFFFF" stroke-width="0.4" d="M29.3,21.4v-2.4c0-0.9-0.7-1.5-1.6-1.5H21
																c-0.4,0-0.8,0.2-1.1,0.5c0,0-0.1,0.1-0.1,0.1c-0.3-0.3-0.7-0.5-1.2-0.5h-6.7c-0.9,0-1.5,0.7-1.6,1.5v2.4c-0.9,0.1-1.6,0.8-1.6,1.7
																v4.3c0,0.2,0.2,0.4,0.4,0.4H12c0.2,0,0.4-0.2,0.4-0.4v-0.5l15.1,0v0.5c0,0.2,0.2,0.4,0.4,0.4h2.8c0.2,0,0.4-0.2,0.4-0.4v-4.3
																C31,22.2,30.2,21.4,29.3,21.4L29.3,21.4z M20.4,18.4c0.2-0.2,0.4-0.2,0.6-0.2h6.7c0.4,0,0.8,0.4,0.8,0.8v2.6
																c-0.7,0.3-1.1,0.9-1.1,1.6v0.1l-7.2,0l0-4.3C20.2,18.8,20.3,18.5,20.4,18.4L20.4,18.4z M11.9,18.1h6.7c0.4,0,0.8,0.4,0.8,0.8l0,4.3
																l-7.2,0v-0.1c0-0.8-0.5-1.4-1.2-1.7v-2.5C11.1,18.5,11.5,18.1,11.9,18.1L11.9,18.1z M11.6,27H9.5v-3.9c0-0.6,0.5-1,1.1-1
																c0.6,0,1,0.5,1.1,1V27z M12.3,26.2V24l7.5,0h0l7.6,0v2.2L12.3,26.2z M30.3,27h-2.1v-3.9c0-0.6,0.5-1,1.1-1s1,0.5,1.1,1V27z"></path>
															<path fill="#D8262A" d="M11.7,27.1H9.4v-4c0-0.6,0.4-1.1,1.2-1.1c0.7,0,1.2,0.6,1.2,1.1V27.1z M30.4,27.1H28v-4
																c0-0.6,0.4-1.1,1.2-1.1s1.2,0.6,1.2,1.1V27.1z M13.7,11.3c-0.3,0.2-0.6,0.5-0.8,0.9c-0.1,0.1-0.1,0.2,0,0.4c0.1,0.1,0.2,0.2,0.3,0.2
																c0.1,0,0.3-0.1,0.3-0.2c0.2-0.3,0.4-0.5,0.6-0.7c0.2-0.1,0.2-0.3,0.1-0.5C14.1,11.2,13.9,11.2,13.7,11.3L13.7,11.3z"></path>
															<path fill="#303030" stroke="#FFFFFF" stroke-width="0.4" d="M15.1,9.9c-0.2-3.1-2.7-5.6-5.7-5.6
																c-3.1,0-5.7,2.7-5.7,5.9c0,0,0,0,0,0V27H1.4C1.2,27,1,27.2,1,27.4s0.2,0.4,0.4,0.4h5.7c0.2,0,0.4-0.2,0.4-0.4S7.3,27,7.1,27H4.4
																V10.3c0,0,0,0,0,0c0-2.9,2.2-5.2,5-5.2c2.6,0,4.8,2.2,5,4.9c-1.6,0.2-2.8,1.6-2.8,3.2v0.6c0,0.2,0.2,0.4,0.4,0.4h1.6
																c0.2,0.6,0.7,1,1.3,1c0.6,0,1.1-0.4,1.3-1h1.5c0.2,0,0.4-0.2,0.4-0.4v-0.6C17.9,11.5,16.7,10.1,15.1,9.9L15.1,9.9z M14.8,14.3
																c-0.2,0-0.4-0.1-0.5-0.3h1C15.2,14.2,15,14.3,14.8,14.3z M17.2,13.3h-5v-0.2c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5V13.3z"></path>
															</svg>
														</span>
													</div>
													<div class="mkt-place__explore__card__content">
														<div class="mkt-place__explore__card__content--title">Rental Furniture</div>
														<div class="mkt-place__explore__card__content--text">Why buy when you can rent furniture for your new home? Get customized furniture delivered at your doorstep today.</div>
														<span class="svg-ico arrow">
															<svg version="1.1" xmlns="https://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" >
															<path d="M30.5,14.9l-9-8.9c-0.6-0.5-1.8-0.7-2.5-0.1c-0.7,0.6-0.7,1.7,0,2.3l6.3,6.3H2.7C1.8,14.4,1,15.1,1,16
																s0.8,1.6,1.7,1.6h22.7l-6.3,6.3c-0.6,0.5-0.7,1.7,0,2.3c0.7,0.6,1.9,0.4,2.5-0.1l9-8.9c0.3-0.3,0.5-0.7,0.5-1.1
																C31,15.6,30.8,15.2,30.5,14.9z"></path>
															</svg>
														</span>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>












		<div class="container-fluid journey-graphic lazy-bg bg-loaded">
			<div class="container">
				<section class="mkt-place__journey">
					<div class="mkt-place__journey__content">
						<div class="mkt-place__journey--title">The Journey So Far</div>
						<div class="mkt-place__journey--info">At Magicbricks, we've come a long way towards creating "one platform" for all your real estate needs. With Property Services, we're taking another giant leap in that direction.</div>
						<ul class="mkt-place__journey__list">
							<li class="mkt-place__journey__list--item">
								<div class="mkt-place__journey__list--item--value">60K+</div>
								<div class="mkt-place__journey__list--item--label">Customers Served</div>
							</li>
							<li class="mkt-place__journey__list--item cities">
								<div class="mkt-place__journey__list--item--value">20+</div>
								<div class="mkt-place__journey__list--item--label">Cities</div>
							</li>
							<li class="mkt-place__journey__list--item">
								<div class="mkt-place__journey__list--item--value">40+</div>
								<div class="mkt-place__journey__list--item--label">Trusted Service Partners</div>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	</>
    )
}

export default PayrentService