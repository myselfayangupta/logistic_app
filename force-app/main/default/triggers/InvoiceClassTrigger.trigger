trigger InvoiceClassTrigger on Driver__c  (after insert,after update) {
    InvoiceTriggerClass.updateInvoiceTriggerClass(Trigger.New);
}