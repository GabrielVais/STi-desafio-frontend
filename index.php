
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Api Clima-Desafio</title>
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<link href="https://fonts.googleapis.com/css?family=Lato|Oxygen&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css">
	<script src="https://kit.fontawesome.com/5e4dc12b90.js"></script>
</head>
<body class="body">
	<section class="content">
		<div class="title">
			<h1>Previsão do tempo</h1>
		</div>
		<div class="card">
			<div class="card-title">
				<span id="card-title">Niterói, RJ-Brasil</span>
			</div>
			<div class="card-close">
				<i class="fa fa-close"></i>
			</div>
			<div class="card-header">
				<h2 id="header-title">20C Nublado</h2>
			</div>
			<div class="card-temperature">
			<i class="fa fa-arrow-down" aria-hidden="true"></i>
			<span id="tempMin">18C</span>
			<i class="fa fa-arrow-up" aria-hidden="true" id="arrowUp"></i>
			<span id="tempMax">30C</span>
			<span>Sensaçao <strong id="tempSen">19C</strong></span>
			</div>
			<div class="card-temperature">
			<span>Vento <strong id="vento">18KM</strong></span>
			<span>Humidade <strong id="humidade">89%</strong></span>
			</div>
			<div class="line-card">
			<hr/>
			</div>
			<div class="card-days">
				<span><strong>Terça</strong></span>
				<span><strong>Quarta</strong></span>
				<span><strong>Quinta</strong></span>
				<span><strong>Sexta</strong></span>
				<span><strong>Sabado</strong></span>

			</div>
			<div class="card-days card-2" id="cardDays">
				<span>18 26</span>
				<span>18 28</span>
				<span>19 30</span>
				<span>23 35</span>
				<span>23 37</span>
			</div>
		</div>
		<div class="search">
			<form id="formulario">
			<input type="text" placeholder="Insira aqui o nome da cidade" id="pesquisar" name="location">
			</form>
			<i class="fas fa-search" id="btnPesquisar"></i>
		</div>
		<div class="line">
			<hr/>
		</div>
		<div class="items">
			<div class="item-title">
				<h2>Capitais</h2>
			</div>
		</div>
			<div class="item-table">
				<table class="table1" id="tbl1">
				
				</table>
				<table class="table1">
				  
				</table>
			</div>
		</div>
		<footer>
			<span>2019</span>
		</footer>
	</section>
	<script type="text/javascript" src="assets/js/fade.js"></script>
	<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>