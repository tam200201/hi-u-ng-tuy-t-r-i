// Thiết lập số lượng bộng tuyếttuyết
var snowmax = 35;

// Thiết lập nhiều màu sắc cho bông tuyếttuyết
var snowcolor = new Array(
  "#aaaacc",
  "#ddddff",
  "#ccccdd",
  "#f3f3f3",
  "#f0ffff"
);

// Thiết lập các phông chữ tạo ra nhiều màu sắc cho bông tuyết
var snowtype = new Array("Times", "Arial", "Times", "Verdana");

// Đặt chữ cái tạo nên bông tuyết (khuyến nghị "*")
var snowletter = "*";

// Đặt tốc độ chìm (giá trị nằm trong khoảng 0,3 đến 22)
var sinkspeed = 0.6;

// Đặt kích thước tối đa cho bông tuyết
var snowmaxsize = 30;

// Đặt kích thước tối thiểu cho bông tuyết
var snowminsize = 8;

// Thiết lập vùng tuyết rơi
// Bộ 1 cho tuyế rơi toàn bộ bộ 2 cho tuyế rơi bên tráitrái
// Đặt 3 cho tuyết rơiở giữa,đặt 4 cho tuyết rơi bên phảiải
var snowingzone = 1;

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////

// Do not edit below this line
var snow = new Array();
var marginbottom;
var marginright;
var timer;
var i_snow = 0;
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent;
var ie5 =
  document.all && document.getElementById && !browserinfos.match(/Opera/);
var ns6 = document.getElementById && !document.all;
var opera = browserinfos.match(/Opera/);
var browserok = ie5 || ns6 || opera;

function randommaker(range) {
  rand = Math.floor(range * Math.random());
  return rand;
}

function initsnow() {
  if (ie5 || opera) {
    marginbottom = document.getElementById("snowcanvas").scrollHeight;
    marginright = document.getElementById("snowcanvas").clientWidth - 15;
  } else if (ns6) {
    marginbottom = document.getElementById("snowcanvas").scrollHeight;
    marginright = window.innerWidth - 15;
  }
  var snowsizerange = snowmaxsize - snowminsize;
  for (i = 0; i <= snowmax; i++) {
    crds[i] = 0;
    lftrght[i] = Math.random() * 15;
    x_mv[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById("s" + i);
    snow[i].style.fontFamily = snowtype[randommaker(snowtype.length)];
    snow[i].size = randommaker(snowsizerange) + snowminsize;
    snow[i].style.fontSize = snow[i].size + "px";
    snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
    snow[i].style.zIndex = 1000;
    snow[i].sink = (sinkspeed * snow[i].size) / 5;
    if (snowingzone == 1) {
      snow[i].posx = randommaker(marginright - snow[i].size);
    }
    if (snowingzone == 2) {
      snow[i].posx = randommaker(marginright / 2 - snow[i].size);
    }
    if (snowingzone == 3) {
      snow[i].posx =
        randommaker(marginright / 2 - snow[i].size) + marginright / 4;
    }
    if (snowingzone == 4) {
      snow[i].posx =
        randommaker(marginright / 2 - snow[i].size) + marginright / 2;
    }
    snow[i].posy = randommaker(
      2 * marginbottom - marginbottom - 2 * snow[i].size
    );
    snow[i].style.left = snow[i].posx + "px";
    snow[i].style.top = snow[i].posy + "px";
  }
  movesnow();
}

function movesnow() {
  for (i = 0; i <= snowmax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
    snow[i].style.top = snow[i].posy + "px";

    if (
      snow[i].posy >= marginbottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
    ) {
      if (snowingzone == 1) {
        snow[i].posx = randommaker(marginright - snow[i].size);
      }
      if (snowingzone == 2) {
        snow[i].posx = randommaker(marginright / 2 - snow[i].size);
      }
      if (snowingzone == 3) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 4;
      }
      if (snowingzone == 4) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 2;
      }
      snow[i].posy = 0;
    }
  }
  var timer = setTimeout("movesnow()", 50);
}

for (i = 0; i <= snowmax; i++) {
  document.write(
    "<span id='s" +
      i +
      "' style='position:absolute;top:-" +
      snowmaxsize +
      "'>" +
      snowletter +
      "</span>"
  );
}
if (browserok) {
  window.onload = initsnow;
}