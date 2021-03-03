/* COPYRIGHT 2021 SITEHEFT */

var heroVid = document.querySelector("#sh-hero-vid");
$(document).ready(() => {
    var heroVidPlay = heroVid.play();
    heroVid.onplaying = startHeroTextChange();
});

function startHeroTextChange() {
  var heroTextArray = ["your photos", "your dish", "your creativity", "your moves", "your craft", "your adventures"];
  var locked = false;
  heroVid.addEventListener("timeupdate", () => {
    if (heroVid.currentTime >= 6.5 && heroVid.currentTime < 8) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[1];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 13.5 && heroVid.currentTime < 15) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[2];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 20.5 && heroVid.currentTime < 22) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[3];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 27.5 && heroVid.currentTime < 29) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[4];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 34.5 && heroVid.currentTime < 36) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[5];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 41.5 && heroVid.currentTime < 43) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[0];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 1000)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } 
  }, false)
}
window.onscroll = () => {
    if (window.scrollY > 65) {
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
    } else {
        document.querySelector(".sh-nav").style.backgroundColor = "";
        document.querySelector(".sh-nav").style.boxShadow = "";
        document.querySelector(".shLogo").style.fill = "#ffffff";
        document.querySelector(".navGrp1").style.color = "white";
        document.querySelector(".navGrp2").style.color = "white";
    }
}

var supportNumbers = [{"code":"GLOBAL","location":"Global","display_phone":"+1 (480) 624-2500","phone_link":"tel:+14806242500"},{"code":"AR","location":"Argentina","display_phone":"(011) 5984-0787","phone_link":"tel:01159840787"},{"code":"AU","location":"Australia","display_phone":"02 8042 8923","phone_link":"tel:0280428923"},{"code":"AT","location":"Austria","display_phone":"0720 116854","phone_link":"tel:0720116854"},{"code":"BE","location":"Belgium","display_phone":"078 48 03 42","phone_link":"tel:078480342"},{"code":"BR","location":"Brasil","display_phone":"(11) 3958-5682","phone_link":"tel:1139585682"},{"code":"CA","location":"Canada","display_phone":"844 494-9067","phone_link":"tel:8444949067"},{"code":"CL","location":"Chile","display_phone":"(022) 5940 640","phone_link":"tel:0225940640"},{"code":"CN","location":"China","display_phone":"+86 400-842-8290","phone_link":"tel:+864008428290"},{"code":"CO","location":"Colombia","display_phone":"+57 (1) 381-6881","phone_link":"tel:+5713816881"},{"code":"DK","location":"Denmark","display_phone":"36 92 77 29","phone_link":"tel:36927729"},{"code":"FI","location":"Finland","display_phone":"09 424 50 418","phone_link":"tel:0942450418"},{"code":"FR","location":"France","display_phone":"09 75 18 70 35","phone_link":"tel:0975187035"},{"code":"DE","location":"Germany","display_phone":"089 22 061 158","phone_link":"tel:08922061158"},{"code":"HK","location":"Hong Kong","display_phone":"3050-7472","phone_link":"tel:30507472"},{"code":"IN","location":"India","display_phone":"1-800-1210120","phone_link":"tel:18001210120"},{"code":"ID","location":"Indonesia","display_phone":"(021) 2561-7956","phone_link":"tel:02125617956"},{"code":"IR","location":"Ireland","display_phone":"01 653 5977","phone_link":"tel:016535977"},{"code":"IL","location":"Israel","display_phone":"03-3741564","phone_link":"tel:033741564"},{"code":"IT","location":"Italy","display_phone":"800-790180","phone_link":"tel:800790180"},{"code":"JP","location":"Japan","display_phone":"050-6864-8180","phone_link":"tel:05068648180"},{"code":"MY","location":"Malaysia","display_phone":"015-4877 0212","phone_link":"tel:01548770212"},{"code":"MX","location":"Mexico","display_phone":"(55) 4631 2411","phone_link":"tel:5546312411"},{"code":"NL","location":"Netherlands","display_phone":"085 888 3139","phone_link":"tel:0858883139"},{"code":"NZ","location":"New Zealand","display_phone":"(09) 975-9409","phone_link":"tel:099759409"},{"code":"NO","location":"Norway","display_phone":"235 02 157","phone_link":"tel:23502157"},{"code":"PE","location":"Peru","display_phone":"(01) 700-9339","phone_link":"tel:017009339"},{"code":"PH","location":"Philippines","display_phone":"(02) 8231-3942","phone_link":"tel:0282313942"},{"code":"PL","location":"Poland","display_phone":"22 307 46 99","phone_link":"tel:223074699"},{"code":"PT","location":"Portugal","display_phone":"308 801 713","phone_link":"tel:308801713"},{"code":"RU","location":"Russia","display_phone":"21 1 198 4545","phone_link":"tel:2111984545"},{"code":"SG","location":"Singapore","display_phone":"+65 6349-4259","phone_link":"tel:+6563494259"},{"code":"ES","location":"Spain","display_phone":"90 284 83 16","phone_link":"tel:902848316"},{"code":"SE","location":"Sweden","display_phone":"077 421 88 09","phone_link":"tel:0774218809"},{"code":"CH","location":"Switzerland","display_phone":"308 801 713","phone_link":"tel:308801713"},{"code":"ZA","location":"South Africa","display_phone":"087 550 2198","phone_link":"tel:0875502198"},{"code":"KR","location":"South Korea","display_phone":"02-3483-3274","phone_link":"tel:0234833274"},{"code":"TW","location":"Taiwan","display_phone":"(02) 7703-9090","phone_link":"tel:0277039090"},{"code":"TH","location":"Thailand","display_phone":"02-156-0902","phone_link":"tel:021560902"},{"code":"TR","location":"Turkey","display_phone":"0 850 390 21 86","phone_link":"tel:08503902186"},{"code":"UA","location":"Ukraine","display_phone":"089 324-04-66","phone_link":"tel:0893240466"},{"code":"GB","location":"United Kingdom","display_phone":"020 3014 1446","phone_link":"tel:02030141446"},{"code":"US","location":"United States","display_phone":"(480) 624-2500","phone_link":"tel:4806242500"},{"code":"VE","location":"Venezuela","display_phone":"0800 3622265","phone_link":"tel:08003622265"},{"code":"VN","location":"Vietnam","display_phone":"(0284) 458 1498","phone_link":"tel:02844581498"}];

document.querySelector("input[name=sh-section3-phone-location-input]").addEventListener("change", () => {
    var locationValue = document.querySelector("input[name=sh-section3-phone-location-input]").value.toUpperCase();
    for (var index = 0; index < supportNumbers.length; index ++) {
        if(supportNumbers[index].code == locationValue) {
            document.querySelector(".sh-section3-phone-number").innerText = supportNumbers[index].display_phone;
            document.querySelector(".sh-section3-phone-number").href = supportNumbers[index].phone_link;
        }
    }
});


$.ajax({
  url: "/cdn-cgi/trace"
}).then(res => {
    var resArray = res.split("\n");
    var locale = resArray[8].substring(4,6);
    for (var index = 0; index < supportNumbers.length; index ++) {
        if(supportNumbers[index].code == locale) {
            document.querySelector(".sh-section3-phone-location-display").innerHTML = `<div class="text"><i class="${locale.toLowerCase()} flag"></i>${supportNumbers[index].location}</div>`;
            document.querySelector("input[name=sh-section3-phone-location-input]").value = "sg";
            document.querySelector(".sh-section3-phone-number").innerText = supportNumbers[index].display_phone;
            document.querySelector(".sh-section3-phone-number").href = supportNumbers[index].phone_link;
            document.querySelector("div[data-value=global]").classList.remove("active");
            document.querySelector("div[data-value=global]").classList.remove("selected");
            document.querySelector(`div[data-value=${locale.toLowerCase()}]`).classList.add("active");
            document.querySelector(`div[data-value=${locale.toLowerCase()}]`).classList.add("selected");
        } 
    }
});

function navDomainsClick() {
    if(document.querySelector("#navDomains").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navDomains").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navDomains").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navDomainsClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Domain Search</span>
        <div class="sh-nav-dropdown-searchgrp">
            <input class="sh-nav-dropdown-search" type="text" placeholder="Find your new domain"><button class="sh-nav-dropdown-searchbtn"><i class="fas fa-search" style="margin-right:10px"></i>Find</button>
        </div>
        <span class="sh-nav-dropdown-title">Other Domain Services</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Bulk Registration</a></li>
            <li><a href="">Domain Transfer</a></li>
            <li><a href="">Bulk Transfer</a></li>
            <li><a href="">Domain Backorder</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why Choose SiteHeft Domains?</span>
            <span class="sh-nav-dropdown-subtitle">Be spoilt for choice</span>
            <span class="sh-nav-dropdown-description">Get .photos for your photography portfolio or .kitchen for your restaurant. Find your unique domain with over 500 domain extensions to choose from.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">We value your privacy</span>
            <span class="sh-nav-dropdown-description">We hide your name, address, phone number and email from our WHOIS directory for free on applicable domains.</span>
            <a href="" class="sh-nav-dropdown-morelink"><span>More reasons to choose SiteHeft Domains</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navWebsitesClick() {
    if(document.querySelector("#navWebsites").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navWebsites").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navWebsites").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navWebsitesClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Websites</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Website Builder</a></li>
            <li><a href="">WordPress</a></li>
            <li><a href="">Shopping Cart</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why Use SiteHeft Website Builder?</span>
            <span class="sh-nav-dropdown-subtitle">Build an amazing website in just under an hour</span>
            <span class="sh-nav-dropdown-description">Take advantage of designs created just for your industry and then customize them to reflect your one-of-a-kind idea.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">Responsive mobile design</span>
            <span class="sh-nav-dropdown-description">More than half of the world's web traffic comes from mobile. Give your mobile visitors a great experience with our website builder.</span>
            <a href="" class="sh-nav-dropdown-morelink"><span>Learn more about SiteHeft Website Builder</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navHostingClick() {
    if(document.querySelector("#navHosting").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navHosting").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navHosting").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navHostingClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Hosting</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Shared</a></li>
            <li><a href="">WordPress</a></li>
            <li><a href="">Business</a></li>
            <li><a href="">Virtual Private Server (VPS)</a></li>
            <li><a href="">Dedicated Server</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why Choose SiteHeft Web Hosting?</span>
            <span class="sh-nav-dropdown-subtitle">Powered by the world's largest web hosting provider</span>
            <span class="sh-nav-dropdown-description">Your website deserves a good home. That's why we partnered with the world's largest web host to bring your website reliability and performance.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">Plans that grow with you</span>
            <span class="sh-nav-dropdown-description">Outgrew your current plan? No worries, just a few clicks and your website is ready to take on the world. </span>
            <a href="" class="sh-nav-dropdown-morelink"><span>Learn more about SiteHeft Web Hosting</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navSecurityClick() {
    if(document.querySelector("#navSecurity").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navSecurity").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navSecurity").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navSecurityClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Security</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Website Security</a></li>
            <li><a href="">SSL</a></li>
            <li><a href="">Managed SSL Service</a></li>
            <li><a href="">Website Backup</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why your website needs an SSL certificate.</span>
            <span class="sh-nav-dropdown-subtitle">It protects your website from attacks</span>
            <span class="sh-nav-dropdown-description">SSL encrypts data in transit so when bad guys intercept, they would only see a jumbled mess, protecting sensitive information.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">Helps with your search engine rankings</span>
            <span class="sh-nav-dropdown-description">Websites with SSL installed appears higher in search results, making it easy for visitors to find your website.</span>
            <a href="" class="sh-nav-dropdown-morelink"><span>Learn more about SSL</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navMarketingClick() {
    if(document.querySelector("#navMarketing").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navMarketing").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navMarketing").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navMarketingClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Marketing</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Email Marketing</a></li>
            <li><a href="">Search Engine Optimisation (SEO)</a></li>
            <li><a href="">Shopping Cart</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why SEO is important for your website.</span>
            <span class="sh-nav-dropdown-subtitle">Appear at the top of organic search results</span>
            <span class="sh-nav-dropdown-description">How often have you gone past the first page of search results? Being at the top means high visibility, leading to more clicks to your website.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">Enhances the trust and credibility of your brand</span>
            <span class="sh-nav-dropdown-description">People are more likely to trust a top-ranking result to provide them with what they want to see and what they are looking for.</span>
            <a href="" class="sh-nav-dropdown-morelink"><span>Learn more about SEO</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navEmailClick() {
    if(document.querySelector("#navEmail").classList.contains("sh-nav-selected")) {
        if (window.scrollY < 65) {
            setTimeout(() => {
                document.querySelector(".sh-nav").style.backgroundColor = "";
                document.querySelector(".sh-nav").style.boxShadow = "";
                document.querySelector(".shLogo").style.fill = "#ffffff";
                document.querySelector(".navGrp1").style.color = "white";
                document.querySelector(".navGrp2").style.color = "white";
            }, 300);
        }
        document.querySelector("#navEmail").classList.remove("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "none";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-out";
        document.querySelector(".sh-nav-dropdown").style.overflow = "hidden";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "0";
        document.querySelector("body").style.overflowY = "scroll";
    } else {
        if (document.querySelector(".sh-nav-selected")) {
            document.querySelector(".sh-nav-selected").classList.remove("sh-nav-selected");
        }
        document.querySelector(".sh-nav").style.backgroundColor = "white";
        document.querySelector(".sh-nav").style.boxShadow = "0 1px 6px 0 rgba(0,0,0,0.2)";
        document.querySelector(".shLogo").style.fill = "#d14739";
        document.querySelector(".navGrp1").style.color = "black";
        document.querySelector(".navGrp2").style.color = "black";
        document.querySelector("#navEmail").classList.add("sh-nav-selected");
        document.querySelector(".sh-background").style.display = "block";
        document.querySelector(".sh-nav-dropdown").style.transition = "0.3s ease-in";
        document.querySelector(".sh-nav-dropdown").style.overflow = "";
        document.querySelector(".sh-nav-dropdown").style.maxHeight = "100%";
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".sh-background").setAttribute("onclick", "navMarketingClick()");
        document.querySelector(".sh-nav-dropdown").innerHTML = `<div class="sh-nav-dropdown-left">
        <span class="sh-nav-dropdown-title">Email</span>
        <ul class="sh-nav-dropdown-navlinks">
            <li><a href="">Workspace Email</a></li>
            <li><a href="">Workspace Online Storage</a></li>
            <li><a href="">Workspace Calendar</a></li>
        </ul>
        </div>
        <div class="sh-nav-dropdown-right">
            <span class="sh-nav-dropdown-title">Why you need a professional email address?</span>
            <span class="sh-nav-dropdown-subtitle">It's simple, and easy to remember</span>
            <span class="sh-nav-dropdown-description">Email addresses ending with your domain are often shorter and easy to remember as customers can easily associate you with your brand.</span>
            <span class="sh-nav-dropdown-subtitle" style="margin-top:20px">Promotes both your brand and your credibility</span>
            <span class="sh-nav-dropdown-description">Clients are more likely to trust an email sent from an email address like jane@janesflower.com rather than janesflower@gmail.com.</span>
            <a href="" class="sh-nav-dropdown-morelink"><span>Learn more about SEO</span>&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
        </div>`;
    }
};

function navSlideLeftOpen() {
    document.querySelector(".sh-nav-slideleft").style.transition = "0.3s ease-in";
    document.querySelector(".sh-nav-slideleft").style.maxWidth = "100%";
    document.querySelector("body").style.overflowY = "hidden";
    setTimeout(() => {
        document.querySelector(".sh-nav-slideleft").style.overflow = "visible";
        document.querySelector(".sh-nav-slideleft-close").style.display = "block";
    }, 300);
};

function navSlideLeftClose() {
    document.querySelector(".sh-nav-slideleft").style.transition = "0.3s ease-out";
    document.querySelector(".sh-nav-slideleft").style.overflow = "hidden";
    document.querySelector(".sh-nav-slideleft-close").style.display = "none";
    document.querySelector(".sh-nav-slideleft").style.maxWidth = "0";
    document.querySelector("body").style.overflowY = "scroll";
};

function navDomainsMobileClick() {
    document.querySelector(".sh-nav-slideright").style.transition = "0.3s ease-in";
    document.querySelector(".sh-nav-slideright").style.maxWidth = "100%";
    setTimeout(() => {
        document.querySelector(".sh-nav-slideright").style.overflow = "visible";
        document.querySelector(".sh-nav-slideright-back").style.display = "block";
        document.querySelector(".sh-nav-slideright-inner").innerHTML = `
        <span class="sh-nav-slideright-title">Domain Search</span>
        <div class="sh-nav-slideright-searchgrp">
            <input class="sh-nav-slideright-search" type="text" placeholder="Find your new domain"><button class="sh-nav-slideright-searchbtn"><i class="fas fa-search" style="margin-right:10px"></i>Find</button>
        </div>
        <span class="sh-nav-slideright-title">Other Domain Services</span>
        <ul class="sh-nav-slideright-navlinks">
            <li><a href="">Bulk Registration</a></li>
            <li><a href="">Domain Transfer</a></li>
            <li><a href="">Bulk Transfer</a></li>
            <li><a href="">Domain Backorder</a></li>
        </ul>
        <div class="sh-nav-slideright-info">
            <span class="sh-nav-slideright-title">Why Choose SiteHeft Domains?</span>
            <span class="sh-nav-slideright-subtitle">Be spoilt for choice</span>
            <span class="sh-nav-slideright-description">Get .photos for your photography portfolio or .kitchen for your restaurant. Find your unique domain with over 500 domain extensions to choose from.</span>
            <span class="sh-nav-slideright-subtitle" style="margin-top:20px">We value your privacy</span>
            <span class="sh-nav-slideright-description">We hide your name, address, phone number and email from our WHOIS directory for free on applicable domains.</span>
            <a href="" class="sh-nav-slideright-morelink"><span>More reasons to choose SiteHeft Domains</span></a>
        </div>
        `;
    }, 300);
}
