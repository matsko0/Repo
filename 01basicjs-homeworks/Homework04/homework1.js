/*HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert*/

function tellStory(name, mood, activity){
    if (typeof name !== 'string' || typeof mood !== 'string' || typeof activity !== 'string') {
        return `All inputs must be strings`
    }
    let story = `This is ${name}. ${name} is a nice person. Today they are in a ${mood} mood today. They are ${activity} all day. The end`
    return story;

}

//example
console.log(tellStory("Martin", "good", "coding"));
