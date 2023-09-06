import {Page} from "@playwright/test";
export default class UATEmandateanddelivery{

    constructor(public page :Page){
    }
    async Continue5(){
        await this.page .locator('fg-action-builder-actions').filter({ hasText: 'Continue to E-Mandate' }).getByRole('button', { name: 'Edit Record' }).click()
    }
    async SelectAccountType(){
        await this.page.getByRole('combobox', { name: 'Account Type *' }).locator('span').click();
       //await this.page.getByRole('combobox', { name: 'Account Type *' }).locator('div').nth(3).click();
        //await this.page.getByRole('option', { name: 'Savings' }).locator('span').first().click();
        await this.page.getByRole('option', { name: 'Savings' }).click();


    }
    async SelectBankName(){
        await this.page.waitForTimeout(1000)
        await this.page.locator('div').filter({ hasText: 'Bank Name *' }).first().click();
        //await this.page.getByRole('combobox', { name: 'Bank Name *' }).locator('span').click();
        //await this.page.getByRole('combobox', { name: 'Bank Name *' }).locator('div').nth(3).click();
        await this.page.getByRole('option', { name: 'ICICI BANK LTD' }).locator('span').first().click();
       //await this.page.getByRole('combobox', { name: 'Bank Name *' }).locator('span').click()
       // await this.page.getByText('Bank Name *').click();   
       //await this.page.getByRole('option', { name: 'ICICI BANK LTD' }).click();
       // await this.page.getByText('ICICI BANK LTD').click();
        //await this.page.getByRole('combobox', { name: 'Bank Name *' }).locator('div').nth(3).click();
        //await this.page.getByRole('option', { name: 'ICICI BANK LTD' }).click();

    }
    async EnterAccountNumber(){
        await this.page.getByLabel('Bank Account No *').click();
         await this.page.getByLabel('Bank Account No *').fill('0151177111');
    }
    async ReenterConfirmAccountNumber(){
        await this.page.getByLabel('Bank Account No Confirm').click();
        await this.page.getByLabel('Bank Account No Confirm *').fill('0151177111');
    }
    async EnterAccountholdername(){
        await this.page.getByLabel('Account Holder Name *').click();
        await this.page.getByLabel('Account Holder Name *').fill('Abhimanyu gupta');
    }
    async EnterIFSC(){
        await this.page.getByLabel('IFSC Code *').click();
  await this.page.getByLabel('IFSC Code *').fill('ICIC0001234');
    }
    async Purposeofmandate(){
        await this.page.getByLabel('Purpose of Mandate').click();
  await this.page.getByLabel('Purpose of Mandate').fill('Automatic')
    }
    async Netbanking(){
        await this.page.getByRole('combobox', { name: 'Authentication Type *' }).click();
        await this. page.getByRole('option', { name: 'Net Banking' }).click();
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
       // await this.page.getByText('Authentication Type *').click();
       // await this.page.getByText('Net Banking').click();
    }
    async Editrecordsandlinks(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        await this.page.getByRole('link',{ name :' https://uat.emandate.in/customers/5ccdcbda7588ae7792 '}).click();
        await this.page.getByRole('button', { name: 'Proceed' }).click()
        await this.page.getByRole('button', { name: 'Close' }).click()
        
    }
    async Continue6(){
        await this.page.locator('fg-action-builder-actions').filter({ hasText: 'Proceed to Vehicle Delivery' }).getByRole('button', { name: 'Edit Record' }).click();
    }
    async SelectHomeDelivery(){
        await this.page.getByRole('button', { name: 'Edit Record' }).filter({hasText:'Save & Continue'}).click()
   
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
       // await this.page.goto('https://sit.quiklyz.com/page/2f8538fc-59eb-496f-a759-12a0c635bc33/4063b97b-f531-44e4-a880-5c597913d106');
    }
}