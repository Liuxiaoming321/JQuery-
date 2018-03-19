var    bes=$('.boerd  .page').height();
var index=0;
var len=$('.boerd  .page').length;


function     demo(data,dtesk){
		
		index++;
		console.log(index);
		$('.eter li').stop(1000).removeClass('atived');
			
    			
    			

    	// console.log(index);
    	// console.log(index);
    	if(index>=len){
    		index=len-1;

    	}
    	$('.eter li').delay(1000).eq(index).addClass('atived');
       $('.boerd ').stop(true).animate({
                    'margin-top': -bes*index
                },1000,function(){

                });

       $('.orange').text(index+1);
     
       
	}

	function   desok(){
		$('.eter li').delay(1000).removeClass('atived');
		  
	    	index--;
	    	if(index<0){
	    			index=0;
	    	}
	    	$('.eter li').delay(1000).eq(index).addClass('atived');
	    	 $('.boerd ').stop(true).animate({
	                    'margin-top':-bes* index 
	                },1000);
	    	      $('.orange').text(index+1);
	    	      if(index==2){
	    	      	$('.boerd  .page:eq(2)').animate({'margin-left':0},1000)
	    	      }
	}
	$('.eter li:eq(2)').click(function(){
		 $('.boerd ').stop(true).animate({
                    'margin-top': -1200
                },1000,function(){
                	  $('.boerd .page:eq(2)').animate({'margin-left':-600},1000)
                });
		
	})
