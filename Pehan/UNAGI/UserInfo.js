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
    
<<<<<<< HEAD
    var setId = function(id) {
=======
      var setId = function(id) {
>>>>>>> 3e897aa581c61cd46859c274b879f6f78f4beb59
        Id=id   
      };
    return {
      getName: getName,
      setName: setName,
      getId:getId,
<<<<<<< HEAD
      setId:setId
    }
  
  })();
  export default UserInfo;
=======
      getName:getName
    }
  
  })();
  export default UserInfo;
>>>>>>> 3e897aa581c61cd46859c274b879f6f78f4beb59
