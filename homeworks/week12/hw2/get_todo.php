<?php
  require_once("conn.php");
  // 瀏覽器才會知道是要回覆 JSON 格式的資料
  header('Content-Type: application/json; charset=utf-8');
  // 跨網域處理
  header('Access-Control-Allow-Origin: * ');
  // 如果沒有拿到site_key的錯誤處理
  if (
    empty($_GET['id'])
  ) {
  	$json = array(
  	  "ok" => false,
  	  "message" => "Please add id in url" 
  	);
  	$response = json_encode($json);
  	echo $response;
  	die();
  }

  // 拿資料
  $id = intval($_GET['id']);



  // 拿該 site_key的資料
  $sql =
    "select id, todo from peic_todos where id = ? ";
  $stmt = $conn ->prepare($sql);
  $stmt->bind_param("i", $id);
  
  $result = $stmt->execute();

  // 如果沒有資料的錯誤處理
  if (!($result)) {
  	$json = array(
  	  "ok" => false,
  	  "message" => $conn->error
  	);
  	$response = json_encode($json);
  	echo $respone;
  	die();
  }

  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  $json = array(
    "ok" => true,
    "data" => array(
      "id" => $row['id'],
      "todo" => $row['todo'],
    )
  );

  
  $response = json_encode($json);
  echo $response;
?>

