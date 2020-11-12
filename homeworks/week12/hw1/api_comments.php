<?php
  require_once("conn.php");
  // 瀏覽器才會知道是要回覆 JSON 格式的資料
  header('Content-Type: application/json; charset=utf-8');
  // 跨網域處理
  header('Access-Control-Allow-Origin: * ');
  // 如果沒有拿到site_key的錯誤處理
  if (
    empty($_GET['site_key'])
  ) {
  	$json = array(
  	  "ok" => false,
  	  "message" => "Please send site_key in url" 
  	);
  	$response = json_encode($json);
  	echo $response;
  	die();
  }

  // 拿資料
  $site_key = $_GET['site_key'];



  // 拿該 site_key的資料
  $sql =
    "select id, nickname, content, created_at from peic_discussions where site_key = ? " .
    (empty($_GET['before']) ? "" : "and id < ?") .
    " order by id desc limit 5 ";
  $stmt = $conn ->prepare($sql);
  if (empty($_GET['before'])) {
    $stmt->bind_param("s", $site_key);
  }else {
    $stmt->bind_param("si", $site_key, $_GET['before']);
  }
  
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
  $discussions = array();
  while($row = $result->fetch_assoc()) {
    array_push($discussions, array(
      "id" => $row['id'],
      "nickname" => $row['nickname'],
      "content" => $row['content'],
      "created_at" => $row['created_at']
    ));
  }

  $json = array(
  	"ok" => true,
  	"discussions" => $discussions
  );
  $response = json_encode($json);
  echo $response;
?>

