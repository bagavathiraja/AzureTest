import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UAToperartionallogin{
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
        
    }
    async edit1(){
        await this.page.waitForTimeout(1000)
         await this.page.getByRole('button').filter({ hasText: 'edit' }).click()
       // await this.page.getByRole('row', { name: ' ENT2023074258085 58639 7208039990 Maruti Suzuki OPEN 04-07-23' }).getByRole('button').click()
      // await this.page. getByRole('button').filter({ hasText: 'edit' }).click()
      
    }
    async selectstage(){
        await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('span').click();
       // await this.page.getByText('Select stage to skip').click()
      // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(3).click()
    }
    async eligibility(){
       // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(2).click()
        //await this.page.getByRole('option', { name: 'Eligibility' }).click()
        await this.page.getByRole('option', { name: 'Eligibility' }).locator('span').first().click()
    }
    async eligibilitydropdown(){
        //await this.page.getByText('N Eligibility').click();
        await this.page.getByText('R Eligibility').click();
        //await this.page.getByRole('combobox', { name: 'Eligibility', exact: true }).locator('div').nth(3).click()
       //   await this.page. getByRole('option', { name: 'Y' }).locator('span').first().click()
        //await this.page.getByRole('combobox', { name: 'Eligibility R' }).locator('div').nth(2).click()
    }
    async option(){
        await this.page.getByRole('option', { name: 'Y' }).locator('span').first().click()
    }
    async creditscore(){
        await this.page.getByLabel('Credit Limit').fill('400000')
        //await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Save' }).getByRole('button', { name: 'Edit Record' }).click()
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
   

    //async hunterfraud(){
      //   await this.page.getByRole('button').filter({ hasText: 'search' }).click()
   // await this.page.getByLabel('Mobile Number').fill(data.MobileNo)
    //await this.page.getByRole('button', { name: 'Search' }).click()
   // await this.page.getByRole('button').filter({ hasText: 'edit' }).click();
    //a//wait this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(3).click()
        //await this.page.getByRole('option', { name: 'Hunter Fraud Check' }).getByText('Hunter Fraud Check').click()
   // }
    //async score(){
       // await this.page.getByLabel('Score').fill('900')
    //}
   // async decision(){

       // await this.page.getByText('Decision').fill('APPROVE')
   // }
   // async SMverification(){
       // await this.page.locator('#mat-checkbox-38 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
  //  }
    //async status(){
       // await this.page.getByLabel('Status', { exact: true }).fill('Y')
   // }
    //async submit(){
       // await this.page.getByRole('button', { name: 'Edit Record' }).click();
       //await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Save' }).getByRole('button', { name: 'Edit Record' }).click()
   // }

     async searchs(){
        await this.page.getByRole('button').filter({ hasText: 'search' }).click()
    } 
     async mobilenumber(){
        await this.page.getByLabel('Mobile Number').fill(data.MobileNo)
    }
    async searchbuttons(){
        await this.page.getByRole('button', { name: 'Search' }).click()
        
    }
    async edit11(){
        await this.page.waitForTimeout(2000)
        await this.page.getByRole('button').filter({ hasText: 'edit' }).click()
        
        
       // await this.page.getByRole('row', { name: ' ENT2023074258085 58639 7208039990 Maruti Suzuki OPEN 04-07-23' }).getByRole('button').click()
      // await this.page. getByRole('button').filter({ hasText: 'edit' }).click()
      
    }
    async selectastage(){
        await this.page.locator('.mat-form-field-infix').first().click();
       // await this.page.getByText('Select stage to skip').click()
      // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('span').click();
    
        //await this.page.getByRole('button').filter({ hasText: 'search' }).click()
        //await this.page.getByRole('button', { name: 'Search' }).click()
        //await this.page.getByLabel('Mobile Number').fill(mobileno)
        //await this.page.getByRole('button', { name: 'Search' }).click()
         //await this.page.pause()
         //await this.page.getByRole('button').filter({ hasText: 'edit' }).click();
       // await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(3).click()
        //await this.page.getByRole('combobox', { name: 'Select stage to skip' }).locator('div').nth(2).click()
    }
        async incomeverify(){
        await this.page.getByRole('option', { name: 'Income Verification' }).getByText('Income Verification').click()
        await this.page. getByText('Yodlee status').fill('SUCCESS')
        await this.page.getByLabel('Cus onb tolerance').fill('SUCCESS')
        await this.page.getByRole('combobox', { name: 'Onb Analytics status' }).locator('div').nth(2).click()
        await this.page.getByRole('option', { name: 'Y' }).locator('span').first().click()
        }

        async yodleecheckbox(){
            await this.page.getByText('Yodlee Income Status').click();
            //await this.page.locator('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        //await this.page.locator('#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        
    }

    }
    

    
