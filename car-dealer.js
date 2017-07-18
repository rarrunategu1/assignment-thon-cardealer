var carDealer = {
    sportsCar: [0,'$400.00 a day'],
    suv: [10,'$150.00 a day'],
    sedan: [20,'$125.00 a day'],
    
    availSportsCars: function(numavail, cost) {
            if(this.sportsCar[0] < 1) {
          return("Sports Car Rental not available");
      }
      else {console.log(this.sportsCar[0], 'available', this.sportsCar[1]);}
    }, 
    availsuv: function(numavail,cost) {
         if(this.suv[0] < 1) {
          return("SUV Rental not available");
      }
      else {console.log(this.suv[0], 'available', this.suv[1]);}
    }, 
    availSedan: function(numavail, cost) {
         if(this.sedan[0] < 1) {
          return("Sedan Car Rental not available");
      }
      else {console.log(this.sedan[0], 'available', this.sedan[1]);}
    }, 
};
carDealer.availSportsCars();

