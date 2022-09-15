<h1>Text analyser</h1>

<h2>Information</h2>

<div>
    <p>
        This application analyses any text you want, and will try to guess what language it is written in.
    </p>

    <p>
        For the language guess, it uses a table containing <a href="https://en.wikipedia.org/wiki/Letter_frequency" target="_blank">letters frequencies</a> in 15 languages, among them there is English, French, Spanish etc.
    </p>
</div>

<h2>Application</h2>

<div>
    <textarea>Albert Einstein (14 March 1879 – 18 April 1955) was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics).
His work is also known for its influence on the philosophy of science. He is best known by the general public for his mass–energy equivalence formula E = mc2 (which has been dubbed "the world's most famous equation").
He received the 1921 Nobel Prize in Physics "for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect", a pivotal step in the evolution of quantum theory.

Near the beginning of his career, Einstein thought that Newtonian mechanics was no longer enough to reconcile the laws of classical mechanics with the laws of the electromagnetic field.
This led him to develop his special theory of relativity during his time at the Swiss Patent Office in Bern (1902–1909), Switzerland.
However, he realized that the principle of relativity could also be extended to gravitational fields and—with his subsequent theory of gravitation in 1916—he published a paper on general relativity.
He continued to deal with problems of statistical mechanics and quantum theory, which led to his explanations of particle theory and the motion of molecules.
He also investigated the thermal properties of light which laid the foundation of the photon theory of light. In 1917, he applied the general theory of relativity to model the large-scale structure of the universe.</textarea>
</div>

<div>
    <span class="button" onclick="analyse_text()">Analyse</span>
    <span class="button" onclick="strip_tags()">Strip HTML tags</span>
</div>
    
<div id="results"></div>