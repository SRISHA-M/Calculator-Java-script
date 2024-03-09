
    
    function a1(){
        document.getElementById('a').value+=1
    }
    function a2(){
        document.getElementById('a').value+=2
    }
    function a3(){
        document.getElementById('a').value+=3
    }
    function a4(){
        document.getElementById('a').value+=4
    }
    function a5(){
        document.getElementById('a').value+=5
    }
    function a6(){
        document.getElementById('a').value+=6
    }
    function a7(){
        document.getElementById('a').value+=7
    }
    function a8(){
        document.getElementById('a').value+=8
    }
    function a9(){
        document.getElementById('a').value+=9
    }
    function aadd(){
        document.getElementById('a').value+="+"
    }
    function ab(){
        a=document.getElementById('a').value
        document.getElementById('a').value=eval(a)
    }
    function asup(){
        document.getElementById('a').value+="-"
    }
    function amul(){
        document.getElementById('a').value+="*"
    }
    function adiv(){
        document.getElementById('a').value+="/"
    }
    function amod(){
        document.getElementById('a').value+="%"
    }
    function aeq(){
        a=document.getElementById('a').value
        document.getElementById('a').value=eval(a)
    }
    function adot(){
        document.getElementById('a').value+="."
    } 
    function aclr(){
       document.getElementById('a').value=""
    }
    function aCAN(){
       var can= document.getElementById('a').value
       console.log(can.length)
       can=can.slice(0,can.length-1)
       var can= document.getElementById('a').value=can

    }
