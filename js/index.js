var $$ = {
    searchResult: function () {
        $("#btnSearch").on('click', function () {
            var number = $("#number").val();
            $.ajax({
                url: 'controller/result.php',
                type: 'POST',
                data: {
                    id: number
                }, success: function (res) {
                    var obj = JSON.parse(res);
                    if(obj.status){
                        var result = '';
                        for(var i = 0; i < obj.data.length; i++){
                            var searchRes = "<div>\n" +
                                "<p>"+ obj.data.title +"</p>\n" +
                                "    <img src=\""+ obj.data.img_url +"\" alt=\"\"><h5>"+ obj.data.content +"</h5>\n" +
                                "    <span>"+ obj.data.time +"</span>\n" +
                                "</div>";
                            result += searchRes;
                        }
                        $("#search_result").html(result);
                    }else{
                        $("#search_result").html(obj.message);
                    }
                }, error: function (obj) {
                    alert('网络错误，请稍后重试！');
                }
        });

        })
    }
}
