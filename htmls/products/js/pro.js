$(function(){
    var Url = window.location.href;
    var ProKey = Url.indexOf('/products')+10;
    var ProKeyIn = Url.substr(ProKey);
    var ProkeysIndex = ProKeyIn.indexOf('?');

    //  get products key words & products nub
    var ProKeys = ProKeyIn.substr(0,ProkeysIndex-9);
    var ProNub = ProKeyIn.substr(ProkeysIndex+6);



    // ajax load products list
    $.ajax({
        url : 'json/'+ ProKeys + ProNub +'.txt',
        dataType : 'json',
        success : function(data){
            productsList(data)
        }
    });

    function productsList(data){

        var proListHtml = '';
        for ( var i in data){
            /*href="'+ ProKeys +'List.html?list'+ ProNub +'&detail=01"*/
            proListHtml += '<a class="proDetail" data-info="'+ (i-1) +'"><img src="'+ data[i][1] +'"></a>' +
                '<h2>'+ data[i][0] +'</h2>';
        };
        $('.allWidth').html(proListHtml);



        $('.proDetail').on('click',function(){

            //  mumen return
            if(ProKeys == 'mumen' || ProKeys == 'yigui'){
                return true;
            }else{

                // get product Detail nub
                var infoNub = $(this).attr('data-info');
                var infoData = '';
                // get product Detail img data
                $.ajax({
                    url : 'json/' + ProKeys + 'List.txt',
                    type: 'get',
                    dataType : 'json',
                    error : function(){
                        console.log('error!')
                    },
                    success : function(data){
                        var detailinfo = data[ProNub-1][infoNub];
                        for(var i =0; i<detailinfo.length; i++){

                            infoData += '<img src="'+ detailinfo[i] +'"/>';
                        }
                        $('.allWidth').html(infoData);
                        $('html,body').animate({scrollTop:0},200);

                    }
                });
            }

        })

    }

})