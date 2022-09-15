// Auteur : C. Robin
// Version du 13 décembre 2015
// Les clefs doivent comprendre tout les nombre de 0 à n - 1, pour une clef de n chiffres

permutation = function(chaine, clef) // chaine et clef sont de même longueur
{
	var s = "", i;

	for(i = 0; i < chaine.length; i++) s += chaine[clef[i]];

	return s;
}

inverse = function(clef) // retourne la clef "inverse"
{
	var t = [], i;

	for(i = 0; i < clef.length; i++) t[clef[i]] = i;

	return t;
}

clef = function(n) // génère une clef aléatoire de taille n
{
	var t = [];
	var s = []; // liste des nombres à disposition
	var i, j, c;

	for(i = 0; i < n; i++) s[i] = i;

	for(i = 0; i < n; i++)
	{
		c = s[Math.round(Math.random() * (s.length - 1))];
		t[i] = c;

		for(j = 0; j < s.length; j++)
		{
			if(s[j] == c) s.splice(j, 1); // on supprime le chiffre utilisé du tableau
		}
	}

	return t;
}

cryptage = function(chaine, clef)
{
	var n = clef.length - chaine.length % clef.length;
	// pour avoir quelque chose de divisible par la longueur de la clef
	var r = "", s = ""; // résultat, sous-chaîne
	var i, k;
	var c = 0;

	for(i = 0; i < n; i++) chaine += " ";
	// on complète avec des espaces pour avoir une longueur de chaîne divisible par la longueur de la clef

	for(i = 0; i < chaine.length / clef.length; i++)
	{
		s = "";

		for(k = 0; k < clef.length; k++)
		{
			s += chaine[c];
			c++;
		}

		r += permutation(s, clef);
	}

	return r;
}

melanger = function()
{
	var c = document.getElementById("clef").value.split(/,/g);
	var t = document.getElementById("source").value;

	document.getElementById("source").value = cryptage(t, c);
}

ordonner = function()
{
	var c = document.getElementById("clef").value.split(/,/g);
	var t = document.getElementById("source").value;

	document.getElementById("source").value = cryptage(t, inverse(c));
}

generer_clef = function()
{
	var n = Number(document.getElementById("longueur").value);

	document.getElementById("clef").value = clef(n);
}