# SkyKiwiAutoReply
A tiny Chrome plugin to auto reply threads on Skykiwi BBS (Discuz! X2)

# Installation
* Download or clone the repository/directory
* In manifest.json, copy your thread id from the thread url (the number after "tid=") and replace <your_thread_id_here> with it. NOTCIE: DO NOT DELETE the STAR (wild card) notation.
* In myscript.js, you can setup you own prefer replies set (i.e., strings in 'dataset') and your max and min waiting time (1000 equals to 1 sec).
* Open and run the extension in Chrome web browser with its "developer mode" (more tools->extensions->tick the "developer mode" check box on the right corner->click "load unpacked extension" and locate it to the extension directory)
* The extension will run automatically when you login to the Skykiwi BBS and open the thread page. You can use the Chrome inspect function to check the running status on javascript console.

## Version 2.0.0
Add auto detecting and answering verify questions function

## Version 1.0.1
Add random ads function

## Version 1.0.0
Add random posting time period function
