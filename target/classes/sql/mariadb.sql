/*mile stone*/
 -- ***************************
 -- 2017.08.02
 -- [1]MAJOR_TAB
 -- [2]SUBJECT_TAB
 -- [3]MEMBER_TAB
 -- [4]PROF_TAB
 -- [5]STUDENT_TAB
 -- [6]GRADE_TAB
 -- [7]BOARD_TAB
 -- **************************



drop table MAJOR;

/* -- [1]MAJOR_TAB checked*/
CREATE TABLE 
MAJOR
(
	major_id varchar(10) not null,
	title varchar(10) null,
	member_id varchar(10) null,
	subj_id varchar(10) null,
	primary key (major_id)
	);
	
	
	DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

	
	
/* -- [2]SUBJECT_TAB checked*/
 CREATE TABLE 
 Subject
 (
	subj_id VARCHAR(10),
	title VARCHAR(10),
	primary key (subj_id)
);


DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO Subject () VALUES ();
INSERT INTO subject(subj_id, title) values('python', 'python');
INSERT INTO subject(subj_id, title) values('java', '자바');
INSERT INTO subject(subj_id, title) values('c', 'C');
INSERT INTO subject(subj_id, title) values('css', 'CSS');
INSERT INTO subject(subj_id, title) values('javascript', '자바스크립트');
INSERT INTO subject(subj_id, title) values('html', 'HTML');
INSERT INTO subject(subj_id, title) values('sql', 'SQL');
select * from Subject;	
/*******************
 * 
 *  -- [3]MEMBER_TAB checked
 * */
SELECT * FROM MEMBER;
drop table member;
CREATE TABLE
Member
(
	member_id VARCHAR(10),
	name VARCHAR(20),
	password VARCHAR(10),
	ssn VARCHAR(20),
	regdate DATETIME,
	phone varchar(20),
	email varchar(20),
	profile varchar(20),
	PRIMARY KEY(member_id)
);

DELETE FROM MEMBER WHERE member_id='christine';
INSERT INTO MEMBER(member_id, name, password,ssn,regdate,phone,email,profile)
VALUES('hong','홍길동','1','800101-123456',now(),'010-1234-1234','hong@test.com','default.jsp');

INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('yoo','유관순','1','930701-222222',now(),'010-1234-1234','yoo@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('han','한채아','1','940506-212324',now(),'010-1234-1234','han@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('myoo','유재석','1','800901-123456',now(),'010-1234-1234','myoo@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('byeon','변용주','1','861014-123456',now(),'010-1234-1234','byeon@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('choi','조봉기','1','871010-123456',now(),'010-1234-1234','choi@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('hkim','김한슬','1','900117-212345',now(),'010-1234-1234','hkim@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('pjk','박정관','1','990101-123456',now(),'010-1234-1234','pjk@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('ykim','김유신','1','840604-123456',now(),'010-1234-1234','ykim@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('skim','김유신','1','880604-123456',now(),'010-1234-1234','skim@test.com','default.jsp');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile) VALUES('jinjin','김진은','1','930929-212345',now(),'010-1234-1234','jinjin@test.com','default.jsp');

INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('hun','이석훈','1','890811-1111111',now(),'010-1234-1234','hun@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('seong','권재승','1','961125-1234567',now(),'010-1234-1234','seong@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('sisi','임시환','1','19930625-1111222',now(),'010-1234-1234','sisi@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('hyun','강승현','1','970408-1122334',now(),'010-1234-1234','hyun@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('dong','한동근','1','880628-1223334',now(),'010-1234-1234','dong@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('joo','남주혁','1','940129-1234567',now(),'010-1234-1234','joo@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('soo','정수정','1','940701-2233445',now(),'010-1234-1234','soo@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('susan','susan','1','931222-2233445',now(),'010-1234-1234','susan@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('jamjam','james','1','850519-1122334',now(),'010-1234-1234','jamjam@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('sese','sera','1','880401-2233445',now(),'010-1234-1234','sese@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('christine','크리스틴','1','961121-2567890',now(),'010-1234-1234','christine@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('chirissy','chris','1','900518-1234567',now(),'010-1234-1234','chirissy@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('paul','paully','1','931013-1456890',now(),'010-1234-1234','paul@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('alex','huabun','1','901111-1122334',now(),'010-1234-1234','alex@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('michael','pope','1','980101-1122334',now(),'010-1234-1234','michael@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('dave','daviy','1','881201-1252205',now(),'010-1234-1234','dave@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('shopia','sophie','1','900101-2233445',now(),'010-1234-1234','shopia@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('eden','edens','1','900101-2233445',now(),'010-1234-1234','eden@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('chole','choleee','1','900113-2233445',now(),'010-1234-1234','chole@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('moonb','장문복','1','980214-1122334',now(),'010-1234-1234','moonb@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('danny','강다니엘','1','990813-1122334',now(),'010-1234-1234','danny@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('song','송중기','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('park','박보검','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('gong','공지철','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('gang','강동원','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('ha','하정우','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('kimnam','김남길','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('seo','서강준','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('jang','장근석','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('somi','전소미','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('cheng','김청하','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('doyeoun','김도연','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('sohae','김소혜','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('somsom','전소미','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('yoojung','최유정','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('seajung','김세정','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('chae','정채연','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('nayong','임나영','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('mina','강미나','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('yooyeon','유연정','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) values ('min','이승민','1','850919-1122334',now(),'010-1234-1234','song@test.com','default.jsp');




/*교수 insert*/
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile) 
VALUES('mankiew','맨큐','1','700102-1234567',now(),'010-1234-1234','mankiew@test.com','defaultimg.jpg');
INSERT INTO Member(member_id, name, password,ssn,regdate,phone,email,profile)
VALUES('james','제임스','1','550519-1234567',now(),'010-1111-1111','james@test.com','defaultimg.jpg');
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile)
VALUES('bare','베어','1','830105-1234567',now(),'010-1234-5555','bare@test.com','defaultimg.jpg'); 
INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile)
VALUES('gogh','고흐','1','530105-1234567',now(),'010-1234-6666','gogh@test.com','defaultimg.jpg');

INSERT INTO Member (member_id, name, password,ssn,regdate,phone,email,profile)
VALUES('jason','박정관','1','830101-1234567',now(),'010-8888-6666','jason@test.com','defaultimg.jpg');

/*******************
 *  -- [4]PROF_TAB  checked
 * */

CREATE TABLE Prof (
	member_id VARCHAR(10),
	salary VARCHAR(10),
	PRIMARY KEY (member_id)
);

  INSERT INTO Prof(member_id,salary) VALUES ('mankiew','5000');
  INSERT INTO Prof(member_id,salary) VALUES ('james','6000');
  INSERT INTO Prof(member_id,salary) VALUES ('bare','4000');
  INSERT INTO Prof(member_id,salary) VALUES ('gogh','3000');
  INSERT INTO Prof(member_id,salary) VALUES ('jason','10000');


/*******************
 *  -- [6]GRADE_TAB checked
 * ******************/
CREATE TABLE Grade (
	grade_seq INT NOT NULL AUTO_INCREMENT,
	score VARCHAR(3),
	exam_date VARCHAR(13),
	member_id VARCHAR(10),
	subj_id VARCHAR(10),
	PRIMARY KEY (grade_seq)
	);



/*******************
 *  -- [7]BOARD_TAB   checked
 * ******************/
CREATE TABLE Board(
	article_seq INT NOT NULL AUTO_INCREMENT,
	member_id VARCHAR(10),
	title VARCHAR(20),
	content VARCHAR(100),
	regdate DATETIME,
	hitcount INT,
	PRIMARY KEY (article_seq)
);


 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('hong','길동이의 길','길동이가 아버지를 찾아 길을 떠났습니다.',1,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('hong','호부호형(呼父呼兄) ','호부호형(呼父呼兄) : 아버지라 부르고 형이라 부름.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('hong','절언대지(絶言大地)','말을 못할 정도로 좋은 경치나, 땅이나, 풍경 이런 뜻이 아닐까 생각됩니다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('hong','길동이 전','홍길동은 조선조 세종 때 서울에 사는 홍판서의 시비 춘섬의 소생인 서자다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('yoo','관순이 일기','내 손톱이 빠져 나가고 내 귀와 코가 잘리고 ',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('yoo','유관순 열사','나라를 잃어버린 그 고통만은 견딜 수가 없습니다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('yoo','나랑사랑','대한 독립 만세',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('pjk','자바란','자바를 공부하세요, 인생이 편해집니다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('pjk','제이스고슬링','제임스 고슬링은 신입니다 !!',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('skim','김유신의 시','보이는 같지 꽃이 원대하고, 쓸쓸하랴? ',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','롤 하러 가자','생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','반갑습니다','생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','저는 변용주 입니다','저는 변용주 입니다,생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','변용주 일대기','변용주 일대기,생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','용주쓰','용주쓰,생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','얼굴용 주인주','얼굴용 주인주,생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('byeon','아무말 대잔치','아무말 대잔치,생생하며, 가는 너의 끓는 석가는 피어나기 칼이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('choi','봉기봉기','피는 얼음에 속에서 생명을 아니다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('choi','저는 조봉기 입니다','봉기형님으로 모셔라',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('choi','나는 봉기','나는야 조봉기 !!!피는 얼음에 속에서 생명을 아니다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('choi','봉기봉기','안녕하세요 조봉기 입니다',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('han','원질이',' 원질이 일월과 간에 듣기만 영락과 대고, 아름다우냐?',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('skim','꽃이란','싶이 구할 가는 사막이다. 곳으로 꽃 이 구하기 ',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('myoo','여름이다','고 재석 고재석 ㅋ',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('jinjin','그들의 사랑','그들에게 사랑의 없으면, 그들은 같이 인생의 얼마나 봄날의 이것이다.',0,now());
 INSERT INTO Board (member_id,title,content,hitcount,regdate) VALUES ('jinjin','광야','광야에서 대중을 우는 설레는 청춘의 위하여서',0,now());

 
 select count (*) from Board;
 
 
 /********************************view Student from oracle**************************************/
 create view student(num,id,name,ssn,regdate,phone,email,title)
as
select rownum num, t.*
from (select a.member_id, a.name,rpad(substr(a.ssn,1,7),14,'*') ssn,to_char(a.regdate,'yyyy-MM-dd') regdate,
        a.phone,a.email,listagg(s.title,',') within group(order by s.title) 과목
    from member a
        left  join major m on a.member_id like m.member_id
        left join subject s on m.subj_id like s.subj_id
        group by a.member_id, a.name, a.ssn,a.regdate,a.phone,a.email
        order by regdate 
) t
  order by rownum desc;
  
 
 /***********************************************************************************/
 /********************************view Student from maria**************************************/
  /*SELECT SUBSTR('w3resource',4,3);  */
  /*oracle:: rpad ------- mysql::SELECT RPAD('w3resource',15,'*');   */
  /*oracle:: to_char  ----   mysql:::  SELECT CONCAT('$', FORMAT(1000, 0));*/
  /*oracle:: listagg ---- */
  
  /*step 1*/
    select * 
  from 
  member a 
  	left join major m 
  		on a.member_id like m.member_id
  	left join subject s 
  		on m.subj_id like s.subj_id
  	group by 
  	a.member_id, a.name, a.ssn, 
  	a.regdate, a.phone, a.email
  	order by regdate
  	;
  
  	
/*step 2*/
  	
  	
  	select 
	  	a.member_id, a.name,rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
	  	CONCAT(a.regdate,'yyyy-MM-dd') regdate,
        a.phone,a.email,group_concat(s.title,',') 과목
    from member a
        left  join
         major m 
         on a.member_id like m.member_id
        left join 
         subject s on m.subj_id like s.subj_id
        group by 
	        a.member_id, a.name, a.ssn,
	        a.regdate,a.phone,a.email
        order by regdate ;
 
        
        
        
   SELECT
   a.member_id, a.name,
   rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
   date_format(a.regdate,'%Y-%m-%d') regdate,
   a.phone,a.email,group_concat(s.title,',')  과목
    FROM member a
        LEFT  JOIN major m
         on a.member_id like m.member_id
        LEFT JOIN subject s
         on m.subj_id like s.subj_id
        GROUP BY 
         a.member_id, 
         a.name, a.ssn,
         a.regdate,a.phone,a.email
     ORDER BY regdate ;
        
        
        
        
        
  /*step 3 */

 create view student(num,id,name,ssn,regdate,phone,email,title)
as
select ROW_NUMBER() num, t.*
from (
   SELECT
   a.member_id, a.name,
   a.password,
   rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
   date_format(a.regdate,'%Y-%m-%d') regdate,
   a.phone,a.email,group_concat(s.title,',')  과목
    FROM member a
        LEFT  JOIN major m
         on a.member_id like m.member_id
        LEFT JOIN subject s
         on m.subj_id like s.subj_id
        GROUP BY 
         a.member_id, 
         a.name, a.ssn,
         a.regdate,a.phone,a.email
     ORDER BY regdate
     ) t
  order by rownum desc;
        
        
        
 
select  @RNUM := @RNUM + 1 AS NO,t.*
from (
   SELECT
   a.member_id, a.name,
   a.password,
   rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
   date_format(a.regdate,'%Y-%m-%d') regdate,
   a.phone,a.email,group_concat(s.title,',')  과목
    FROM member a
        LEFT  JOIN major m
         on a.member_id like m.member_id
        LEFT JOIN subject s
         on m.subj_id like s.subj_id
        GROUP BY 
         a.member_id, 
         a.name, a.ssn,
         a.regdate,a.phone,a.email
     ORDER BY regdate
     ) t,( SELECT @RNUM := 0 ) b;
      
SELECT *
FROM (
SELECT @NO := @NO + 1 AS ROWNUM, A.*
FROM
  (
       SELECT
   a.member_id, a.name,
   a.password,
   rpad(SUBSTRING(a.ssn,1,7),14,'*') ssn,
   date_format(a.regdate,'%Y-%m-%d') regdate,
   a.phone,a.email,group_concat(s.title,',')  과목
    FROM member a
        LEFT  JOIN major m
         on a.member_id like m.member_id
        LEFT JOIN subject s
         on m.subj_id like s.subj_id
        GROUP BY 
         a.member_id, 
         a.name, a.ssn,
         a.regdate,a.phone,a.email
     ORDER BY regdate
  ) A,
  ( SELECT @NO := 0 ) B 
  ORDER BY seq_no DESC
) C
WHERE C.ROWNUM BETWEEN 1 AND 5;

        
      
 
 /*step 4 */
     create view 
     student
     (
     id,name,ssn,
     regdate,phone,email,
     pass,subjects
     )
     as
     (select 
      		a.member_id id,
      		a.name name,
      		rpad(substring(a.ssn,1,8),14,'*')ssn,
      		date_format(a.regdate,'%Y-%m-%d')regdate,
      		a.phone phone,
      		a.email email,
      		group_concat(s.title,',') subjects
       FROM
       Member a
       LEFT join 
       Major m
       on a.member_id liske me.member_id
       left join Subject s
       		on m.subj_id like s.subjc_id
       	group by 
       	  a.member_id, a.name, a.ssn,
       	  a.regdate,a.phone,a.email
       	  order by regdate
       	  );
       	  
       	  
/*FINAL*/     	  
  drop view Student;     	  
CREATE view
  student 
  (id,name,ssn,regdate,phone,email,password,subjects
)
AS
(
  SELECT
    a.member_id id,
    a.name name,
    RPAD(SUBSTRING(a.ssn,1,7),14,'*') ssn,
    DATE_FORMAT(a.regdate, '%Y-%m-%d') regdate,
    a.phone phone,
    a.email email,
    a.password password,
    GROUP_CONCAT(s.title,',') subjects
  FROM member a
    LEFT JOIN Major m
      ON a.member_id LIKE m.member_id
   LEFT JOIN Subject s 
      ON m.subj_id LIKE s.subj_id
   GROUP BY
      a.member_id, a.name, a.ssn,
      a.regdate, a.phone, a.email
   ORDER BY regdate
); 




/*pagination*/

select @RNUM := @RNUM +1 AS NO,t.*
from student t,(select @RNUM := 0)b;





SELECT *
FROM (
SELECT @NO := @NO + 1 AS ROWNUM, A.*
FROM
  (
    select * from Student
  ) A,
  ( SELECT @NO := 0 ) B 
  ORDER BY ROWNUM DESC
) C
WHERE C.ROWNUM BETWEEN 10 AND 14;



