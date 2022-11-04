var arr = [1, 2, 3, 4, 5]
Array.prototype.myPush = function(){
  
    for(var i = 0; i < arguments.length; i++){
     
      this[this.length] = arguments[i]
    }
    return this.length
  }
  console.log(arr.myPush(1, 2)); 
  console.log(arr);
