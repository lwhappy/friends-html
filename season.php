<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">

    <title>老友记台词练习-胖番茄网</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="Expires" content="-1">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Pragma" content="no-cache">
    <script>
        var t = "20171115";
        document.write('<link href="./css/common.css?v='+t+'" rel="stylesheet">');
    </script>
    <style>
      h3{
        font-size:18px;
        line-height:30px;
        color:#333;
        font-weight:800;
      }
      a{
        color:#333;
      }
      .index{
        padding:10px;
      }
      ul li{
        margin:10px 20px;
        list-style:none;
        float:left;
        font-size:16px;
      }
    </style>
  </head>
  <?php
    $season1 = 5;
  ?>
  <body>
    <div class="index">
      <h3>第一季</h3>
      <ul>
        <?php 
          for ($i=1; $i<=$season1; $i++)
          {
              echo '<li><a href="episode.php?season=1&episode='.$i.'">第'.$i.'集</a></li>';
          }
        ?>
        
      </ul>
    </div>
    <script src="./js/jquery-3.1.1.min.js"></script>
    <script>
        //document.write('<script type="text/javascript" src="./js/global.js?v='+t+'" ></scr' + 'ipt>');
    </script>
  </body>
</html>