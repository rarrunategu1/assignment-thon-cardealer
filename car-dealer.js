var carDealer = {
    sportsCar: [0,'$400.00 a day'],
    suv: [10,'$150.00 a day'],
    sedan: [20,'$125.00 a day'],
    
    availSportsCars: function(numavail, cost) {
      console.log(this.sportsCar[0], 'available', this.sportsCar[1]);
      if(this.sportsCar[0] > 1) {
          this.sportsCar[0] = "Rental not available";
      }
      else {numavail = this.sportsCar[0];}
    }, 
    availsuv: function(numavail,cost) {
        console.log(this.suv[0], 'available', this.suv[1]);
    },
    availSedan: function(numavail, cost) {
        console.log(this.sedan[0], 'available', this.sedan[1]);
    }
};
carDealer.availSportsCars();

