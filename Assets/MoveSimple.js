#pragma strict
var speed : float = 3.0;
var rotateSpeed : float = 1.0;

private var isTouchDevice : boolean = false;

function Awake() {
    if (Application.platform == RuntimePlatform.IPhonePlayer) 
        isTouchDevice = true; 
    else
        isTouchDevice = false; 
}

function Start () {

}

function Update () {
	var clickDetected : boolean;
    var touchPosition : Vector3;
    // Detect click and calculate touch position
    if (isTouchDevice) {
        clickDetected = (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began);
        touchPosition = Input.GetTouch(0).position;
    } else {
        clickDetected = (Input.GetMouseButtonDown(0));
        touchPosition = Input.mousePosition;
    }
    
	if (clickDetected){
		var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hit : RaycastHit;
		
		if (collider.Raycast(ray,hit,100.0)) {
			Debug.Log("Moving the target");
			transform.Translate(Vector3.forward * speed);
			transform.Rotate(Vector3.up * rotateSpeed);
		}
		else {
			Debug.Log("else");
		}
	}
}