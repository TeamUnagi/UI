var FarmerChosen = (() => {
<<<<<<< HEAD
  var Name = "";
  var Id=181;
=======
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
>>>>>>> 0a1c81da47843c8d277d364f8826a48b8922ccdd

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