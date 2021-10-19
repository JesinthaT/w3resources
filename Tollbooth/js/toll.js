// var vehicle1 = {
//     id: "TN0021",
//     type: "Bus"
// }
// var vehicle2 = {
//     id: "TN0022",
//     type: "Car"
// }
// var vehicle3 = {

// }
var ct = new Date().getTime();
var TollBooths = {
    "T121": {
        id: "T121",
        pairBooth: "T122",
        passingVehicles: {
            "TN0021": { time: ct - (26 * 1000 * 60 * 60) },
            "TN0022": { time: ct - (40 * 1000 * 60 * 60) },
        },
        amount: {
            car: 50,
            bus: 80,
            lorry: 100,
            minilorry: 40
        }

    },
    "T122": {
        id: "T122",
        pairBooth: "T121",
        passingVehicles: {
            "TN0021": { time: ct - (28 * 1000 * 60 * 60) },
            "TN0022": { time: ct - (14 * 1000 * 60 * 60) },
            "TN0023": { time: ct - (12 * 1000 * 60 * 60) }
        },
        amount: {
            car: 50,
            bus: 80,
            lorry: 100,
            minilorry: 40
        }
    }
}

function Billing(TollBooth, id, vtype) {
    var vid = id;
    var veh_type = vtype;
    if (TollBooths[TollBooth].passingVehicles[vid] != null) {
        var currentTime = new Date().getTime();
        var billingTime = TollBooths[TollBooth].passingVehicles[id].time;
        var ch = Math.abs(Math.round((currentTime - billingTime) / (1000 * 60 * 60)));
        if (ch < 24) {
            return 0;
        }
        else {
            // TollBooths[TollBooth].passingVehicles[vid].time=currentTime;
            return TollBooths[TollBooth].amount[veh_type];
        }
    }
    else {
        // return 50;
        var pairbooth = TollBooths[TollBooth].pairBooth;
        if (TollBooths[pairbooth].passingVehicles[vid] != null) {
            //  billingTime = TollBooths[TollBooth].passingVehicles[id].time;
            var currentTime = new Date().getTime();
            var billingTime1 = TollBooths[pairbooth].passingVehicles[id].time;
            var ch = Math.abs(Math.round((currentTime - billingTime1) / (1000 * 60 * 60)));
            if (ch < 24) {

                return 30;
            }
            else {
                // TollBooths[pairbooth].passingVehicles[vid].time=currentTime;
                return TollBooths[pairbooth].amount[veh_type];
            }
        }
        else {
            // TollBooths[TollBooth].passingVehicles[vid].time=currentTime;       
            return TollBooths[TollBooth].amount[veh_type];
        }
    }

}
function Billing1(TollBooth, id, vtype) {
    var vid = id;
    var veh_type = vtype;

    var pairbooth = TollBooths[TollBooth].pairBooth;
    if (TollBooths[pairbooth].passingVehicles[vid] != null) {
        billingTime = TollBooths[TollBooth].passingVehicles[vid].time;
        var billingTime1 = TollBooths[pairbooth].passingVehicles[vid].time;
        ch = Math.abs(Math.round((billingTime - billingTime1) / (1000 * 60 * 60)));
        if (ch < 24) {
            var m = document.querySelector(".vehicle").innerHTML;
            console.log(m);
            if (m == 0) {
                return 0;
            } else {
                return 30;
            }
        }
        else {
            return TollBooths[pairbooth].amount[veh_type];
        }
    }
    else {
        return TollBooths[pairbooth].amount[veh_type];
    }
}







function myfun(a) {
    a.classList.add("newDIV");
    a.addEventListener("transitionend", myFunction);

    function myFunction() {
        var d = a.getAttribute("No");
        var e = a.getAttribute("boothNo");
        var f = a.getAttribute("type");
        // console.log(e,d,f);
        this.innerHTML = Billing(e, d, f);

        a.classList.add("new1DIV");
        a.addEventListener("transitionend", Move);
        function Move() {
            a.classList.add("new2DIV");
            document.querySelector(".main1").appendChild(a);
            setTimeout(reverse, 1000);

            function reverse() {
                a.classList.add("new3DIV");
                a.addEventListener("transitionend", nextbill);
                function nextbill() {
                    var p = TollBooths[e].pairBooth;
                    // console.log(p);
                    this.innerHTML = Billing1(p, d, f);
                    setTimeout(finish, 2000);

                    function finish() {
                        a.classList.add("new4DIV");
                    }
                }

            }
        }
    }
}

// function myfun1(a) {
//     a.classList.add("demoDIV");
//     a.addEventListener("transitionend", myFunction1);

//     function myFunction1() {
//         var d = a.getAttribute("No");
//         var e = a.getAttribute("boothNo");
//         var f = a.getAttribute("type");
//         this.innerHTML = Billing(e, d, f);

//         a.classList.add("demo1DIV");
//         a.addEventListener("transitionend", move1);
//         function move1() {
//             a.style.right = "1000px";
//             a.style.transition = "0s";
//         }
//     }
// }






// if (TollBooths[TollBooth].passingVehicles[vid] != null) {
    //     var currentTime = new Date().getTime();
    //     var pairbooth = TollBooths[TollBooth].pairBooth;
    //     var billingTime1= TollBooths[pairbooth].passingVehicles[id].time;
    //     var billingTime = TollBooths[TollBooth].passingVehicles[id].time;
    //     var ch =Math.abs( Math.round((billingTime - billingTime1) / (1000 * 60 * 60)));
    //     if (ch < 24) {
    //         return 0;
    //     }
    //     else {
    //         return TollBooths[TollBooth].amount[veh_type];
    //     }

    // }
    // else{