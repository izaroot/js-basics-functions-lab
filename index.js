// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if (street > 42){
        return street - 42;
    }
    else if (street < 42){
        return 42 - street;
    }
}
function distanceFromHqInFeet(street){
    distanceFromHqInBlocks(street);
    return distanceFromHqInBlocks(street) * 264;
}
function distanceTravelledInFeet(start, dest){
    if (start < dest){
        return (dest - start) * 264;
    }
    else if (start > dest){
        return (start - dest) * 264;
    }
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    return feet < 400 ? 0
        :feet < 2000 ? (feet - 400) * .02
        :feet < 2500 ? 25
        : `cannot travel that far`
}