<?php
  require 'includes/db.php';
  require 'includes/head.php';


  $data = $_POST;
  $h3 = '<h3>Woul\'d you like to feel that how to be ennormous monster?</h3>';  
  
  if(isset($data['do_login'])) {
    $errors = array();
    $user = R::findOne('user', 'login = ?', array($data['login']));

    if($user) {
      //Login exist
      if(password_verify($data['password'], $user->password)) {
        $_SESSION['logged_user'] = $user;
        //The true password
      } else {
        $errors[] = 'Неверно указан пароль';
      }
    } else {
      $errors[] = 'Неверно указан логин';
    }
    if(!empty($errors)) {   
      $h3 = '<h3 style="color: #ff2204">'.array_shift($errors).'</h3>';
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
        <?php if(isset($_SESSION['logged_user'])) : ?>
          <li id="exit__a">
            <a href="logout.php" style="color:yellow" 
            onclick="return confirm('Do you want to leave accaunt ' + document.querySelector('#sessionName').innerHTML + '?',)">
            ВЫЙТИ</a>
          </li>
            <p id="sessionName" style="display:none"><?php echo $_SESSION['logged_user']->login; ?></p>
          <?php else : ?>
          <li>
            <a href="signup.php">REGISTRATION</a>
          </li>
          <?php endif; ?>
      </ul>
    </nav>
  </div>
</header>

<main id="main"> 
  <article id="first-screen">
    <div id="up">
      <div class="skewBox">
        <div class="backGround"></div>
        <div class="bittle">
          <img src="images/lb_up.png" alt="LADY BUG ITSELF">
        </div>
        <h1 id="ladyUp">&nbsp;&nbsp;&nbsp;&nbsp;LADYBUG <br/> MOON-EATER</h1>
          <p id="main-text">
          The Ladybug is gigantic and always hungry! It doesn't know pity, no one can stop it! The most terrible creature in the universe!
          </p>
      </div>
    </div>
    <div id="down">
      <div class="yellow-bittle">
        <img src="images/lb_down.png" alt="YELLOW LADY BUG ITSELF">
      </div>
      <div class="moon">
        <img src="images/moon.png" alt="Bited moon">
      </div>
      <h1 id="ladyDown">&nbsp;&nbsp;&nbsp;&nbsp;LADYBUG <br/> MOON-EATER</h1>
    </div>

<?php if(isset($_SESSION['logged_user'])) : ?>
  <div class="login">
    <h3>Greetings <?php echo $_SESSION['logged_user']->login; ?>, how are you doing? </h3>
    <div id="tipingWrapper">
      <div id="tipingCont">
        <p class="tipingText1">Well, you are here! And now you have an</p>
        <p class="tipingText2">incredible chance to learn how to be a real</p>
        <p class="tipingText3">monster. Get alvays ready for the unusual,</p>
        <p class="tipingText4">be unusual and reach speed of light. GLHF! </p>   
      </div>
    </div>
  </div>
<?php else : ?>
    <div class="login">
      <?php echo $h3 ?>
      <form action="index.php" method="POST">
        <p>
          <input placeholder=" Ubiyza666" type="text" name="login" value="<?php echo @$data['login']; ?>">
        </p>
        <p>
          <input placeholder=" 123456" type="password" name="password">
        </p>
        <p>
          <button id="enter" tipe="submit" name="do_login">Войти</button>
          <strong><a href="signup.php">Зарегестрироваться</a></strong>
        </p>  
      </form>    
    </div>
<?php endif; ?>

  </article>
</main>

<?php
  require 'includes/foot.php';
