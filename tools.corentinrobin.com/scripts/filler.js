// Auteur : Corentin Robin
// low level functions

// dummy text functions
randomWord = function(characters_range)
{
    var vowels = "aaaaàâäeeeeéèêëiiiiîïooooôöuuuuûüùyyyyÿ", consonants = "bcdfghjklmnpqrstvwxz", i;
    var output = "", needs_vowel = true;
    var length = randomInteger(characters_range[0], characters_range[1]);

    for(i = 0; i < length; i++)
    {
        needs_vowel = !needs_vowel;

        if(needs_vowel)
            output += vowels.randomCharacter();
        else
            output += consonants.randomCharacter();
    }

    return output;
}

randomSentence = function(characters_range, words_range)
{
    var punctuations = ".!?";
    var output = "", i;
    var length = randomInteger(words_range[0], words_range[1]);

    for(i = 0; i < length; i++)
    {
        output += randomWord(characters_range) + (i < length - 1 ? " " : punctuations.randomCharacter());
    }

    return output.charAt(0).toUpperCase() + output.substring(1, output.length);
}

randomParagraph = function(characters_range, words_range, sentences_range)
{
    var output = "", i;
    var length = randomInteger(sentences_range[0], sentences_range[1]);

    for(i = 0; i < length; i++)
        output += randomSentence(characters_range, words_range) + " ";

    return output;
}

randomText = function(characters_range, words_range, sentences_range, paragraphs_range)
{
    var output = "", i;
    var length = randomInteger(paragraphs_range[0], paragraphs_range[1]);

    for(i = 0; i < length; i++)
        output += randomParagraph(characters_range, words_range, sentences_range) + "\n\n";

    return output;
}

generateText = function()
{
    var characters_range = [element("#characters_min").value.toNumber(), element("#characters_max").value.toNumber()],
        words_range = [element("#words_min").value.toNumber(), element("#words_max").value.toNumber()],
        sentences_range = [element("#sentences_min").value.toNumber(), element("#sentences_max").value.toNumber()],
        paragraphs_range = [element("#paragraphs_min").value.toNumber(), element("#paragraphs_max").value.toNumber()];

    var text = randomText(characters_range, words_range, sentences_range, paragraphs_range);

    element("#text").value = text;
    element("#information").innerHTML = "The generated text is " + text.length + " characters long.";
}

clearArea = function()
{
    document.getElementById("text").value = "";
}