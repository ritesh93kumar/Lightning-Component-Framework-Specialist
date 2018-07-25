({
	onInit : function(component, event, helper) {
		var action = component.get("c.getAll");
        action.setParams({"boatId": component.get("boat").id});
        action.getCallBack(this, function(response){
            if(response.getState() === "SUCCESS"){
                component.set("v.boatReviews", response.getReturnValue());
            }else if(response.getState() === "Error"){
                console.log(response.getError());
            }
        });
        $A.enqueueAction(action);
	}
})