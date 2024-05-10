
use my_finance;

create table users
(
id int primary key auto_increment,
email varchar(320) unique,
first_name varchar(45),
last_name varchar(45),
profile_Photo varchar(255),
password varchar(255),
activation_code varchar(10),
account_status boolean,
is_deleted boolean,
created_at timestamp default current_timestamp,
modified_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp 
);

create table profile_photo_history
(
id int primary key auto_increment,
user_id int,
image varchar(255),
created_at timestamp default current_timestamp,
foreign key (user_id) references users(id)
);

create table sheets
(
id int primary key auto_increment,
user_id int,
title varchar(95),
is_deleted boolean,
created_at timestamp default current_timestamp,
modified_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp ,
foreign key (user_id) references users(id)
);

create table entries
(
id int primary key auto_increment,
sheet_id int,
created_by int,
date timestamp default current_timestamp,
purpose varchar(95),
amount int,
take_from varchar(45),
give_to varchar(45),
is_deleted boolean,
created_at timestamp default current_timestamp,
modified_at timestamp default current_timestamp on update current_timestamp,
deleted_at timestamp,
foreign key (sheet_id) references sheets(id),
foreign key (created_by) references users(id)
);
