<h1>Uglifier</h1>

<h2>Information</h2>

<div>
	<p>
		This app will allow you to obfuscate or complexify your JS / CSS source code.
	</p>
</div>

<h2>Application</h2>

<div>
	<p>
	You can :
		<span class="button" onclick="obfuscate()">Obfuscate</span>
		<span class="button" onclick="complexify()">Complexify</span>
		&nbsp;&nbsp;
		<span class="button" onclick="erase()">Erase textareas</span>
	</p>
</div>

<div>
	<section>
		<textarea id="source">// This program is awesome !
var i;

/* Look !
   An amazing crazy loop of awesomeness ! */

for(i = 0; i < 10; i++)
{
	if(i % 2 == 0) document.write("<b>" + i + "</b>");
	else document.write("<i>" + i + "</i>");
}</textarea>
	</section>

	<section>
		<textarea id="target">
		</textarea>

		<div id="information">
			No information yet.
		</div>
	</section>
</div>