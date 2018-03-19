<?php
	$name = $_REQUEST['name'];
	$sex = $_REQUEST['sex'];
	$callback = $_REQUEST['callback'];

	$array = array('name' => $name, 'sex' => $sex, 'success' => true);
	$json = json_encode($array);
	echo "$callback($json)";