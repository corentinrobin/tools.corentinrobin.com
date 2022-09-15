<h1>Letter mixer</h1>

<h2>Information</h2>

<div>
    <p>
        The purpose of this application is to shuffle characters of a text according to a key.
    </p>

    <p>
        If your choose your own key, the key must have all the number from 0 to your number. For example, a key with 4 numbers, will contain 0, 1, 2 and 3 (in the order your want).
    </p>
</div>

<h2>Application</h2>

<div>
    You can <span class="button" onclick="generer_clef()">generate</span> your <input type="number" value="4" id="longueur" style="width : 3em"> digits key, or write your own in the field below.
</div>

<div>
	<span class="button" onclick="melanger()">Shuffle</span> or <span class="button" onclick="ordonner()">order</span> with the key <input type="text" value="3,2,0,1" id="clef" size="50">.
</div>

<div>
	<textarea id="source">Enter here the text your want to shuffle.</textarea>
</div>