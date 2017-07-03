var Script = (function () {
    var imgsB = ['img/it.png', 'img/diplom.jpg', 'img/websert.png'];
    var arr2 = ['.design', '.communication', '.coordination', '.safety', '.night-work', '.develop'];
    var reg3 = /^[a-z]+[0-9]{2}@((gmail)|(ukr)|(mail)){1}\.                 ((net)|(ua)|(ru)|(com)){1}$/;
    var reg1 = /^[A-Z]{1}[a-z]/;
    var i = 0;
    var wind = window.innerWidth;
    var flag = true;
    var first1 = $('.percent1').text()
        , first2 = $('.percent2').text()
        , first3 = $('.percent3').text();
    var menuButt = $('.header__menu-block');
    var clickAbout = $('.section__text-learn')
        , css = $('#css')
        , js = $('#js')
        , jq = $('#jq')
        , all = $('#all')
        , photo = $('.sprite-photo')
        , respons = $('.sprite-respons')
        , retina = $('.sprite-retina')
        , craft = $('.sprite-craft')
        , close = $('.popap__cross');

    function Load() {
        menuButt.on('click', MainMenu.bind(this));
        css.on('click', SecondMenuCss.bind(this));
        all.on('click', SecondMenuAll.bind(this));
        js.on('click', SecondMenuJs.bind(this));
        jq.on('click', SecondMenuJq.bind(this));
        $('.datepicker').datepicker();
        photo.on('click', MobilePhoto.bind(this));
        respons.on('click', MobileResp.bind(this));
        craft.on('click', MobileCraft.bind(this));
        retina.on('click', MobileRetina.bind(this));
        close.on('click', Close.bind(this));
    }

    function MainMenu() {
        if (flag) {
            $('.header__menu-left').css({
                display: 'block'
                , zIndex: 3
                , position: 'fixed'
            }).animate({
                right: '5%'
            }, 2000);
            $('.header__menu-block').css({
                backgroundSize: '30%'
                , position: 'fixed'
                , zIndex: 3
            })
            flag = false;
            console.log(flag);
        }
        else {
            $('.header__menu-left').css({
                display: 'none'
            }).animate({
                right: '-15%'
            }, 2000);
            $('.header__menu-block').css({
                backgroundSize: '100%'
            })
            flag = true;
            console.log(flag + 'flag');
        }
    }
    /////learn more
    function Hover() {
        $('.section__text-learn').click(function () {
            if (flag) {
                $('.section-readmore').css({
                    display: 'block'
                })
                $('.section__text-learn').val('HIDE MORE');
                flag = false;
            }
            else {
                $('.section-readmore').css({
                    display: 'none'
                })
                $('.section__text-learn').val('LEARN MORE');
                flag = true;
            }
        })
    }
    ////menu 
    function SecondMenuCss() {
        $('#main__works-js').css({
            visibility: 'hidden'
        });
        $('#main__works-html').css({
            visibility: 'visible'
        });
        $('#main__works-jq').css({
            visibility: 'hidden'
        });
        $('#main__works-table').css({
            visibility: 'hidden'
        });
        Load()
    }

    function SecondMenuAll() {
        $('#main__works-js').css({
            visibility: 'hidden'
        });
        $('#main__works-html').css({
            visibility: 'hidden'
        });
        $('#main__works-jq').css({
            visibility: 'hidden'
        });
        $('#main__works-table').css({
            visibility: 'visible'
        });
        Load();
    }

    function SecondMenuJs() {
        $('#main__works-js').css({
            visibility: 'visible'
        });
        $('#main__works-html').css({
            visibility: 'hidden'
        });
        $('#main__works-jq').css({
            visibility: 'hidden'
        });
        $('#main__works-table').css({
            visibility: 'hidden'
        });
        Load();
    }

    function SecondMenuJq() {
        $('#main__works-js').css({
            visibility: 'hidden'
        });
        $('#main__works-html').css({
            visibility: 'hidden'
        });
        $('#main__works-jq').css({
            visibility: 'visible'
        });
        $('#main__works-table').css({
            visibility: 'hidden'
        });
        Load();
    }
    ////function mobile popap (screen phone)
    function MobilePhoto() {
        if (window.innerWidth <= 690) {
            $('.popap').css({
                display: 'block'
            });
            $('.popap__title').text('BEAUTIFUL PHOTO');
            $('.popap__text').text('Often when writing Javascript (JS) your indentation, spacing, and other formatting can become a bit disorganized. It is also common for multiple developers to work on a single project who have different formatting techniques.');
        }
        Load();
    }

    function MobileResp() {
        if (window.innerWidth <= 690) {
            $('.popap').css({
                display: 'block'
            });
            $('.popap__title').text('FULL RESPONSIVE');
            $('.popap__text').text('Responsive web design (RWD) is an approach to web design aimed at allowing desktop webpages to be viewed in response to the size of the screen or web browser one is viewing with. ');
        }
        Load();
    }

    function MobileRetina() {
        if (window.innerWidth <= 690) {
            $('.popap').css({
                display: 'block'
            });
            $('.popap__title').text('RETINA READY');
            $('.popap__text').text('Retina display devices show more pixels per square inch to allow for a crisper display and in order not to let the resulting display appear too small elements are mapped to 2 pixels instead of one (otherwise they would be tiny).');
        }
        Load();
    }

    function MobileCraft() {
        if (window.innerWidth <= 690) {
            $('.popap').css({
                display: 'block'
            });
            $('.popap__title').text('CAFTED COFFEESCRIPT');
            $('.popap__text').text('Learn CoffeeScript, the powerful little language that compiles into JavaScript. Take a sip of our CoffeeScript tutorial & learn to get more done with less code.');
        }
        Load();
    }
    ///animate Skill
    function Skill() {
        if (window.innerWidth <= 690) {
            setInterval(function () {
                $(".peranimate1").animate({
                    'width': first1 * 3
                }, 8000, 'easeOutBounce').animate({
                    'width': first1 * 2
                }, 8000, 'easeOutBounce')
            }, 3000);
            setInterval(function () {
                $(".peranimate2").animate({
                    'width': first2 * 3
                }, 8000, 'easeOutBounce').animate({
                    'width': first2 * 2.5
                }, 8000, 'easeOutBounce')
            }, 2000);
            setInterval(function () {
                $(".peranimate3").animate({
                    'width': first3 * 3
                }, 8000, 'easeOutBounce').animate({
                    'width': first3 * 2.5
                }, 8000, 'easeOutBounce'), 2500
            });
        }
        else if (window.innerWidth >= 1025) {
            setInterval(function () {
                $(".peranimate1").animate({
                    'width': first1 * 10
                }, 8000, 'easeOutBounce').animate({
                    'width': first1 * 8
                }, 8000, 'easeOutBounce')
            }, 3000);
            setInterval(function () {
                $(".peranimate2").animate({
                    'width': first2 * 10
                }, 8000, 'easeOutBounce').animate({
                    'width': first2 * 7.5
                }, 8000, 'easeOutBounce')
            }, 2000);
            setInterval(function () {
                $(".peranimate3").animate({
                    'width': first3 * 10
                }, 8000, 'easeOutBounce').animate({
                    'width': first3 * 8.5
                }, 8000, 'easeOutBounce'), 2500
            });
        }
        else if (670 <= window.innerWidth <= 1025) {
            setInterval(function () {
                $(".peranimate1").animate({
                    'width': first1 * 6
                }, 8000, 'easeOutBounce').animate({
                    'width': first1 * 5
                }, 8000, 'easeOutBounce')
            }, 3000);
            setInterval(function () {
                $(".peranimate2").animate({
                    'width': first2 * 6
                }, 8000, 'easeOutBounce').animate({
                    'width': first2 * 5.5
                }, 8000, 'easeOutBounce')
            }, 2000);
            setInterval(function () {
                $(".peranimate3").animate({
                    'width': first3 * 6
                }, 8000, 'easeOutBounce').animate({
                    'width': first3 * 4.5
                }, 8000, 'easeOutBounce'), 2500
            });
        }
    }
    ///Slider
    function Slider() {
        ++i;
        if (i >= imgsB.length) i = 0;
        document.querySelector('.main__slide').style.backgroundImage = 'url(' + imgsB[i] + ')';;
        document.forms[0].elements[i].checked = true;
    }

    function playSlide() {
        setInterval(Slider, 3000);
    };
    ///popap
    function Develop() {
        for (var i = 0; i <= arr2.length; i++) {
            $(arr2[i]).click(function () {
                $(this).slideUp(2000).slideDown(1000);
                $(this).next('.caption').css({
                    color: '#820822'
                })
            })
        }
    }

    function Close() {
        $('.popap').css({
            display: 'none'
        })
        Load();
    }
    ///Send Mail
    function Send() {
        $("#form-send").submit(function () { //Change
            var th = $(this);
            $.ajax({
                type: "POST"
                , url: "mail.php", //Change
                data: th.serialize()
            }).done(function () {
                alert("Thank you!");
                setTimeout(function () {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    }
    return {
        Slider: Slider
        , playSlide: playSlide
        , Load: Load
        , Develop: Develop
        , Skill: Skill
        , Hover: Hover
        , Send: Send
    }
})();
Script.Hover();
Script.Develop();
Script.Load();
Script.playSlide();
Script.Skill();
Script.Send();