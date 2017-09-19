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

// meta.navbar //
meta.navbar = (function() {
      var algo ,js;
      var init = function() {
         onCreate();
         js=$$('j');
         algo =js+'/algo.js';
         
      };
      var onCreate = function() { /* controller */
         /* 자바에서 받은것 모델에서 가져온 데이터의 제어는 이곳에서 한다 */
         setContentView();
       
         $('.dropdown-menu a').eq(0).on('click', function() {
            app.controller.moveTo('member', 'member_add');
         });
         $('.dropdown-menu a').eq(1).on('click', function() {
          
            app.member.list(1);
            /* app.controller.list('member','member_list','1'); */
         });
         $('.dropdown-menu a').eq(2).on('click', function() {
            app.controller.moveTo('member', 'member_detail');
            /* app.controller.detailStudent(prompt('조회ID')); */
         });

         $('.dropdown-menu a').eq(3).on('click', function() {
            app.controller.moveTo('member', 'member_update');
         });
         $('.dropdown-menu a').eq(4).on('click', function() {
            app.controller.deleteTarget('cho','member', 'member_delete');
         });
         $('.dropdown-menu a').eq(5).on('click', function() {
            app.controller.moveTo('grade','grade_add');
         });
         $('.dropdown-menu a').eq(6).on('click', function() {
            app.controller.moveTo('grade','grade_list');
         });
         $('.dropdown-menu a').eq(7).on('click', function() {
            app.controller.moveTo('grade','grade_detail');
         });
         $('.dropdown-menu a').eq(8).on('click', function() {
            app.controller.moveTo('grade','grade_update');
         });
         $('.dropdown-menu a').eq(9).on('click', function() {
            app.controller.moveTo('grade','grade_delete');
         });
         $('.dropdown-menu a').eq(10).on('click', function() {
             app.controller.moveTo('board','board_add');
          });
         $('.dropdown-menu a').eq(11).on('click', function() {
             app.controller.moveTo('board','board_list');
          });
         $('#arithBtn').click(()=>{
               alert('arithBtn 클릭');
               $('#content').remove();
               meta.ui.arithmetic(); 
               $('h1').html('Arithmetic series').css('text-align','center').css('font-weight','bold');
               $('#resultBtn').click(()=> {
            	   $.getScript(algo,(x1,x2)=>{
            		   $('#result').text('결과 : ' + series.arithmetic(
                               $('#start').val(),
                               $('#end').val()
                         ));
                   });
               });
            });
         
         $('#switchBtn').click(function(){
               alert('switchBtn 클릭');
               $('#content').remove();
               meta.ui.arithmetic();            
               $('h1').html('스위치수열의 합').css('text-align','center').css('font-weight','bold');
               $('#start').val('1');
               $('#end').val('100');
               $('#resultBtn').click(()=>{
            	   $.getScript(algo,()=>{
            		   $('#result').text('결과 : ' + series.switchSeries());
            	   });
               });
            });
         
         $('#diffBtn').on('click',function(){
               alert('geoBtn 클릭');
               $('#content').remove();
               meta.ui.arithmetic();
               $('h1').html('등비수열의 합').css('text-align','center').css('font-weight','bold');
               $('#start').val('1');
               $('#resultBtn').click(()=>{
            	   $.getScript(algo,()=>{
            		   $('#result').text('결과 : ' + series.diffSeries($('#end').val()));
            	   });
               });
            });
         
            $('#factBtn').on('click',function(){
               alert('facthBtn 클릭');
               $('#content').remove();
               meta.ui.arithmetic();
               $('h1').html('펙토리얼').css('text-align','center').css('font-weight','bold');
               $('#start').val('1');
               $('#resultBtn').click(()=>{
            	   $.getScript(algo,function(){
            		   $('#result').text('결과:' +  series.factorial($('#end').val()));
            	   });
               });
            });
            
            $('#fiboBtn').on('click',function(){
               alert('fiboBtn 클릭');
               $('#content').remove();
               $.getScript(algo,function(){
            	   series.fibonacci('헬로우 피보');
               });
               meta.ui.arithmetic();
               $('h1').html('피보나치').css('text-align','center').css('font-weight','bold');;
               $('#resultBtn').click(()=>{
                   alert('피보나치 클릭!');
                   $.getScript(algo,function(){
                	   $('#result').text('결과:' + series.fibonacci());                	   
                   });
               });
            });
        
         

      };
      var setContentView = function() { /* view */
            var $u1 = $("#main_ul_stu");
            var $u2 = $("#main_ul_grade");
            var $u3 = $("#main_ul_board");
            $u1.addClass("list-group");
            $u2.addClass("list-group");
            $u3.addClass("list-group");

         };
         /* closure */
         return {
            init : init
         };
      })();


/*meta.index*/
meta.index = (function() {
	var algo,js;
   var init = function() {
      onCreate();
      meta.ui.init();
      js=$$('j');
      algo = js+'/algo.js';
   };
   var onCreate = function() {
      setContentView();
      $('#btn').on('click', function() {
         $wrapper.empty();
         // meta.auth.init();
         meta.ui.navbar();
         meta.navbar.init();
         meta.ui.arithmetic();
         $('h1').html('Arithmetic series').css('text-align','center').css('font-weight','bold');
         $('#resultBtn').click(()=> {
      	   $.getScript(algo,(x1,x2)=>{
      		   $('#result').text('결과 : ' + series.arithmetic(
                         $('#start').val(),
                         $('#end').val()
                   ));
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
      $wrapper.append($image);
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
            + img + '/login.png" alt="" /><br />'
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
                          + '<li><a id="diffBtn">등비수열</a></li>'
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
         placeholder : '시작값',
         style :'background-color: yellow'
            
      }));
      $('#end_txt').after(meta.component.input({
         type : 'text',
         id : 'end',
         placeholder : '끝값',
            style :'background-color: yellow'
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

