import type{Locator,Page} from '@playwright/test'
import { BasePage } from './BasePage';


export class LoginPage extends BasePage{

   readonly UsernameInput: Locator;
   readonly PasswordInput: Locator;
   readonly LoginButton: Locator;    
   
   constructor(page :Page){
       super(page);
      this.UsernameInput = page.locator('input[name="user-name"]');
      this.PasswordInput = page.locator('input[name="password"]');
      this.LoginButton = page.locator('input[type="submit"]');
  }

  
  async login(username:string, password:string):Promise<void>{
    
    // 1. Type one all actions 
    //  await this.UsernameInput.fill(username);
    //  await this.PasswordInput.fill(password);
    //  await this.LoginButton.click();


    // calling the (below) separate methods here to perform actions
     await this.enterUserName(username);
     await this.enterPassword(password);
     await this.clickLoginButton();

 }



   // seperate - seperate  methods
    async enterUserName(username:string):Promise<void>{
    
     await this.UsernameInput.fill(username);
    }

      async enterPassword(password:string):Promise<void>{
    
     await this.PasswordInput.fill(password);
    }

     async clickLoginButton():Promise<void>{
    
     await this.LoginButton.click();
    }

  
    async isLoginSuccessful(): Promise<boolean>{

        return await this.page.locator('[data-test="title"]',{ hasText: 'Products'}).isVisible();
    }

}