import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER__C_OBJECT from '@salesforce/schema/Customer__C';
import ADDRESS__C_FIELD from '@salesforce/schema/Customer__C.Address__C';
import Name_FIELD from '@salesforce/schema/Customer__C.Name';
import DRIVER_DETAILS__C_FIELD from '@salesforce/schema/Customer__C.Driver_Details__C';
import DRIVER_NAME__C_FIELD from '@salesforce/schema/Customer__C.Driver_Name__c';
import EMAIL__C_FIELD from '@salesforce/schema/Customer__C.Email__C';
import LOCATION__C_FIELD from '@salesforce/schema/Customer__C.Location__C';
import Product__C_FIELD from '@salesforce/schema/Customer__C.Product__C';
import Product_Cost__C_FIELD from '@salesforce/schema/Customer__C.Product_Cost__C';
import Product_Name__C_FIELD from '@salesforce/schema/Customer__C.Product_Name__C';
import Status__C_FIELD from '@salesforce/schema/Customer__C.Status__C';
import Total_Cost__C_FIELD from '@salesforce/schema/Customer__C.Total_Cost__C';
import DELIVERY_CHARGE__C_FIELD from '@salesforce/schema/Customer__C.Delivery_Charge__C';

export default class AddCustomerDetails extends LightningElement {

    objectApiName = CUSTOMER__C_OBJECT;
    fields = [Name_FIELD,EMAIL__C_FIELD,DRIVER_NAME__C_FIELD,DRIVER_DETAILS__C_FIELD,DELIVERY_CHARGE__C_FIELD,ADDRESS__C_FIELD,LOCATION__C_FIELD,
        Product_Name__C_FIELD,Product__C_FIELD,Product_Cost__C_FIELD,Status__C_FIELD,Total_Cost__C_FIELD];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Customer Created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}