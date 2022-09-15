// Auteur : Corentin Robin
// Extension du JavaScript de base

// DOM

element = function(selector)
{
    return (typeof selector == "string" ? document.querySelector(selector) : selector);
}

elements = function(selector)
{
    return (typeof selector == "string" ? document.querySelectorAll(selector) : selector);
}

// Nombres

Number.prototype.rounded = function(n)
{
    var P = Math.pow(10, n);

    return Math.round(this * P) / P;
}

Number.prototype.percentage = function(n)
{
    return this / n * 100;
}

Number.prototype.plural = function()
{
    return (this > 1 ? "s" : "");
}

// Chaînes de caractère

String.prototype.toNumber = function()
{
    return Number(this);
}

String.prototype.randomCharacter = function()
{
    return this[Math.round(Math.random() * (this.length - 1))];
}

// Tableaux

Array.prototype.randomRow = function()
{
    return this[Math.round(Math.random() * (this.length - 1))];
}

// Autres

randomInteger = function(a, b)
{
    return Math.round(Math.random() * (b - a) + a);
}

randomString = function(length, alphabet)
{
    var letters = (alphabet == undefined ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" : alphabet), i;
    var output = "";

    for(i = 0; i < length; i++)
        output += letters.randomCharacter();

    return output;
}