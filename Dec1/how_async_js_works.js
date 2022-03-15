// we will learn about async in js
/*
Prerequisites:-
1.Javascript is a single threaded language.
2.js being single threaded follows synchronous code execution always => executes line by line
3.js says that its features are synchronous but developer can levarage the fatures of runtime(browser or nodejs).
4.If the runtime gives us a feature that can be time consuming then js will never wait for it.
5.js never blocks main thread => It is always non blocking.
6. js maintains an event queue where it stores the completed events from main thread of js which handles the events native runtime environment(queue stores the events which are native to runtime)
7.few examples of functionalities which are not native to js but are supported by runtime are
    .timing functions
    .counting functions
    .network call functions
    .file reading functionality

8. as soon as js executes all the lines which are native to js, it goes to event queue which stores events which are not native to js(like above mentioned examples) and executes them.
9. So, priority is for default functionalities i.e,, for the js native functionalities.
10. js deques the event/s present inside event queue and executes them one by one.

// Event loop
Event loop does the following function:
step1: it keeps on checking the main thread of js. It checks whether the execution of main thread is complete or not
step2: if the execution of main thread is complete then it keeps on checking whether an event present in event queue.

// call back
functions which are present inside event queue are called call back functions. => it says to call me back once the execution of main thread is completed.

*/