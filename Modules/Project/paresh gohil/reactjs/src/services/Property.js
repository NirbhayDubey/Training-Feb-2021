import axios from 'axios';

const PROPERTY_API_BASE_URL = "http://localhost:3000/";

// const PROPERTY_API_BASE_URL1 = "http://localhost:3000/user";

class Property {

    getProperties(){
        return axios.get(PROPERTY_API_BASE_URL + 'property');
    }

    createProperty(property){
        return axios.post(PROPERTY_API_BASE_URL + 'property', property);
    }

    getPropertyByCity(city){
        return axios.get(PROPERTY_API_BASE_URL + 'property/' + city);
    }

    getPropertyByAddress(city,address){
        return axios.get(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address);
    }

    getPropertyImage(city,address,id){
        return axios.get(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/sellerimage');
    }

    createPropertyImage(city,address,id,file){
        return axios.post(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/sellerimage',file);        
    }

    getPropertyDetails(city,address,id){
        return axios.get(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/propertydetail');
    }

    createPropertyDetails(city,address,id,property){
        return axios.post(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/propertydetail',property);
    }

    getPropertyDescription(city,address,id){
        return axios.get(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/propertydescription');
    }

    createPropertyDescription(city,address,id,property){
        return axios.post(PROPERTY_API_BASE_URL + 'property/' + city + '/' + address + '/' + id + '/propertydescription',property);
    }

    updateProperty(property, id){
        return axios.put(PROPERTY_API_BASE_URL + 'property/' + id, property);
    }

    deleteProperty(id){
        return axios.delete(PROPERTY_API_BASE_URL + 'property/' + id);
    }


    //-------------user----------------
    createUser(user){
        console.log(user)
        return axios.post(PROPERTY_API_BASE_URL + 'user/',user);        
    }
    verifyOtp(otp){
        return axios.post(PROPERTY_API_BASE_URL + 'user/' + 'otp',otp);        
    }

}

export default new Property()