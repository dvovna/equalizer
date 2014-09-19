(function () {
    $.fn.equalizer = function (selector, timeout, columnWidth) {
        var colWidth = columnWidth ? columnWidth : 1,
            $el = $(selector),
            $elWidth = $el.width(),
            $elHeight = $el.height(),
            colsNumber = Math.ceil($elWidth / colWidth),
            colsArr = new Array(colsNumber),
            spanEltsArr = [],
            spanElts;

        $el.css({
            lineHeight: $elHeight + 'px'
        });

        for (var i = 0; i < colsArr.length; i++) {
            spanEltsArr.push($('<span/>').width(colWidth));
        }

        $el.append(spanEltsArr);

        spanElts = $el.find('span');

        run_equalizer(selector, timeout);

        function run_equalizer (selector, timeout) {
            spanElts.each(function (indx, el) {
                var colHeight = Math.round($elHeight * Math.random());

                $(el).animate({
                        height: colHeight
                    },
                    timeout,
                    'linear'
                );
            });

            spanElts.animate({
                    height: $elHeight / 2
                },
                timeout,
                'linear',
                function () {
                    run_equalizer(selector, timeout);
                }
            );
        }
    };

    $(document).ready(function () {
        $.fn.equalizer('#eq_1 .equalizer', 1000, 2);
        $.fn.equalizer('#eq_2 .equalizer', 1000, 2);
        $.fn.equalizer('#eq_3 .equalizer', 1000, 2);
    });

}());