var VegetableChosen = (() => {
    var Name=""
    var getName = function() {
      return Name;    
    };
  
    var setName = function(name) {
      Name = name;    
    };

    return {
      getName: getName,
      setName: setName,
    }
  
  })();
  export default VegetableChosen;