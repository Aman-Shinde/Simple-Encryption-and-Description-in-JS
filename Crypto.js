function Encryption(para) {
    var pass = [];
    for (var i = 0; i < para.length; i++) {
        var encryp = para.charCodeAt(i) +32;
        
        if(encryp < 127)
        {
          var t = String.fromCharCode(encryp);
          pass.push(t) 
        }
        else {
            var p = (encryp) - 126;
            if (p < 10) {
                pass.push("0" + p)
            }
            else {
                pass.push(p);
            }
        }
    }
    return pass.join("");
}



function isnum(num) {
    return (/[0-9]/).test(num)
}



function Description(para) {
    var temp = [];
    for (var i = 0; i < para.length; i++) {
        if (isnum(para[i])) {
            var l = parseInt(para[i] + "" + para[i + 1]) + 94 ;
            var pos1 = String.fromCharCode(l);
            temp.push(pos1);
            i = i + 1;
        }
        else {
            var pos = para[i].charCodeAt() - 32;
            var pos1 = String.fromCharCode(pos);
            temp.push(pos1);
            
        }
    }
    return temp.join("");
}