$(document).ready(function() {

    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).done(function(post) {

        getUserPostsUi(post);
    }).fail(function(error) {
        console.log(error);
    });


    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos'
    }).done(function(todo) {
        console.log(todo);

        getUserTodosUi(todo);
    }).fail(function(error) {
        console.log(error);
    });


    $.ajax({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/photos'
    }).done(function(photo) {
        console.log(photo[0]);

        getUserPhotosUi(photo);
    }).fail(function(error) {
        console.log(error);
    });


    function getUserPostsUi(posts) {
        $(".pageloader").fadeOut("slow");

        let singlePostCard = "";
        for (let i = 0; i < 5; i++) {
            singlePostCard = singlePostCard +
                '<div class="col-lg-4 col-md-6 col-sm-12" >' +
                '<div class="card border-dark mb-3" style="height:320px;width:250px">' +
                '<h4 class="card-header"><b>' + posts[i].title.substr(0, 30) + '</b></h4>' +
                '<div class="card-body">' +
                '<h5 class="card-title"><b> Description</b></h5>' +
                '<p class="card-text">' + posts[i].body.substr(0, 80) + '.........' + '</p>' +
                '</div>' +
                '<div class="card-footer">' +
                '<button type="button"+ data-id="' + i + '" class="btn btn-primary" id="btn"  data-toggle="modal" data-target="#myModal">Read More</button>' +
                '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<h5 class="modal-title" id="exampleModalLabel"></h5>' +
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '</div>' +
                '<div class="modal-body">' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
        }

        $("#postContainer").html(singlePostCard);


        $(".card-footer").on("click", "button", function() {
            var bid = $(this).attr("data-id");
            $('.modal-title').html(posts[bid].title);
            $('.modal-body').html("<b> Description: </b>" + posts[bid].body);
            $('#myModal').modal('show');
        });
    }




    function getUserPhotosUi(photos) {
        $(".pageloader").fadeOut("slow");
        let singlePhoto = "";

        for (let i = 0; i < 6; i++) {
            singlePhoto = singlePhoto + '<div class="col-lg-4 col-md-6 col-sm-12" >' +
                '<div class="card-group">' +
                '<div class="card border-dark mb-3" style="width: 18rem;">' +
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

        $("#photoContainer").html(singlePhoto);
    }



    function getUserTodosUi(todos) {
        $(".pageloader").fadeOut("slow");
        let singleTodo = "";

        for (let i = 0; i < 10; i++) {

            singleTodo = singleTodo + '<tr>' +
                '<th scope="row">' + todos[i].id + '</th>' +
                '<td>' + todos[i].title + '</td>' +
                '<td>' +
                (todos[i].completed == true ? '<h4><span class="badge badge-success"> Completed </span></h4>' : '<h3><span class="badge badge-danger"> Incomplete </span></h3>') +
                '</td>' +
                '</tr>';



        }


        $("#todoContainer").html(singleTodo);
    }

});