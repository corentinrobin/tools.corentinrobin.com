// Auteur : Corentin Robin
// principe : on utilise la porte logique XOR (OU exclusif), sur les bits des codes binaires des caractères
// intérêt : alogrithme très simple à mettre en oeuvre, cryptage extrêmement rapide, de l'ordre de 9 Mo/s
// on prend une sortie en base 36, pour plus de compacité

generateKey = function()
{
    document.getElementById("key").value = randomString(16);
}

String.prototype.encryptedWith = function(key)
{
    var result = "", string_length = this.length, separator;
    var i, k = 0;

    for(i = 0; i < string_length; i++)
    {
        k = (k < key.length - 1 ? k + 1 : 0);
        separator = (i < string_length - 1 ? "$" : "");
        result += (this.charCodeAt(i) ^ key.charCodeAt(k)).toString(36) + separator; // "^" correspond à un XOR ; résultat en base 36
    }

    return result.toUpperCase();
}

String.prototype.decryptedWith = function(key)
{
    var values = this.split("$");
    var result = "", values_length = values.length;
    var i, k = 0;

    for(i = 0; i < values_length; i++)
    {
        k = (k < key.length - 1 ? k + 1 : 0);
        result += String.fromCharCode(parseInt(values[i], 36) ^ key.charCodeAt(k));
    }

    return result;
}

showEncryptedString = function()
{
    var string = document.querySelector("#decrypted_text").value,
        key = document.querySelector("#key").value;

    var t0 = performance.now();
    var encrypted_string = string.encryptedWith(key);
    var t1 = performance.now();

    var dt = t1 - t0;

    document.querySelector("#notes").innerHTML = "Encrypted in " + Math.round(dt) + " ms, at " + Math.round(encrypted_string.length / (dt / 1000)) + " bytes per second.";
    document.querySelector("#encrypted_text").value = encrypted_string;
}

showDecryptedString = function()
{
    var string = document.querySelector("#encrypted_text").value,
        key = document.querySelector("#key").value;

    var t0 = performance.now();
    var decrypted_string = string.decryptedWith(key);
    var t1 = performance.now();

    var dt = t1 - t0;

    document.querySelector("#notes").innerHTML = "Decrypted in " + Math.round(dt) + " ms, at " + Math.round(decrypted_string.length / ((dt / 1000))) + " bytes per second.";
    document.querySelector("#decrypted_text").value = decrypted_string;
}