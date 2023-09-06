import {Page} from "@playwright/test";
export default class UATIncome {
    constructor(public page :Page){
    }
    //async Empstatus(){
      //  await this.page.locator('#mat-radio-4 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').dblclick()
        //    }
            async salaried(){
                await this.page.locator('.mat-radio-inner-circle').first().click()
            }

    async Continue6(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async Selfdeclaration(){
        await this.page.getByText('Self declared income (Net monthly income)').click()
       // await this.page. locator('#mat-radio-10 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        await this.page. getByPlaceholder('Take home salary as per salary slip').fill('200000')
    }
    async Checkboxforuploadbankdetails(){
        //await this. page.locator('.mat-radio-inner-circle').first().click();
  //await this.page.locator('#mat-checkbox-6 label').click();
 // await this.page. locator('#mat-checkbox-8 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
       await this.page.locator('#mat-checkbox-9 > .mat-checkbox-layout > .mat-checkbox-inner-container').click()
       
    }
    async Continue7(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        //await this.page.getByRole('button', { name: 'Continue' }).click();
    } 
}
   /*async SelectBankandbankstatement(){
       // await this.page.locator('div').filter({ hasText: 'Select Bank' }).nth(1).click();
       await this. page.frameLocator('iframe').locator('svg').nth(1).click();
       await this.page.frameLocator('iframe').getByText('IDFC Bank', { exact: true }).click();
       await this.page.frameLocator('iframe').getByRole('button', { name: 'Continue' }).click();
       await this.page.frameLocator('iframe').getByRole('button', { name: 'Browse' }).click();
     
 // await this.page.locator('div').filter({ hasText: 'IDFC Bank' }).nth(1).click();
  //await this.page.getByRole('button', { name: 'Continue' }).click();
  await this.page.waitForTimeout(10000)
  //await this.page.getByRole('button', { name: 'Browse' }).click();
  
  await this.page.getByRole('button', { name: 'Browse' }).setInputFiles('IDFCFIRSTBankstatement_June.pdf');
  await this.page.waitForTimeout(10000)
  //await this.page.getByRole('button', { name: 'Submit' }).click();
  await this.page.frameLocator('iframe').getByRole('button', { name: 'Submit' }).click();
  await this.page.waitForTimeout(10000)
  //await this.page.getByRole('button', { name: 'I\'m done' }).click();
  await this.page.frameLocator('iframe').getByRole('button', { name: 'I\'m done' }).click();
  await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    async Continue8(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
}*/
    