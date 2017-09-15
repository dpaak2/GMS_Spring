
/*meta */
var meta=meta || {};

meta.common = (function(){
   var init = function(ctx){
      alert('session 저장되기 전 : '+ctx);
      meta.session.init(ctx);
      alert('session 저장 ctx : '+$$());  /*즉시실행함수라 함수 표시 ->() 가 있어야 한다 !!*/
      alert('session 저장 js : '+js());
      alert('session 저장 css: '+css());
      alert('session 저장 img: '+img());
    meta.index.init();
   };
   var onCreate=function(){
      setContextPath();
   };
   var setContextPaht=function(){
      
   };
   return {
      init : init
   };
})();

meta.index=(function(){
	/*instance variable*/
	var $wrapper;

	var init=function(){
		onCreate();
	};
	/*기능*/
	var onCreate=function(){
		
		setContentView();
		$wrapper=$('#wrapper');  
		/*eventHandler,  call back 함수이다! */
		$('#button').on('click',function(){
			alert('button click!!! yeah!!');
			$wrapper.empty();
		});
	};
	/*속서*/
	var setContentView=function(){
		/*jquery*/
		$wrapper=$('#wrapper'); 
		var $image=$('<img/>',  /*--> DOM이다 */
		    {
			  id:'loading',
			  src: img()+'/loading.gif'
		    }
		);
		
		
		$image.appendTo($wrapper);
		//$('#wrapper').empty();
		
		var $button=$('<input/>',
				{
					id:'button',
					type:'button',
					value:'click!'
				}
		);
		
		$button.appendTo($wrapper);
		//$('#wrapper').append(button);
		
	};
	return {
		init:init
	};
})();


meta.session = (function(){
   var init = function(ctx){
      sessionStorage.setItem('ctx',ctx);
      sessionStorage.setItem('js',ctx+'/resources/js');
      sessionStorage.setItem('img',ctx+'/resources/img');
      sessionStorage.setItem('css',ctx+'/resources/css');
   };
   var getPath = function(x){
      return sessionStorage.getItem(x);
   };
   
   return{
      init : init,
      getPath : getPath
   }
})();




/*path*/
   var $$ = function(){ return meta.session.getPath('ctx');};
  var js = function(){ return meta.session.getPath('js');};
  var css = function(){return meta.session.getPath('css');};
  var img = function(){return meta.session.getPath('img');};

