$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        margin: 0,
        nav: true,
        autoWidth: true,
        rewind:false,
        dots: false,
        startPosition: 2,
        responsive: {
            320: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 5
            },
            responsiveBaseElement: '.slider'
        }
    })
})


function closeMenu() {
    if (!$('.menu').hasClass('menu--closed')) {
        $('.menu').addClass('menu--closed');
    }
}


function openMenu() {
    $('.menu').toggleClass('menu--closed');
}


function scrollAndChoose(type) {
    $('.catalog')[0].scrollIntoView({behavior: 'smooth', block: 'start'});
    this.filterProducts(type);
}


function filterProducts(type) {
    $('.catalog__item').removeClass('active');
    $('.catalog__filter-btn').removeClass('active-filter-btn');
    $('.catalog__item').show();
       switch (type) {
        case 'erotic':
            $('.catalog__filter-btn--daily').removeClass('active-filter-btn');
            $('.catalog__filter-btn--erotic').addClass('active-filter-btn');
            $('.catalog__item').each((idx, elem) => {
            if ($(elem).attr('product-type') == 'erotic') {
                $(elem).addClass('active');
            } else {}
        });
        $('.catalog__item').not($('.active')).hide();
        break;
        case 'daily':
            $('.catalog__filter-btn--erotic').removeClass('active-filter-btn');
            $('.catalog__filter-btn--daily').addClass('active-filter-btn');
            $('.catalog__item').each((idx, elem) => {
                if ($(elem).attr('product-type') == 'daily') {
                    $(elem).addClass('active');
                } else {}
            });
            $('.catalog__item').not($('.active')).hide();
        break;
        default: 
        $('.catalog__item').removeClass('active');
        $('.catalog__item').show();
    };
}


function changeSize(e) {
    if ($(e.target).attr('disabled') == 'disabled') {
    
    } else {
        $('.catalog__size-item').removeClass('active-size');
        $(e.target).addClass('active-size');  
    }
}

function buyThisProduct(e) {
    $('body').addClass('overlay');
    $('.order-pop-up').show();
    const photo = $(e.target).parent().children('.catalog__photo-wrapper').children('.catalog__photo').attr('src');
    const title = $(e.target).parent().children('.catalog__item-name').text();
    const size = $(e.target).parent().children('.catalog__size-list').children('.active-size').text();
    const color = $(e.target).parent().children('.colors-list').children('.colors-list__item-wrapper').children('.colors-list__radio:checked').val();
    $('.order-pop-up__photo').attr('src', photo);
   $('.order-pop-up__product-title').text(title);
   $('.size-list__item').each((idx, elem) => {
        if ($(elem).val() == size) {
            $(elem).prop('selected', true);
        }
    })
    $('.pop-up-radio').each((idx, elem) => {
        if ($(elem).val() == color) {
            $(elem).prop('checked', true);
        }
    })
}


function closePopup() {
    $('.order-pop-up__photo').attr('src', '');
    $('.order-pop-up__product-title').text('');
    $('.size-list').val('default');
    $('.pop-up-radio').prop('checked', false);
    $('.order-pop-up__user-name').val('');
    $('.order-pop-up__user-phone').val('');
    $('.catalog__size-item').removeClass('active-size');
    $('body').removeClass('overlay');
    $('.order-pop-up').hide();
}

