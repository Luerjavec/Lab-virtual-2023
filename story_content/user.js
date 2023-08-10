function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nPUtrlcN8D":
        Script1();
        break;
      case "62vvacLeRoN":
        Script2();
        break;
      case "6O6USlRfDKU":
        Script3();
        break;
      case "6VAZbX5NOPT":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("VariableName", newName);
}

function Script2()
{
  document.getElementById("main-window").style.cursor = "zoom-in";
}

function Script3()
{
  document.getElementById("main-window").style.cursor = "zoom-in";
}

function Script4()
{
  var player = GetPlayer();

function findLMSAPI(win) {
  if (win.hasOwnProperty("GetStudentID")) return win;

  else if (win.parent == win) return null;

  else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this);
var myName = lmsAPI.GetStudentName();
var array = myName.split(',');
var newName = array[1];
player.SetVar("VariableName", newName);
}

