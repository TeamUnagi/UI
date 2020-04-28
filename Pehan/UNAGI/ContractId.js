var ContractId = (() => {
    var Id="175"
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
  export default ContractId;