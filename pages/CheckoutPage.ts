import type{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';


export class CheckoutPage extends BasePage{

   
  // readonly CheckoutButton: Locator;    
   readonly FirstNameInput: Locator;   
   readonly LastNameInput: Locator;  
   readonly PostalCodeInput: Locator; 
   readonly ContinueButton: Locator; 
   readonly FinishButton: Locator; 
  readonly GeneratePdfOrder: Locator; 
   readonly OrderConfirmationMessage: Locator; 

   readonly CheckoutErrorMessage: Locator;

   readonly CheckoutProductName: Locator;

   constructor(page :Page){
       super(page);
      
      //this.CheckoutButton   = page.locator('[data-test="checkout"]');
      this.FirstNameInput = page.locator('[id="first-name"]');
      this.LastNameInput  = page.locator('[id="last-name"]');
      this.PostalCodeInput  = page.locator('[id="postal-code"]');
      this.ContinueButton  = page.locator("//input[@data-test='continue']");
      this.FinishButton  = page.locator('[data-test="finish"]');
      this.GeneratePdfOrder  = page.locator('[data-test="generate-pdf-order"]');
      this.OrderConfirmationMessage  = page.locator('[data-test="complete-header"]');
      this.CheckoutErrorMessage = page.locator('[data-test="error"]');
      this.CheckoutProductName = page.locator('[data-test="inventory-item-name"]');
  }  

    //Actions 

     async fillCustomerDetails(firstName:string, lastName:string, postalCode:string):Promise<void>{

        await this.FirstNameInput.fill(firstName);
        await this.LastNameInput.fill(lastName);
        await this.PostalCodeInput.fill(postalCode);

}

     async clickContinue():Promise<void>{

      await  this.ContinueButton.click();    
      
   }

    
     async clickFinishOrder():Promise<void>{

      await  this.FinishButton.click();    
      
   }


      async clickGenerateOrderPDF():Promise<void>{

      await  this.GeneratePdfOrder.click();    
      
   }


   async getOrderConfirmationText(): Promise<string | null> {
    return await this.OrderConfirmationMessage.textContent();
}

   async getCheckoutErrorMessage(): Promise<string | null> {
    return await this.CheckoutErrorMessage.textContent();
}

   async getCheckoutProductName(): Promise<string | null> {
    return await this.CheckoutProductName.textContent();
}

}