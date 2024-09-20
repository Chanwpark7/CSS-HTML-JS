<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
request.setCharacterEncoding("UTF-8");
String name = request.getParameter("myname");
String pass = request.getParameter("mypw");

out.println("<h2>안녕하세요," + name +"님.<br>");
out.println("전송된 암호는," + pass +"입니다<br></h2>");

%>

<h3>당신이 좋아하는 과목은 <%=request.getParameter("fav_Language") %>입니다.</h3>
<h3>당신의 취미는
<%
	String[] hobby = request.getParameterValues("hobby");
	if(hobby !=null){
		for(String val : hobby){
		out.println(val);
		}
	}
%>입니다.</h3>

<h3>당신이 선택한 컬러 <%=request.getParameter("fav_col")%></h3>
<h3>당신의 생일은 <%=request.getParameter("birth")%> 입니다</h3>
<h3>이벤트 날짜는 <%=request.getParameter("evtDay")%> 입니다</h3>
<h3>당신의 구매ID는 <%=request.getParameter("custID")%> 입니다</h3>

</body>
</html>