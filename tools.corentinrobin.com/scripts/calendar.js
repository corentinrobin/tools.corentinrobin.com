// Auteur : Corentin Robin

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var today = new Date(),
    current_year = today.getFullYear();

is_bissextile = function(year)
{
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}

day_of_date = function(day, month, year)
{
    // on détermine le jour avec l'algorithme de Mike Keith

    var Z = (month >= 3 ? year : year - 1),
        D;

        if(month >= 3)
            D = ( Math.floor(23 * month / 9) + day + 4 + year + Math.floor(Z / 4) - Math.floor(Z / 100) + Math.floor(Z / 400) - 2 ) % 7;

        else
            D = ( Math.floor(23 * month / 9) + day + 4 + year + Math.floor(Z / 4) - Math.floor(Z / 100) + Math.floor(Z / 400) ) % 7;

    return (D == 0 ? 6 : D - 1); // de 0 (dimanche) à 6 (lundi) converti en 0 (lundi) à 6 (dimanche)
}

show_info_about = function(e)
{
    var array = e.getAttribute("date").split(" "),
        day = array[0],
        values = array[1].split("/"),
        date = new Date(values[2] + "-" + values[1] + "-" + values[0] + "T00:00:00");

    var today = new Date();

    var date_is_past = date - today < 0;
    var dt = (date_is_past ? today - date : date - today) / 1000,
        Dr, Hr;

    // remaining or past days, hours, minutes and seconds
    var Dr = Math.floor(dt / 86400),
        Hr = Math.floor((dt - Dr * 86400) / 3600),
        Mr = Math.floor((dt - Dr * 86400 - Hr * 3600) / 60);

    var complete_date = day + ", " + values[0] + " " + months[values[1] - 1] + " " + values[2],
        duration = Dr + " day" + Dr.plural() + " " + Hr + " hour" + Hr.plural() + " " + Mr + " minute" + Mr.plural();

    var time_remaining = (date_is_past ? duration + " ago"
                                       : "In " + duration);

    var message = "<p>" + complete_date + "</p><p>" + time_remaining + "</p>";

    Dialog.show(message);
}

calendar = function(year)
{
    var year_is_bissextile = is_bissextile(year),
        result = "<h3 class='year'>" + year + "</h3>", i;

    for(m = 0; m < months.length; m++)
    {
        month = months[m];
        number_of_days = 0;
        day = "";

        result += "<div class='month'><b>" + month + "</b><div>";

        // on détermine le nombre de jours dans le mois

        if(month == "April" || month == "June" || month == "September" || month == "November")
            number_of_days = 30;

        else if(month == "February")
        {
            if(year_is_bissextile) number_of_days = 29;
            else number_of_days = 28;
        }

        else number_of_days = 31;

        // on construit le tableau

        for(d = 0; d < number_of_days; d++)
        {
            D = d + 1;
            M = m + 1;

            i = day_of_date(D, M, year);

            day = days[i];
            is_today = (D == today.getDate() && m == today.getMonth() && year == today.getFullYear());
            date = day + " " + D + "/" + M + "/" + year;

            result += "<span class='" + (is_today ? "today " : "") + "day' date='" + date + "' onclick='show_info_about(this)'><span>" + day.substring(0, 2).toUpperCase() + "</span><span>" + D + "</span></span>";
        }

        result += "</div></div>";
    }

    return result;
}