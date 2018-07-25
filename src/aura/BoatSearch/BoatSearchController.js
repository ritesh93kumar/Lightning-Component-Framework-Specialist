({
	onFormSubmit : function(component, event, helper) {
		var formdata = event.getParam("formData");
        var boatTypeId = formdata.boatTypeId;
        var BoatSearchCmp = component.find("BoatSearchCmp");
        BoatSearchCmp.search(boatTypeId);
	}
})