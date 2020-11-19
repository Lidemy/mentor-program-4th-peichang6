<?php
  require_once("conn.php");
  // 瀏覽器才會知道是要回覆 JSON 格式的資料
  header('Content-Type: application/json; charset=utf-8');
    // 跨網域處理
  header('Access-Control-Allow-Origin: * ');
  // 如果沒有輸入東西的錯誤處理
  if (
    empty($_POST['content']) ||
    empty($_POST['nickname']) ||
    empty($_POST['site_key'])
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
  $site_key = $_POST['site_key'];
  $nickname = $_POST['nickname'];
  $content = $_POST['content'];

  // 寫入資料庫
  $sql = "INSERT INTO peic_discussions(site_key, nickname, content) VALUES(?, ?, ?)" ;
  $stmt = $conn ->prepare($sql);
  $stmt->bind_param("sss", $site_key, $nickname, $content);
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
  	"message" => "success"
  );
  $response = json_encode($json);
  echo $response;
?>

