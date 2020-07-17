function feetToMile(n){
    var feet=n;
    var mile=feet*0.000189394;
    return mile;
}

mileResult=feetToMile(1000);
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
    
        if(n>=1 && n<=10){
            var count3=n;
            console.log(count3*15*1000);
        }
        else if(n>=11 && n<=20){
            var count1=n-10;
            console.log(count1*12*1000+150000);
        }
        else if(n>20){
            var count2=n-20;
            console.log(count2*10*1000+270000);
        }
 
}
brickResult=brickCalculator(21);



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