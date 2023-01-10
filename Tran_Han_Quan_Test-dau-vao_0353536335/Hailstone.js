function HailStone (number) {
    
    let sequence = [];
    sequence.push(number)
    do{
        
        if(typeof number == "number" ){
            
            if (number%2==0) {
                number = number/2;
                sequence.push(number)
                // console.log(number);
                // console.log(sequence);
            }
            else {
                number = number * 3 + 1;
                sequence.push(number);
                
            }
        }
        else{
            console.log("Nhap lai number");
        }
        
        
    }while(number != 1)
    console.log(sequence);

} 
HailStone(7)

