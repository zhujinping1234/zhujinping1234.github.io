(function(){


    function reduce(array,combine,start){
        var current= start;//6
        for(var element of array){
            current=combine(current,element);
        }
       return current;
     }
       var max=function(date){
         return reduce(
             date,
             function(a,b){
                 return a>b.credit?a:b.credit;
             }
        ,0 )
       }
   
     window.my={max:min};
})()