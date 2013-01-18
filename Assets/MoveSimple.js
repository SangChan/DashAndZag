#pragma strict
var speed : float = 3.0;
var rotateSpeed : float = 1.0;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(0)){
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