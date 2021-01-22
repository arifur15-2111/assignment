
function kilometerToMeter(kilometer){
    if(kilometer>=0){
        var meter = kilometer*1000;
        return meter;
    }
    else{
        return "Please Enter Positeve Number";
    }
}

function budgetCalculator(clock, phone, laptop){
    var budget;
    if(clock >= 0 && phone >= 0 && laptop >= 0){
        budget = clock*50+phone*100+laptop*500;
        return budget;
    }
    else{
        return "Please Enter No. Of clock, phone and laptop that are positive integer.";
    }
}

function hotelCost(days){
    var cost;
    if(days>=1){
        if(days>=1 && days<=10){
            cost=100*days;
            return cost;
        }
        else if(days>=11 && days<=20){
            days=days-10;
            cost = 1000+days*80;
            return cost;
        }
        else if(days>=21){
            days=days-20;
            cost=1800+days*50;
            return cost;
        }
    }
    else{
        return "Please Enter Positive Integer";
    }
}

function megaFriend(names) {
    var bigName = "";
    for (var i = 0; i < names.length; i++) {
        if (bigName.length < names[i].length) {
          bigName = names[i];
        }
      }
      return bigName;
  }