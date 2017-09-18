
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



/*
 * meta.index
 * */
meta.index=(function(){
	/*instance variable*/
	/*java의 필드에 넣는것과 동일하게 해야 한다 */
	var $wrapper,ctx,img;
	var init=function(){
		onCreate();
		meta.ui.init();
	};
	/*기능*/
	var onCreate=function(){
	
		setContentView();
		$wrapper=$('#wrapper');  
		$('#button').on('click',function(){
			alert('button click!!! yeah!!');
			$wrapper.empty();
			meta.ui.navbar();
			meta.ui.arithmetic();
			$('#arithBtn').on('click',function(){
				alert('등차수열 클릭!');
				$('#content').empty();
				meta.ui.arithmetic();
				$('#result').on('click',function(){
					alert('결과');
					$('#result_btn').text('결과 : '+ meta.algo.arithmetic($('#start').val(), $('#end').val()));
				});
				
			});
			$('#switchBtn').on('click',function(){
				alert('스위치 수열 클릭!');
				$('#content').empty();
				$('#content').append();
			});
			$('#geoBtn').on('click',function(){
				alert('geometric 클릭!');
				$('#content').empty();
			});
			$('#facBtn').on('click',function(){
				alert('factorial 클릭!');
				$('#content').empty();
			});
			$('#fiboBtn').on('click',function(){
				alert('fibonacci 클릭!');
				$('#content').empty();
			});
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
		$wrapper.append($image);
	
	
		var $btn=$('<input/>',
				{
					id:'button',
					type:'button',
					value:'click!'
				}
		);

		$btn.appendTo($wrapper);
		//$('#wrapper').append(button);
		
	};
	return {
		init:init
	};
})();



/*
 * meta.auth
 * */
meta.auth=(function(){
	var $wrapper,img; 
	var init=function(){
		onCreate();
	};
	
	var onCreate=function(){
		setContentView();
	
	};
	
	var setContentView=function(){
	  $wrapper=$('#wrapper');
	  img=$$('i');
	  loginView();
	};
	var loginView=function(){
	var ui=	'<div id="container">'
		+'<img src="'+img+'/login.png" alt="" /><br />'
		+'<mark style="color: red;">*ID는 숫자포함 8자 이내</mark><br />'
	   +'<div id="login_box" name="login_box" >'
	         +'<!--do 서블릿  -->'
	         +'<fieldset class="form-edit">'
	            +'<legend>로그인</legend>'
	            +'<span class="login-span">ID &nbsp;</span>' 
	            +'<input type="text" id="input_id" name="id" /><br /> <label>PASSWORD</label>'
	            +'<input type="password"id="input_password" name="password" /><br />'
	            +'<br />' 
	         +'</fieldset>'
	      +'</div>'
	      +'<div style="text-align: center; width: 100%; height: 50px;">'
	      +'<h4 style="font-size: 20px; color: red;">${message}</h4>'
	  +'</div>';
		
		$wrapper.append(ui);
		$('#input_id').after( meta.comp.button({
			type:'button',
			id : 'cancel_btn',
			value : '취소' 			
		}));
		
		$('#login_box').append( meta.comp.button({
			type:'button',
			id : 'login_btn',
			value : '로그인' 			
		}));
	
	};
	
	
	return {
		init:init,
		loginView:loginView
	};
})();


/*
 * meta.algo*/

meta.algo = {

	 arithmetic: function(s,e){
		 var sum=0;
		 var start= s*1;   /*parameter를 인자값으로 바꾸는것 */
		 var end = e*1;
		 for(var i=start;i<=end;i++){
			 sum+=i;
		 }
		 return sum;
	 },
	 swutcgSerues : function(){
		 /*스위치 함수*/
	 }
};


/*
 * meta.ui
 * */

meta.ui=(function(){
	var $wrapper,img,ctx,js,css;
	var init = function(){
		$wrapper = $('#wrapper');
		img=$$('i');
	};
	var arithmetic=function(){
		 var content= '<div id="content">'
		 +'<h1>1부터 100까지 등차수열의 합</h1>'
		 +'</br>'
		 +'<span id="start_txt">시작 값 : </span>'
		 +'</br>'
		 +'<span id="end_txt">끝 값: </span>'
		 +'</br>'
		 +'<div id="result_btn"></div>'
		 +'</div>';
		 $wrapper.after(content);
		 $('#start_txt').after(meta.comp.input(
			 {
				 type : 'text',
				 id :'start',
				 placeholder : '시작 값 '
		     }
		 ));
		 $('#end_txt').after(meta.comp.input(
				 {
					 type : 'text',
					 id : 'end',
					 placeholder : '끝 값'
				 }
		 ));
		 $('#result_btn').before(meta.comp.input(
				 {
					 type : 'button',
					 id :'result',
					 value :'결과 보기!'
				 }
		 ));
	};
	
	var switchSeries= function(){
		'<div id="ui">'
		 +'<h1>switch수열의 합</h1>'
	 +'<span id="startVal">시작 값 : </span>'
	 +'</br> <span id="endVal">끝 값: </span>'
	 +'</div>';
	};

	var navbar=function(){
		$wrapper.html(
				'<nav class="navbar navbar-inverse">'
					 +'<div class="container-fluid">'
					    +'<div class="navbar-header">'
					      +'<a class="navbar-brand" href="#">GMS</a>'
					    +'</div>'
					    +'<ul class="nav navbar-nav">'
					      +'<li class="active"><a id="homeBtn" ><span class="glyphicon glyphicon-home"> &nbsp;HOME</span></a></li>'
					      +'<li class="dropdown">'
					      +'<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="flase">학생관리 </a>' 
					       +'<ul id="navbar_ul_stu" class="dropdown-menu">'
					       	+'<li class="dropdown-menu"><a>학생추가</a></li>'
					       	+'<li><a>학생 목록</a></li>'
					       	+'<li><a>학생 조회</a></li>'
					       	+'<li ></li>'
					       	+'<li><a>학생삭제</a></li>'
					       +'</ul>'
					      +'</li>'
					       +'<li class="dropdown">'
					      +'<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="flase">성적관리 </a>'
					     +'<ul id="navbar_ul_grade"  class="dropdown-menu">'
					       	+'<li><a>성적추가</a></li>'
					       	+'<li><a>성적 목록</a></li>'
					       	+'<li><a>성적 조회</a></li>'
					       	+'<li role="separator" class="divider"></li>'
					       	+'<li><a class="dropdown-menu a">성적 삭제</a></li>'
					       +'</ul>'
					      +'</li>'
					     +'<li class="dropdown">'
					      +'<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="flase">게시판 관리 </a>'
					      +'<ul id="navbar_ul_board"  class="dropdown-menu">'
					       	+'<li><a>게시판 추가</a></li>'
					       	+'<li><a>게시판 목록</a></li>'
					       	+'<li><a>게시판 조회</a></li>'
					       	+'</ul>'
						  +'</li>'
					        +'<li class="dropdown">'
						   +'<a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="flase">수  열 </a>'
						    +'<ul id="navbar_ul_series"  class="dropdown-menu">'
						       	+'<li><a id="arithBtn">등차 수열</a></li>'
						       	+'<li><a id="switchBtn">스위치 수열</a></li>'
						       	+'<li><a id="geoBtn">등비 수열 </a></li>'
						       	+'<li><a id="facBtn">팩토리얼 </a></li>'
						       	+'<li><a id="fiboBtn">피보나치 </a></li>'
					       +'</ul>'
					     +' </li>'
					    +'</ul>'
					    +'<ul class="nav navbar-nav navbar-right">'
					      +'<li style="font-weight:bold;color: white ">${user.name}</li>'
					      +'<li><a id="logout" ><span class="glyphicon glyphicon-user"></span>Logout</a></li>'
					     +' <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>'
					    +'</ul>'
					 +' </div>'
					+'</nav>'
			);
	};
	
	return {
		init:init,
		arithmetic:arithmetic,
		switchSeries:switchSeries,
		navbar : navbar
	};
})();



/*
 * meta.component
 * 부품을 만드는것*/
/*객체 literal 생성방식*/
meta.comp= {
		button:function(json){
			return $('<input/>',json);
			//'<input type="button" id="'+ i +'" value="'+ v +'"/>';
		},
		input : function(json){
			return $('<input/>',json);
		}
};




/**
 * context Path
 * context 경로를 만든것 ! 
 * */

meta.session = 
   {
      init : function(ctx){
   	   alert('세션에 들어온 ctx::'+ctx);
       sessionStorage.setItem('x',ctx);
       sessionStorage.setItem('j',ctx+'/resources/js');
       sessionStorage.setItem('i',ctx+'/resources/img');
       sessionStorage.setItem('c',ctx+'/resources/css');
    },
      getPath :  function(x){
          return sessionStorage.getItem(x);
      }
   };



/*path*/
  var $$= function(x){return meta.session.getPath(x);};
