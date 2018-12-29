var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

// window.onload = function() {
//     var elements = document.getElementsByClassName("typewrite");
//     for (var i = 0; i < elements.length; i++) {
//         var toRotate = elements[i].getAttribute("data-type");
//         var period = elements[i].getAttribute("data-period");
//         if (toRotate) {
//             new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
// };

// side scrollbars
function openNav() {
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Initial Y animation

// function pageChange(index) {
//     var pageIds = [
//         "fp-viewing-top",
//         "fp-viewing-about-me",
//         "fp-viewing-granma",
//         "fp-viewing-getInTouch"
//     ];
//     //var href = document.getElementsByTagName("a")[index].getAttribute("href");
//     //console.log(href);
//     var bodyClass = document.getElementById("body").className;
//     console.log(bodyClass);
//     bodyClass = "";
//     console.log(bodyClass);
//     bodyClass = bodyClass.concat(pageIds[index]);
//     console.log(bodyClass);

//     // for (var i = 0; i < pageIds.length; i++) {
//     //     var li = document.getElementsByTagName("body").children[i];
//     //     if (li.className.contain("fp-viewing-page")) {
//     //         li.classList.removeAll();
//     //         li.classList.add("fp-viewing-page" + i + 1);
//     //     }
//     //     if (href == pageIds[i]) {
//     //         li.classList.add("active");
//     //     }
//     // }
// }

function checkId() {
    var href = document.getElementsByTagName("a")[1].getAttribute("href");
    console.log(href);
}
