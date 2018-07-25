({
	onSearch : function(component, event) {
		var action = component.get("c.getBoats");
        action.setParams({"boatTypeId": component.get("v.boatTypeId")});
        action.setCallback(this, function(response){
            console.log(response.getState());
            if(response.getState() === "SUCCESS"){
                component.set("v.boats", response.getReturnValue());                
            }else if(response.getState() === "ERROR"){
                console.log(response.getError());
            }
        });
        $A.enqueueAction(action);
	}
})