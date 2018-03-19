<?php
	//设置可访问来源
	header('Access-Control-Allow-Origin:http://www.testphp.com');

	$name = $_REQUEST['name'];
	$sex = $_REQUEST['sex'];

	$array = array('name' => $name, 'sex' => $sex, 'success' => true);
	$json = json_encode($array);
	echo $json;