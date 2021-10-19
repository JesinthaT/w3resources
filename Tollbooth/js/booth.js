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
            "TN0021": { time: ct - (45 * 1000 * 60 * 60) },
            "TN0022": { time: ct - (29 * 1000 * 60 * 60) },
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
            "TN0021": { time: ct - (8 * 1000 * 60 * 60) },
            "TN0022": { time: ct - (34 * 1000 * 60 * 60) }
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
        var check = billTime(TollBooth, vid);
        if (check < 24) {
            return 0;
        }
        else {
            var pairbooth = TollBooths[TollBooth].pairBooth;
            if (TollBooths[pairbooth].passingVehicles[vid] != null) {
                check = billTime(pairbooth, vid);
                if (check < 24) {
                    return 30;
                }
                else {
                    TollBooths[pairbooth].passingVehicles[vid].time = ct;
                    return TollBooths[pairbooth].amount[veh_type];
                }
            }
            else {
                return TollBooths[pairbooth].amount[veh_type];
            }
        }
    }
    else {
        return TollBooths[TollBooth].amount[veh_type];
        // var pairbooth = TollBooths[TollBooth].pairBooth;
        // if (TollBooths[pairbooth].passingVehicles[vid] != null) {
        //     check = billTime(pairbooth, vid);
        //     if (check < 24) {
        //         return 30;
        //     }
        //     else {
        //         TollBooths[pairbooth].passingVehicles[vid].time = ct;
        //         return TollBooths[pairbooth].amount[veh_type];
        //     }
        // }
        // else {         
        //     console.log(TollBooths[TollBooth]);
        //     return TollBooths[pairbooth].amount[veh_type];
        // }
    }
}



function billTime(TollBooth, id) {
    var currentTime = new Date().getTime();
    var billingTime = TollBooths[TollBooth].passingVehicles[id].time;
    var ch = Math.round((currentTime - billingTime) / (1000 * 60 * 60));
    return ch;
}





function myfun(a) {
    a.classList.add("newDIV");
    a.addEventListener("transitionend", myFunction);

    function myFunction() {
        var d = a.getAttribute("No");
        var e = a.getAttribute("boothNo");
        var f = a.getAttribute("type");
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
                    this.innerHTML = Billing(p, d, f);
                    setTimeout(finish, 2000);

                    function finish() {
                        a.classList.add("new4DIV");
                    }
                }

            }
        }
    }
}

function myfun1(a) {
    a.classList.add("demoDIV");
    a.addEventListener("transitionend", myFunction1);

    function myFunction1() {
        var d = a.getAttribute("No");
        var e = a.getAttribute("boothNo");
        var f = a.getAttribute("type");
        this.innerHTML = Billing(e, d, f);

        a.classList.add("demo1DIV");
        a.addEventListener("transitionend", move1);
        function move1() {
            a.style.right = "1000px";
            a.style.transition = "0s";
        }
    }
}