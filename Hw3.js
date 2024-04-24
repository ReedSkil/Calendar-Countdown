document.getElementById('button').addEventListener('click', start);


function TimeTick(){
	date = new Date();
    cT = date.toLocaleTimeString();
    cD = date.toLocaleDateString();
	//for some reason subtracting these two times leaves a 5 hour gap
    distance = (newDate.getTime() - date.getTime());
	
	//Hence the need to add the 5 hour gap back on
    d = Math.floor(((distance / (1000 * 60 * 60))+ 5) / 24);
    h = 23 - date.getHours();
    m = 60 - date.getMinutes();
    s = 60 - date.getSeconds();

    cDate.innerHTML = "Current Time: " + cT + " : " + cD;
    countdown.innerHTML = "Countdown: " + h + "h " + m + "m " + s + "s : " +  d + "d ";


    if (distance < 0) {
		//clears the interval to stop checking every tick
        clearInterval(interval);
        countdown.innerHTML = "Countdown Has Ended";
    }
}

function start() {  
	newDate = new Date(document.getElementById('date').value); 
    countdown = document.getElementById('countdown');
    cDate = document.getElementById('cDate');
	interval = setInterval(TimeTick, 1000);
}