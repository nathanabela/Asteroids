#pragma strict

function Start () {

}

function Update () {
transform.Translate(Vector3.right * 5 * Time.deltaTime * Input.GetAxis("Horizontal"));
transform.Translate(Vector3.up * 5 * Time.deltaTime * Input.GetAxis("Vertical"));
}