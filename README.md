# Fap Gauntlet


What you need to play
=====================
All you need is a web browser to open "Index.html"


How to setup
============
1) Put your pics in the "Pics" folder
    IMPORTANT: all pics must be .jpg and you have to rename every pic with a number.
    IMPORTANT#2: do not skin numbers or it wont work well.
2) Open "Script.js" with any text editor and got to the line number 48:
    > name = Math.floor((Math.random() * 27) + 1);
                                         ^
   and chenage the number 27 with the number of pics in your "Pics" folder.
3) Open Index.html with a web browser and start.


Extra Setup
===========
To edit the duration:
    > time = (Math.floor((Math.random() * 21) + 1) + 9);
                                          ^          ^
9 rappresent minimum
21 + 9 rappresent the maximum
