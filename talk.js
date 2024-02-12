$(function() {
    $('#yes').click(function(event) {
        modal('不愧是我的璐璐～', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();
        });
    });
    $('#no').click(function(event) {
        modal('很开心我们出现在彼此的生命里', A);
    });
});

function A() {
    modal('虽然我不是那个一直很暖心的人', B);
}

function B() {
    modal('也会有闹脾气和不理解', C);
}

function C() {
    modal('但是我希望在你眼里我依然可以是很好的那一个', D);
}

function D() {
    modal('我始终都想和你一起去探索这个世界', E);
}

function E() {
    modal('开始一段新的旅途，新的冒险', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('我们一起努力成为彼此更好的人', H);
}

function H() {
    modal('不准放手，待在我身边叭', I);
}

function I() {
    modal('而且你也跑不掉，我不会松开你的手', J)
}

function J() {
    modal('我会一直喜欢你，这点你可以反复来确认哦～', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
