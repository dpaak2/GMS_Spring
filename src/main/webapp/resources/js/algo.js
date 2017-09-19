

var series={
		 arithmetic : (s,e) =>{
		      var sum = 0;
		      var start = s * 1;
		      var end = e * 1;
		      for (var i = start; i <= end; i++) {
		         sum += i;
		      }
		      return sum;
		   },
		   switchSeries : ()=>{
		      var sum = 0;
		      var i=0;
		      var sw = 0;
		      do{
		         i++;
		         if(sw==0){
		            sum+=i;
		            sw=1;
		         }else{
		            sum-=i;
		            sw=0;
		         }
		      }while(i<100);
		      return sum;   
		   },
		   
		   diffSeries :x =>{
			   var i,j,k;
			   i=0;
			   j=0;
			   k=0;
			   do{
				   i++;
				   j+=i;
				   k+=j;
			   }while(i<x*1);
			   return k;
		   },
		   
		   factorial : x=>{
			   var i,k,j;
			   i= 1;
			   k=1;
			   j=1;
			   do{
				   i++;
				   j*=i;
				   k+=j;
			   }while(i<x*1);
			   return k;
		   },
		   
		   fibonacci :x=>{
			   alert('확인 --->'+x);
			   var hap,cnt ,c ;
			   var a=1; var b =1;
			   hap=2;
			   cnt=2;
			   while(true){
				   c= a+b;
				   hap +=c;
				   cnt ++;
				   if(cnt <x*1){
					   a=b;
					   b=c;
				   }else{
					 return hap;
				   }
			   }
		 }
};	

