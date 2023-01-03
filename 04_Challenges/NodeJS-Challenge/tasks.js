let arr = ["batata"];
let check =["[ ]"];
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
 /** console.log(text.charAt(text.length-2))
  const withoutLineBreaks = **/

  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.trim().split(' ',1) == 'hello'){
    hello(text);
  }
  else{
    if(text === 'help\n')
    {
        help();
    }
    else{
       if(text === 'list\n')
        {
            list();
        }
        else
        {
            if(text.trim().substring(0,4)=="add " && text.length>5)
            {
              
                add(text.replace( /[\r\n\s]+/gm, " " ).trim())
            }
            else{
              if(text.trim()== 'remove')
              {
                  remove(text.replace( /[\r\n\s]+/gm, " " ).trim().length-1)
              }
              else{
                if(text.trim().substring(0,6) == "remove")
                {
                    remove(parseInt(text.replace( /[\r\n\s]+/gm, " " ).trim().substring(6).trim())-1)
                }
                else
                {
                  unknownCommand(text);
                }
             }
            }
            
        }
        
      
       
    }
    
  }
}
function remove(index){
  arr.splice(index,1)
  check.splice(index,1)
}
function list()
{
    for(let i = 0 ; i<arr.length ; i++)
    {
         console.log(i+1 +" - "+check[i]+" "+ arr[i]+ '\n')
    }
}

function add(str)
{
  const result = str.substring(4);
  arr.push(result)
  check.push("[ ]")
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}
/**
 * list all the possible commands
 * 
 * @returns {void}
 */
function help()
{
  console.log(" press exit or quit  to exist the application\n press hello for greetings it takes parameter \n press help to list all the possible commands")
}

/**
 * Says hello extended
 *
 * @param {string} str 
 * @returns {void}
 */
function hello(str){
  console.log(str.replace( /[\r\n\s]+/gm, " " ).trim()+ "!")
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("sarah hachouche")
