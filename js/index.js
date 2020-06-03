$(document).ready(function() {
    function getUserPostsUi(posts) {
        $(".pageloader").fadeOut("slow");

        var str = "";
        var i;
        for (i = 2; i < 5; i++) {


            str = str + '<div class="col-lg-4 col-md-6 col-sm-12" >' +
                '<div class="card" style="height:320px;width:250px">' +
                '<h4 class="card-header"><b>' + posts[i].title.substr(0, 30) + '</b></h4>' +
                '<div class="card-body">' +
                '<h5 class="card-title"><b> Description</b></h5>' +
                '<p class="card-text">' + posts[i].body.substr(0, 80) + '.........' + '</p>' +
                '</div>' +
                '<div class="card-footer">' +
                '<button type="button" class="btn btn-primary" data-id="" data-toggle="modal" data-target="#exampleModal">Read More</button>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
        $("#cardId").html(str);
    }
    var $post;
    //var i = 0;
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).done(function(post) {
        console.log(post);

        getUserPostsUi(post);
    }).fail(function(error) {
        console.log(error);
    });

    function getUserPhotosUi(photos) {
        $(".pageloader").fadeOut("slow");
        var pht = "";
        var i;
        for (i = 0; i < 6; i++) {

            pht = pht + '<div class="col-lg-4 col-md-6 col-sm-12" >' +
                '<div class="card-group">' +
                '<div class="card border-dark mb-3" style="max-width: 18rem;">' +
                '<img class="card-img-top" src="' + photos[i].thumbnailUrl + '" alt="Card image cap">' +
                '<div class="card-body text-dark">' +
                '<h5 class="card-title"><b> Photo title </b></h5>' +
                '<p class="card-text">' + photos[i].title.substr(0, 40) + '</p>' +
                '<button type="button" class="btn btn-primary" ><a href="' + photos[i].url + '">See Full Screen</a></button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';



        }


        $("#photoId").html(pht);
    }
    var $photo;
    //var i = 0;
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos'
    }).done(function(photo) {
        console.log(photo[0]);

        getUserPhotosUi(photo);
    }).fail(function(error) {
        console.log(error);
    });

    function getUserTodosUi(todos) {
        $(".pageloader").fadeOut("slow");
        var tds = "";
        var i;
        for (i = 0; i < 10; i++) {

            tds = tds + '<tr>' +
                '<th scope="row">' + todos[i].id + '</th>' +
                '<td>' + todos[i].title + '</td>' +
                '<td>' +
                (todos[i].completed == true ? '<h4><span class="badge badge-success"> Completed </span></h4>' : '<h3><span class="badge badge-danger"> Incomplete </span></h3>') +
                '</td>' +
                '</tr>';



        }


        $("#todoId").html(tds);
    }
    var $post;
    //var i = 0;
    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }).done(function(todo) {
        console.log(todo);

        getUserTodosUi(todo);
    }).fail(function(error) {
        console.log(error);
    });
});