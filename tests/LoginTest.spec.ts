//import{expect} from "@playwright/test"

import {test,expect} from '../fixtures/CustomFixtures';
import process from 'node:process';
// import { LoginPage } from '../pages/LoginPage'
// import {ProductLandingPage} from '../pages/ProductLandingPage'

test.describe("Saucedemo -Login",async()=>{

 
     test("TC_LOGIN_001 - Log in with valid credentials and land on products page",
         async ({loginPage,productLandingPage})=>{

        await test.step("Step1: Navigate to the Login Page", async()=>{

             await  loginPage.goto("");

        })
        await test.step("Step2: Enter valida username and password",async()=>{

               await loginPage.enterUserName(process.env.SAUCE_USERNAME!);
               await loginPage.enterPassword(process.env.SAUCE_PASSWORD!);
        })

        await test.step("Step3: Click on the Login Button",async()=>{

           await loginPage.clickLoginButton();
                    
        })
        
       await test.step("Step4: Verify that the user is redirected to products page",async()=>{

           
        const isLoginSuccessful = await productLandingPage.verifyProductTitleText();
                    
        });


});

})