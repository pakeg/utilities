const throttle = (time, fn) => {
		let done = false;
    let params = null;
    
    function wrapper() {
    	if (done){
      	params = arguments
      	return;
      }
      
      done = true
      fn.apply(undefined, [...arguments]);
      
      setTimeout(() => {
      	done = false
        if(params){
        	wrapper(...params)
          params = null
        }
      }, time)
      
    }
    
    return wrapper
}
