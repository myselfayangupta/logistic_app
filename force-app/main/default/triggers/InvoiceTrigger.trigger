trigger InvoiceTrigger on Product2 (after insert,after update) {
    InvoiceClass.updateInvoiceClass(Trigger.New);
}
