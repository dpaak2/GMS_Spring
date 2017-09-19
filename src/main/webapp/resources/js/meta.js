/**
 * member javaScript
 */
var meta = meta || {};

meta.common = (function() {// 최상위 브라우저 종료 저장되는곳
   var init = function(ctx) {
      alert('session 전 ctx ' + ctx);
      onCreate();
      meta.session.init(ctx);
      meta.index.init();
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {

   };
   return {
      init : init
   };
})();

meta.index = (function() {
   var init = function() {
      onCreate();
      meta.ui.init();
   };
   var onCreate = function() {
      setContentView();
      $('#btn').on('click', function() {
         $wrapper.empty();
         // meta.auth.init();
         meta.ui.navbar();
         meta.ui.arithmetic();
        
         $('#arithBtn').on('click',function(){
            alert('arithBtn 클릭');
            $('#content').remove();
            meta.ui.arithmetic(); 
            $('#resultBtn').on('click', function() {
               $('#result').text('결과 : ' + meta.algo.arithmetic(
                     $('#start').val(),
                     $('#end').val()
               ));
            });
         });
         $('#switchBtn').on('click',function(){
            alert('switchBtn 클릭');
            $('#content').remove();
            meta.ui.arithmetic();            
            $('h1').html('스위치수열의 합');
            $('#start').val('1').attr('readonly',true);
            $('#end').val('100').attr('readonly',true);
            $('#resultBtn').click(()=>{
               $('#result').text('결과 : ' + meta.algo.switchSeries());
            });
         });
         $('#geoBtn').click(()=>{
            alert('geoBtn 클릭');
            $('#content').remove();
            meta.ui.arithmetic();
            $('h1').html('계차수열 ');
            $('#start').val('1').attr('readonly',true);
            $('#resultBtn').click(()=>{
            	$('#result').text('결과 : '+meta.algo.geoSeries($('#end').val()));
                });
            });
            
         $('#factBtn').click(()=>{
            alert('factBtn 클릭');
            $('#content').remove();
            meta.ui.arithmetic();
            $('h1').html('팩토리얼 수열');
            $('#start').val('1').attr('readonly',true);
            $('#resultBtn').click(()=>{
            	$('#result').text('결과 : '+meta.algo.factorial($('#end').val()));
            });
         });
         $('#fiboBtn').on('click',function(){
            alert('fiboBtn 클릭');
            $('#content').remove();
            meta.ui.arithmetic();
            $('h1').html('피보나치 수열');
            $('#start').val('1').attr('readonly',true);
            $('#resultBtn').click(()=>{
            	$('#result').text('결과 :'+meta.algo.fibonacci($('#end').val()));
            });
         });
                  
      
      });
   };
   var setContentView = function() {
      $wrapper = $('#wrapper');
      ctx = $$('x');
      img = $$('i');
      var $image = $('<img/>', {
         id : 'loading',
         src : img + '/loading.gif'
      });
      /* image.appendTo($('#wrapper')); */
      $wrapper.append($image);
      // $('#wrapper').empty();
      var $btn = $('<input/>', {
         id : 'btn',
         type : 'button',
         value : '버튼2'
      });
      $wrapper.append($btn);
   };
   return {
      init : init
   };
})();
meta.algo = {
   arithmetic : (s,e) =>{
      var sum = 0;
      var start = s * 1;
      var end = e * 1;
      for (var i = start; i <= end; i++) {
         sum += i;
      }
      return sum;
   },
   switchSeries : ()=>{
      var sum = 0;
      var i=0;
      var sw = 0;
      do{
         i++;
         if(sw==0){
            sum+=i;
            sw=1;
         }else{
            sum-=i;
            sw=0;
         }
      }while(i<100);
      return sum;   
   },
   geoSeries :x =>{
	   var i,j,k;
	   i=0;
	   j=0;
	   k=0;
	   do{
		   i++;
		   j+=i;
		   k+=j;
	   }while(i<x*1);
	   return k;
   },
   factorial : x=>{
	   var i,k,j;
	   i= 1;
	   k=1;
	   j=1;
	   do{
		   i++;
		   j*=i;
		   k+=j;
	   }while(i<x*1);
	   return k;
   },
   fibonacci :x=>{
	   var hap,cnt ,c ;
	   var a=1; var b =1;
	   hap=2;
	   cnt=2;
	   while(true){
		   c= a+b;
		   hap +=c;
		   cnt ++;
		   if(cnt <x*1){
			   a=b;
			   b=c;
		   }else{
			 return hap;
		   }
	   }
   }
   
};
meta.auth = (function() {
   var $wrapper, ctx, img, js, css;
   var init = function() {
      onCreate();
   };
   var onCreate = function() {
      setContentView();
   };
   var setContentView = function() {
      alert('login box');
      img = $$('i');
      $wrapper = $('#wrapper');
      loginView();

   };
   var loginView = function() {
      var ui = '<div id="container">' + '<div id="login_box">' + '<img src="'
            + img + '/login.jpg" alt="" /><br />'
            + '<span id="login_id">ID</span>'
            + '<input type="text"  /> <br />'
            + '<span id="login_pass">PASSWORD</span>'
            + '<input type="text"  /> <br /><br />' + '</div>' + '</div>';
      $wrapper.append(ui);
      $('#login_box').append(meta.component.input({
         type : 'button',
         id : 'login_button',
         value : '로그인'
      }));
      $('#login_box').append(meta.component.input({
         type : 'button',
         id : 'cancel',
         value : '취소'
      }));
   };
   return {
      init : init
   };
})();
meta.ui = (function() {
   var $wrapper, ctx, img, js, css;
   var init = function() {
      $wrapper = $('#wrapper');
      img = $$('i');
   };
   var navbar = function(){
      $wrapper.html(
            '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>'
            +'<nav class="navbar navbar-inverse">'
             + '<div class="container-fluid">'
              +  '<div class="navbar-header">'
               +   '<a class="navbar-brand" href="#">GMS</a>'
                +'</div>'
                +'<ul class="nav navbar-nav">'
                 + '<li id="home" class="gohome_active"><a><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
                  +'<li class="dropdown">'
                   +   '<a href="#" class="dropdown-toggle"' 
                    +     'data-toggle="dropdown" role="button"'
                     +    'aria-haspopup="true"' 
                      +   'aria-expanded="false">회원관리 <span class="caret">'
                         +'</span></a>'
                      +'<ul id="navbar_ul_stu" class="dropdown-menu">'
                       + '<li><a>학생추가</a></li>'
                        +'<li><a>학생목록</a></li>'
                        +'<li><a>학생조회</a></li>'
                        +'<li></li>'
                        +'<li><a>학생삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                  +'<li class="dropdown">'
                  +    '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
                   +   '<ul id="navbar_ul_grade"  class="dropdown-menu">'
                    +    '<li><a>성적추가</a></li>'
                     +   '<li><a>성적목록</a></li>'
                      +  '<li><a>성적조회</a></li>'
                       + '<li></li>'
                        +'<li><a>성적삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                  +'<li class="dropdown">'
                   +   '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
                    +  '<ul id="navbar_ul_board"  class="dropdown-menu">'
                     +  '<li><a>게시글추가</a></li>'
                      +  '<li><a>게시글목록</a></li>'
                       + '<li><a>게시글조회</a></li>'
                        +'<li></li>'
                        +'<li><a>게시글삭제</a></li>'
                      +'</ul>'
                    +'</li>'
                    +'<li class="dropdown">'
                      +   '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수  열<span class="caret"></span></a>'
                       +  '<ul id="navbar_ul_board"  class="dropdown-menu">'
                        +  '<li><a id="arithBtn">등차수열</a></li>'
                         +  '<li><a id="switchBtn">스위치수열</a></li>'
                          + '<li><a id="geoBtn">등비수열</a></li>'
                           +'<li><a id="factBtn">팩토리얼</a></li>'
                           +'<li><a id="fiboBtn">피보나치</a></li>'
                         +'</ul>'
                       +'</li>'
                +'</ul>'
                +'<span class="float-right">${user.name} &nbsp;'
               +    '<a id="logout"  style="color: white">로그아웃</a></span>'
              +'</div>'
            +'</nav>'      
      );
      
   };
   var arithmetic = function() {
      var content = '<div id="content">'
            + '<h1>시작값부터 끝값까지 등차수열의 합</h1>'
            + '<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
            + '<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'
            + '<div id="result"></div>';
      $($wrapper).append(content);
      $('#start_txt').after(meta.component.input({
         type : 'text',
         id : 'start',
         placeholder : '시작값'
      }));
      $('#end_txt').after(meta.component.input({
         type : 'text',
         id : 'end',
         placeholder : '끝값'
      }));
      $('#result').before(meta.component.input({
         type : 'button',
         id : 'resultBtn',
         value : '결과보기'
      }));
   };
   
   return {
      init : init,
      arithmetic : arithmetic,
      
      navbar : navbar
   };
})();
meta.component = {
   input : function(json) {
      return $('<input>', json);
   }
};

meta.session = {
   init : function(x) { // 세선종료까지 저장
      sessionStorage.setItem('x', x);
      sessionStorage.setItem('j', x + '/resources/js');
      sessionStorage.setItem('c', x + '/resources/css');
      sessionStorage.setItem('i', x + '/resources/img');
   },
   getPath : function(x) {
      return sessionStorage.getItem(x);
   }
};
var $$ = function(x){
   return meta.session.getPath(x);
};
