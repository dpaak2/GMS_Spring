<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<header>
</header>
<div class="container">
	<div style="width:90%;margin:20px auto;">
		<select id="searchOption" class="form-control" name="searchOption" style="width:20%;float:left;margin-right:36px">
			<option value="searchByName" >작성자</option>
			<option value="searchByTitle">제목</option>
		</select>
		<div class="input-group" style="width:60%;float:left;margin-right:30px">
		    <span class="input-group-addon">SEARCH</span>
		    <input id="msg" type="text" class="form-control" style="width:100%" name="searchWord" placeholder="작성자 또는 제목을  검색하여 주세요" >
		</div>
		<input class="btn btn-primary" style="width:100px" name="search" type="submit"  value="SEARCH"/>
		<input type="hidden" name="action" value="search"/>
		<input type="hidden" name="pageName" value="list" />
		<input type="hidden" name="pageNumber" value="1" />
		</div>
		</div>

		<div style="margin:20px 0" >
			<span> 총게시글수 ${requestScope.count}</span>
			<a href="${context}/board.do?action=move&pageName=write"><button class="btn btn-danger" style="float:right;width:100px">글쓰기</button></a>
		</div>

	 <table class="table table-hover" style="width:90%;margin:0 auto;">
		<tr class="hanbit-table tr">
			<td >NO</td>
			<td >제 목</td>
			<td >내 용</td>
			<td>작성자</td>
			<td>등록일</td>
			<td>조회수</td>
		</tr>
	<c:forEach var="article" items="${requestScope.list}">
		<tr>
			<td>${article.seqNo}</td>
			<td><a href="${context}/board.do?action=detail&pageName=detail&seqNo=${article.seqNo}">${article.title}</a></td>
			<td><a href="${context}/board.do?action=detail&pageName=detail&seqNo=${article.seqNo}">${article.content}</a></td>
			<td>${article.writer}</td>
			<td><a href="${context}/board.do?action=detail&pageName=detail&seqNo=${article.seqNo}">${article.regiDate}</a></td>
			<td>${article.hitCount}</td>
		</tr>
	</c:forEach>
	
	</table>
	<nav style="width:30%;margin:0 auto">
		<ul class="pagination">
		<c:if test="${requestScope.prevBlock  gt 0}">
		<li>
			<a href="${context}/board.do?action=${requestScope.actionType}&pageName=list&pageNumber=${requestScope.prevBlock}">&laquo;</a>
		</li>
		</c:if>
		<c:forEach varStatus="i" begin="${requestScope.startPage}" end="${requestScope.endPage}"
			 step="1" >
			<li>
			<c:choose>
				<c:when test="${i.index eq pageNumber}">
					<a href="#"><font style="color:red">${i.index}</font></a>
				</c:when>
				<c:otherwise>
					<a href="${context}/board.do?action=${requestScope.actionType}&pageName=list&pageNumber=${i.index}">${i.index}</a>
				</c:otherwise>
			</c:choose>
			</li>
		</c:forEach>
		 <c:if test="${nextBlock  le theNumberOfPages}"> 
		<li>
			<a href="${context}/board.do?action=${requestScope.actionType}&pageName=list&pageNumber=${requestScope.nextBlock}">&raquo;</a>
		</li>
		</c:if> 
		</ul>
	</nav> 
