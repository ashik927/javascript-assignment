function feetToMile(n){
    var feet=100000;
    var mile=feet*0.000189394;
    return mile;
}

mileResult=feetToMile(15);
console.log(mileResult);

function woodCalculator(chair,table,bed){
        chair=chair*1;
        table=table*3;
        bed=bed*5;
        totalWood=chair+table+bed;
        return totalWood;
}
totalResult=woodCalculator(3,4,5);
console.log(totalResult);

function brickCalculator(n){
    for(i=1;i<=n;i++){
        if(i<=1 && i<=10){
            var count3=i;
        }
        else if(i<=11 && i<=20){
            var count1=i;
        }
        else{
            var count2=i;
        }
    }
    var count3=count3*15*1000;
    var count1=count1*12*1000;
    var count2=count2*10*1000;
    var sum=count3+count1+count2;
    return sum;     
}

brickResult=brickCalculator(12);
console.log(brickResult);


function tinyFriend(name){
    smallest=name[0].length;
    for(i=0;i<name.length;i++){
        element=name[i].length;
       if(element<smallest){
           smallest=element;
       }
       if(smallest==name[i].length){
        value=name[i];
    }
    }
    
    return value;
}
tinyResult=tinyFriend(["aaaa","aaaaa","aaaaaa","aa","aaa"]);
console.log(tinyResult);