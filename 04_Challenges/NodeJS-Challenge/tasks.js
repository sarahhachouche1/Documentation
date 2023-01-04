const { fieldSize } = require("tar");

var arr = [];
var check =[];
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
var filename = process.argv[2] ? process.argv[2] : 'database.json' ;

function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
  const fs = require('fs');
  const path = require('path');
  try {
    let data = fs.readFileSync(path.join(__dirname, 'files' , filename), 'utf8');
    let obj = JSON.parse(data);
    arr=obj.list;
    check=obj.done;

   } catch (err) {
  console.error(err);
  }
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
                  remove(arr.length-1)
              }
              else{
                if(text.trim().substring(0,6) == "remove")
                {
                    remove(parseInt(text.replace( /[\r\n\s]+/gm, " " ).trim().substring(6).trim())-1)
                }
                else
                {
                  if(text.replace( /[\r\n\s]+/gm, " " ).trim().substring(0, text.indexOf(' ')) == "edit")
                  {
                          edit(text)
                  }
                  else
                    {
                        if(text.trim().substring(0,5) == "check" && text.trim().length>6 ){
                              checking(parseInt(text.replace( /[\r\n\s]+/gm, " " ).trim().substring(6).trim())-1)
                        }
                        else{
                          if(text.trim().substring(0,7) == "uncheck" && text.trim().length>8){
                            unchecking(parseInt(text.replace( /[\r\n\s]+/gm, " " ).trim().substring(8).trim())-1)
                          }
                          else{
                            unknownCommand(text);
                          }
                        }
            
                    }
                }
             }
            }
            
        }
        
      
       
    }
    
  }
}
function unchecking(index){
  if(index<0 || index >= check.length) {
    console.log("unavailable index")
    return
  }
  check[index]="[ ]";
  index++;
  console.log("task " +index+ " is marked as unchecked \n")
}
function edit(str)
{
  /**if(Number.isInteger(str.substring(str..indexOf(' ') + 1)))**/
      let index,item;
      if((!isNaN(str.replace( /[\r\n\s]+/gm, " " ).trim().substring(5,6)))) 
      {
          index=parseInt(str.replace( /[\r\n\s]+/gm, " " ).trim().substring(5,6))-1
          item =str.replace( /[\r\n\s]+/gm, " " ).trim().substring(6)
          if(index<0 || index >= arr.length)
          {
            console.log("unavailable index")
            return 
          }
          
      } 
      else
      {
        index=arr.length-1;
        item=str.replace( /[\r\n\s]+/gm, " " ).trim().substring(5)
        
      }

      arr[index]=item
      index++;
      console.log("task " +index + " changed to " + item+"\n")
}
function checking(index)
{
    if(index<0 || index >= check.length) {
      console.log("unavailable index")
      return
    }
    check[index]="[✓]";
    index++;
    console.log("task " +index+ " is marked as checked \n")
}
function remove(index){
  const item=arr[index]
  if(index>= arr.length || index < 0)
    console.log("error unavailable index")
  else{
    arr.splice(index,1)
    check.splice(index,1)
  }
  
  console.log("task " +item + " is removed \n")
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
  console.log("task " +result + " addeed \n")
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
  console.log(" press exit or quit  to exist the application\n press hello for greetings it takes parameter \n press help to list all the possible commands\n press list command to list all tasks \n press add command to add a task \n press remove command to remove the last task remove n to remove nth task \n press`check n` to change task n to done \n press`uncheck n` to change task n to undone")
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
  const fs = require('fs');
  const path = require('path');
  const myJSON = JSON.stringify({ list: arr, done: check });
  fs.writeFileSync(path.join(__dirname, 'files', filename),myJSON, (err)=>{
    if(err) throw err;
   
  })
  process.on('uncaughtException', err =>{
    console.error("error while saving")
  })
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("sarah hachouche")
