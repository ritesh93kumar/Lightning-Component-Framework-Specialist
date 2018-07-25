({
    doinit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onSave : function(component, event, helper) {
        component.find("service").saveRecord(function(){
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                
                var resultToToast = $A.get("e.force:showToast");
                if(resultToToast){
                    resultsToast.setParams({
                        "title": "Saved",
                        "message": "Boat Review Created"
                    });
                    resultsToast.fire(); 
                }else{
                    alert('Boat Review Created');
                }
                
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + 
                            JSON.stringify(saveResult.error));
            }
        });
        var boatReviewAddedEvnt=component.getEvent("boatReviewAdded");
        boatReviewAddedEvnt.fire();
        helper.onInit(component,event,helper);
        
    },
    onRecordUpdated : function(component, event, helper) {
        
    }
})