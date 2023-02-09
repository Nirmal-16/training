var myarr="i am nirmal";
console.log(myarr);
var newarr=myarr.split(" ");
for(var i=0;i<newarr.length;i++){
    newarr[i]=newarr[i].split("");
    newarr[i]=newarr[i].reverse();
    newarr[i]=newarr[i].join("");
}
console.log(newarr.join(" "));