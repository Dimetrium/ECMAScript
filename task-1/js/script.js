/**
*
*Drow square.
*
*@param num: Number of square;
*@param color: Color of square;
*@param length: Size of square;
*@param startPosition: Even or odd step;
*@return: true;
*/
function func (num, color, length, startPosition) {
	var width;
    var length;
    var color;
 	var i;
	var num;
    var first;
    var second;
    
    if(length == '' || length == NaN){
       length = length || 100;
    }
    
    if(color == '' || color == NaN){
        color = color || '#ccc';
    }
    
    length = length || 100;
    width =  1000 * length/100;
    
    document.body.style.width = width+'px';
    document.body.style.height = width+'px';

    if (startPosition == 2) {
 		startPosition = 'right';
 	}else{
        startPosition = 'left';
    }

	for(i=0 ; i<num ; i++){
		if(i%2 === 0){
			first = document.createElement('DIV');
    		document.body.appendChild(first);
    		first.className = 'first';
    		first.style.backgroundColor=color;
    		first.style.cssFloat = startPosition;
			first.style.width = length+'px';
			first.style.height = length+'px';
		}else{
			second = document.createElement('DIV');
    		document.body.appendChild(second);
			second.className = 'second';
			second.style.backgroundColor=color;
			second.style.cssFloat = startPosition;
			second.style.width = length+'px';
			second.style.height = length+'px';
			second.style.marginTop = length+'px';
		}
	}
    return true;
}
