({
    loadBoatTypes : function(component) {
        var action = component.get("c.getBoatTypes");
        action.setCallback(this, function(response){
            if(response.getState() === 'SUCCESS'){
                component.set("v.boatTypes", response.getReturnValue());
            }else if(response.getState() === 'ERROR'){
                if (response.getError()) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + 
                                    errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    }
})