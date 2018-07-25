({
    doinit : function(component, event, helper) {
        helper.loadBoatTypes(component);
        if($A.get("e.force:createRecord")){
            component.set("v.showNewButton", true);
        }
    },
	createBoat : function(component, event, helper) {
        var craeteBoatType = $A.get("e.force:createRecord");
        var boatTypeName = component.find("boatType").get("v.value");
        if(!boatTypeName){
            boatTypeName = null;
        }
        
        craeteBoatType.setParams({
            "entityApiName":"Boat__c",
            "defaultFieldValues":{
                "boatType__c": boatTypeName
            }
            
        });
        console.log(boatTypeName);
        console.log(craeteBoatType);
        craeteBoatType.fire();
	},
    
    onFormSubmit :function(component, event, helper){
        var boatTypeId = component.get("v.selctedType");
        
        var formSubmitEvent = component.getEvent("formsubmit");
        
        formSubmitEvent.setParams({
            "formData":{
                "boatTypeId": boatTypeId
            }
        });
        
        formSubmitEvent.fire();
    }
})