		
		let myLeads=[]
		const inputEl=document.getElementById("inpt")
		const btnEl=document.getElementById("btn")
		const btn1El=document.getElementById("btn1")
		const savetab=document.getElementById("savetab")
    const abc=JSON.parse(localStorage.getItem("myLeads"))

			      if(abc){
								   	myLeads=abc
								   	output(myLeads)
			   }


    btnEl.addEventListener("click",fn)
        function fn(){
				myLeads.push(inputEl.value)
				inputEl.value=""
				localStorage.setItem("myLeads",JSON.stringify(myLeads))
				output(myLeads)
        }

    function output(arr){
      	  let str=""
      	  for(let i=0;i<arr.length;i++){
      		str+=`
      		<li>
      		   <a href="${arr[i]}", target="_blank">
      		         ${arr[i]} 
      		   </a>
      		</li>`
        	}
          document.getElementById("demo").innerHTML=str
        }

    btn1El.addEventListener("dblclick",delete1)
          function delete1(){
        	localStorage.clear()
        	myLeads=[]
        	output(myLeads)
        }


     savetab.addEventListener("click", function() {
        	  chrome.tabs.query({active: true,currentWindow: true},function(tabs){
        		myLeads.push(tabs[0].url)
        		localStorage.setItem("myLeads",JSON.stringify(myLeads))
        		output(myLeads)
        	})
        	
        })


     
       


				





        	
        

