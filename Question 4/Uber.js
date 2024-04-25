//write a class to calculate uber price.


let uber = {
     set kiloMeter(km){    
        this.price = `${km} km = Rs.${km * 50}` ;
     },
     get kiloMeter(){
        return this.price;
     }
    }
   
    uber.kiloMeter = 2;
   
    console.log(` ${uber.kiloMeter}`)