<?php 
  require 'includes/db.php';
  require 'includes/head.php';

  $data = $_POST;
  $p = '<p class="p">Регистрация</p>';
  $a = '<strong><a href="index.php">Авторизоваться</a></strong>';
  if(isset($data['do_signup'])) {
    //Registration
    $errors = array();

    if(trim($data['login'] == '')) {
      $errors[] = 'Введите логин';
    }
    if(trim($data['email'] == '')) {
      $errors[] = ' Введите E-mail';
    }
    if($data['password'] == '') {
      $errors[] = 'Введите пароль';
    }
    if($data['confirm'] != $data['password']) {
      $errors[] = 'Подтверждение пароля неверно';
    } 
    if(R::count('user', "login = ?", array($data['login'])) > 0) {
      $errors[] = 'Пользователь с таким ником уже существует';
    }
    if(R::count('user', "email = ?", array($data['email'])) > 0) {
      $errors[] = 'Пользователь с таким E-mail уже существует';
    }
    if(empty($errors)) {
      $user = R::dispense('user');
      $user->login = $data['login'];
      $user->email = $data['email'];
      $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
      $user->reg_date = date('Y-m-d H:i:s');
      $user->date = time();
      $user->score = 0;
      R::store($user);

      $p = '<p class="p" style="color:green">Вы успешно зарегестрированны</p>';
      $a = '<strong class="avtMoove"><a href="index.php">Авторизоваться</a></strong>';
    } else {
      $p = '<p class="p" style="color:red">'.array_shift($errors).'</p>';
    }
  }
?>

<header id="main-header">
  <div class="header-cont">
    <div class="logotipe">
      <img src="images/label.png" alt="logo">
    </div>
      <input type="checkbox" id="menu-check" onclick>
    <nav role="navigation">
      <label for="menu-check" class="toggle-button" data-open="MENU" data-close="CLOSE"></label>
      <ul class="main-menu">
        <li><a href="index.php">HOME</a></li>
        <li><a href="game.php">GAME</a></li>
        <li><a href="portfolio.php">PORTFOLIO</a></li>
        <li>
          <?php if(isset($_SESSION['logged_user'])) : ?>
            <a href="logout.php">Выйти</a>
          <?php else : ?>
            <a href="signup.php">REGISTRATION</a>
          <?php endif; ?>
        </li>
      </ul>
    </nav>
  </div>
</header>


<div id="container">
  <div class="signup">
    <?php echo $p ?>
    <form action="signup.php" method="POST">
      <p>
        <input type="text" name="login" placeholder=" Login" value="<?php echo @$data['login']; ?>">
      </p>
      <p>
        <input type="text" name="email" placeholder=" E-mail" value="<?php echo @$data['email']; ?>">
      </p>
      <p>
        <input type="text" name="password" placeholder=" Password" value="<?php echo @$data['password']; ?>">
      </p>
      <p>
        <input type="text" name="confirm" placeholder=" Confirm Password">
      </p>
      <p>
        <button tipe="submit" name="do_signup">Sign Up</button>
        <?php echo $a; ?> 
      </p>
    </form>
  </div>
</div>

<?php
  require 'includes/foot.php';
  