({
	onBoatSelected : function(component, event, helper) {
        var boat = event.getParam("boat");
        component.set("v.id", boat.id);
        component.find("service").reloadRecord();
	},
    
    onRecordUpdated : function(component, event, helper){
        var BRComp = component.find("BRComp");
        var auraMethodResult = BRComp.refresh();
    },
    onBoatReviewAdded : function(component, event, helper){
        component.find("tabs").set("v.selectedTabId", 'boatreviewtab');
        var BRComp = component.find("BRComp");
        var auraMethodResult = BRComp.refresh();	        
    },
})