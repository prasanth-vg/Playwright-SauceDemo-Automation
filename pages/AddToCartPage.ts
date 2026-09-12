import type{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';


export class AddToCartPage extends BasePage{

   
   readonly AddToCartButton: Locator;    
   readonly ShoppingCartBadge: Locator;   
   //readonly ShoppingCartBadgeValue: Locator;  
   readonly AddToCartButtonBackpack: Locator; 
   readonly BikeLightProduct: Locator;
   readonly BackpackProduct: Locator;
   readonly RemoveBackpackButton: Locator;

   readonly CheckoutButton: Locator;     

   constructor(page :Page){
       super(page);
      
      this.AddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
      this.ShoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
      //this.ShoppingCartBadgeValue = page.locator('[data-test="shopping-cart-badge"]');
      this.AddToCartButtonBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

      this.BikeLightProduct = page.locator("//div[@data-test='inventory-item-name' and text()='Sauce Labs Bike Light']");
      this.BackpackProduct = page.locator("//div[@data-test='inventory-item-name' and text()='Sauce Labs Backpack']");
    
      this.RemoveBackpackButton = page.locator("//button[@data-test='remove-sauce-labs-backpack']");
      
      this.CheckoutButton   = page.locator('[data-test="checkout"]');

  }  




   // action methods

   async clickAddToCart():Promise<void>{
   
     await this.AddToCartButton.click();

 }

   async clickAddToCartBackPack():Promise<void>{
   
     await this.AddToCartButtonBackpack.click();

 }


   async getShoppingCartBadge(): Promise<string | null> {
    return await this.ShoppingCartBadge.textContent();
}

   async clickShoppingCartBadge(): Promise<void> {
    await this.ShoppingCartBadge.click();
}

   async verifyBikeLightProduct(): Promise<boolean> {
    return await this.BikeLightProduct.isVisible();
}

  async verifyBackpackProduct(): Promise<boolean>{

    return await this.BackpackProduct.isVisible();

  }


   async removeBackpack():Promise<void>{

      await  this.RemoveBackpackButton.click();    

      
   }

   async clickCheckout():Promise<void>{

      await  this.CheckoutButton.click();    
      
   }


}