import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATVKYCUpdate{
    constructor(public page : Page){

    }
    async orgcode(){
        await this.page.getByRole('textbox', { name: 'orgCode' }).fill(data.orgcode)
    }
    async id(){
        await this.page.getByRole('textbox', { name: 'loginId' }).fill(data.id)
        }
    async password(){
        await this.page.getByLabel('Password *').fill(data.Password)
    }
    async signin(){
        await this.page.getByRole('button', { name: 'Sign In' }).click()
    }
    async bookings(){
        await this.page.getByRole('heading', { name: 'Bookings' }).click()
    }
    async search(){
        await this.page.getByRole('button').filter({ hasText: 'search' }).click()
    } 
     async mobileno(){
        await this.page.getByLabel('Mobile Number').fill(data.MobileNo)
    }
    async searchbutton(){
        await this.page.getByRole('button', { name: 'Search' }).click()
       // await this.page.waitForTimeout(1000)
    }
    async Edit3(){
        await this.page.waitForTimeout(1000)
        await this.page.getByRole('button').filter({ hasText: 'edit' }).click()
        
        
        
       
    }
    async Onboarding(){
        await this.page.getByRole('tab', { name: 'Onboarding' }).click();
        
       // await this.page.getByText('Onboarding').click()
        
    }
    async OnboardingEDIT(){
       
        await this.page.getByRole('tabpanel', { name: 'Onboarding' }).getByRole('button').click();
    }
    async Stagetoskip(){
        await this.page.locator('.mat-form-field-infix').first().click();
       // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('span').click();
       // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(3).click();
        //await this.page.locator('.mat-form-field-infix').first().click();
    }
    async SkipVKYC(){
        await this.page.getByText('VKYC', { exact: true }).click();
    }
    async Skipsteps(){
        
        await this.page.getByLabel('Customer status', { exact: true }).fill('SUCCESS')
        await this.page. getByRole('combobox', { name: 'Customer status flag' }).locator('div').nth(2).click()
        await this.page. getByRole('option', { name: 'Y' }).locator('span').first().click()
        await this.page. getByLabel('Auditor status', { exact: true }).fill('SUCCESS')
        await this.page. getByRole('combobox', { name: 'Auditor status flag' }).locator('div').nth(2).click()
        await this.page.getByRole('option', { name: 'Y' }).locator('span').first().click()
        await this.page.getByLabel('Current Address').click();
        await this.page.getByLabel('Current Address').fill('B-13,Veer Jijamata Nagar, Worli');
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
}