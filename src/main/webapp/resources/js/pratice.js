/*meta.board*/
meta.board=(()=>{
	var temp,$container,js,ctx;
	var init= x=>{
		ctx= $$('x');
		 js=$$('j');
		 $container=$('#container');
		 temp=js+'/template.js';
		 detail();
	};
	var detail = x=>{
		alert('넘어온 seq ::'+x);
		var url=ctx+'/get/board/'+x;
		alert('넘어온 seq ::'+url);
		$.getScript(temp,function(){
			$container.html();
		});
		$.getJSON(url,data=>{
			
		});
		
	};

	return {detail:detail};
})();


meta.board=(()=>{
	   var temp,$container,$content,ctx,js;
	   var init =x=>{
	      ctx=$$('x');
	      js=$$('j');
	      $container=$('.container');
	      temp=js+'/template.js';
	      detail(x);
	   }
	   var detail=x=>{
	      alert('선택한 시퀀스:    ' + x);
	      $.getScript(temp,()=>{
	         $container.empty();
	         compUI.div('content').appendTo($container);
	         $content = $('#content');
	         $content.html(bbsUI.detail());
	         $.getJSON(ctx + '/get/board/'+x,data=>{
	         });
	      });
	      
	   }
	   return {init:init,detail:detail};
	})();