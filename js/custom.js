$(document).ready(function(){
    $("#customFile").change(function (e) {
        $(this).parents(".file_upload").find(".select_file_show").text(e.target.files[0].name);
      });
});