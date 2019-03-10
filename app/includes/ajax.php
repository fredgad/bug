<?php
    //Create Connection
    $conn = mysqli_connect('127.0.0.1', 'root', '', 'ladybug');
    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if(isset($_POST['val'])) {

        $val = mysqli_real_escape_string($conn, $_POST['val']);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        
        $query = "UPDATE user SET score = GREATEST(score, '$val') WHERE id = $id";

        if(mysqli_query($conn, $query)) {
            echo '<div style="color:green; z-index:9999999"></div>Score added...</div>';
        } else {
            echo '<div style="color:red; z-index:9999999">ERROR ' . mysqli_error($conn) . '</div>Score added...</div>';
        }
    };


    $query = 'SELECT id,login, score FROM user';

    //Get Result
    $result = mysqli_query($conn, $query);

    //Fetch Data
    $user = mysqli_fetch_all($result, MYSQLI_ASSOC);

    echo json_encode($user);