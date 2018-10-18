<?php
header("Content-Type:application/json");

if(!empty($_GET['name1']) && !empty($_GET['name2']))
{
	$name1=$_GET['name1'];
	//$price = get_price($name);
	$name2=$_GET['name2'];
	
		response(200,"Product Found",$name1,$name2);
	
	
}
else
{
	response(400,"Invalid Request",NULL);
}

function response($status,$status_message,$name1,$name2)
{
	header("HTTP/1.1 ".$status);
	
	$response['status']=$status;
	$response['status_message']=$status_message;
	$response['data']=getFlames($name1,$name2);
    
	//$response['data']=$data;
	$json_response = json_encode($response);
	echo $json_response;
}
function getFlames($name1,$name2)
{
    
    
   $flames = array(
        "F" => "Friend",
        "L" => "Lover",
        "A" => "Affection",
        "M" => "Marriage",
        "E" => "Enemy",
        "S" => "Sister"
    );
 
    
 
            $name1 = strtoupper(str_replace(" ", "", $name1));
 
            $name2 = strtoupper(str_replace(" ", "", $name2));
 
            if($name1 == $name2)
 
                $data="Names are same!";
 
            else{
 
                for($i = 0; $i < strlen($name1); $i++){
 
                    if(isset($name1[$i]))
 
                        for($j = 0; $j < strlen($name1); $j++)
 
                            if(isset($name2[$j]))
 
                                if($name1[$i] == $name2[$j]){
 
                                     $name1[$i] = $name2[$j] = "/";
 
                                     break;
 
                                }
 
                }
 
                $name1 = str_replace("/", "", $name1);
 
                $name2 = str_replace("/", "", $name2);
 
                $count = strlen($name1) + strlen($name2);
 
                $flame = "FLAMES";
 
                //echo "<div>";
 
                while(strlen($flame)!=1){
 
                    $flame[$count%strlen($flame)] = "/";
 
                    $flame = str_replace("/", "", $flame);
 
                }
 
                $data=$flames[$flame];
 
            }
 
    
   return $data;
} 
    
   // echo getFlames("vinit","shreya");
    
    ?>