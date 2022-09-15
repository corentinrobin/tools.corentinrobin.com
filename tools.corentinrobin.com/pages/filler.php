<h1>Filler text generator</h1>

<h2>Information</h2>

<div>
    <p>
        This application is built to generate a random readable filler text for developers / designers, looking like a true language.
    </p>

    <p>
        To make a readable random text, the characters sequence must alternate vowels and consonants.
    </p>

    <p>
        This application allows to test character encoding as well, considering it uses normal and accentued characters.
    </p>
</div>

<h2>Application</h2>

<div>
    <table>
        <tr><td colspan="2">Settings</td></tr>
        <tr><td>Word characters count range</td><td>[<input type="number" id="characters_min" value="2"> , <input type="number" id="characters_max" value="7">]</td></tr>
        <tr><td>Sentence words count range</td><td>[<input type="number" id="words_min" value="10"> , <input type="number" id="words_max" value="20">]</td></tr>
        <tr><td>Paragraph sentences count range</td><td>[<input type="number" id="sentences_min" value="5"> , <input type="number" id="sentences_max" value="10">]</td></tr>
        <tr><td>Text paragraphs count range</td><td>[<input type="number" id="paragraphs_min" value="2"> , <input type="number" id="paragraphs_max" value="5">]</td></tr>
    </table>
</div>

<div>
    <span class="button" onclick="generateText()">Generate</span> a random text or <span class="button" onclick="clearArea()">clear</span> the text area.
</div>
        
<textarea id="text"></textarea>

<div id="information">
</div>