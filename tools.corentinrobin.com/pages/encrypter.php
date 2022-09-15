<h1>Encrypter</h1>

<h2>Information</h2>

<div>
    <p>
        This encrypter is made from <a href="https://en.wikipedia.org/wiki/XOR_cipher" target="_blank">the XOR cipher</a>, which consists on applying <a href="https://en.wikipedia.org/wiki/XOR_gate" target="_blank">the XOR logic gate</a> between the message characters bits and the key characters bits.
    </p>

    <p>
        To decrypt, the same XOR operation will be applied bewteen the ciphertext characters bits and the key characters bits, to reveal the original message.
    </p>

    <p>
        To obtain a truly secure ciphertext, it is recommended to have a random generated key, and not a common name.
    </p>
</div>

<h2>Application</h2>

<div>
    Choose a key :<input type="text" id="key" value="enigma">, or <span class="button" onclick="generateKey()">generate</span> one.
</div>
    
<div>
    <div>Enter your text to encrypt :</div>

    <textarea id="decrypted_text">Alan Mathison Turing (23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst, philosopher, and theoretical biologist.

Turing was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer. Turing is widely considered to be the father of theoretical computer science and artificial intelligence.</textarea>
    
    <div>
        <span class="button" onclick="showEncryptedString()">Encrypt</span>
    </div>
</div>
    
<div>
    <div>Enter your text to decrypt :</div>

    <textarea id="encrypted_text"></textarea>
    
    <div>
        <span class="button" onclick="showDecryptedString()">Decrypt</span>
    </div>
</div>
    
<div id="notes"></div>