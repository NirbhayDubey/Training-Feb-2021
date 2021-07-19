$(document).ready(function () {
  // add technology form
  $("button.addTechbtn").click(function () {
    let tp = $(this).parent().find("h4").text();
    tp = tp.split(" ");
    tp = tp[0].toLowerCase();
    $("input#techType").val(tp);
  });

  //delete technology
  // $('a.deleteTech').click(
  //     function () {
  //         if ( confirm('Are You Sure, You want to delete this tech?') ) location.href = $(this).attr('href')
  //         else location.reload()
  //     }
  // )

  //edit technology form
  //     $('button.updateTechbtn').click(
  //         function () {
  //             let name = $('this').parent().find('div.elementName').html();
  //             let type = $('this').parent().find('div.elementType').html();
  // console.log(name, type)
  //             $('input#techType2').val(type)
  //             $('input#name2').val(name)
  //         }
  //     )
});
