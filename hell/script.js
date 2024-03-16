var div_element1 = document.createElement("div");
div_element1.setAttribute("id", "count-down");

var div_element2 = document.createElement("div");
div_element2.setAttribute("id", "result");

document.body.append(div_element1, div_element2);

var count = 10;

var count_1 = function (start1) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start1();
  }, 1000);
};

var count_2 = function (start2) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start2();
  }, 1000);
};

var count_3 = function (start3) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start3();
  }, 1000);
};

var count_4 = function (start4) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start4();
  }, 1000);
};

var count_5 = function (start5) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start5();
  }, 1000);
};

var count_6 = function (start6) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start6();
  }, 1000);
};

var count_7 = function (start7) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start7();
  }, 1000);
};

var count_8 = function (start8) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start8();
  }, 1000);
};

var count_9 = function (start9) {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start9();
  }, 1000);
};

var count_10 = function () {
  var start_count = document.getElementById("count-down");
  start_count.innerHTML = count;
  count--;

  setTimeout(() => {
    start_count.innerHTML = "";
    var result = document.getElementById("result");
    result.innerHTML = "HAPPY INDEPENDANCE DAY";
  }, 1000);
};

count_1(() => {
  count_2(() => {
    count_3(() => {
      count_4(() => {
        count_5(() => {
          count_6(() => {
            count_7(() => {
              count_8(() => {
                count_9(() => {
                  count_10();
                });
              });
            });
          });
        });
      });
    });
  });
});