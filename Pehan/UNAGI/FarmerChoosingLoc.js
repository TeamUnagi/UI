var FarmerChoosingLoc = (() => {
    var Location="kalutara"; 
    var Username="yeshan";
    var getLoc = function(){
      return Location;
    };

    var setLoc =function(location){
      Location=location; 
    };
    var setName=function(name){
      Username=name;
    }
    var getName = function(){
      return Username;
    };
    return {
      getLoc:getLoc,
      setLoc:setLoc,
      setName:setName,
      getName:getName
    }
  
  })();
  export default FarmerChoosingLoc;