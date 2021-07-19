import {RestaurantList,CheckRestaurant} from './test';
import {RestaurantData,Restaurants,checkAvailabilty} from './RestaurantMain';
import {onlinereservation,checkReservation} from './Onlinereservation';
import {orderonline,checkorder} from './order';
import {costomers,cust} from './Costomer';


let a = new CheckRestaurant();
let b = new checkAvailabilty();
let c = new checkReservation();
let d = new checkorder();
let e = new cust();
let f = new Restaurants();


let op : number = 2 ; 
switch(op) {
    
     // details 
    case 1 : console.log('Restaurant Details :');
                    a.restaurantDetail();
                    break;
    case 2 : console.log('List for online order:');
                    b.itemAvailaible();
                    break;
    case 3 : console.log('hotel Reservation detail:');
                    c.ReservationDetail();
                    break;
    case 4 : console.log('Order details:');
                     d.isordered();
                    break;
    
    case 5 : console.log('hotel Reservation table booking :');
                     e.bookTable;
                     break;

    case 6 : console.log('list:')
                    f.list();
                     break;
}

                    
    // case 2 : console.log('Normally list out the department and their vancancies:');
    // n.checkDept();
    // break;

    // case 3 : console.log('check vacancies by specific id :');
    // n.checkById(2);
    // break;




