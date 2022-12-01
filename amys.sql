create database db_amys_pizzaria;

use db_amys_pizzaria;

create table tbl_cliente (
id int not null auto_increment primary key,
nome varchar (80) not null,
telefone varchar(15),
celular varchar(15) not null,
email varchar(256) not null,
unique index(id)
);

create table tbl_feedback (
id int not null auto_increment primary key,
criticas text,
sugestoes text,
id_cliente int not null, 
constraint FK_cliente_feedback 
foreign key (id_cliente) 
references tbl_cliente(id), 
unique index (id)
);

create table tbl_colaborador (
id int not null auto_increment primary key,
senha varchar(20) not null,
login varchar(256) not null,
unique index(id)
);

create table tbl_ingrediente(
id int not null auto_increment primary key,
nome varchar(20) not null,
acompanhamentos text not null,
unique index(id)
);



create table tbl_pizza_ingredientes (
id int not null auto_increment primary key,

#id pizza
id_pizza int not null,
constraint FK_pizza_pizza_ingredientes 
foreign key (id_pizza) 
references tbl_pizza(id), 

#id ingredientes
id_ingrediente int not null, 
constraint FK_ingrediente_pizza_ingredientes
foreign key (id_ingrediente) 
references tbl_ingrediente(id), 
unique index (id)
);



create table tbl_promocao (
id int not null auto_increment primary key,
nome varchar(30) not null,
prazo date not null,
descricao text not null,
preco varchar(6) not null,
unique index(id)
);

create table tbl_pizza_promocao (
id int not null auto_increment primary key,

#id pizza
id_pizza int not null, 
constraint FK_pizza_pizza_promocao 
foreign key (id_pizza) 
references tbl_pizza(id), 

#id promocao
id_promocao int not null, 
constraint FK_promocao_pizza_promocao
foreign key (id_promocao) 
references tbl_promocao(id), 
unique index (id)
);



create table tbl_servico (
id int not null auto_increment primary key,
tipo_servico varchar (20) not null,
unique index(id)
);

create table tbl_funcionamento (
id int not null auto_increment primary key,
horario_abertura time not null,
horario_fechamento time not null,
id_servico int not null, 
constraint FK_funcionamento_servico 
foreign key (id_servico) 
references tbl_servico(id), 
unique index (id)
);

create table tbl_produto (
id int not null auto_increment primary key,
nome varchar(30) not null,
preco varchar(7) not null,




unique index(id)
);



create table tbl_pizza (
id int not null auto_increment primary key,
status_favorita int not null,

# id tipo pizza
id_tipo_pizza int not null, 
constraint FK_pizza_tipo_pizza 
foreign key (id_tipo_pizza) 
references tbl_tipo_pizza(id), 

#id produto
id_produto int not null, 
constraint FK_pizza_produto 
foreign key (id_produto) 
references tbl_produto(id), 
unique index(id)
);

create table tbl_tipo_pizza (
id int not null auto_increment primary key,
tipo varchar(10) not null,
unique index(id)
);



create table tbl_bebida (
id int not null auto_increment primary key,
tamanho varchar(7) not null,
foto varchar(256) not null,

#id tipo bebida
id_tipo_bebida int not null,
constraint FK_bebida_tipo_bebida 
foreign key (id_tipo_bebida) 
references tbl_tipo_bebida(id), 

#id produto
id_produto int not null, 
constraint FK_bebida_produto 
foreign key (id_produto) 
references tbl_produto(id),

unique index(id)
);



create table tbl_tipo_bebida (
id int not null auto_increment primary key,
tipo varchar(18) not null,
unique index(id)
);

show tables;

insert into tbl_servico(tipo_servico) 
	values('ifood'),
    ('Retirada no local'),
    ('Delivery');
    
    select * from tbl_servico;
    
    insert into tbl_funcionamento(horario_abertura, horario_fechamento, id_servico)
		values (' 18:00:00', '00:00:00', 1),
			   ('18:00:00', '00:00:00', 2),
			   ('18:00:00', '00:00:00', 3);
               
   select * from tbl_funcionamento;            


insert into tbl_produto(nome, preco)
	values ('Coca-cola', 'R$12,00'),
    ('Pepsi', 'R$12,00'),
    ('Guaraná Antártica', 'R$12,00'),
    ('Fanta Laranja', 'R$12,00'),
    ('Fanta Guaraná', 'R$12,00'),
    ('Fanta Uva', 'R%12,00'),
    ('Spite', 'R$12,00'),
    ('Soda', 'R$12,00');
                  
			