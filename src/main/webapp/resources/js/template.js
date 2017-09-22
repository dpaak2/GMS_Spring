var introUI={
   
   login : i=>{
      return '<div id="container">'
      +'<div id="login_box">'
      +   '<img src="'+i+'/login.jpg" alt="" /><br />'
      +   '<span id="login_id">ID</span>'
      +   '<input id="login_input" type="text"  /> <br />'
      +   '<span id="login_pass">PASSWORD</span> '
      +   '<input type="text"  /> <br />'
      +'</div>'
   +'</div>';
   },
   navbar : ()=>{
      return 
      '<nav class="navbar navbar-inverse">'
      +'  <div class="container-fluid">'
      +'    <div class="navbar-header">'
      +'      <a class="navbar-brand" href="#">GMS</a>'
      +'    </div>'
      +'    <ul class="nav navbar-nav">'
      +'      <li class="active"><a ><span class="glyphicon glyphicon-home"></span>&nbsp;Home</a></li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" '
      +'             aria-haspopup="true" '
      +'             aria-expanded="false">회원관리 <span class="caret">'
      +'             </span></a>'
      +'          <ul id="navbar_ul_stu" class="dropdown-menu">'
      +'            <li><a>학생추가</a></li>'
      +'            <li><a>학생목록</a></li>'
      +'            <li><a>학생조회</a></li>'
      +'            <li></li>'
      +'            <li><a>학생삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">성적관리 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_grade" class="dropdown-menu">'
      +'            <li><a>성적추가</a></li>'
      +'            <li><a>성적목록</a></li>'
      +'            <li><a>성적조회</a></li>'
      +'            <li></li>'
      +'            <li><a>성적삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">게시판관리 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a>게시글추가</a></li>'
      +'            <li><a>게시글목록</a></li>'
      +'            <li><a>게시글조회</a></li>'
      +'            <li></li>'
      +'            <li><a>게시글삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">수 열 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a id="arithBtn">등차수열</a></li>'
      +'            <li><a id="switchBtn">스위치수열</a></li>'
      +'            <li><a id="geoBtn">등비수열</a></li>'
      +'            <li><a id="facBtn">팩토리얼</a></li>'
      +'            <li><a id="fiboBtn">피보나치</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">배 열 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a id="selBtn">선택 정렬</a></li>'
      +'            <li><a id="bubbleBtn">버블 정렬</a></li>'
      +'            <li><a id="insertBtn">삽입정렬</a></li>'
      +'            <li><a id="rankBtn">석차 구하기</a></li>'
      +'            <li><a id="binSearchBtn">이분 검색</a></li>'
      +'            <li><a id="mergeBtn">병합</a></li>'
      +'            <li><a id="stackBtn">스택</a></li>'
      +'          </ul>'
      +'        </li>'
      +'      <li class="dropdown">'
      +'          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">행 렬 <span class="caret"></span></a>'
      +'          <ul id="navbar_ul_board" class="dropdown-menu">'
      +'           <li><a>기본 5행 5열</a></li>'
      +'            <li><a>직각삼각형</a></li>'
      +'            <li><a>지그재그</a></li>'
      +'            <li><a>다이아몬드</a></li>'
      +'            <li><a>모래시계</a></li>'
      +'            <li><a>오른쪽 빈삼각형</a></li>'
      +'            <li><a>이등변 삼각형</a></li>'
      +'            <li><a>90도회전</a></li>'
      +'            <li><a>달팽이</a></li>'
      +'            <li><a>대각선 채우기</a></li>'
      +'            <li><a>망방진</a></li>'
      +'            <li><a>행렬 변환</a></li>'
      +'            <li></li>'
      +'            <li><a>게시글삭제</a></li>'
      +'          </ul>'
      +'        </li>'
      +'    </ul>'
      +'    <span class="float-right">${user.name} &nbsp;'
      +'       <a id="logout" >로그아웃</a></span>'
      +'  </div>'
      +'</nav>';
   },
   

};

var bbsUI={
		board : ()=>{
			var tbl= '<div id="board">'
			+'<div style="width:90%;margin:20px auto;">'
			+'<select id="searchOption" class="form-control" style="width:20%;float:left;margin-right:36px">'
			+'<option value="searchByName" >작성자</option>'
			+'<option value="searchByTitle">제목</option>'
		    +'</select>'
		    +'<div id="searchGroup" class="input-group" style="width:60%;float:left;margin-right:30px">'
		    +'<span id="searchBox" class="input-group-addon">SEARCH</span>'
		    +'</div>'
		    +'<input class="btn btn-primary" style="width:100px" type="submit"  value="SEARCH"/>'
		    +'</div>'
		    +'<div style="margin:20px 0" >'
					+'<span> 총게시글수</span>'
		    +'</div>'
		     +'<table class="table table-hover" style="width:90%;margin:0 auto;">'
		     +'<thead>'
		     +'<tr class="hanbit-table tr">'
		     var y=[{txt:'NO'},{txt:'작성자'},{txt:'제목'},{txt:'내 용'},{txt:'등록일'},{txt :'조회수'}];
			 $.each(y,(i,j)=>{
				 tbl+='<th text-align: center>' +j.txt+'</th>'
			 });
			 tbl+='</tr> <tbody id="tabBody">';
			
		
				tbl+='</tbody></table></div>'
					
				return tbl;
	   }
};

var compUI={
   br :()=>{return $('<br/>')},
   div : x=>{return $('<div/>',{ id : x});},
   h1 : x=>{return $('<h1/>',{id:x});},
   span : x=>{return $('<span/>',{id:x});},
   image : (x,y)=>{
         return $('<img/>',
         {   
            id : x,
            src : y
         }); 
      },
   input : (x,y)=>{return $('<input/>'),{ id: x, type : y}},
   iTxt : x=>{return $('<input/>',{ id : x, type : 'text'});},
   aBtn :x=>{$('<a/>',{id :x , href :'#', role : 'button' })},
   iBtn : x=>{$('<input/>'),{id: x, type: 'bytton'}}
  
}
var algoUI={
   series : ()=>{
      return '<div id="content">'
         +'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
         +'<span id="start_txt">시작값: &nbsp;&nbsp;</span>'
         +'<br/><span id="end_txt">끝   값:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><br/>'
         +'<div id="result"></div>';
   },
   sort : ()=>{
	   return '<div id="content">'
       +'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
       +'<span id="start_txt">숫자 입력: &nbsp;&nbsp;</span>'
       +'</br><input id="resultBtn" type="button" value="결과보기"></input>'
       +'<div id="result"></div>';
   },
   mtx : ()=>{
	   return  '<div id="content">'
       +'<h1>시작값부터 끝값까지 등차수열의 합</h1>'
       +'<span id="start_txt">숫자 입력: &nbsp;&nbsp;</span>'
       +'</br><input id="resultBtn" type="button" value="결과보기"></input>'
       +'<div id="result"></div>';
   }
};
