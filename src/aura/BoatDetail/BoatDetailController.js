({
    doinit : function(component, event, helper){
        var event = $A.get("e.force:navigateToSObject");
        component.set("v.showFullDetails", true);
        if(!event){
            component.set("v.showFullDetails", false);
        }
    },
	onFullDetails : function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get("v.boat.Id")
        });
        navEvt.fire();
	}
})