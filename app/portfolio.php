<?php
  require 'includes/db.php';
  require 'includes/head.php';
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
        <li><a href="game.php">PLAY</a></li>
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

<div id="container">
  <p></p>
  <div class="works">
    <div class="stuf">
      <p><a href="validation.php">Вёрстка, валидация формы.</a></p>
      <a class="validation" href="validation.php"><img src="images/validation.jpg" alt="" title="Перейти на страницу для просмотра"></a>
    </div>
    <div class="stuf">
      <p><a href="dryfog.php">Слайдер.</a></p>
      <a class="landing" href="dryfog.php"><img  src="images/dryfog.jpg" alt="" title="Перейти на страницу для просмотра"></a>
    </div>
    <div class="stuf">
      <p><a href="paint.php">Пузырьковая рисовалка.</a></p>
      <a class="paint" href="paint.php"><img src="images/paint.jpg" alt="" title="Перейти на страницу для просмотра"></a>
    </div>
    <div class="stuf">
      <p><a href="maket.php">Вёрстка по PSD шаблону.</a></p>
      <a class="maket" href="maket.php"><img src="images/maket.jpg" alt="" title="Перейти на страницу для просмотра"></a>
    </div>
    <div class="stuf">
      <p><a href="timer.php">Таймер.</a></p>
      <a class="timer" href="timer.php"><img src="images/timer.jpg" alt="" title="Перейти на страницу для просмотра"></a>
    </div>
    <div class="stuf">
      <p><a href="">Coming soon...</a></p>
      <div id="comingSoon">
      </div>
    </div>
  </div>
</div>

<?php
  require 'includes/foot.php';