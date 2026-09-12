
import {test,expect} from '../fixtures/CustomFixtures';

test.describe("Saucedemo -AddToCart",()=>{

 
     test("TC_CART_001 — Add a single product to the cart and verify the cart badge",
         async ({loginPage,productLandingPage,addToCartPage})=>{

        await test.step("Step1: Login", async()=>{

            await  loginPage.goto("https://www.saucedemo.com/");
           // await loginPage.goto(`${process.env.URL}`)      // url using .env file
            await loginPage.enterUserName("standard_user");
           await loginPage.enterPassword("secret_sauce");
            await loginPage.clickLoginButton();
            
        });

        await test.step("Step2: Verify that the user is redirected to products page",async()=>{

           
        const isLoginSuccessful = await productLandingPage.verifyProductTitleText();
        
        expect(isLoginSuccessful).toBe(true);
        });

       await test.step("Step3: Add Product To cart ", async()=>{
           
            await  addToCartPage.clickAddToCart();

        });


         await test.step("Step4: Verify the shopping cart badge is 1",async()=>{

           const badgeCount = await addToCartPage.getShoppingCartBadge();

            expect(badgeCount).toBe("1"); 
       

        });

    })

    test("TC_CART_002 — Add multiple products to the cart and verify the badge count and cart",
         async ({loginPage,productLandingPage,addToCartPage})=>{

              
            await test.step("Step1: Login", async()=>{

            await  loginPage.goto("https://www.saucedemo.com/");
            await loginPage.enterUserName("standard_user");
            await loginPage.enterPassword("secret_sauce");
            await loginPage.clickLoginButton();
            
        });

        await test.step("Step2: Verify that the user is redirected to products page",async()=>{

           
        const isLoginSuccessful = await productLandingPage.verifyProductTitleText();
        
        expect(isLoginSuccessful).toBe(true);
        });

       await test.step("Step3: Add Product To cart ", async()=>{
           
            await  addToCartPage.clickAddToCart();
            await  addToCartPage.clickAddToCartBackPack();

        });

      await test.step("Step4: Verify the shopping cart badge is 2",async()=>{

           const badgeCount = await addToCartPage.getShoppingCartBadge();

            expect(badgeCount).toBe("2"); 

        });

      
        await test.step("Step5: Navigate to shopping cart",async()=>{

            await addToCartPage.clickShoppingCartBadge();

        });


        await test.step("Step6: Verify the products in the cart",async()=>{


            const isBikeLightVisible = await addToCartPage.verifyBikeLightProduct();

            expect(isBikeLightVisible).toBe(true);
       

            const isBackpackVisible = await addToCartPage.verifyBackpackProduct();
            expect(isBackpackVisible).toBe(true);
        });


        await test.step("Step7: Remove Backpack from cart", async () => {
          await addToCartPage.removeBackpack();
});


       await test.step("Step8: Verify shopping cart badge value", async () => {

            const badgeValue = await addToCartPage.getShoppingCartBadge();
            expect(badgeValue).toBe("1");

});


            await test.step("Step9: Click Checkout button", async () => {

             await addToCartPage.clickCheckout();

});

})

})