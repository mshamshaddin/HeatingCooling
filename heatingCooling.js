let actualTemp = 55;
let desiredTemp = 75;

// Run A/c , Run heat, Standby

if(actualTemp < desiredTemp){
    console.log("Run heat");
}else if(desiredTemp > actualTemp){
    console.log("Run A/C");
}else{
    console.log("Standby");
}



