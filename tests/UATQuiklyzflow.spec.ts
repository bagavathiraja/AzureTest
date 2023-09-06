import {test}  from "@playwright/test";
import UATRegistration from "./UATQuiklyzPOM/UAT--RegistrationandLogin"
import UATFindcarandPAN from "./UATQuiklyzPOM/UAT--SelectcarandPANverification"
import UATincome from "./UATQuiklyzPOM/UAT--Incomeverification"
import UATOperartionlogin from "./UATQuiklyzPOM/UAT--Operation--Login"
import UATtoken from "./UATQuiklyzPOM/UAT--Token"
import UATAadharverify from "./UATQuiklyzPOM/UAT--Aadharverification"
import UATVKYCUpdate from "./UATQuiklyzPOM/UAT--Operation--VKYC";
import UATAddressdetails from "./UATQuiklyzPOM/UAT--Address";
import UATOperationEagreement from "./UATQuiklyzPOM/UAT--Operation--E-Agreement"
import UATSecurity from "./UATQuiklyzPOM/UAT--Securiypayment"
import UATEmandateanddelivery from "./UATQuiklyzPOM/UAT--E-Mandate&Delivery"


test( "Customer Journey till Eligibility",async ({page}) => {

const RegisterLoginOTP = new UATRegistration(page)
const SelectCarsandPANverification = new UATFindcarandPAN(page)
const Incomeverification = new UATincome(page)

    await page.goto('https://uat.quiklyz.com');
    await page.setViewportSize({ width: 1525, height: 720 });
    await RegisterLoginOTP.Selectcity();
    await RegisterLoginOTP.dropdownLogin()
    await RegisterLoginOTP.SelectNewUser()
    await RegisterLoginOTP.EnterFirstName();
    
    await RegisterLoginOTP.EnterLastName();
    await RegisterLoginOTP.EnterEmailAddress();
    await RegisterLoginOTP.EnterMobileNumber();
    await RegisterLoginOTP.ClickCheckbox();
    await RegisterLoginOTP.ClickRegister1();
    await RegisterLoginOTP.EnterOTP();
    await RegisterLoginOTP.Clickcontinue1();

  /* If the user already registered use this script for login*/

   /*await RegisterLoginOTP.SelectAlreadyregistyeredOK()
    await RegisterLoginOTP.ClickLoginpanel()
    await RegisterLoginOTP.EnterMobilenumber1()
    await RegisterLoginOTP.otp1()
    await RegisterLoginOTP.EnterOTP1()*/

    

    await SelectCarsandPANverification.FindCar();
    await SelectCarsandPANverification.SelectCar();
    await SelectCarsandPANverification.ClickonEligibility();
    await SelectCarsandPANverification.EnterFirstNameasPAN()
    await SelectCarsandPANverification.EnterLasttNameasPAN()
    await SelectCarsandPANverification.EnterPANnumber()
    await SelectCarsandPANverification.EnterDOB()
    await SelectCarsandPANverification.Clickoncheckbox()
    await SelectCarsandPANverification.ClickContinue2()
    await SelectCarsandPANverification.EnterAddress()
    await SelectCarsandPANverification.EnterPincode()
    await SelectCarsandPANverification.EnterCity()
    await SelectCarsandPANverification.SelectState()
    await SelectCarsandPANverification.Clickcontinue3();

   

    await Incomeverification.salaried()
    await Incomeverification.Continue6()
    await Incomeverification.Selfdeclaration()
    await Incomeverification.Checkboxforuploadbankdetails()
    await Incomeverification.Continue7()

     /* For selecting Employee status run below script*/

    /*await Incomeverification.Empstatus()
    await Incomeverification.SelectBankandbankstatement()
    await Incomeverification.Continue8()
    await Incomeverification.Paynow1()*/
}
)

  test( "Updating in the operational site",async ({page}) => {

    const Operation =new UATOperartionlogin(page)

    await page.goto("https://uat.quiklyz.com/operation/")
    await page.setViewportSize({ width: 1525, height: 720 });
    await Operation .orgcode()
    await Operation .id()
    await Operation .password()
    await Operation .signin()
    await Operation .bookings()

     //Below script used for Skiping Eligibility
     
    await Operation .search()
    await Operation .mobileno()
    await Operation .searchbutton()
    await Operation .edit1()
    await Operation .selectstage()
    await Operation .eligibility()
    await Operation .eligibilitydropdown()
    await Operation .option()
    await Operation .creditscore()


    /*Below script used for Skiping Hunter fraud check*/

    /*await Operation.submit()
    await Operation.search()
    await Operation.mobileno()
    await Operation.searchbutton()
    await Operation.edit()
    await Operation.selectstage()
    await Operation.hunterfraud()
    await Operation.score()
    await Operation.decision()
    await Operation.SMverification()
    await Operation.status()
    await Operation.submit()*/
   
   
    //Below script used for Skiping Income Verification
   
    await Operation.searchs()
    await Operation.mobilenumber()
    await Operation.searchbutton()
    await Operation.edit11()
    await Operation.selectastage()
    await Operation.incomeverify()
    await Operation.yodleecheckbox()
  
})

test( "Customer completes the Token & Aadhar ",async ({page}) => {
    const Tokenpay =new UATtoken(page)
    const ViewAadhardetails= new UATAadharverify(page)

    await page.goto('https://uat.quiklyz.com');
    await page.setViewportSize({ width: 1525, height: 720 });
    await Tokenpay.Selectcityagain()
    await Tokenpay.dropdownLogin()
    await Tokenpay.LoginButton()
    await Tokenpay.EnterMobilenumber()
    await Tokenpay.otp()
    await Tokenpay.Continue9()
    await Tokenpay.Paynow1()

    //For aadhar verification run below script

    await ViewAadhardetails.EnterAadharNumber()
    await ViewAadhardetails.VerifyAadharbutton()
    await ViewAadhardetails.RetrivemyData()
    await page.waitForTimeout(1000)
    await ViewAadhardetails.ProceedtoVKYC()
}
)

    test( "Updating in the operational site for skipping VKYC",async ({page}) => {
    const OperationVKYC =new UATVKYCUpdate (page)
    await page.goto("https://uat.quiklyz.com/operation/")
    await page.setViewportSize({ width: 1525, height: 720 });
    await OperationVKYC.orgcode()
    await OperationVKYC.id()
    await OperationVKYC.password()
    await OperationVKYC.signin()
    await OperationVKYC.bookings()

    //Below script used for Skiping VKYC

    await OperationVKYC.search()
    await OperationVKYC.mobileno()
    await OperationVKYC.searchbutton()
    await OperationVKYC.Edit3()
    await OperationVKYC.Onboarding()
    await OperationVKYC.OnboardingEDIT()
    await OperationVKYC.Stagetoskip()
    await OperationVKYC.SkipVKYC()
    await OperationVKYC.Skipsteps()
    })

    test( "Customer completes the address",async ({page}) => {
    const Addresscheckheck =new UATAddressdetails (page)
    await page.goto('https://uat.quiklyz.com');
    await page.setViewportSize({ width: 1525, height: 720 });
    await Addresscheckheck.Selectcityagain()
    await Addresscheckheck.dropdownLogin()
    await Addresscheckheck.LoginButton()
    await Addresscheckheck.EnterMobilenumber()
    await Addresscheckheck.otp()
    await Addresscheckheck.proceedforaddresscheck()
    await Addresscheckheck.ProceedtoEagreements()
  }
   )
    /* Run this scipt for aadhar address or uploading any other address proof*/ 
    
    /*await Addresscheckheck.SelectAadharaddress()
    await Addresscheckheck.Selectdocuments()
    const [uploadFiles] = await Promise.all([
    page.waitForEvent('filechooser'),
    await Addresscheckheck.Browse()
    ])
    uploadFiles.setFiles("tests/Driving.pdf")
    const [uploadFiles1] = await Promise.all([
    page.waitForEvent('filechooser'),
    await Addresscheckheck.Browse1()
   ])
    uploadFiles1.setFiles("tests/Image2.jpg")
    await Addresscheckheck.Editdetails()*/
         

test( "Updating in the operational site for skipping E-Agreement",async ({page}) => {
    const OperationEagreementskip =new UATOperationEagreement (page)
    await page.goto("https://uat.quiklyz.com/operation/")
    await page.setViewportSize({ width: 1525, height: 720 });
    await OperationEagreementskip.orgcode()
    await OperationEagreementskip.id()
    await OperationEagreementskip.password()
    await OperationEagreementskip.signin()
    await OperationEagreementskip.bookings()
    //Below script used for Skiping E-agreement
    await OperationEagreementskip.search()
    await OperationEagreementskip.mobileno()
    await OperationEagreementskip.searchbutton()
    await OperationEagreementskip.Editbutton()
    await OperationEagreementskip.Onboarding()
    await OperationEagreementskip.OnboardingEDIT()
    await OperationEagreementskip.Stagetoskip()
    await OperationEagreementskip.SkipEagreement()
    await OperationEagreementskip.Skipsteps()
})

    test( "Customer completes the further process start with security payment",async ({page}) => {
    const Security =new UATSecurity  (page)
    const EmandateandDeliverys = new UATEmandateanddelivery (page);
    await page.goto('https://uat.quiklyz.com');
    await page.setViewportSize({ width: 1525, height: 720 });
    await Security.Selectcityagain()
    await Security.dropdownLogin()
    await Security.LoginButton()
    await Security.EnterMobilenumber()
    await Security.EnterOTP()
    await Security.Paynow();
    await EmandateandDeliverys.SelectAccountType()
    await EmandateandDeliverys.SelectBankName()
    await EmandateandDeliverys.EnterAccountNumber()
    await EmandateandDeliverys.ReenterConfirmAccountNumber()
    await EmandateandDeliverys.EnterAccountholdername()
    await EmandateandDeliverys.EnterIFSC()
    await EmandateandDeliverys.Purposeofmandate()
    await EmandateandDeliverys.Netbanking()
    await EmandateandDeliverys.Continue6()
    await EmandateandDeliverys.SelectHomeDelivery()

})