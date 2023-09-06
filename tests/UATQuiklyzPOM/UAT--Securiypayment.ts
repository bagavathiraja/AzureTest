import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATSecurity{
    
    constructor(public page :Page){
    }
    async Selectcityagain(){
        await this.page.locator('.fg-line-form > div > div > .Mumbai > div').first().click()
    }
    async dropdownLogin(){
        await this.page.getByRole('button',{name:'Login  '}).click();
    }
    async LoginButton(){
        await this.page.getByRole('button', { name: 'Login', exact: true }).click();
    }
    async EnterMobilenumber(){
        await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).click();
      await this.page.getByRole('textbox', { name: 'Enter Mobile Number' }).fill(data.MobileNo);
      await this.page.getByRole('button', { name: 'Get OTP' }).click();
       }
       /*async otp(){
        for (let i = 1; i <= 6; i++) {
            await this.page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
            await this.page.getByRole('button', { name: 'Login', exact: true }).click();
          }}*/
          async EnterOTP(){
            await this.page.locator('.form-control').first().click();
            await this.page.locator('.form-control').first().fill('1')
            await this.page.locator('div:nth-child(2) > .form-control').first().fill('2');
            await this.page.locator('div:nth-child(3) > .form-control').first().fill('3');
            await this.page.locator('div:nth-child(4) > .form-control').first().fill('4');
            await this.page.locator('div:nth-child(5) > .form-control').first().fill('5');
            await this.page.locator('div:nth-child(6) > .form-control').first().fill('6')
            await this.page.getByRole('button', { name: 'Login', exact: true }).click();
            //await this.page.getByLabel('Aadhaar Number *').fill(data.Aadhardetail);
           // await this.page.getByRole('button', { name: 'Edit Record' }).click();
          }

    
    async Continue9(){
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async ProceedtoSecuritypay(){
        //await this.page .getByRole('button',{name: ' Proceed to Security Payment '}).click();
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async Paynow(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
       // await this.page .getByRole('button',{name: 'Pay Now'}).click();
       await this.page.getByRole('textbox', { name: 'Card Number' }).click()
        await this.page.getByRole('textbox', { name: 'Card Number' }).fill('5123 4567 8901 2346 ');
        await this.page.getByLabel('Select your card').fill('Faizan Ansari');
        await this.page.getByRole('textbox', { name: 'CVV Number' }).fill('123');
        await this.page.locator('#cexpiry_date_month').selectOption('05');
        await this.page.locator('#cexpiry_date_year').selectOption('2025');
        //await this.page.selectOption('[id="cexpiry_date_month"]',{value:"May (5)"});
       //await this.page.selectOption('[id="cexpiry_date_year"]',{value:"2025"});
        await this.page.getByRole('button', { name: 'Pay Now' }).click();
        await this.page.locator('#password').click();
        await this.page.locator('#password').fill('123456');
        await this.page.getByRole('button', { name: 'PAY' }).click();
        await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Continue to E-Mandate' }).getByRole('button', { name: 'Edit Record' }).click();
     //await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Proceed to Aadhaar Verification' }).getByRole('button', { name: 'Edit Record' }).click();
    }
}
