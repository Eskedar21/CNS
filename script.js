

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function sortfunction(a,b) {
    return(b-a)
}
function generateKey() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var key = alphabet.toUpperCase().shuffle(); 
  document.getElementById("key").value = key;
  for (i=0; i<26; i++) {
       var letter =key.charAt(i);
       document.getElementById("sub_" + alphabet.charAt(i)).value = letter;
     }
}


function substituteLetters() {
	var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var plain="";
    var cipher=document.getElementById("cipher").value.toLowerCase();
    var dict = {};
    var punctuation = [" ",",",".","-","!","?","_","+"];
 
	for(i=0;i<26;i++) {
    var letter = alphabet.charAt(i);
    var subLetter = document.getElementById("sub_" + letter).value.toUpperCase();
    if (subLetter!="") dict[letter] = subLetter;
   }
   
   for(i=0;i<cipher.length;i++) {
     var letter =  cipher.charAt(i);
     var subLetter = letter;
     if (letter in dict) {
       subLetter = dict[letter];
     } else if (alphabet.indexOf(letter)>=0) {
       subLetter="*";
     }
            
    plain = plain + subLetter;
   }
  
   document.getElementById("plain").value=plain;			
}

function clearText() {
 document.getElementById("cipher").value="";
 document.getElementById("plain").value="";
 document.getElementById("key").value="";
}