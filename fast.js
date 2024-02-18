
    let totalSit = 40;
    let cardItem = 0;
    let totalPris = 0;
    let arr = [];
  
    const allSit = document.getElementsByClassName('sit');

    for (const sit of allSit) {
        sit.addEventListener("click", function(e) {
            const Sitnumba = e.target.innerText;
            if (arr.length < 4 && !arr.includes(Sitnumba)) { 
                addBgclass(Sitnumba);
                addcolorclass(Sitnumba);
                cardItem++;
                addText('cdit', cardItem);
                totalSit--;
                addText('tital-sit', totalSit);
                totalPris += 500;
                addText('tttprise', totalPris);

                console.log(Sitnumba);
                arr.push(Sitnumba);
                addText('gtotal', totalPris)

                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.innerText = Sitnumba;
                const td2 = document.createElement("td");
                td2.innerText = "Economy";
                const td3 = document.createElement("td");
                td3.innerText = "500";

                const tb = document.getElementById('tbody');
                tb.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                

              



            } else {
                alert("Maximum 4 tickets allowed per passenger or Seat already selected!");
            }
        });
    }

    function addText(id, value) {
        const element = document.getElementById(id);
        element.innerText = value;
    }

    function addBgclass(id) {
        const home = document.getElementById(id);
        home.classList.add("bg-color");
    }
    function addcolorclass(id) {
        const home = document.getElementById(id);
        home.classList.add("text-white");
    }
    function addclass(idName){
        const home=document.getElementById(idName);
        home.classList.add("hidden");
    
    
     }


    console.log(totalPris);
    function adddiscunt(){
     const  copon =document.getElementById('inp').value;
     const  totalprise=parseInt(document.getElementById('tttprise').innerText);
     

     if (copon==="NEW15") {
        const discunt=totalprise*0.15;
       const  GrandTotal=totalPris-discunt;
       addText('gtotal', GrandTotal);
       addclass('hara');

        
     }
    else if (copon==="Couple 20") {
        const discunt=totalprise*0.20;
       const  GrandTotal=totalPris-discunt;
       addText('gtotal', GrandTotal);
       addclass('hara');

        
     }

     else{
        alert("entar valid coppon")
     }
    }



