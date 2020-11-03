<?php
require_once('conn.php');

  function generateToken() {
  	$s = '';
  	for ($i=1; $i<=16; $i++) {
  		$s .= chr(rand(65,90));
  	}
  	return $s;
  }

  function getUserFromUsername($username) {
  	global $conn;
  	  $sql = sprintf(
  	    "select * from peic_users where username='%s'",
  	    $username
  	  );
  	  $result =$conn->query($sql);
  	  $row = $result->fetch_assoc();
  	  $username = $row['username'];

  	  $sql = sprintf(
  	    "select * from peic_users where username='%s'",
  	    $username	
  	  );
  	  $result =$conn->query($sql);
  	  $row = $result->fetch_assoc();
  	  return $row; //username, id, nickname, role
  }

  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES);
  }

  // $action: update, delete, create
  function hasPermission($user, $action, $comment) {
    if ($user === null) {
        return;
    }
    if ($user["role"] === "ADMIN") {
      return true;
    }
    if ($user["role"] === "NORMAL") {
      if ($action === "create") return true;
      return $comment["username"] === $user["username"];
    }
    if ($user["role"] === "SUSPENED") {
      return $action !== "create";
    }
  }

  function isAdmin($user) {
    return $user["role"] === "ADMIN";
    }
?>
