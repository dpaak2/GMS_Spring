
/*meta */
var meta=meta || {};

meta.common = (function(){
   var init = function(ctx){
     // alert('session 저장되기 전 : '+ctx);
      meta.session.init(ctx);
    /*  alert('session 저장 ctx : '+$$('x'));  즉시실행함수라 함수 표시 ->() 가 있어야 한다 !!
      alert('session 저장 js : '+$$('j'));
      alert('session 저장 css: '+$$('c'));
      alert('session 저장 img: '+$$('i'));*/
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

meta.index=(function(){   /*생성자*/
	/*instance variable*/
	/*java의 필드에 넣는것과 동일하게 해야 한다 */
	var $wrapper,ctx,img;
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
			meta.login.init();
		});
	};
	/*속성*/
	var setContentView=function(){
		/*jquery*/
		img=$$('i');
		$wrapper=$('#wrapper'); 
		var $image=$('<img/>',  /*--> DOM이다 */
		    {
			  id:'loading',
			  src: img+'/loading.gif'
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

meta.login=(function(){
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
	};
	
	var setContentView=function(){
	
		'<div id="wrapper">'
		+'<div id="container">'
			+'<img src="${img}/login.png" alt="" /><br />'
			+'<mark style="color: red;">*ID는 숫자포함 8자 이내</mark><br />'
		+'<form id="login_box" name="login_box" >'
		         +'<!--do 서블릿  -->'
		         +'<fieldset class="form-edit">'
		            +'<legend>로그인</legend>'
		            +'<span class="login-span">ID</span>' 
		            +'<input type="text" id="input_id" name="id" /><br /> <label>PASSWORD</label>'
		            +'<input type="password"id="input_password" name="password" /><br />'
		            +'<br />' 
		            +'<input type="reset" value="CANCEL" />'
		     		+'<input type="hidden" name="action" value="login">'
		            +'<input type="hidden" name="page" value="main">'
		            +'<input type="submit" id="loginBtn" value="로그인"  class="submit-pink">'
		         +'</fieldset>'
		      +'</form>'
		      +'<div style="text-align: center; width: 100%; height: 50px;">'
		      +'<h4 style="font-size: 20px; color: red;">${message}</h4>'
		      +'</div>'
		+'</div>'
		
	};
	
	return {
		init:init
	};
})();




/**
 * context Path
 * context 경로를 만든것 ! 
 * */

meta.session = (function(){
   var init = function(ctx){
	   alert('세션에 들어온 ctx::'+ctx);
      sessionStorage.setItem('x',ctx);
      sessionStorage.setItem('j',ctx+'/resources/js');
      sessionStorage.setItem('i',ctx+'/resources/img');
      sessionStorage.setItem('c',ctx+'/resources/css');
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
 // var $$ = function(){ return meta.session.getPath('ctx');};
 // var js = function(){ return meta.session.getPath('js');};
 // var css = function(){return meta.session.getPath('css');};
 // var img = function(){return meta.session.getPath('img');};

  var $$= function(x){return meta.session.getPath(x);};
