import {Page} from "@playwright/test";
import * as data from "../UATQuiklyzPOM/Data/data.cred.json"
export default class UATAddressdetails{
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
      
       }
       async otp(){
       // for (let i = 1; i <= 6; i++) {
          //  await this.page.locator(`div:nth-child(${i}) > .form-control`).first().fill(`${i}`);
          //  await this.page.getByRole('button', { name: 'Login', exact: true }).click();
          await this.page.getByRole('button', { name: 'Get OTP' }).click();
          await this.page.locator('.form-control').first().fill('1');
  await this. page.locator('div:nth-child(2) > .form-control').first().fill('2');
  await this.page.locator('div:nth-child(3) > .form-control').first().fill('3');
  await this.page.locator('div:nth-child(4) > .form-control').first().fill('4');
  await this.page.locator('div:nth-child(5) > .form-control').first().fill('5');
  await this.page.locator('div:nth-child(6) > .form-control').first().fill('6');
  await this.page.getByRole('button', { name: 'Login', exact: true }).click();
  await this.page.waitForTimeout(1000)
  await this.page.getByRole('button', { name: 'Edit Record' }).click();
  //await this.page.getByRole('button', { name: 'Edit Record' }).click();
          }
    async proceedforaddresscheck(){
       // await this.page.getByRole('button', { name: 'Edit Record' }).click();
        //await this.page. getByRole('button', { name: 'No' }).click();
       // await this.page. getByRole('button', { name: 'Yes' })
        await this.page. getByRole('button', { name: 'Yes' }).click();
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
    //async SelectAadharaddress(){
        //await this.page.locator('#mat-radio-12 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
   // }
   async Selectdocuments(){
    await this.page.getByText('Driving License Select Document Type *').click();
       // await this.page. getByRole('combobox', { name: 'Select Document Type * Driving License' }).locator('div').nth(3).click()
       // await this.page.getByRole('option', { name: 'Passport' }).locator('span').first().click()
        await this.page. getByRole('option', { name: 'Driving License' }).locator('span').first().click()
      //  await this.page.locator('.uploader').first().click()
       // await this.page.locator('body').setInputFiles('Image1.jpg');

       // await this.page.setInputFiles('upload',('"\tests\Image1.jpg"'));
        //await this.page.locator('div:nth-child(2) > div > .fgFileUploader > div > fg-file-uploader > div > div > div > .upload > .uploader > .fa').first().setInputFiles('"C:\Users\finez\Downloads\Image2.jpg"');
       // await this.page.getByRole('button', { name: 'Edit Record' }).click()

    }
    async Browse(){
        await this.page.locator('.uploader').first().click()
    }
    //async Browse1(){
      //  await this.page.locator('div:nth-child(2) > div > .fgFileUploader > div > fg-file-uploader > div > div > div > .upload > .uploader > .fa').first().click()
        //await this.page.getByRole('button', { name: 'Edit Record' }).click()
  //  }
   /* async Editdetails(){
        await this.page.getByRole('button', { name: 'Edit Details' }).click();
  await this.page.getByRole('textbox', { name: 'Full Name' }).click();
  await this.page.getByRole('textbox', { name: 'Full Name' }).fill('Faizan Mohammad Shafi Ansari');
  await this. page.getByRole('button', { name: 'Open calendar' }).click();
  await this.page.getByRole('button', { name: 'Choose month and year' }).click();
  await this.page.getByRole('button', { name: 'Previous 24 years' }).click();
  await this.page.getByRole('button', { name: '1995' }).click();
  await this.page.getByRole('button', { name: 'November 1995' }).click();
  await this.page.getByRole('button', { name: '28 November 1995' }).click();
  await this.page.getByLabel('State').click();
  await this.page.getByLabel('State').fill('Maharashtra');
  await this.page.getByRole('button', { name: 'Edit Record' }).click();

    }*/

    
    async ProceedtoEagreements(){
        await this.page.getByRole('button', { name: 'Edit Record' }).click();
        //await this.page.getByRole('button', { name: 'Edit Record' }).click();
    }
}