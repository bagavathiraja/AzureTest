import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATRegistration{
    constructor(public page :Page){
    }
    async Selectcity(){
        await this.page.locator('.fg-line-form > div > div > .Mumbai > div').first().click()
    }
    async dropdownLogin(){
        await this.page.getByRole('button',{name:'Login  '}).click();
    }
    
    async SelectNewUser(){
        await this.page.getByRole('menuitem', { name: 'New user? Start here' }).click();
    }
    async EnterFirstName(){
      await this.page.getByRole('textbox', { name: 'First Name' }).click()
        await this.page.getByPlaceholder('Enter your First Name').fill(data.FirstName);
   }
    async EnterLastName(){
        await this.page.getByRole('textbox', { name: 'Last Name' }).click()
        await this.page.getByPlaceholder('Enter your Last Name').fill(data.LastName);
    }
   async EnterEmailAddress(){
       await this.page.getByRole('textbox', { name: 'Email Address' }).click();
        await this.page.getByPlaceholder('Enter your Email Address').fill(data.Email);
    }
    async EnterMobileNumber(){
        await this.page.getByRole('textbox', { name: 'Enter your Mobile Number' }).click();
        await this.page.getByPlaceholder('Enter your Mobile Number').fill(data.MobileNo);
    }
    async ClickCheckbox(){
        await this.page.locator('.mat-checkbox-inner-container').first().click();
    }
    async ClickRegister1(){
        await this.page.getByRole('tabpanel', { name: 'Register' }).getByRole('button', { name: 'Edit Record' }).click();
    }
    //async otp(){
      //  for (let i = 1; i <= 6; i++) {
        // await this.page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
         // }
   // }
   async EnterOTP(){
        await this.page.locator('.form-control').first().click();
        await this.page.locator('.form-control').first().fill('1')
        await this.page.locator('div:nth-child(2) > .form-control').first().fill('2');
        await this.page.locator('div:nth-child(3) > .form-control').first().fill('3');
        await this.page.locator('div:nth-child(4) > .form-control').first().fill('4');
        await this.page.locator('div:nth-child(5) > .form-control').first().fill('5');
        await this.page.locator('div:nth-child(6) > .form-control').first().fill('6');
    }
    async Clickcontinue1(){
       await this.page.getByRole('button', { name: 'Continue' }).click();
   }
async SelectAlreadyregistyeredOK()
    {
        await this.page.getByRole('button', { name: 'OK' }).click()
      }
   async ClickLoginpanel(){
    await this.page.getByRole('tab', { name: 'Login' }).getByText('Login').click();
   }
   async EnterMobilenumber1(){
    await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
  await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill(data.MobileNo);
  await this.page.getByRole('button', { name: 'Get OTP' }).click();
   }

   /*async otp1(){
    for (let i = 1; i <= 6; i++) {
        await this.page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
        await this.page.getByRole('button', { name: 'Login', exact: true }).click();
    await this.page.waitForTimeout(1000)

      }

    }}*/
   async EnterOTP1(){
   // await this.page.getByRole('button', { name: 'Get OTP' }).click();
  await this.page.locator('.form-control').first().fill('1');
  await this. page.locator('div:nth-child(2) > .form-control').first().fill('2');
  await this.page.locator('div:nth-child(3) > .form-control').first().fill('3');
  await this.page.locator('div:nth-child(4) > .form-control').first().fill('4');
  await this.page.locator('div:nth-child(5) > .form-control').first().fill('5');
  await this.page.locator('div:nth-child(6) > .form-control').first().fill('6');
  await this.page.getByRole('button', { name: 'Login', exact: true }).click();
   }
}













