let name=document.getElementById("name")
 name.innerHTML="kalai"
 // name.innerHTML="..."

 
 let form=document.getElementById("form")
  
 // let post=document.getElementB     
             let heart=document.getElementById("heart")
			  let Comment=document.getElementById("coment")
			   let send=document.getElementById("send")
	   var count=0;
	                       function show(i){
											      // i.preventDefault()
							    // console.log("d")
								
								values()
						   }
						     
		  function values(){
            let heart=document.getElementById("heart")

			 heart.setAttribute("class","e bg-transparent border-0") 
              // console.log("success")
			  heart.style.color="red"
			  heart.style.fontSize="40px"
	            let number=document.getElementById("number")		   
		   
			  if(count==0){
				  number.innerHTML=++count+"like"
			  // console.log("rfrf")
			  }
			  else if(count==1){
				  number.innerHTML=--count+"like"
				  // console.log("asd")
			  }
		   
		  }
		  
		  
		  
		  
		  
		  
		  
		  
		  
		                              function store(e){
										    image()
									  }
									  function image(){
										   let save=document.getElementById("save")
										   let box=document.getElementById("box")
										    box.setAttribute("class","c")
											  // console.log("kalai")
									  }