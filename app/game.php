<?php
  require 'includes/db.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Ladybird Game</title>
  
  <script src="js/game.js"></script>
  <link rel="stylesheet" href="css/game.css">
</head>
<body>

  <div id="cont"></div>  
  <article id="start">🌚START!🌝</article>
  <article id="loose">
    <strong>🌑LOOSE!🌕</strong>
    <p id="score_time">Time: &#8734;</p>
    <p id="score_moon">Moons: 0</p>
    <p id="score_speed">Max speed: 30</p>
    <p id="best_speed">Best speed today: 30</p>
  </article>
  <article id="ladybug">🐞</article>
  <div id="screen_speed">Speed: 30 t.k.p.s.</div>
  <div id="record">0</div> 

  <div id="handle">
    <div class="menu_button">Menu</div>
    <div id="left" class="left">◀</div>
    <div id="right" class="right">▶</div>
    <div id="top" class="top">▲</div>
    <div id="bottom" class="bottom">▼</div>
    <article id="table">
      <?php if(isset($_SESSION['logged_user'])) : ?>
        <article class="neek">Игрок: 
          <div id="hiddenId" style="display:none">
            <?php echo $_SESSION['logged_user']->id; ?>
          </div>
          <strong class=neekName> 
            <?php echo $_SESSION['logged_user']->login; ?>
          </strong>
        </article>
        <p class="own_record">Твой рекорд: 
          <strong style="font-size:18px" id="yRec"> 
            <!-- <?php //echo $_SESSION['logged_user']->score; ?> -->
          </strong>
        </p>
        <p class="common_record">Рекорд игры: 
          <strong style="font-size:18px" id="rec"> 
          </strong>
        </p>
        <p class="recorder">Рекордсмен: 
          <strong style="font-size:18px" id="recName"> 
          </strong>
        </p>
      <?php else : ?> 
        <p class="neek">Гость</p>
        <p id="gest_record">Лучший результат сегодня: </p>
      <?php endif; ?>    
    </article>
  </div>       
  
  <div id="menu_table">
    <div class="resume">Вернуться в игру</div>
    <div class="negative_speed">Негативная скорость</div>
    <div class="static_color">Статический фон</div>
    <div class="color_button">Поменять цвет фона</div>
    <div class="go_home">Выйти из игры</div>
  </div>

</body>
</html>