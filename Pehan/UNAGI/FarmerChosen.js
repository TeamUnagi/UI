var FarmerChosen = (() => {
    var Name = "";
    var Id=181;
  
    var getName = function() {
      return Name;    
    };
  
    var setName = function(name) {
      Name = name;     
    };
    
    var getId = function(){
      return Id;
    };

    var setId =function(id){
      Id=id;
    };

    return {
      getName: getName,
      setName: setName,
      getId:getId,
      setId:setId
    }
  
  })();
  export default FarmerChosen;