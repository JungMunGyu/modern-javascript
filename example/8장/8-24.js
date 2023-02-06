function htmlEscape(strings, ...value){
    var result = string[0];
    for(var i = 0; i< value.length; i++){
        result += escape(value[i]) + strings[i+1];
    }
    return result;
    function escape(s){
        return s.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/'/g, "&#039;")
                .replace(/"/g, "&quot;")
                .replace(/`/g, "&#096;");
    }
}
var userinput = "<script>alert('test');</script>";
var message = htmlEscape`<p>${userinput}</p>`;
console.log(message); // -> <p>&lt;script&gt;alert(&#039;test&#039;)&lt;/script&gt;</p>