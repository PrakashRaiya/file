jQuery( document ).ready(function($) {
	var ques_value = '';
	$("#add").click(function(){
  		var count = $("input[name=count]").val();
  		// console.log(count);
  		count = parseInt(count) + 1;

      $(".outer_container").append('<div id="div'+count+'" class="form_container"><form class="form" id="form_'+count+'"><input type="text" class="form_question" name="ques_'+count+'" placeholder="Question #'+count+'"><textarea class="form_answer" rows="2" placeholder="Answer #'+count+'"></textarea></form><span class="delete_icon"><i class="fa fa-trash-o"></i></span></div>');
  		$("input[name=count]").val(count);

      jQuery(".form_question, .form_answer").keyup(function(){
        json_ld_script();
      });

      jQuery(".form_question, .form_answer").keydown(function(){
        json_ld_script();
      });

      $('.delete_icon').click(function(){
        $(this).parent().remove();
        json_ld_script();

        jQuery( ".form" ).each(function( index ) {
	    	jQuery('.form_question', jQuery(this)).attr('placeholder', 'Question #'+(index+1));
	    	jQuery('.form_answer', jQuery(this)).attr('placeholder', 'Answer #'+(index+1));
	  	});
      });

      jQuery( ".form" ).each(function( index ) {
	    	jQuery('.form_question', jQuery(this)).attr('placeholder', 'Question #'+(index+1));
	    	jQuery('.form_answer', jQuery(this)).attr('placeholder', 'Answer #'+(index+1));
	  	});
	});

  $("#copy").click(function(){
    $('.faq_script').select();
    document.execCommand('copy');
  });

  $("input[type=radio][name=script_type]").change(function(){
    if($(this).val() == 'json-ld_script'){
      $('#wordpress_script').css('display', 'none');
      $('#wordpress_block').css('display', 'none');
      $('#json-ld_script').css('display', 'block');

      $("#copy").click(function(){
        $('.faq_script').select();
        document.execCommand('copy');
      });
    }
    else{
      $('#wordpress_script').css('display', 'block');
      $('#wordpress_block').css('display', 'block');
      $('#json-ld_script').css('display', 'none');

      $("input[type=radio][name=select_type]").change(function(){
        if($(this).val() == 'post'){
          $('.id_container').html('<input type="number" class="post_id" name="post" placeholder="Enter Post ID">');
        }
        else{
          $('.id_container').html('<input type="number" class="page_id" name="page" placeholder="Enter Page ID">');
        }

        jQuery(".form_question, .form_answer, .post_id, .page_id").keyup(function(){
          json_ld_script();
        });

        jQuery(".form_question, .form_answer, .post_id, .page_id").keydown(function(){
          json_ld_script();
        });
      });

      $("#copy").click(function(){
        $('.wordpress_script').select();
        document.execCommand('copy');
      });
    }
  });

  $('.delete_icon').click(function(){
    $(this).parent().remove();
    json_ld_script();

    jQuery( ".form" ).each(function( index ) {
    	jQuery('.form_question', jQuery(this)).attr('placeholder', 'Question #'+(index+1));
    	jQuery('.form_answer', jQuery(this)).attr('placeholder', 'Answer #'+(index+1));
  	});

  });
});

// jQuery.fn.swapWith = function(to) {
//   return this.each(function() {
//     var copy_to = $(to).clone();
//     var copy_from = $(this).clone();
//     $(to).replaceWith(copy_from);
//     $(this).replaceWith(copy_to);
//   });
// };

// jQuery(document).ready(function($) {
//   options = { revert: true };
//   $(".form_container").draggable(options);

//   $('.outer_container').droppable({
//     activeClass: "active-tile",
//     hoverClass: "hover-tile",
//     drop: function(event, ui) {
//       var draggable = ui.draggable;
//       var droppable = this;

//       window.setTimeout(function(){
//         var dragContainer = draggable[0].id;
//         // var dropContainer = event.dataTransfer.getData("dropContainer");
//         // $('#'+dragContainer).swapWith($('#'+dropContainer));
//         $('#div1').swapWith($('#div2'));
//         $(".form_container").draggable(options);
//       }, 600);
//     }
//   });
// });

jQuery(document).ready(function(){
  var quesArray = [];
  quesArray.push({
    '@type': 'Question',
    'name': '',
    'acceptedAnswer': new Array({
      '@type': 'Answer', 
      'text': '',
    })
  });

  data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": quesArray
  };

  //creating the script element and storing the JSON-LD
  var output_string = JSON.stringify(data);
  var textarea = jQuery('.faq_script');
  textarea.val('');
  textarea.val('<script type="application/ld+json">'+output_string+'</script>');
  
  jQuery(".form_question, .form_answer, .post_id, .page_id").keyup(function(){
    json_ld_script();
  });

  jQuery(".form_question, .form_answer, .post_id, .page_id").keydown(function(){
    json_ld_script();
  });

  jQuery("#add").click(function(){
    json_ld_script();

    jQuery( ".form" ).each(function( index ) {
    	jQuery('.form_question', jQuery(this)).attr('placeholder', 'Question #'+(index+1));
    	jQuery('.form_answer', jQuery(this)).attr('placeholder', 'Answer #'+(index+1));
  	});
  });
});

function json_ld_script(){
  var htmlplus="";
  var quesArray = [];
  jQuery( ".form" ).each(function( index ) {
    var childtest = jQuery(this).children();
htmlplus=htmlplus +'<section class="sc_fs_faq sc_card"><div><h2>'+childtest[0].value+'</h2><div><p>'+childtest[1].value+'</p></div></div></section>';

    quesArray.push({
      '@type': 'Question',
      'name': childtest[0].value,
      'acceptedAnswer': new Array({
        '@type': 'Answer', 
        'text': childtest[1].value,
      })
    });
  });

  data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": quesArray
  };

  //creating the script element and storing the JSON-LD
  var output_string = JSON.stringify(data);
  var textarea = jQuery('.faq_script');
  textarea.val('');
  textarea.val('<script type="application/ld+json">'+output_string+'</script>'+htmlplus+'');

  var current_date = new Date();
  var current_time = current_date.getTime();
  
  var wordpress_textarea = jQuery('.wordpress_script');
  wordpress_textarea.val('');

  var post = jQuery('.post_id').val();
  if(typeof post !== "undefined" && post != ''){
    wordpress_textarea.val('function mw_faqhook_post_'+current_time+'() { \nif(is_single ("'+jQuery('.post_id').val()+'")){ \n?> \n<script type="application/ld+json">'+output_string+'</script> \n<?php \n} \n} \nadd_action("wp_head", "mw_faqhook_post_'+current_time+'");');
  }

  var page = jQuery('.page_id').val();
  if(typeof page !== "undefined" && page != ''){
    wordpress_textarea.val('function mw_faqhook_page_'+current_time+'() { \nif(is_page ("'+jQuery('.page_id').val()+'")){ \n?> \n<script type="application/ld+json">'+output_string+'</script> \n<?php \n} \n} \nadd_action("wp_head", "mw_faqhook_page_'+current_time+'");');
  }
}


window.onbeforeunload=function(){return'Your work will be lost.'}
