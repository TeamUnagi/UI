var UserInfo = (() => {
    var Name="";
    var Id="";
    var getName = function() {
      return Name;    
    };
  
    var setName = function(name) {
      Name = name;    
    };
    var getId = function() {
        return Id;    
      };
    
      var setId = function(id) {
        Id=id   
      };
    return {
      getName: getName,
      setName: setName,
      getId:getId,
      getName:getName
    }
  
  })();
  export default UserInfo;