var output = document.getElementById('out')
var hisstory = document.getElementById('his')

function handler(x)
{
        output.innerHTML+=document.getElementById(x).value
}
function clearer()
{
        output.innerHTML= ""
        hisstory.innerHTML==="History"?null:hisstory.innerHTML=""
        hisstory.innerHTML===""?hisstory.innerHTML="History":null
}
function calcu()
{
        document.getElementById('his').innerHTML = output.innerHTML
        output.innerHTML=eval(document.getElementById('out').innerHTML)
}
function backspace()
{
      var state = output.innerHTML
      state.toString();
      if(state)
      {
              state = state.substr(0,state.length-1);
              output.innerHTML = state
      }
}