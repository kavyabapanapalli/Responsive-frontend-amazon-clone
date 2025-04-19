import { renderOrderSummary } from './checkout/ordersummary.js';
import {renderPaymentSummary} from './checkout/paymentsummary.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){  
    try{
       // throw 'error1';
        await loadProductsFetch(); 

        const value=await new Promise((resolve,reject) =>{
           // throw 'error2'; //then await beahaves like a normal synchronpus code.
            loadCart(() =>{
                //reject('error3');
                resolve('value3');
            });
         });
    } catch(error){
        console.log('unexpected error.please try again');
    }
    

    renderOrderSummary();
    renderPaymentSummary();

}
loadPage();

/*Promise.all([
    loadProductsFetch(),
    new Promise((resolve) =>{
        loadCart(() =>{
            resolve('value1');
        });
    })
]).then((value) =>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*new Promise((resolve) => {
    loadProducts(()=>{
        resolve();
        
    });
}).then(() => {
    return new Promise((resolve) =>{
        loadCart(() =>{
            resolve();
        });
    });
    
}).then(() =>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/
 

/*loadProducts(() => {
    loadCart(() =>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});*/
