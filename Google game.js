    var block1=document.getElementById("block1");
    var block2=document.getElementById("block2");
    var block3=document.getElementById("block3");
    var count=0;

    function jump()
    {
       if (block1.classList!="animate") 
            {
            var audio=new Audio('music/Beep1.mpeg');
            audio.play();
            block1.classList.add("animate");
            
           count++;
            }
            setTimeout(function(){
           
    	    block1.classList.remove("animate");

            
            },500);

                	
    }
    var checkDead=setInterval(function(){
    var block1_Top=parseInt(window.getComputedStyle(block1).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    
    if (blockLeft<95&& blockLeft>40 && block1_Top>=300) {
        // var audio=new Audio('music/Beep2.mpeg');
        // audio.play();

        block2.style.animation="none";
        
        block2.style.display="none";


        alert("Game Over ! Your score is: "+count+" Points.");
        

        location.reload(); 

        
    }
},10);

    