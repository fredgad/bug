<?php
  header('Location: /app');
  require 'includes/db.php';
  unset($_SESSION['logged_user']);
?>