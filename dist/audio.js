function play(elementid) {
	var element = document.getElementById(elementid);
    element['play']();
    return false;
};	
function pause(elementid) {
	var element = document.getElementById(elementid);
    element['pause']();
    return false;
};
function stop(elementid) {
	var element = document.getElementById(elementid);
    element['pause']();
	element.currentTime = 0;
    return false;
};