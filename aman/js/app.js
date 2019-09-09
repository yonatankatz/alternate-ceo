var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
  backgroundColor: 'rgba(255, 255, 255, 0)',
  penColor: 'rgb(0, 0, 0)'
});
var saveButton = document.getElementById('save');
var cancelButton = document.getElementById('clear');

saveButton.addEventListener('click', function (event) {
    var data = signaturePad.toDataURL('image/png');
    var str = "  שלום,\nאבקש להעביר את הכסף לחשבון הבנק כמפורט להלן:";
   var temp = document.createElement("div");
    temp.id = "temp";
    temp.style = "color: black;margin:0px;font-size:20px;";
    phrase = str;
    temp.innerHTML= phrase;
    //need to render element, otherwise it won't be displayed
    document.body.appendChild(temp);
    html2canvas($("#temp")[0], {
    onrendered: function(canvas) {
        debugger;
        var dataUrl = canvas.toDataURL('image/png');
        var doc = new jsPDF();
        doc.addImage(ru_text[0], 'JPEG', 0,0);
        doc.text(0, 10, 'Non-utf-8-string' );
        doc.save('filename.pdf');

    },
    });

// Send data to server instead...
 // window.open(data);
 // generatePdf();
});

cancelButton.addEventListener('click', function (event) {
  signaturePad.clear();
});

var canvas = $("#signature-pad");
var parentWidth = $(canvas).parent().outerWidth();
canvas[0].setAttribute("width", parentWidth);
this.signaturePad = new SignaturePad(canvas[0]);

var username = $("#username")[0];
var username = $("#bankAccount")[0];
var date = $("#date")[0];
var email = $("#staticEmail")[0];
var today = new Date();
date.value= today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

function generatePdf() {
    var doc = new jsPDF()
    var str = "  שלום,\nאבקש להעביר את הכסף לחשבון הבנק כמפורט להלן:";
    doc.text(str, 10, 10);
    doc.setFontSize(40);
    doc.text(str, 35, 25);
//    doc.addImage('examples/images/Octonyan.jpg', 'JPEG', 15, 40, 180, 180);
    doc.save('a4.pdf');
}

function sendMail() {
    $.ajax({
      type: 'POST',
      url: 'http://postmail.invotes.com/send?access_token=okwc0b70tgzuspcyweapevyh&'
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
}