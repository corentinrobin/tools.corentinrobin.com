/* Auteur  : Corentin Robin
   Version : 10/12/2016 */

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var espaces = "\t\t\t\n";

randomLengthString = function(a, b, alphabet)
{
	var s = "", i;
	var n = randomInteger(a, b);

	for(i = 0; i < n; i++) s += alphabet[randomInteger(0, alphabet.length - 1)];

	return s;
}

obfuscation = function(source)
// fonction la plus importante
{
	var i;
	
	var strings = [];

	var toReplace = [[/ *([\+\-\*\/\=\<\>\%\(\)\{\}\[\]\,\;\.\?]+) */g, "$1"]];

	// en regex, "." signifie tout les caracteres, sauf les sauts de ligne !

	// ========== SUPPRESSION DES COMMENTAIRES ==========

	source = source.replace(/\/\*[^]*?\*\//g, "");
	source = source.replace(/\/\/.*?[\n\r]/g, "");
	// si non supprime, peut causer des conflits avec les /expressions regulieres/
	
	// ========== PRESERVATION DES CHAINES ==========
	
	strings = source.match(/(".*?"|'.*?'|\/.*?\/)/g);
	source = source.replace(/(".*?"|'.*?'|\/.*?\/)/g, "<<<<CHAINE>>>>");
	
	// ========== SUPPRESSION DES PARTIES INUTILES ==========

	source = source.replace(/[\n\r\t]/g, "");
	source = source.replace(/ {2,}/g, "");
	source = source.replace(/ *([\+\-\*\\\/\=\<\>\%\(\)\{\}\[\]\,\;\:\.\?]+) */g, "$1");

	// ========== PRESERVATION DES CHAINES ==========

    if(strings != null)
    {
        for(i = 0; i < strings.length; i++)
        {
            source = source.replace(/<<<<CHAINE>>>>/i, strings[i]);
            // on utilise i, pour remplacer les elements un a un
        }
    }

	return source;
}

complexification = function(source)
{
	// ========== SUPPRESSION DES COMMENTAIRES INITIAUX ==========

	source = source.replace(/\/\*[^]*?\*\//g, "");
	source = source.replace(/\/\/.*?[\n\r]/g, "");

	var lines = source.split(/[\n\r]/g);
	var newSource = "", i;

	// ========== SUPPRESSION DES COMMENTAIRES INITIAUX ==========

	for(i = 0; i < lines.length; i++)
	{
		newSource += "/*" + randomLengthString(0, 100, alphabet) + "*/\n" +
							randomLengthString(0, 100, espaces) + lines[i] +
				   "\n/*" + randomLengthString(0, 100, alphabet) + "*/\n";
	}

	return newSource;
}

obfuscate = function()
{
	var source = document.getElementById("source").value;
	var initialSize = source.length;

	source = obfuscation(source);
	
	var finalSize = source.length;
	
	document.getElementById("target").value = source;
	document.getElementById("information").innerHTML =
        "<p>Size before : " + initialSize + " bytes, size after : " + finalSize + " bytes.</p>"+
        "<p>Useless code removed : " + Math.round((initialSize - finalSize) / initialSize * 100) + "%</p>";
}

complexify = function()
{
	var source = document.getElementById("source").value;

	var initialSize = source.length;
	var initialLength = source.match(/[\n\r]/g).length; // number of lines

	source = complexification(source);
	
	var finalSize = source.length;
	var finalLength = source.match(/[\n\r]/g).length;
	
	document.getElementById("target").value = source;
	document.getElementById("information").innerHTML =
        "<p>Size before : " + initialSize + " bytes, size after : " + finalSize + " bytes.</p>"+
        "<p>Length before : " + initialLength + " lines, length after : " + finalLength + " lines.</p>"+
        "<p>Useless code added : " + Math.round((finalSize - initialSize) / finalSize * 100) + "%</p>";
}

erase = function()
{
	document.getElementById("source").value = "";
	document.getElementById("target").value = "";
}