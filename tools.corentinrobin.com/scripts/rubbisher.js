// Auteur : Corentin Robin
// pour les mots : https://github.com/dwyl/english-words, http://www.manythings.org/vocabulary/lists/l/, https://en.wikipedia.org/wiki/Lists_of_English_words, https://en.wiktionary.org/wiki/Appendix:Basic_English_word_list

var subjects = ["I", "You", "He", "She", "We", "They"],
    verbs = ["beat","become","begin","bend","bet","bid","bite","blow","break","bring","build","burn","buy","catch","choose","come","cost","cut","dig","dive","do","draw","dream","drive","drink","eat","fall","feel","fight","find","fly","forget","forgive","freeze","get","give","go","grow","hang","have","hear","hide","hit","hold","hurt","keep","know","lay","lead","leave","lend","let","lie","lose","make","mean","meet","pay","put","read","ride","ring","rise","run","say","see","sell","send","show","shut","sing","sit","sleep","speak","spend","stand","swim","take","teach","tear","tell","think","throw","understand","wake","wear","win","write"],
    complements = ["account","act","addition","adjustment","advertisement","agreement","air","amount","amusement","animal","answer","apparatus","approval","argument","art","attack","attempt","attention","attraction","authority","back","balance","base","behaviour","belief","birth","bit","bite","blood","blow","body","brass","bread","breath","brother","building","burn","burst","business","butter","canvas","care","cause","chalk","chance","change","cloth","coal","colour","comfort","committee","company","comparison","competition","condition","connection","control","cook","copper","copy","cork","cotton","cough","country","cover","crack","credit","crime","crush","cry","current","curve","damage","danger","daughter","day","death","debt","decision","degree","design","desire","destruction","detail","development","digestion","direction","discovery","discussion","disease","disgust","distance","distribution","division","doubt","drink","driving","dust","earth","edge","education","effect","end","error","event","example","exchange","existence","expansion","experience","expert","fact","fall","family","father","fear","feeling","fiction","field","fight","fire","flame","flight","flower","fold","food","force","form","friend","front","fruit","glass","gold","government","grain","grass","grip","group","growth","guide","harbour","harmony","hate","hearing","heat","help","history","hole","hope","hour","humour","ice","idea","impulse","increase","industry","ink","insect","instrument","insurance","interest","invention","iron","jelly","join","journey","judge","jump","kick","kiss","knowledge","land","language","laugh","law","lead","learning","leather","letter","level","lift","light","limit","linen","liquid","list","look","loss","love","machine","man","manager","mark","market","mass","meal","measure","meat","meeting","memory","metal","middle","milk","mind","mine","minute","mist","money","month","morning","mother","motion","mountain","move","music","name","nation","need","news","night","noise","note","number","observation","offer","oil","operation","opinion","order","organization","ornament","owner","page","pain","paint","paper","part","paste","payment","peace","person","place","plant","play","pleasure","point","poison","polish","porter","position","powder","power","price","print","process","produce","profit","property","prose","protest","pull","punishment","purpose","push","quality","question","rain","range","rate","ray","reaction","reading","reason","record","regret","relation","religion","representative","request","respect","rest","reward","rhythm","rice","river","road","roll","room","rub","rule","run","salt","sand","scale","science","sea","seat","secretary","selection","self","sense","servant","sex","shade","shake","shame","shock","side","sign","silk","silver","sister","size","sky","sleep","slip","slope","smash","smell","smile","smoke","sneeze","snow","soap","society","son","song","sort","sound","soup","space","stage","start","statement","steam","steel","step","stitch","stone","stop","story","stretch","structure","substance","sugar","suggestion","summer","support","surprise","swim","system","talk","taste","tax","teaching","tendency","test","theory","thing","thought","thunder","time","tin","top","touch","trade","transport","trick","trouble","turn","twist","unit","use","value","verse","vessel","view","voice","walk","war","wash","waste","water","wave","wax","way","weather","week","weight","wind","wine","winter","woman","wood","wool","word","work","wound","writing","year"],
    types = ["question", "affirmation"];

randomSentence = function()
{
    var subject = subjects.randomRow(),
        type = types.randomRow(), output;

    if(type == "affirmation")
        output = subject + " " + verbs.randomRow() + (subject == "He" || subject == "She" ? "s" : "") + " the " + complements.randomRow() + ".";
    else
        output = (subject == "He" || subject == "She" ? "Does" : "Do") + " " + (subject != "I" ? subject.toLowerCase() : subject) + " " + verbs.randomRow() + " the " + complements.randomRow() + "?";

    return output;
}


generateSentences = function()
{
    var sentences = "", n = document.getElementById("number").value, i;

    for(i = 0; i < n; i++)
        sentences += "<div>" + randomSentence() + "</div>";

    document.getElementById("sentences").innerHTML = sentences;
}