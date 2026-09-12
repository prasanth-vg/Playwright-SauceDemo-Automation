
import { test as base} from '@playwright/test'

import { LoginPage } from '../pages/LoginPage';

import { ProductLandingPage } from '../pages/ProductLandingPage';
import { AddToCartPage } from '../pages/AddToCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type PageFixtures = {

    loginPage: LoginPage;

    productLandingPage: ProductLandingPage;
    
    addToCartPage: AddToCartPage;
    checkoutPage: CheckoutPage;
};

 export const test = base.extend<PageFixtures>({

      loginPage: async ({page}, use )=>{

      await use(new LoginPage(page));
  },   
     productLandingPage: async ({page}, use )=>{

      await use(new ProductLandingPage(page));
     },

     addToCartPage: async ({page}, use )=>{

      await use(new AddToCartPage(page));
     },

     checkoutPage: async ({page}, use)=>{

        await use(new CheckoutPage(page));
     }

 });


   export { expect } from '@playwright/test';
   export default test;
   


