/**
 * meta js 
 * 1.path
 * 2.session
 */
var meta = meta ||{} ;
/*********************
 * 1.path
 * ************/
meta.path=(function(){
	var init=function(ctx){
		meta.session.init(ctx);
		onCreate();
	};
	var onCreate=function(){
		
		setContentView();
		location.hrec=ctx()+"/common/index.jsp";
	};
	var setContentView=function(){
		
	};
	
	var ctx = function(){
		return meta.session.getPath('ctx');
	};
	var js= function(){
		 return meta.session.getPath('js');
	};
	var img= function(){
		 return meta.session.getPath('img');
	};
	var css= function(){
		 return meta.session.getPath('css');
	};
	/*closure*/
	return{
		init:init,
		ctx:ctx,
		js:js,
		img:img,
		css:css
	}
})();

/*************
 * 2.session
 * ***********/
meta.session=(function(){
	  var init = function(ctx) {
	      /* setter */
	      sessionStorage.setItem('ctx', ctx);
	      sessionStorage.setItem('js', ctx + '/resources/js');
	      sessionStorage.setItem('img', ctx + '/resources/img');
	      sessionStorage.setItem('css', ctx + '/resources/css');

	   };
	var getPath=function(){
		return sessionStorage.getItem(x);
	};
	
	return {
	init :init,
	getPath :getPath 
	};
	
})();

/*hello Ajavx*/

