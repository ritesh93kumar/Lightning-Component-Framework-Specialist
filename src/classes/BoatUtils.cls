public with sharing class BoatUtils {
	
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        
        if((!Schema.SObjectType.BoatType__c.fields.Name.isAccessible()) 
           && (!Schema.SObjectType.BoatType__c.fields.Id.isAccessible())){
            throw new System.NoAccessException();
            //return null;
        }
        
        return [SELECT Id, Name FROM BoatType__c ];
    }
}