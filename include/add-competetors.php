<?php
include 'db-connection.php';


if (isset($_POST['submit'])){

    $category=$_POST['category'];
    $uni_school=$_POST['uni_school'];
    $team_name=$_POST['team_name'];
	
	
    $l_name=$_POST['l_name'];
    $l_nic=$_POST['l_nic'];
    $l_email=$_POST['l_email'];
    $l_contact=$_POST['l_contact'];

    $m1_name=$_POST['m1_name'];
    $m1_nic=$_POST['m1_nic'];
    $m1_email=$_POST['m1_email'];

    $m2_name=$_POST['m2_name'];
    $m2_nic=$_POST['m2_nic'];
    $m2_email=$_POST['m2_email'];

    $m3_name=$_POST['m3_name'];
    $m3_nic=$_POST['m3_nic'];
    $m3_email=$_POST['m3_email'];

    $m4_name=$_POST['m4_name'];
    $m4_nic=$_POST['m4_nic'];
    $m4_email=$_POST['m4_email'];
	
    try {
        $stm = $conn->prepare("INSERT INTO Registration (school_uni,team_name,school_uni_name,
                                            l_name, l_nic ,l_email ,l_contact,
                                            m1_name,m1_nic,m1_email,
                                            m2_name,m2_nic,m2_email,
                                            m3_name,m3_nic,m3_email,
                                            m4_name,m4_nic,m4_email)
                                        VALUES (:school_uni,:team_name,:school_uni_name,
                                            :l_name, :l_nic,:l_email,:l_contact,
                                            :m1_name,:m1_nic,:m1_email,
                                            :m2_name,:m2_nic,:m2_email,
                                            :m3_name,:m3_nic,:m3_email,
                                            :m4_name,:m4_nic,:m4_email)");
        // use exec() because no results are returned
        $stm->bindParam(':school_uni',$category);
        $stm->bindParam(':team_name',$team_name);
		$stm->bindParam(':school_uni_name',$uni_school);

		
		$test='iresh';
        $stm->bindParam(':l_name',$l_name);
        $stm->bindParam(':l_nic',$test);
        $stm->bindParam(':l_email',$l_email);
        $stm->bindParam(':l_contact',$l_contact);

        $stm->bindParam(':m1_name',$m1_name);
        $stm->bindParam(':m1_nic',$m1_nic);
        $stm->bindParam(':m1_email',$m1_email);

        $stm->bindParam(':m2_name',$m2_name);
        $stm->bindParam(':m2_nic',$m2_nic);
        $stm->bindParam(':m2_email',$m2_email);

        $stm->bindParam(':m3_name',$m3_name);
        $stm->bindParam(':m3_nic',$m3_nic);
        $stm->bindParam(':m3_email',$m3_email);

        $stm->bindParam(':m4_name',$m4_name);
        $stm->bindParam(':m4_nic',$m4_nic);
        $stm->bindParam(':m4_email',$m4_email);

        $stm->execute();
        //echo "New record created successfully";
//        echo '<script>setTimeout(function(){ alert("Hello"); }, 3000);</script>';
//        sleep(3);
        header("location: ../reg-success.html?operation=success");
    }
    catch(PDOException $e)
    {
        echo  "<br>" . $e->getMessage();
    }
    $conn = null;
}
// Follow on Github - Iresh Rajitha Kalhara

?>
