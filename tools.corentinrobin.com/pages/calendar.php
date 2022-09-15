<h1>Calendar</h1>

<h2>Information</h2>

<div>
    <p>
        A simple clean &amp; tidy calendar. You can show any year you want.
    </p>
    <p>
        Note : if you type a year before 1582, it won't show the calendar. Gregorian calendar was not use at this time !
    </p>
</div>

<h2>Application</h2>

<div>
    Choose a year : <input type="number" id="year" onchange="show_calendar()" onkeyup="show_calendar()"> to show the corresponding calendar.
</div>

<div id="calendar"></div>

<script>
    // Auteur : Corentin Robin

    show_calendar = function()
    {
        var selected_year = Number(document.getElementById("year").value);
        if(selected_year > 1581) document.getElementById("calendar").innerHTML = calendar(selected_year);
    }

    var today = new Date(),
        current_year = today.getFullYear();

    document.getElementById("year").value = current_year;
    document.getElementById("calendar").innerHTML = calendar(current_year);
</script>