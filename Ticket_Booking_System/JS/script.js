
let seats = document.querySelectorAll(".square");

for (let i = 0; i < seats.length; i++) {

    seats[i].addEventListener("click", function() {
        seats[i].style.backgroundColor = "grey";
    });

    seats[i].addEventListener("dblclick", function() {
        seats[i].style.backgroundColor = "transparent";
    });

}


//when click on book seat it turns green



function color() {
    let seats = document.querySelectorAll(".square");

    for (let i = 0; i < seats.length; i++) {
        if (seats[i].style.backgroundColor === "grey") {
            seats[i].style.backgroundColor = "green";
        }
    }
}


// when click on cancel all green convert into white

function cancel()
{
      let seats = document.querySelectorAll(".square");

    for (let i = 0; i < seats.length; i++) {
        if (seats[i].style.backgroundColor === "green") {
            seats[i].style.backgroundColor = "white";
        }
    }
}


//reset function

function reset()
{
    

    let seats = document.querySelectorAll(".square");

    for (let i = 0; i < seats.length; i++) {
        seats[i].style.backgroundColor = "white";
    }


}


