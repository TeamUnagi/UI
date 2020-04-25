var NotificationId = (() => {
    var Id=""
    var getId = function() {
      return Id;    
    };
  
    var setId = function(id) {
      Id = id; 
      console.log(Id)   
    };

    return {
      getId: getId,
      setId: setId,
    }
  
  })();
  export default NotificationId;