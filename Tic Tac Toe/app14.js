let turn=0;
let vis=new Array(9);
for(let i=0;i<9;i++){
    vis[i]=0;
}
function change(cid){
    let x=toString(cid);
    let ele=document.getElementById(cid);
    let index=parseInt(cid[1]);
    index-=1;
    if(vis[index]==0){
        vis[index]=1;
        if(turn%2==0){
            ele.src="x.jpg";
        }
        else{
            ele.src="0.png";
        }
        turn++;
        setTimeout(function(){
            let pos=new Array(9);
        pos[0]=document.getElementById("i1").src;
        pos[1]=document.getElementById("i2").src;
        pos[2]=document.getElementById("i3").src;
        pos[3]=document.getElementById("i4").src;
        pos[4]=document.getElementById("i5").src;
        pos[5]=document.getElementById("i6").src;
        pos[6]=document.getElementById("i7").src;
        pos[7]=document.getElementById("i8").src;
        pos[8]=document.getElementById("i9").src;
        for(let i=0;i<9;i+=3){
            let sum=vis[i]+vis[i+1]+vis[i+2];
            if(sum==3&&pos[i]==pos[i+1]&&pos[i+2]==pos[i]){
                turn=0;
                if(pos[i]=="http://127.0.0.1:5500/x.jpg"){
                    alert("player x won");
                }
                else{
                    alert("player 0 won");
                }
                for(let i=0;i<9;i++){
                    vis[i]=0;
                }
                document.getElementById("i1").src="initial.jpg";
                document.getElementById("i2").src="initial.jpg";
                document.getElementById("i3").src="initial.jpg";
                document.getElementById("i4").src="initial.jpg";
                document.getElementById("i5").src="initial.jpg";
                document.getElementById("i6").src="initial.jpg";
                document.getElementById("i7").src="initial.jpg";
                document.getElementById("i8").src="initial.jpg";
                document.getElementById("i9").src="initial.jpg";
            }
        }
        for(let i=0;i<3;i++){
            let sum=vis[i]+vis[i+3]+vis[i+6];
            if(sum==3&&pos[i]==pos[i+3]&&pos[i+6]==pos[i]){
                turn=0;
                if(pos[i]=="http://127.0.0.1:5500/x.jpg"){
                    alert("player x won");
                }
                else{
                    alert("player 0 won");
                }
                for(let i=0;i<9;i++){
                    vis[i]=0;
                }
                document.getElementById("i1").src="initial.jpg";
                document.getElementById("i2").src="initial.jpg";
                document.getElementById("i3").src="initial.jpg";
                document.getElementById("i4").src="initial.jpg";
                document.getElementById("i5").src="initial.jpg";
                document.getElementById("i6").src="initial.jpg";
                document.getElementById("i7").src="initial.jpg";
                document.getElementById("i8").src="initial.jpg";
                document.getElementById("i9").src="initial.jpg";
            }
        }
        let sum=vis[0]+vis[4]+vis[8];
        if(sum==3&&pos[0]==pos[4]&&pos[8]==pos[0]){
            turn=0;
            if(pos[0]=="http://127.0.0.1:5500/x.jpg"){
                alert("player x won");
            }
            else{
                alert("player 0 won");
                }
            for(let i=0;i<9;i++){
                vis[i]=0;
            }
            document.getElementById("i1").src="initial.jpg";
            document.getElementById("i2").src="initial.jpg";
            document.getElementById("i3").src="initial.jpg";
            document.getElementById("i4").src="initial.jpg";
            document.getElementById("i5").src="initial.jpg";
            document.getElementById("i6").src="initial.jpg";
            document.getElementById("i7").src="initial.jpg";
            document.getElementById("i8").src="initial.jpg";
            document.getElementById("i9").src="initial.jpg";
        }
        sum=vis[2]+vis[4]+vis[6];
        if(sum==3&&pos[2]==pos[4]&&pos[6]==pos[2]){
            turn=0;
            if(pos[2]=="http://127.0.0.1:5500/x.jpg"){
                alert("player x won");
            }
            else{
                alert("player 0 won");
            }
            for(let i=0;i<9;i++){
                vis[i]=0;
            }
            document.getElementById("i1").src="initial.jpg";
            document.getElementById("i2").src="initial.jpg";
            document.getElementById("i3").src="initial.jpg";
            document.getElementById("i4").src="initial.jpg";
            document.getElementById("i5").src="initial.jpg";
            document.getElementById("i6").src="initial.jpg";
            document.getElementById("i7").src="initial.jpg";
            document.getElementById("i8").src="initial.jpg";
            document.getElementById("i9").src="initial.jpg";
        }  
        sum=0;
        for(let i=0;i<9;i++){
            sum+=vis[i];
        }  
        if(sum==9){
            turn=0;
            alert("game drawn");
            for(let i=0;i<9;i++){
                vis[i]=0;
            }
            document.getElementById("i1").src="initial.jpg";
            document.getElementById("i2").src="initial.jpg";
            document.getElementById("i3").src="initial.jpg";
            document.getElementById("i4").src="initial.jpg";
            document.getElementById("i5").src="initial.jpg";
            document.getElementById("i6").src="initial.jpg";
            document.getElementById("i7").src="initial.jpg";
            document.getElementById("i8").src="initial.jpg";
            document.getElementById("i9").src="initial.jpg";
        }
        console.log(vis);
       }, 500);
    }
}

