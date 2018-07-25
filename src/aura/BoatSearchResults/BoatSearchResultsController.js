({
    
	doinit : function(component, event, helper) {
		helper.onSearch(component, event);
        console.log(component.get("v.boats"));
	},
    
    doSearch : function(component, event, helper) {
        var params = event.getParam('arguments');
        component.set("v.boatTypeId", params.boatTypeId);
		helper.onSearch(component, event);		
        return "search complete.";
	},
    
    onBoatSelect : function(component, event, helper) {
        var boatId = event.getParam('boatId');
        component.set("v.selectedBoatId", boatId);
    }
})