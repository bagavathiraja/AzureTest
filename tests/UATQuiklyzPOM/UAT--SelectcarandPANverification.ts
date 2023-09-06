import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATFindcarandPAN{
    constructor(public page :Page){
    }
   async FindCar(){
       await this.page.getByRole('link',{ name :' Find Cars '}).click();
    }
    async SelectCar(){
        //await this.page.locator('div').filter({ hasText: 'Maruti Suzuki Swift' }).first().click()
        await this.page.getByTitle(' Maruti Suzuki Swift').click();
       //await this.page.getByRole('link',{ name :'Maruti Suzuki Swift '}).click();
       await this.page.waitForTimeout(1000)
        //await this.page.locator('a').filter({ hasText: 'Lxi' }).click();
       // await this.page.getByRole('link', { name: 'Swift Vxi Petrol Manual Metallic' }).click();
       //await this.page.getByRole('combobox', { name: '48' }).locator('div').nth(3).click();
        await this.page.getByRole('combobox', { name: 'Select Tenure (Months) 48' }).locator('div').nth(3).click();

    await this.page. getByRole('option', { name: '36' }).locator('span').first().click();
    await this.page.getByRole('combobox', { name: 'Select Kilometers 10,000 km/year' }).locator('div').nth(3).click();
       // await this.page.getByRole('combobox', { name: '10,000 km/year' }).locator('div').nth(3).click();
        //await this.page. getByText('20,000 km/year').click();.
        await this.page. getByRole('option', { name: '20,000 km/year' }).locator('span').first().click();
        //await this.page.getByRole('combobox', { name: 'Pearl Metallic Lucent Orange' }).locator('div').nth(3).click();
        //await this.page.getByText('Pearl Metallic Midnight Blue').click();
        await this.page.locator('span:nth-child(5) > .color-round').click()
    }
    async ClickonEligibility(){
        await this.page.locator('mat-card-content').filter({ hasText: 'Maruti Suzuki Swift Petrol Manual Metallic Select Variant Lxi Select Variant Pet' }).getByRole('button', { name: 'Edit Record' }).click()
       //await this.page.click('button[color="primary"][aria-label="Edit Record"][class*="fgbuttonlarge"]');
      //await this.page.locator('mat-card-content').filter({ hasText: 'Maruti Suzuki Swift Petrol Manual Metallic Select Variant Vxi Select Variant Pet' }).getByRole('button', { name: 'Edit Record' }).click();
      //await this.page.locator('mat-card-content').filter({ hasText: 'Maruti Suzuki Swift Petrol Manual Metallic Select Variant Vxi Select Variant Pet' }).getByRole('button', { name: 'Edit Record' }).click();
      await this.page.waitForTimeout(1000)
    }
    async EnterFirstNameasPAN(){
        await this.page.getByPlaceholder('Enter first name as per PAN').click();
        await this.page.getByPlaceholder('Enter first name as per PAN').fill(data.FirstName);
    }
    async EnterLasttNameasPAN(){
        await this.page.getByPlaceholder('Enter last name as per PAN').click();
  await this.page.getByPlaceholder('Enter last name as per PAN').fill(data.LastName);
    }
    async EnterPANnumber(){
        await this.page.getByLabel('PAN Number *').click();
        await this.page.getByLabel('PAN Number *').fill(data.PANnumber);
    }
    async EnterDOB(){
         await this.page.getByRole('button', { name: 'Open calendar' }).click();
         await this.page.getByRole('button', { name: 'Choose month and year' }).click();
         await this.page.getByRole('button', { name: 'Previous 24 years' }).click();
         await this.page.getByRole('button', { name: '1995' }).click();
         await this.page.getByRole('button', { name: 'November 1995' }).click();
         await this.page.getByRole('button', { name: '28 November 1995' }).click();
    } 
    async Clickoncheckbox(){
        await this.page.locator('#mat-checkbox-8 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        //await this.page.locator('#mat-checkbox-6-input').click();
        //await this.page.click('//*[@id="mat-checkbox-6"]/label/span[1]')
        //

       //await this.page.locator('#mat-checkbox-8 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
       //await this.page.locator('#mat-checkbox-8-input').click()
       

        
        //await this.page.click('/html/body/app-root/div/fg-client-app-main-layout/div/fg-client-main-nav/mat-sidenav-container/mat-sidenav-content/div[2]/fg-form/div[2]/div/div/form/div/div[1]/fieldset/div/div[3]/div/fg-custom-container/div/div/div[2]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div[4]/div/div[1]/div/div/div/div/fg-custom-container/div/div/div/div/div[1]/div[1]/div/div/div/fg-checkbox/div/div/div/mat-checkbox/label/span[1]')
        //*[@id="mat-checkbox-6"]/label/span[1]
       // await this.page.locator('#mat-checkbox-6').check()
        //await this.page.locator('[id="mat-checkbox-6-input"]').check();
        
    //await this.page.locator('#mat-checkbox-6 > .mat-checkbox-layout > .mat-checkbox-inner-container').check()
    }
    async ClickContinue2(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        await this.page.waitForTimeout(1000)
    }
    async EnterAddress(){
        await this.page.getByLabel('Address *').click();
        await this.page.getByLabel('Address *').fill(data.Address);
    } 
    async EnterPincode(){
       await this.page.getByLabel('PIN Code *').click();
        await this.page.getByLabel('PIN Code *').fill(data.Pincode);
    }
    async EnterCity(){
        await this.page.getByLabel('City *').click();
        await this.page.getByLabel('City *').fill(data.City);
    }
    async SelectState(){
        await this.page.getByRole('combobox', { name: 'State *' }).locator('div').nth(3).click();
       //wait this.page.getByText('Maharashtra').click();
       await this.page.getByRole('option', { name: 'Maharashtra' }).click();
    }
    async Clickcontinue3(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        await this.page.waitForTimeout(1000)
    }
}