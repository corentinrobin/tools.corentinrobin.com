window.onscroll = function()
{
    var vertical_offset = window.pageYOffset || document.documentElement.scrollTop,
        header = document.querySelector("header"),
        menu = document.querySelector("nav");

    if(vertical_offset > 50)
    {
        header.classList.add("shrinked");
        menu.classList.add("shrinked");
    }

    else
    {
        header.classList.remove("shrinked");
        menu.classList.remove("shrinked");
    }
}

var Index = 
{
    toggle_menu : function()
    {
        document.querySelector("nav").classList.toggle("visible");
    }
};

var Dialog =
{
    show : function(message)
    {
        document.querySelectorAll(".overlay,.dialog").forEach(function(e){e.classList.add("visible")});
        document.querySelector(".dialog > div").innerHTML = message;
    },

    hide : function()
    {
        document.querySelectorAll(".overlay,.dialog").forEach(function(e){e.classList.remove("visible")});
    }
};