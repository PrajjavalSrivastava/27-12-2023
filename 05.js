function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        if(year % 100 === 0 ? year % 400 == 0 : year % 4 === 0){
            return "Leap year.";
        } else{
            return "Not leap year.";
        }
    
        
    
    /**************Don't change the code below****************/    
    
    }