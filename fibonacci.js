function ModuleSpeedFibo(stdlib, external, heap){
	"use asm";
	function fib(order){
		order = order | 0;
		if ((order|0) < 2){
			return 1;
		} else {
			return ((fib(order-1 | 0)|0) +  (fib(order-2 | 0)|0)) |0;
		}
		return 0;
	}
	return { fibo : fib };
}


function ModuleJSibo(stdlib, external, heap){
	function fib(order){
		order = order | 0;
		if ((order|0) < 2){
			return 1;
		} else {
			return ((fib(order-1 | 0)|0) +  (fib(order-2 | 0)|0)) |0;
		}
		return 0;
	}
	return { fibo : fib };
}