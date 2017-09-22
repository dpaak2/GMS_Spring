/*namespace*/
var meta=meta || {};

/*meta.common*/
meta.common=(function(){
   var init=function(ctx){
      onCreate();
      meta.session.init(ctx);
      meta.index.init();
   };
   var onCreate=function(){
      setContentView();
   };
   var setContentView=function(){};
   return { init:init };
})();

/*meta.index*/
meta.index=(function(){
   var $wrapper,$navbar,$container,ctx,img,js,css,
      temp,algo,ctx;
   var init=function(){
         js=$$('j');
         temp=js+'/template.js';
         algo=js+'/algo.js';
         $container=$('#container');
         img=$$('i');
         ctx=$$('x');
         $navbar=$('#navbar');
         onCreate();
      };
   var onCreate=function(){
      $.getScript(temp,()=>{
         $container.append(compUI.div('content'));
         $content=$('#content');
         $container.css('width','100%');
         $content.css({'width':'50%','margin':'0 auto'});
         $content.append(compUI.image('loading',img+'/loading.gif'));
         $content.append(compUI.div('direction'));
         $('#direction').css({'width':'50%','margin':'0 auto'});
         $('#direction').append(compUI.h1('h-btn'));
         $hBtn= $('#h-btn');
         $('#h-btn').append(compUI.span('btn')).attr('display','inline');
         $('#btn').html('알고리즘').addClass('label label-default');
         $('#h-btn').append(compUI.span('btn2')).attr('display','inline');
         $('#btn2').html('회원 관리').addClass('label label-info').css({'margin-left' : '10px'});
       
       /*  $('#h-btn').append(compUI.span('bbsBtn')).attr('display','inline');
         $('#bbsBtn').html('게시판').addClass('label label-warning').css({'margin-left' : '10px'});*/
         $('#btn').click(()=>{
            $container.empty();
            //meta.auth.init();   
            meta.navbar.init();
            $container.html(algoUI.series());
         });
         /*MEMBER*/
         $('#btn2').click(()=>{
        	 alert('회원관리');
        	 
         });
         
         /*board*/
         /*모듈형으로 코딩*/
       
         compUI.span('bbsBtn').html('게시판 관리')
         .addClass('label label-warning')
         .attr('display','inline')
         .css({'margin-left' : '10px'})
         .appendTo($hBtn);
         $navbar.html(introUI.navbar());
         
        $('#bbsBtn').click(()=>{
        	 alert('게사판 가기');
        		var url=ctx+'/get/board/list';
        		 $navbar.html(introUI.navbar());
        		    $.getJSON(url,data=>{
            		alert('x msg is '+data.msg);
            		$container.html(bbsUI.board());
            		$('#searchBox').after(compUI.iTxt('msg'));
            		$('#msg').addClass('form-control').css({'width':'100%'}).attr('placeholder','search');
            		$('#searchGroup').after(compUI.input('goSearch','submit'));
            		$('#goSearch').addClass('btn btn-primary').css({'width':'100px'}).val('SEARCH');
       /*     		JSON배열 코딩
        			var a=[
        				{
        					a :1,
        					b: '한국',
        					c: '안녕',
        					d :'길동',
        					e :'2017-09-10',
        					f : 10
        					
        				},
        				{
        					a :2,
        					b: 'English',
        					c: 'Hello',
        					d :'Alice',
        					e :'2017-09-10',
        					f : 7
        				},
        				{
        					a :3,
        					b: '中国',
        					c: '你好！',
        					d :'李学生',
        					e :'2017-09-10',
        					f : 5
        				},
        				{
        					a :4,
        					b: 'thailand',
        					c: 'สวัสดี',
        					d :'lachaphat',
        					e :'2017-09-10',
        					f : 10
        				},
        				{
        					a :5,
        					b: 'spain',
        					c: 'Holla!',
        					d :'Diago',
        					e :'2017-09-10',
        					f : 10
        				}
        			];*/
        			
        			
        			
            		var tr;
        				$.each(data.list,(i,j)=>{
        					tr+= '<tr style="height : 25px;">'
        						+'<td>'+j.articleSeq+'</td>'
        						+'<td>'+j.id+'</td>'
        						+'<td>'+j.title+'</td>'
        						+'<td>'+j.content+'</td>'
        						+'<td>'+j.regdate+'</td>'
        						+'<td>'+j.hitCount+'</td>'
        						+'</tr>';
        				});
        				console.log('tr :'+tr);
        				$('#tabBody').html(tr);
             });
         });
      });
    };
   return {init:init};
})();

/*meta.auth*/
meta.auth=(function(){
   var $wrapper,ctx,img,js,css,temp;
   var init=function(){
      onCreate();
      $wrapper=$('#wrapper');
      img=$$('i');
      js=$$('j');
      temp=js+'/template.js';
   };
   var onCreate=function(){setContentView();};
   var setContentView=function(){
      $.getScript(temp,(i)=>{
         $wrapper.append(intro.login(img));
         $('#login_input').after(meta.comp.input(
               {
                  type : 'button',
                  id : 'login_btn',
                  value : '로그인'
               }
            ));
            $('#login_box').append(meta.comp.input(
               {
                  type : 'button',
                  id : 'cancel_btn',
                  value : '취소'
               }
            ));
      });
      
   };
   var joinView=function(){};
   return {
      init : init
   };
})();

/*meta.navbar*/
meta.navbar=(function(){
   var algo,js,temp,$container;
   var init=function(){
      js=$$('j');
      $container=$('#container');
      algo=js+'/algo.js';
      temp=js+'/template.js';
      onCreate();
      
      /*algo=js+'/algo.js';*/
      
   };
   var onCreate=function(){
      $.getScript(temp,function(){
         var $u1=$("#navbar_ul_stu");
         var $u2=$("#navbar_ul_grade");
         var $u3=$("#navbar_ul_board");
         $u1.addClass("dropdown-menu");
         $u2.addClass("dropdown-menu");
         $u3.addClass("dropdown-menu");
         $('#navbar').html(introUI.navbar());
         $('#container').html(algoUI.series());
         $('#start_txt').after(compUI.input('start','text'));
         $('#start').attr('placeholder','시작값');
         $('#end_txt').after(compUI.input('end','text'));
         $('#end').attr('placeholder','끝값');
         $('#result').before(compUI.input('resultBtn','button'));
         $('#resultBtn').val('결과보기');
         $('#resultBtn').click(()=>{
            $.getScript(algo,(x1,x2)=>{
               $('#result').text('결과 : '+
                     series.arithmetic(
                           $('#start').val(),
                           $('#end').val()
                     ));
            });
         });
         $('.dropdown-menu a').eq(0).on('click',function(){
            //app.controller.moveTo('member','member_add');
         });
         $('.dropdown-menu a').eq(1).on('click',function(){
            //app.member.list(1);
         });
         $('.dropdown-menu a').eq(2).on('click',function(){
            //app.controller.moveTo('member','member_detail');
         });
         $('.dropdown-menu a').eq(3).on('click',function(){
            //app.controller.deleteTarget('hong','member','member_delete');
         });
         $('.dropdown-menu a').eq(4).on('click',function(){
            //app.controller.moveTo('grade','grade_add');
         });
         $('.dropdown-menu a').eq(5).on('click',function(){
            //app.controller.moveTo('hong','grade','grade_list');
         });
         $('.dropdown-menu a').eq(6).on('click',function(){
            //app.controller.moveTo('grade','grade_detail');
         });
         $('.dropdown-menu a').eq(7).on('click',function(){
            //app.controller.deleteTarget('hong','grade','grade_delete');
         });
         $('.dropdown-menu a').eq(8).on('click',function(){
            //app.controller.moveTo('board','board_write');
         });
         $('.dropdown-menu a').eq(9).on('click',function(){
            //app.controller.moveTo('board','board_list');
         });
         $('.dropdown-menu a').eq(10).on('click',function(){
            //app.controller.moveTo('board','board_detail');
         });
         $('.dropdown-menu a').eq(11).on('click',function(){
            //app.controller.deleteTarget('hong','board','board_delete');
         });
         
         /*ALGORITHSM*/
         $('#arithBtn').on('click',function(){
            $container.html(algoUI.series());
            $('#start_txt').after(compUI.input('start','text'));
            $('#start').attr('placeholder','시작값');
            $('#end_txt').after(compUI.input('end','text'));
            $('#end').attr('placeholder','끝값');
            $('#result').before(compUI.input('resultBtn','button'));
            $('#resultBtn').val('결과보기');
            $('h1').html('등차수열의 합');
            $('#resultBtn').click(()=>{
               $.getScript(algo,(x1,x2)=>{
                  $('#result').text('결과 : '+
                        series.arithmetic(
                              $('#start').val(),
                              $('#end').val()
                        ));
               });
            });
         });
         $('#switchBtn').click(()=>{
            $container.html(algoUI.series());
            $('#start_txt').after(compUI.input('start','text'));
            $('#start').attr('placeholder','시작값');
            $('#end_txt').after(compUI.input('end','text'));
            $('#end').attr('placeholder','끝값');
            $('#result').before(compUI.input('resultBtn','button'));
            $('#resultBtn').val('결과보기');
            $('h1').html('스위치수열의 합');
            $('#start').val('1').attr('readonly','true');
            $('#end').val('100').attr('readonly','true');
            $('#resultBtn').click(()=>{
               $.getScript(algo,()=>{
                  $('#result').text('결과값'+series.switchSeries());
               });
            })
         });
         $('#geoBtn').click(()=>{
             $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('등비수열의 합');
             $('#start').val('1').attr('readonly','true');
             
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.geo($('#end').val()));
                });
             })
          });
         $('#facBtn').click(()=>{
             $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('팩토리얼의 합');
             $('#start').val('1').attr('readonly','true');
         
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.facth($('#end').val()));
                });
             })
          });
         $('#fiboBtn').click(()=>{
             $container.html(algoUI.series());
             $('#start_txt').after(compUI.input('start','text'));
             $('#start').attr('placeholder','시작값');
             $('#end_txt').after(compUI.input('end','text'));
             $('#end').attr('placeholder','끝값');
             $('#result').before(compUI.input('resultBtn','button'));
             $('#resultBtn').val('결과보기');
             $('h1').html('피보나치의 합');
            
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과값'+series.fibona());
                });
             })
          });
         
         /*배열 */
        
         $('#selBtn').click(()=>{
             
             alert('selection clicked');
             $container.html(algoUI.sort());
             $('h1').html('선택 정렬').css('font-weight','bold');
             $('#start_txt').after(compUI.input('num','text'));
             $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
             $('#num').after(compUI.input('submitBtn','button'));
             $('#submitBtn').val('입력');
             
             var rs = new Array();
             
             $('#submitBtn').click(()=>{
                rs.push($('#num').val());
                $('#num').val('');
             });
             $('#resultBtn').click(()=>{
                $.getScript(algo,()=>{
                   $('#result').text('결과 값: '+sort.selection(rs));
                });
             });
          });
         
         $('#bubbleBtn').click(()=>{
        	 alert('burble clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('버블 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
        	 var rs= new Array();
        	 $('#submitBtn').click(()=>{
        		 rs.push($('#num').val()*1);
        		 $('#num').val('');
        	 });
        	 $('#resultBtn').click(()=>{
        		 $.getScript(algo,()=>{
        			 $('#result').text('결과 값: '+sort.bubble(rs));
        		 });
        	 });
         });
         $('#insertBtn').click(()=>{
        	 alert('insertBtn clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('인설트 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
        	 var rs= new Array();
        	 $('#submitBtn').click(()=>{
        		 rs.push($('#num').val()*1);
        		 $('#num').val('');
        	 });
        	 $('#resultBtn').click(()=>{
        		 $.gstScript(algo,()=>{
        			 $('#result').text('결과 값: '+sort.insertion(rs));
        		 });
        	 });
         });
         $('#rankBtn').click(()=>{
        	 alert('rankBtn clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('랭킹 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
         });
         $('#binSearchBtn').click(()=>{
        	 alert('binSearchBtn clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('binSearc 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
         });
         $('#mergeBtn').click(()=>{
        	 alert('mergeBtn clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('머지 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
        	 
        	 
         });
         $('#stackBtn').click(()=>{
        	 alert('stackBtn clicked');
        	 $container.html(algoUI.sort());
        	 $('h1').html('스택 정렬').css('font-weight','bold');
        	 $('#start_txt').after(compUI.input('num','text'));
        	 $('#num').attr('placeholder','숫자를 입력하여 주세요 ');
        	 $('#num').after(compUI.input('submitBtn','button'));
        	 $('#submitBtn').val('입력');
        	 
         });
         
      });
   };

   return {init:init};
})();

/*path*/
meta.session=
   {
      init : (x)=>{
            sessionStorage.setItem('x',x);
            sessionStorage.setItem('j',x+'/resources/js');
            sessionStorage.setItem('c',x+'/resources/css');
            sessionStorage.setItem('i',x+'/resources/img');
              },
      getPath : (x)=>{
            return sessionStorage.getItem(x);
              }
   };
var $$= function(x){return meta.session.getPath(x);};
         

