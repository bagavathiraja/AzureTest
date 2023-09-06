import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATAadharverify{
    constructor(public page :Page){
    }
    async EnterAadharNumber(){
        await this.page.getByLabel('Aadhaar Number *').fill(data.Aadhardetail);
    }
    async VerifyAadharbutton(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async EnterAadharOTP(){
    
        await this.page.getByText('Aadhaar OTP').fill('815725')
    }
    async RetrivemyData(){
        await this.page .getByRole('button', { name: 'Edit Record' }).first().click();
       
        
    }
    async ProceedtoVKYC(){
        await this.page.getByRole('button', { name: 'Edit Record' }).filter({hasText:'Proceed to Video KYC'}).click()
  
    
       // await this.page .getByRole('button', { name: 'Edit Record' }).click();
    }
}
    /*async KYCVerification(){
        await this.page .getByRole('button', { name: 'Edit Record' }).click();
        await this.page.waitForTimeout(10000)
       //await this.page .getByRole('button',{name: 'Proceed to KYC Verification 2'}).click();
    }
    /*async proceedforaddresscheck(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        await this.page. getByRole('button', { name: 'No' }).click();
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async SelectAadharaddress(){
        await this.page.locator('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }



     async VKYC(){
        await this.page .getByRole('button',{name: ' Proceed to Video KYC '}).click();
    }
    async Continue4(){
        await this.page .getByRole('button',{name: 'Continue'}).click();
    }
    async ProceedtoEagreements(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    
}*/
