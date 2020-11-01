public with sharing class InvoiceClass {
    public static void updateInvoiceClass(List<Product2> prod ) {
        Map<ID, Customer__c> parentroll = new Map<ID, Customer__c>(); 
       List<Id> listIds = new List<Id>();

  for (Product2 childObj : prod)
  {
    listIds.add(childObj.Customer__c);
  }

  parentroll = new Map<Id, Customer__c>([SELECT id,Product_Name__c FROM Customer__c WHERE ID IN :listIds]);

  for (Product2 cl : prod)
  {
    Customer__c myParentroll = parentroll.get(cl.Customer__c);
     myParentroll.Product_Name__c = cl.Name;
     myParentroll.Product_Cost__c = cl.Cost__c;

  }
  update parentroll.value();

}
}