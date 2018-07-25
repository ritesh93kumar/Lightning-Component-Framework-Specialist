({
	onBoatClick : function(component, event, helper) {
        var boat  = component.get("v.boat");
        
        var boatIdEvent = component.getEvent("BoatSelect");        
        boatIdEvent.setParams({"boatId": boat.id});
        boatIdEvent.fire();
        
        //fire application event
        var selectedBoatEvent = $A.get("e.c:BoatSelected");
        selectedBoatEvent.setParams({"boat":boat});
        selectedBoatEvent.fire();
        
        //fire PlotMapMarker event
        var mapMarkerEvent = $A.get("e.c:PlotMapMarker");
        mapMarkerEvent.setParams({
            "sObjectId": boat.id,
            "lat": boat.Geolocation__Latitude__s,
            "long": boat.Geolocation__Longitude__s,
            "label": boat.Name 
        });
        mapMarkerEvent.fire();
	}
})