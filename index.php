<!DOCTYPE html>
<html>
<head>
<title>Gagan Garima sociey</title>
<link rel="stylesheet" href="style.css">
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<script type="text/javascript" src="javascript.php"></script>
</head>
<body>


<?php include('includes/header.php');?>

<!--- /singh up forme ---->
<div style="text-align:center; width:100%;padding:10px;height:430px; background-repeat: no-repeat; background-image:url(1.jpg);">

<form action="/action_page.php">
  <div class="container">

   
    <input type="text" placeholder="Enter Email" name="email" required>

    
    <input type="password" placeholder="Enter Password" name="psw" required>

    
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
</form>

</div>
<!--- /Clear floats after the columns ---->
<div class="row">
  <div class="column"> 
	<img src="images\c1.jpg"style="float:left;border-radius:20px;width:100%;padding: 10px;height: 500px">
  </div>
  <div class="column">
    <h2>This is title of the news</h2>
      <p>Residents should take care while playing and should not damage the Society Property.

       <br>Accessories like Table Tennis Rackets & Balls, Carom Striker etc. shall be brought by the resident himself.

       <br>by Jessica Clark, 26/08/2016</p>
    </div>
</div>

<!--- /2 div box---->
<div class="row">
  <div class="column"> 
 <h2>About us</h2>
    <p>Gagan Garima is a Co-operative Housing Society and we are a part of this society based on principles of shared responsibility, mutual trust, and collective decision-making and democratic values. Our society operates like a trust on principles of no profit and no loss. We expect all members to show a greater amount of co-operation amongst ourselves in all matters of our routine. We should discipline ourselves with optimized use of various valued items within the society.</p>  </div>
  <div class="column">
  <?php include('includes/slidshow.php');?></div>
</div>


<!--- /map---->
<div id="map"></div>

<!--- /div part 1---->

<div class="row2">
  <div class="col4" style="background-color:#bf1b1bss;">
  <img src="images (1).jpg" alt="Avatar" class="image" style="width:100%">
    <h2>GAGAN GARIMA SOCIETY</h2>
    <p>Here you can use rows and columns here to organize your footer content.</p>
  </div>
  <div class="col4" style="background-color:;">
  <img src="images (1).jpg" alt="Avatar" class="image" style="width:100%">
    <h2>SERVICES</h2>
    <p>Some text..</p>
  </div>
  <div class="col4" style="background-color:;">
  <img src="images (1).jpg" alt="Avatar" class="image" style="width:100%">
    <h2>USEFUL LINKS</h2>
    <p>Some text..</p>
  </div>
  <div class="col4" style="background-color:;">
  <img src="images (1).jpg" alt="Avatar" class="image" style="width:100%">
    <h2>CONTACT</h2>
    <p>Pune Maharashtra 411020,India <br> Email:- gagangarimachs@gmail.com</p>
  </div>  
</div>

<!--- /div part 1---->
<div class="row2"style="padding: 15px;margin: 15px;">
  <div class="col1">
    <div class="cont">
  <img src="images (1).jpg" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">SOCIETY COMPLIANCE MANAGEMENT</div>
  </div>
</div>
  </div>
  <div class="col1">
    <div class="cont">
  <img src="images.jpg" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">PROPERTY MANAGEMENT</div>
  </div>
</div>
  </div>
  <div class="col1">
    <div class="cont">
  <img src="imagesociety.jpg" alt="Avatar" class="image" style="width:100%">
  <div class="middle">
    <div class="text">BEHAVIOR</div>
  </div>
</div>
  </div>
</div>
<?php include('includes/footer.php');?>

</body>
</html>
