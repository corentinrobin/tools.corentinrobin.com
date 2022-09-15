// Auteur : Corentin Robin

// fréquences des lettres de a à z en English,French,German,Spanish,Portuguese,Esperanto,Italian,Turkish,Swedish,Polish,Dutch,Danish,Icelandic,Finnish,Czech
var letters_frequencies = {"English":{"a":0.08167,"b":0.01492,"c":0.02782,"d":0.04253,"e":0.12702,"f":0.02228,"g":0.02015,"h":0.06094,"i":0.06966,"j":0.00153,"k":0.00772,"l":0.04025,"m":0.02406,"n":0.06749,"o":0.07507,"p":0.01929,"q":0.00095,"r":0.05987,"s":0.06327,"t":0.09056,"u":0.02758,"v":0.00978,"w":0.0236,"x":0.0015,"y":0.01974,"z":0.00074},"French":{"a":0.07636,"b":0.00901,"c":0.0326,"d":0.03669,"e":0.14715,"f":0.01066,"g":0.00866,"h":0.00737,"i":0.07529,"j":0.00613,"k":0.00049,"l":0.05456,"m":0.02968,"n":0.07095,"o":0.05796,"p":0.02521,"q":0.01362,"r":0.06693,"s":0.07948,"t":0.07244,"u":0.06311,"v":0.01838,"w":0.00074,"x":0.00427,"y":0.00128,"z":0.00326},"German":{"a":0.06516,"b":0.01886,"c":0.02732,"d":0.05076,"e":0.16396,"f":0.01656,"g":0.03009,"h":0.04577,"i":0.0655,"j":0.00268,"k":0.01417,"l":0.03437,"m":0.02534,"n":0.09776,"o":0.02594,"p":0.0067,"q":0.00018,"r":0.07003,"s":0.0727,"t":0.06154,"u":0.04166,"v":0.00846,"w":0.01921,"x":0.00034,"y":0.00039,"z":0.01134},"Spanish":{"a":0.11525,"b":0.02215,"c":0.04019,"d":0.0501,"e":0.12181,"f":0.00692,"g":0.01768,"h":0.00703,"i":0.06247,"j":0.00493,"k":0.00011,"l":0.04967,"m":0.03157,"n":0.06712,"o":0.08683,"p":0.0251,"q":0.00877,"r":0.06871,"s":0.07977,"t":0.04632,"u":0.02927,"v":0.01138,"w":0.00017,"x":0.00215,"y":0.01008,"z":0.00467},"Portuguese":{"a":0.14634,"b":0.01043,"c":0.03882,"d":0.04992,"e":0.1257,"f":0.01023,"g":0.01303,"h":0.00781,"i":0.06186,"j":0.00397,"k":0.00015,"l":0.02779,"m":0.04738,"n":0.04446,"o":0.09735,"p":0.02523,"q":0.01204,"r":0.0653,"s":0.06805,"t":0.04336,"u":0.03639,"v":0.01575,"w":0.00037,"x":0.00253,"y":6.0e-5,"z":0.0047},"Esperanto":{"a":0.12117,"b":0.0098,"c":0.00776,"d":0.03044,"e":0.08995,"f":0.01037,"g":0.01171,"h":0.00384,"i":0.10012,"j":0.03501,"k":0.04163,"l":0.06104,"m":0.02994,"n":0.07955,"o":0.08779,"p":0.02755,"q":0,"r":0.05914,"s":0.06092,"t":0.05276,"u":0.03183,"v":0.01904,"w":0,"x":0,"y":0,"z":0.00494},"Italian":{"a":0.11745,"b":0.00927,"c":0.04501,"d":0.03736,"e":0.11792,"f":0.01153,"g":0.01644,"h":0.00636,"i":0.10143,"j":0.00011,"k":9.0e-5,"l":0.0651,"m":0.02512,"n":0.06883,"o":0.09832,"p":0.03056,"q":0.00505,"r":0.06367,"s":0.04981,"t":0.05623,"u":0.03011,"v":0.02097,"w":0.00033,"x":3.0e-5,"y":0.0002,"z":0.01181},"Turkish":{"a":0.1292,"b":0.02844,"c":0.01463,"d":0.05206,"e":0.09912,"f":0.00461,"g":0.01253,"h":0.01212,"i":0.096,"j":0.00034,"k":0.05683,"l":0.05922,"m":0.03752,"n":0.07987,"o":0.02976,"p":0.00886,"q":0,"r":0.07722,"s":0.03014,"t":0.03314,"u":0.03235,"v":0.00959,"w":0,"x":0,"y":0.03336,"z":0.015},"Swedish":{"a":0.09383,"b":0.01535,"c":0.01486,"d":0.04702,"e":0.10149,"f":0.02027,"g":0.02862,"h":0.0209,"i":0.05817,"j":0.00614,"k":0.0314,"l":0.05275,"m":0.03471,"n":0.08542,"o":0.04482,"p":0.01839,"q":0.0002,"r":0.08431,"s":0.0659,"t":0.07691,"u":0.01919,"v":0.02415,"w":0.00142,"x":0.00159,"y":0.00708,"z":0.0007},"Polish":{"a":0.10503,"b":0.0174,"c":0.03895,"d":0.03725,"e":0.07352,"f":0.00143,"g":0.01731,"h":0.01015,"i":0.08328,"j":0.01836,"k":0.02753,"l":0.02564,"m":0.02515,"n":0.06237,"o":0.06667,"p":0.02445,"q":0,"r":0.05243,"s":0.05224,"t":0.02475,"u":0.02062,"v":0.00012,"w":0.05813,"x":4.0e-5,"y":0.03206,"z":0.04852},"Dutch":{"a":0.07486,"b":0.01584,"c":0.01242,"d":0.05933,"e":0.1891,"f":0.00805,"g":0.03403,"h":0.0238,"i":0.06499,"j":0.0146,"k":0.02248,"l":0.03568,"m":0.02213,"n":0.10032,"o":0.06063,"p":0.0157,"q":9.0e-5,"r":0.06411,"s":0.0373,"t":0.0679,"u":0.0199,"v":0.0285,"w":0.0152,"x":0.00036,"y":0.00035,"z":0.0139},"Danish":{"a":0.06025,"b":0.02,"c":0.00565,"d":0.05858,"e":0.15453,"f":0.02406,"g":0.04077,"h":0.01621,"i":0.06,"j":0.0073,"k":0.03395,"l":0.05229,"m":0.03237,"n":0.0724,"o":0.04636,"p":0.01756,"q":7.0e-5,"r":0.08956,"s":0.05805,"t":0.06862,"u":0.01979,"v":0.02332,"w":0.00069,"x":0.00028,"y":0.00698,"z":0.00034},"Icelandic":{"a":0.1011,"b":0.01043,"c":0,"d":0.01575,"e":0.06418,"f":0.03013,"g":0.04241,"h":0.01871,"i":0.07578,"j":0.01144,"k":0.03314,"l":0.04532,"m":0.04041,"n":0.07711,"o":0.02166,"p":0.00789,"q":0,"r":0.08581,"s":0.0563,"t":0.04953,"u":0.04562,"v":0.02437,"w":0,"x":0.00046,"y":0.009,"z":0},"Finnish":{"a":0.12217,"b":0.00281,"c":0.00281,"d":0.01043,"e":0.07968,"f":0.00194,"g":0.00392,"h":0.01851,"i":0.10817,"j":0.02042,"k":0.04973,"l":0.05761,"m":0.03202,"n":0.08826,"o":0.05614,"p":0.01842,"q":0.00013,"r":0.02872,"s":0.07862,"t":0.0875,"u":0.05008,"v":0.0225,"w":0.00094,"x":0.00031,"y":0.01745,"z":0.00051},"Czech":{"a":0.08421,"b":0.00822,"c":0.0074,"d":0.03475,"e":0.07562,"f":0.00084,"g":0.00092,"h":0.01356,"i":0.06073,"j":0.01433,"k":0.02894,"l":0.03802,"m":0.02446,"n":0.06468,"o":0.06695,"p":0.01906,"q":1.0e-5,"r":0.04799,"s":0.05212,"t":0.05727,"u":0.0216,"v":0.05344,"w":0.00016,"x":0.00027,"y":0.01043,"z":0.01503}};

String.prototype.charactersOccurences = function(alphabet) // caractères en minuscules
{
    var r = {}, i;

    for(i = 0; i < alphabet.length; i++)
        r[alphabet[i]] = 0;

    for(i = 0; i < this.length; i++)
    {
        c = this[i].toLowerCase();

        if(alphabet.indexOf(c) != -1) r[c]++;
    }

    return r;
}

String.prototype.matches = function(regex)
{
    var m = this.match(regex);

    return (m == null ? [] : m);
}

strip_tags = function()
{
    var text = document.querySelector("textarea").value;

    text = text.replace(/(<style.*?>.*?<\/style>|<script.*?>.*?<\/script>)/gmi, "");
    text = text.replace(/<.*?>/g, "");

    document.querySelector("textarea").value = text;
}

analyse_text = function()
{
    var text = document.querySelector("textarea").value,
        results = "", i;

    // occurences des lettres de l'alphabet

    var letters_occurences = text.charactersOccurences("abcdefghijklmnopqrstuvwxyz"),
        letters_array = [];

    for(i in letters_occurences)
        letters_array.push([i, letters_occurences[i]]);

    letters_array.sort(function(a, b)
    {
        return b[1] - a[1];
    });

    // diverses statistiques

    var words = text.matches(/[A-Za-z]{2,}/g),
        letters = text.matches(/[A-Za-z]/g),
        digits = text.matches(/[0-9]/g),
        dates = text.matches(/[0-9]{4}/g),
        spaces = text.matches(/[ \t]/g),
        quotes = text.matches(/(".*?"|'.*?'|“.*?”|«.*?»)/mg), // multiline possibility
        punctuation = text.matches(/[\?\!\.\,\;\:]/g);

    var different_characters = [], c;

    for(i = 0; i < text.length; i++)
    {
        c = text[i];

        if(different_characters.indexOf(c) == -1)
            different_characters.push(c);
    }

    results += 
    "<h2>General statistics</h2>" +
    "<div><p>This text size is <b>" + (text.length / 1000).rounded(1) + "</b>kB, which represents about <b>" + Math.ceil(text.length / 2000).rounded(0) + "</b> book page(s).</p>" +
        "<table><td>Element</td><td>Count</td><td>Ratio to the text size</td></tr>" +
        "<tr><td>Characters</td><td>" + text.length + "</td><td>&ndash;</td></tr>" +
        "<tr><td>Different characters</td><td>" + different_characters.length + "</td><td>" + different_characters.length.percentage(text.length).rounded(1) + "%</td></tr>" +
        "<tr><td>Letters</td><td>" + letters.length + "</td><td>" + letters.length.percentage(text.length).rounded(1) + "%</td></tr>" +
        "<tr><td>Punctuation marks</td><td>" + punctuation.length + "</td><td>" + punctuation.length.percentage(text.length).rounded(1) + "%</td></tr>" +
        "<tr><td>Digits</td><td>" + digits.length + "</td><td>" + digits.length.percentage(text.length).rounded(1) + "%</td></tr>" +
        "<tr><td>Spaces (and tabs)</td><td>" + spaces.length + "</td><td>" + spaces.length.percentage(text.length).rounded(1) + "%</td></tr>" +
        "<tr><td>Words</td><td>" + words.length + "</td><td>&ndash;</td></tr>" +
        "<tr><td>Dates (year)</td><td>" + dates.length + "</td><td>&ndash;</td></tr>" +
        "<tr><td>Quotes</td><td>" + quotes.length + "</td><td>&ndash;</td></tr>" +
    "</table></div>" +

    "<h2>Letters frequencies</h2>" +
    "<div class='frequencies'><div><h3>Summary</h3>" +
    "<table>" +
    "<tr><td>Letter</td><td>Occurences</td><td>Frequency</td></tr>";

    // estimation de la langue en fonction des fréquences d'apparition des lettres

    var lower_case_letters = text.matches(/[a-z]/g);
    var languages_scores = [];

    for(language in letters_frequencies)
    {
        languages_scores[language] = 0;
    }

    // calcul des scores

    for(i = 0; i <  letters_array.length; i++)
    {
        var languages = [],
            letter = letters_array[i][0],
            letter_frequency = letters_array[i][1] / lower_case_letters.length;

        for(language in letters_frequencies)
        {
            console.log(Math.round(letters_frequencies[language][letter]) + " == " + Math.round(letter_frequency));

            if(letters_frequencies[language][letter].rounded(2) == letter_frequency.rounded(2)) // on arrondi
                languages_scores[language]++;
        }

        results += "<tr><td>" + letter + "</td><td>" + letters_array[i][1] + "</td><td>" + (letter_frequency * 100).rounded(1) + "%</td></tr>";
    }

    results += "</table></div>" +
               "<div><h3>Language estimation <sup>(works better on big texts)</sup></h3>" +
               "<table><tr><td>Language</td><td>Score</td></tr>";

    // tri des langues en fonction des scores

    var scores_array = [];

    for(i in languages_scores)
        scores_array.push([i, languages_scores[i]]);
           
    scores_array.sort(function(a, b)
    {
        return b[1] - a[1];
    });

    for(i = 0; i < scores_array.length; i++)
    {
        if(scores_array[i][0] != "randomRow")
            results += "<tr><td>" + scores_array[i][0] + "</td><td>" + scores_array[i][1] + "</td></tr>";
    }

    results += "</table></div></div>";
    
    document.querySelector("#results").innerHTML = results;
}