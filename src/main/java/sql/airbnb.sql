CREATE TABLE 
Member
(
	member_id varchar(30) not null,
	member_password varchar(10) null,
    name varchar(10) null,
	regdate datetime not null,
    birthdate varchar (20) null,
	PRIMARY KEY (member_id)
);

create table
Guest
(
  member_id varchar(30) not null,
  primary key (member_id)
);

create table
Reservation
(
	rsv_seq int(10) not null,
	checkin datetime not null,
	checkout datetime not null,
	regdate datetime not null,
	adult int(2) null,
	teen int(2) null,
	child int(2) null,
	solddays int(2) null,
	host_serial int(10) not null,
	member_id varchar(30) not null,
	primary key (rsv_seq)
);

create table
Residence
(
	host_serial int(10) not null,
	limit_no ,
	residence_name varchar(50) not null,
	price int(7) not null,
	zipcode int() not null,
	primary key(host_serial)
);





create table 
Host
(
  member_id varchar(30) not null,
  primary key (member_id)
);



/*admin*/
create table
Admin
(
  member_id varchar(30) not null,
  primary key (member_id)
);


create table
Board
(
  board_seq varchar(10),
  title varchar(1000),
  contents varchar(3000),
  regdate varchar(10),
  member_id varchar(30),
  primary key (board_seq)
);

create table
BoardCategory
(
   board_seq int(10),
  cate_name varchar(30),
  cate_level varchar(3),
   primary key (board_seq)
);

create table
Review
(
	board_seq int(10),
	review_star int(1),
	primary key (board_seq)
);



create table
accumulate
(
  date varchar(10),
  gender  varchar(7)
);





COMMIT;