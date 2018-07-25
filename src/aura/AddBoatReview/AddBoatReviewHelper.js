({
	onInit : function(component, event, helper) {
		component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false, 
            $A.getCallback(function() {
                var rec= component.get("v.boatReview");
                var error = component.get("v.recordError");
                var boat = component.get("v.boat");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    component.set("v.boatReview.Boat__c", boat.id);
                }
            })
        
        );
	}
})