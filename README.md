# SkyKiwiAutoReply
A tiny Chrome plugin to auto reply threads on Skykiwi BBS (Discuz! X2)

# Installation
* Download or clone the repository/directory
* In manifest.json, copy your thread id from the thread url (the number after "tid=") and replace <your_thread_id_here> with it. NOTCIE: DO NOT DELETE the star(wild card) notation.
* In myscript.js, you can setup you own prefer replies set(i.e., strings in 'dataset') and your max and min waiting time(1000 equals to 1 sec).
* Open and run the extension in Chrome web browser with its "developer mode"(more tools->extensions->tick the "developer mode" check box on the right corner->click "load unpacked extension" and locate it to the extension directory)
* The extension will run automatically when you login to the Skykiwi BBS and open the thread page. You can use the Chrome inspect function to check the running status on javascript console.

## Version 2.0.0
Add auto detecting and answering verify questions function

## Version 1.0.1
Add random ads function

## Version 1.0.0
Add random posting time period function

## License
#### MIT
Copyright (c) 2011-2017 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
