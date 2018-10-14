<?php
	$str = $_POST['id'];
	$result = [];
	for($i = 1; $i <= 100; $i++){
		if(strpos("$i", $str) == true){
			$data['id'] = $i;
			$data['title'] = md5($i);
			$data['content'] = md5($i).md5($i).md5($i).md5($i).md5($i);
			$data['url'] = "http://www."."myidis".$i.".com/";
			$data['time'] = date('Y-m-s H:i:s');
			$data['img_url'] = "img/1.png";
			$result[] = $data;
		}
	};
    if(count($result) > 0){
        echo json_encode(['status' => 1, 'message' => 'success', 'data' => $result]);
    } else {
        echo json_encode(['status' => 0, 'message' => 'fail', 'data' => []]);
    }
