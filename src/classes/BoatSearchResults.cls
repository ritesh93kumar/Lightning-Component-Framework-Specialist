public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        if ((!Schema.sObjectType.Boat__c.fields.Name.isAccessible())){
            throw new System.NoAccessException();
            //return null;
        }
        
        List<Boat__c> boatList = new List<Boat__c>();
        try{
            if(String.isEmpty(boatTypeId)){
                boatList = [SELECT Id,Name,Picture__c,contact__r.Name,Geolocation__Latitude__s,Geolocation__Longitude__s FROM Boat__c];
            }else{
                boatList = [SELECT Id,Name,Picture__c,contact__r.Name,Geolocation__Latitude__s,Geolocation__Longitude__s FROM Boat__c WHERE BoatType__c =:boatTypeId];
            }
        }catch(Exception e){
            system.debug(e.getMessage());
        }
        
        return boatList;
    }
}