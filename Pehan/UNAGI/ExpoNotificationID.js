var ExpoNotificationID = (() => {
    var Id=""
    var getId = function() {
      return Id;    
    };
  
    var setId = function(id) {
      Id = id;   
    };

    return {
      getId: getId,
      setId: setId,
    }
  
  })();
  export default ExpoNotificationID;