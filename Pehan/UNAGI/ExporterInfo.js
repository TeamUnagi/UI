var UserInfo = (() => {
    var Username = "";
  
    var getName = function() {
      return Username;    
    };
  
    var setName = function(name) {
      Username = name;     
    };
  
    return {
      getName: getName,
      setName: setName
    }
  
  })();
  export default UserInfo;