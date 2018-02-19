### Schema

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int not null auto_increment primary key,
	burger_name varchar(255) not null,
    description varchar(255),
    devoured boolean not null default 0,
    locked boolean not null default 0
);

