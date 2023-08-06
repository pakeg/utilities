const debounce = (time, fn) => {
		let timer = null;
    
    function wrapper() { 
    	clearInterval(timer)
     	timer = setTimeout(() => {
      	fn.apply(undefined, [...arguments]);
      }, time)
      
    }
    
    return wrapper
}
