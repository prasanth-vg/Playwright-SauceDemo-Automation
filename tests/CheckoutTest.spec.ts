import {test,expect} from '../fixtures/CustomFixtures';

test.describe("Saucedemo -Checkout",()=>{

 
     test("TC_CHECKOUT_001 — Complete checkout with valid information and verify the order confirmation message",
         async ({loginPage,productLandingPage,addToCartPage,checkoutPage})=>{
            
         await test.step("Step1: Login", async()=>{

            await loginPage.goto("https://www.saucedemo.com/");
            await loginPage.enterUserName("standard_user");
            await loginPage.enterPassword("secret_sauce");
            await loginPage.clickLoginButton();

        });


        await test.step("Step2: Verify that the user is redirected to products page",async()=>{

            const isLoginSuccessful = await productLandingPage.verifyProductTitleText();

            expect(isLoginSuccessful).toBe(true);

        });


        await test.step("Step3: Add Product To cart", async()=>{

            await addToCartPage.clickAddToCart();

        });


        await test.step("Step4: Verify the shopping cart badge is 1",async()=>{

            const badgeCount = await addToCartPage.getShoppingCartBadge();

            expect(badgeCount).toBe("1");

        });


        await test.step("Step5: Navigate to shopping cart",async()=>{

            await addToCartPage.clickShoppingCartBadge();

        });


        await test.step("Step6: Click Checkout button", async()=>{

            await addToCartPage.clickCheckout();

        });


        await test.step("Step7: Fill customer details", async()=>{

            await checkoutPage.fillCustomerDetails(
                "Prasanth",
                "VG",
                "631303"
            );

        });


        await test.step("Step8: Click Continue", async()=>{

            await checkoutPage.clickContinue();

        });


        await test.step("Step9: Finish the order", async()=>{

            await checkoutPage.clickFinishOrder();

        });


        await test.step("Step10: Verify order confirmation message", async()=>{

            const confirmationMessage =
                await checkoutPage.getOrderConfirmationText();

            expect(confirmationMessage).toBe("Thank you for your order!");

        });

    });

 test("TC_CHECKOUT_002 — Attempt checkout with a missing required field (postal code) and verify the validation error",
         async ({loginPage,productLandingPage,addToCartPage,checkoutPage})=>{
            
     await test.step("Step1: Login", async () => {

        await loginPage.goto("https://www.saucedemo.com/");
        await loginPage.enterUserName("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();

    });

    await test.step("Step2: Verify products page", async () => {

        const isLoginSuccessful =
            await productLandingPage.verifyProductTitleText();

        expect(isLoginSuccessful).toBe(true);

    });

    await test.step("Step3: Add product to cart", async () => {

        await addToCartPage.clickAddToCart();

    });

    await test.step("Step4: Navigate to shopping cart", async () => {

        await addToCartPage.clickShoppingCartBadge();

    });

    await test.step("Step5: Click Checkout", async () => {

        await addToCartPage.clickCheckout();

    });

    await test.step("Step6: Fill customer details without postal code", async () => {

        await checkoutPage.FirstNameInput.fill("Prasanth");
        await checkoutPage.LastNameInput.fill("Test");

    });

    await test.step("Step7: Click Continue", async () => {

        await checkoutPage.clickContinue();

    });

    await test.step("Step8: Verify postal code validation error", async () => {

        const errorMessage =
            await checkoutPage.getCheckoutErrorMessage();

        expect(errorMessage).toBe("Error: Postal Code is required");

    });

});


       test("TC_CHECKOUT_003 — Verify order overview displays the correct product",
    async ({loginPage, productLandingPage, addToCartPage, checkoutPage}) => {

    await test.step("Step1: Login", async () => {

        await loginPage.goto("https://www.saucedemo.com/");
        await loginPage.enterUserName("standard_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();

    });

    await test.step("Step2: Verify products page", async () => {

        const isLoginSuccessful =
            await productLandingPage.verifyProductTitleText();

        expect(isLoginSuccessful).toBe(true);

    });

    await test.step("Step3: Add Bike Light to cart", async () => {

        await addToCartPage.clickAddToCart();

    });

    await test.step("Step4: Navigate to shopping cart", async () => {

        await addToCartPage.clickShoppingCartBadge();

    });

    await test.step("Step5: Click Checkout", async () => {

        await addToCartPage.clickCheckout();

    });

    await test.step("Step6: Fill customer details", async () => {

        await checkoutPage.fillCustomerDetails(
            "Prasanth",
            "VG",
            "631303"
        );

    });

    await test.step("Step7: Click Continue", async () => {

        await checkoutPage.clickContinue();

    });

    await test.step("Step8: Verify order overview product", async () => {

        const productName =  await checkoutPage.getCheckoutProductName();

        expect(productName).toBe("Sauce Labs Bike Light");

    });

});

});


            
    
