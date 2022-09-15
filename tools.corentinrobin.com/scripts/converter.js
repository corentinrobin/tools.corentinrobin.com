// Auteur : Corentin Robin
// Les valeurs intermédiaires sont en unités SI

// Valeurs

var mass_units = {"kilogram" : 1,
                  "grain" : 0.00006479891,
                  "carat" : 0.0002,
                  "gram" : 0.001,
                  "ounce" : 0.28349523125,
                  "pound" : 0.45359237,
                  "stone" : 14 * 0.45359237,
                  "short ton" : 907.18474,
                  "metric ton" : 1000,
                  "long ton" : 1016.047};

var length_units = {"meter" : 1,
                    "angstrom" : 1e-10,
                    "nanometer" : 1e-9,
                    "micrometer" : 1e-6,
                    "milimeter" : 0.001,
                    "centimeter" : 0.01,
                    "inch" : 0.0254,
                    "foot" : 0.3048,
                    "yard" : 0.9144,
                    "kilometer" : 1000,
                    "mile" : 1609.344,
                    "nautical mile" : 1852,
                    "astronomical unit" : 149597870700,
                    "light year" : 9460730472580800,
                    "parsec" : 3.0857e+16};

var time_units = {"second" : 1,
                  "nanosecond" : 1e-9,
                  "microsecond" : 1e-6,
                  "minute" : 60,
                  "hour" : 3600,
                  "day" : 86400,
                  "month" : 30.44 * 86400,
                  "year" : 365.2425 * 86400};

var volume_units = {"cubic meter" : 1,
                    "imperial pint" : 0.000568,
                    "imperial gallon" : 0.00454609,
                    "US gallon" : 0.003785,
                    "US pint" : 0.000473176473,
                    "UK pint" : 0.000568,
                    "liter" : 0.001,
                    "magnum" : 0.0015,
                    "Rehoboam" : 0.0045,
                    "Methuselah" : 0.006,
                    "Salmanazar" : 0.009,
                    "Nebuchadnezzar" : 0.015,
                    "Solomon" : 0.018,
                    "Sovereign" : 0.02625,
                    "barrel" : 0.158987294928};

var speed_units = {"meter per second" : 1,
                   "feet per second" : 0.3048,
                   "kilometer per hour" : 0.277777777777777,
                   "mile per hour" : 0.44704,
                   "knot" : 0.514444};

// Fonctions

conversion = function(x, xu, yu, quantity)
{
    return x * quantity[xu] / quantity[yu];
}

show_result = function(e, quantity)
{
    var x = Number(e.querySelector("input:first-of-type").value),
        xu = e.querySelector("select:first-of-type").value,
        yu = e.querySelector("select:last-of-type").value,
        target = e.querySelector("input:last-of-type");

    target.value = conversion(x, xu, yu, quantity);
}

user_interface = function(units)
{
    var menu = "<select onchange='show_result(this.parentNode, " + units + ")'>";
    for(key in window[units]) menu += "<option value='" + key + "'>" + key + "</option>";
    menu += "</select>";

    var output = "<div><h2>" + units.replace('_units', '') + "</h2>" + 
                 "<input type='text' value='1' onkeyup='show_result(this.parentNode, " + units + ")'> " + menu + " = <input type='text'> " + menu + "</div>";

    return output;
}