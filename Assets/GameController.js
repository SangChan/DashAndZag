static var gameRunning : boolean = true;
 
var gameTimeAllowed : float = 20.0;
 
private var gameMessageLabel = "";
private var gameMessageDisplay : Rect;
private var timedOut : boolean = false;
private var gameTimeRemaining : float = gameTimeAllowed;

private var missionCompleted : boolean = false;
private var missionCompleteTime : float = gameTimeAllowed;
 
function Awake() {
    gameMessageDisplay = Rect(10, 10, Screen.width - 20, 40);
}
 
function OnGUI() { 
    GUI.color = Color.yellow;
    GUI.backgroundColor = Color.black;
 
    var text : String = ""; 
    
    if (missionCompleted) {
        text = String.Format( "{0:00}:{1:00}", parseInt( missionCompleteTime / 60.0 ), parseInt( missionCompleteTime % 60.0 ) );
        gameMessageLabel = "Mission completed in: " + text;
    } else if (timedOut) {
        gameMessageLabel = "Time's up!!";
    } else {
        text = String.Format( "{0:00}:{1:00}", parseInt( gameTimeRemaining / 60.0 ), parseInt( gameTimeRemaining % 60.0 ) );
        gameMessageLabel = "Time left: " + text;
    }
    GUI.Box(gameMessageDisplay, gameMessageLabel);    
}
 
function Update() { 
    if (!gameRunning)
        return; 
 
    // Keep track of time and display a countdown
    gameTimeRemaining -= Time.deltaTime;
    if (gameTimeRemaining <= 0) {
        timedOut = true; 
        gameRunning = false;
    }
}

function MissionComplete() { 
    if (!gameRunning)
        return;
 
    missionCompleted = true; 
    gameRunning = false;
 
    missionCompleteTime =  gameTimeAllowed - gameTimeRemaining;
}