
import Vegetable from './vegetable';

var VegetableChosen = (() => {
    
    var getName = function() {
      return Name;    
    };
  
    var setName = function(name) {
      Name = name;    
      console.log(Name) 
    };

    return {
      getName: getName,
      setName: setName,
    }
  
  })();
  export default VegetableChosen;