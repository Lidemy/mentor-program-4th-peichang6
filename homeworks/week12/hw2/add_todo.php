<?php
  require_once("conn.php");
  // 瀏覽器才會知道是要回覆 JSON 格式的資料
  header('Content-Type: application/json; charset=utf-8');
    // 跨網域處理
  header('Access-Control-Allow-Origin: * ');
  // 如果沒有輸入東西的錯誤處理
  if (
    empty($_POST['todo'])
  ) {
  	$json = array(
  	  "ok" => false,
  	  "message" => "Please input missing fields" 
  	);
  	$response = json_encode($json);
  	echo $response;
  	die();
  }

  // 拿資料
  $todo = $_POST['todo'];

  // 寫入資料庫
  $sql = "INSERT INTO peic_todos(todo) VALUES(?)" ;
  $stmt = $conn ->prepare($sql);
  $stmt->bind_param("s", $todo);
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

  $json = array(
  	"ok" => true,
  	"message" => "success",
    "id" => $conn->insert_id
  );
  $response = json_encode($json);
  echo $response;
?>

