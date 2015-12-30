var tst_host_api = "http://beta.zotey.com/m-api"; 
var tst_categories = "All-Categories";
localStorage.removeItem("slugarray");
localStorage.removeItem("final_slugarray");
var slug_array = [];
var tst_final_slug = [];
localStorage.setItem("slugarray",JSON.stringify(slug_array));
function changecheckbox(event) 
{
  	var test_input = event.target;
   if (test_input.checked)
   {
      slug_array.push([$(this).data('testslug'), $(this).val()]);
      $(this).parent().parent().css('background','rgba(236,246,248,0.99)');
   } //if checked
   else 
   {
      var remove_test_value = $(this).val();
      var remove_test_slug = $(this).data('testslug');
      var slug_temp_array = [];
      for (slug_tst=0;slug_tst<slug_array.length;slug_tst++) 
      {
         if (remove_test_slug.localeCompare(slug_array[slug_tst][0])) 
         {
             slug_temp_array.push(slug_array[slug_tst]);
             $(this).parent().parent().css('background','white');
         }//if
      }//for loop
      slug_array = slug_temp_array;
    }//else
    localStorage.setItem("slugarray",JSON.stringify(slug_array));
    tst_length_hanlder(test_input);
}//end of fnctn changecheckbox 

function tst_length_hanlder(test_input)
{
  	slug_array = JSON.parse(localStorage.getItem("slugarray"));
   var test_length = slug_array.length;
   if (test_length != 0) 
   {display_click_msg
   	var tst_dsply_msg = document.getElementById("display_click_msg");
   	$(tst_dsply_msg).css('display','none');
      var tst_book_btn = document.getElementsByClassName("book_btn")[0];
      $(tst_book_btn).css('display','block');
      var sel_tst_count = document.getElementById("tst_length");
      $(sel_tst_count).css('display','block');
      $(sel_tst_count).html("No of tests selected"+":"+"&nbsp;"+"&nbsp;"+"&nbsp;"+test_length+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;");
   }//if tst lnth
   else 
   {
      $(test_input).parent().parent().css('background','white');
      var tst_dsply_msg = document.getElementById("display_click_msg");
   	$(tst_dsply_msg).css('display','block');
      var tst_book_btn = document.getElementsByClassName("book_btn")[0];
      $(tst_book_btn).css('display','none');
      var sel_tst_count = document.getElementById("tst_length");
      $(sel_tst_count).css('display','none');
   }//else lnth  
}//fnctn ending

function book_btn_handler()
{
	slug_array = JSON.parse(localStorage.getItem("slugarray"));
   var test_count = slug_array.length;
   if (test_count != 0) 
   {
       loadingimage_handler();
       sel_test_list();
   } //if tst count
}//book fnctn

function tests_list_handler()
{
	$.ajax({
   url:tst_host_api+"/d-tests/category-tests-listing",
   type:'GET',
   dataType: 'json',
   data:{categorySlug:tst_categories},
   success:function(data)
   {
   	console.log(data);
      var tst_loading = document.getElementById("tst_loader");
      $(tst_loading).css('display','none');
	   var cust_container = document.getElementsByClassName("cust-container")[0];
	   var tst_heading_row = document.createElement('div');
      $(tst_heading_row).addClass("row m-z");
      $(tst_heading_row).attr('id','header_test_input');
      $(tst_heading_row).css('position','fixed');
      $(tst_heading_row).css('zIndex','99');
      $(tst_heading_row).css('background','white');
      $(tst_heading_row).css('paddingTop','10px');
      $(tst_heading_row).css('paddingBottom','17px');
      var tst_list_col = document.createElement('div');
      $(tst_list_col).addClass("col-md-3");
      $(tst_list_col).css('paddingTop','6px');
      var tst_head_element = document.createElement('h2');
      $(tst_head_element).html("Health Tests");
      $(tst_head_element).css('color', 'rgb(65, 167, 179)');
      $(tst_head_element).css('fontWeight','bold');
      $(tst_head_element).css('fontSize','18px');
      $(tst_list_col).append(tst_head_element);
      var tst_load_msg_book = document.createElement('div');
      $(tst_load_msg_book).addClass("col-md-5");
      var tst_load_msg = document.createElement('div');
      //$(tst_load_msg).addClass("col-md-2");
      $(tst_load_msg).attr('id','display_click_msg');
      $(tst_load_msg).html("Click check box to book");
      $(tst_load_msg).css('fontWeight','bold');
      $(tst_load_msg).css('display','block');
      $(tst_load_msg).css('paddingTop','6px');
      var tst_sel_head_row = document.createElement('div');
      //$(tst_sel_head_row).addClass("col-md-3");
      $(tst_sel_head_row).attr('id','display_seltest_btn');
      $(tst_sel_head_row).css('paddingTop','6px');
      var tst_sel_length = document.createElement('div');
      $(tst_sel_length).attr('id',"tst_length");
      $(tst_sel_length).css('float','left');
      $(tst_sel_length).css('fontWeight','bold');
      $(tst_sel_length).css('display','none');
      var tst_book_button = document.createElement('button');
      $(tst_book_button).addClass("book_btn");
      $(tst_book_button).html("Book Now");
      $(tst_book_button).css('background','#ec4949');
      $(tst_book_button).css('color','white');
      $(tst_book_button).css('border','0px');
      $(tst_book_button).css('fontWeight','bold');
      $(tst_book_button).css('borderRadius','3px');
      $(tst_book_button).css('paddingLeft','6px');
      $(tst_book_button).css('paddingRight','6px');
      $(tst_book_button).css('display','none');
      $(tst_book_button).on('click',book_btn_handler);
      var tst_search_col = document.createElement('div');
      $(tst_search_col).addClass("col-md-4");
      $(tst_search_col).css('float','right');
      $(tst_search_col).css('height','34px');
      var tst_search_cont = document.createElement('div');
      $(tst_search_cont).addClass("search-container");
      var tst_search_form = document.createElement('div');
      $(tst_search_form).addClass("form-group cust_input" );
      $(tst_search_form).on('keyup',function () 
      {
      	   $(window).scrollTop(0);
            $(tst_search_img).css('display','block');
           for (var j=0;j<data.testsList.length;j++) 
          {
           	  var tst_search_name = document.getElementById(data.testsList[j].testName);
           	  var tst_title = document.getElementById(data.testsList[j].testSlug+"_par");
           	  test_search_handler(tst_search_name,tst_title) 
           }// for 
       });//key event
      var tst_search_ip_img = document.createElement('div');
      $(tst_search_ip_img).addClass("cross_img");
      $(tst_search_ip_img).css('float','left');
      $(tst_search_ip_img).css('height','34px');
      $(tst_search_ip_img).css('borderRadius','5px 0px 0px 5px');
      $(tst_search_ip_img).css('border', '2px solid #41A7B3');
      var tst_search_input = document.createElement('input');
      $(tst_search_input).addClass("form-control");
      $(tst_search_input).attr('id','tst_search');
      $(tst_search_input).attr('type','text');
      $(tst_search_input).attr('placeholder','search');
      $(tst_search_input).css('width','257px');
      $(tst_search_input).attr('autofocus','autofocus');
      var tst_search_img = document.createElement('img');
      $(tst_search_img).attr("src","images/Black_Remove.png");
      $(tst_search_img).css('paddingTop','6px');
      $(tst_search_img).css('width','15px');
      $(tst_search_img).css('display','none');
      $(tst_search_img).css('cursor','pointer');
      $(tst_search_img).on('click',function () 
      {
      	 $(window).scrollTop(0);
          $(tst_search_input).val("");
          for (var tst=0;tst<data.testsList.length;tst++) 
          {
          	 
              var tst_input_click = document.getElementById(data.testsList[tst].testName);
              $(tst_input_click).css('display','block');
              $(tst_search_img).css('display','none');
              var tst_title = document.getElementById(data.testsList[tst].testSlug+"_par");
              $(tst_title).html(data.testsList[tst].testName);
              
           }//for loop tst	
              $("#tst_search").focus();
        });//img click 
      var tst_input_span = document.createElement('span');
      var tst_input_span_i = document.createElement('i');
      $(tst_input_span_i).addClass("fa fa-search");
      $(tst_input_span).append(tst_input_span_i);
      $(tst_search_ip_img).append(tst_search_input);
      $(tst_search_ip_img).append(tst_search_img);
      $(tst_search_form).append(tst_search_ip_img);
      $(tst_search_form).append(tst_input_span);
      $(tst_search_cont).append(tst_search_form);
      $(tst_search_col).append(tst_search_cont);
      $(tst_sel_head_row).append(tst_sel_length);
      $(tst_sel_head_row).append(tst_book_button); 
      $(tst_heading_row).append(tst_list_col);
      $(tst_heading_row).append(tst_load_msg);
      $(tst_load_msg_book).append(tst_load_msg);
      $(tst_load_msg_book).append(tst_sel_head_row);
      $(tst_heading_row).append(tst_load_msg_book);
      $(tst_heading_row).append(tst_search_col);
      $(cust_container).append(tst_heading_row);
      var tst_list_row = document.createElement('div');
      $(tst_list_row).addClass("row");
      $(tst_list_row).css('background','#fff');
      $(tst_list_row).css('paddingTop','46px');
      var tst_prjct_col = document.createElement('div');
      $(tst_prjct_col).addClass("cust-container");
      $(tst_prjct_col).css('position','fixed');
      var tst_prjct_list_cont = document.createElement('div');
      $(tst_prjct_list_cont).addClass("col-md-3 pad0");
      $(tst_prjct_list_cont).attr('id','projct-list-cont');
      var tst_prjct_ul = document.createElement('ul');
      $(tst_prjct_ul).addClass("list-group");
      $(tst_prjct_list_cont).append(tst_prjct_ul);
      $(tst_prjct_col).append(tst_prjct_list_cont);
      $(tst_list_row).append(tst_prjct_col);
      for (var catgry_tst =0;catgry_tst<data.categoryList.length;catgry_tst++) 
      {
      	
      	var curnt_catgry_slug = data.currentCategorySlug;
      	var tst_prjct_li_alltests= document.createElement('li');
         var tst_prjct_a_alltests = document.createElement('a');
         $(tst_prjct_a_alltests).attr('id',data.categoryList[catgry_tst].categorySlug);
         $(tst_prjct_a_alltests).attr('href',data.categoryList[catgry_tst].categoryName);        
         $(tst_prjct_a_alltests).html(data.categoryList[catgry_tst].categoryName);
         $(tst_prjct_li_alltests).append(tst_prjct_a_alltests);
         $(tst_prjct_ul).append(tst_prjct_li_alltests);
          if (curnt_catgry_slug.localeCompare(data.categoryList[catgry_tst].categorySlug) == 0)
          {
          	 $(tst_prjct_a_alltests).addClass("test-active-color");
          }// if catgry slug 
       }//for loop
       
      var tst_test_list_col =  document.createElement('div');
      $(tst_test_list_col).addClass("col-md-9");
      $(tst_test_list_col).css('float','right');
      //$(tst_test_list_col).css('paddingLeft','54px');
      $(tst_test_list_col).css('paddingTop','9px');
      var tests_list = document.createElement('div');
      $(tests_list).addClass("row");
      $(tests_list).attr('id','tests_listbox');
      $(tst_test_list_col).append(tests_list);
      $(tst_list_row).append(tst_test_list_col);
      $(cust_container).append(tst_list_row);
      for (var i=0;i<data.testsList.length;i++) 
      {
         var tst_name_col = document.createElement('div');
         $(tst_name_col).addClass("col-md-4");
         $(tst_name_col).attr('id',data.testsList[i].testName);
         var tst_det = document.createElement('div');
         $(tst_det).addClass("test_details");
         var tst_chk_box = document.createElement('div');
         $(tst_chk_box).addClass("check_box");
         var tst_chkbox_input = document.createElement('input');
         $(tst_chkbox_input).attr('type','checkbox');
         $(tst_chkbox_input).attr('id',data.testsList[i].testSlug+"_input");
         $(tst_chkbox_input).attr('name','test_checked');
         $(tst_chkbox_input).attr('value',data.testsList[i].testName);
         $(tst_chkbox_input).attr('data-testname',data.testsList[i].testName);
         $(tst_chkbox_input).attr('data-testslug',data.testsList[i].testSlug);
         $(tst_chkbox_input).on('click',changecheckbox);
         $(tst_chk_box).append(tst_chkbox_input);
         var tst_name_p = document.createElement('p');
         $(tst_name_p).html(data.testsList[i].testName);
         $(tst_name_p).attr('title',data.testsList[i].testName);
         $(tst_name_p).attr('id',data.testsList[i].testSlug+"_par");
         $(tst_name_p).css('maxHeight','25px');
         $(tst_name_p).css('overflow','hidden');
         $(tst_det).append(tst_chk_box);
         $(tst_det).append(tst_name_p);
         $(tst_name_col).append(tst_det);
         $(tests_list).append(tst_name_col);  
       }  //for    	     
   }//success
  });//ajax
}//fnct hndlr

window.onload = tests_list_handler();
function test_search_handler(tst_search_name,tst_title) 
{
	var tst_search_val = $("#tst_search").val();
	var tst_val_lowercase = tst_search_val.toLowerCase();
   var tst_val_exp = new RegExp(tst_val_lowercase);
 	var tst_id = tst_search_name.id;
 	var tst_id_lowercase = tst_id.toLowerCase();
 	var tst_id_lnth = tst_id.length;
 	$(tst_title).html('');
 	if (tst_val_exp.test(tst_id_lowercase)) 
   {
      $(tst_search_name).css('display','block');
      var tst_lnth = tst_val_lowercase.length;
      var tst_index = tst_id_lowercase.indexOf(tst_val_lowercase);
      var tst_str = tst_id.substr(tst_index,tst_lnth);
      var left_tst = tst_id.substr(0,tst_index);
      var tst_substr_lnth = tst_index+tst_lnth;
      var right_tst = tst_id.substr(tst_substr_lnth);
      var tst_left_name = document.createElement('div');
      $(tst_left_name).css('float','left');
      var tst_str_name = document.createElement('div');
      $(tst_str_name).html(tst_str);
      $(tst_str_name).addClass("tsts");
      $(tst_str_name).css('float','left');
      $(tst_str_name).css('background','rgb(65,167,179)');
      $(tst_str_name).css('color','white');
      $(tst_str_name).css('padding','0px');
      $(tst_str_name).css('lineHeight','1');
      $(tst_str_name).css('marginTop','3px');
      var tst_right_name =document.createElement('div');
      //$(tst_right_name).css('float','left');
      var tst_text_ip = tst_search_val ;
      var tst_text_ip_lnth = tst_search_val.length; 
      var tst_empty_space = tst_search_val.charAt(tst_text_ip_lnth -1);
      if ((right_tst.charAt(0)==" ")  ||(tst_search_val.charAt(tst_text_ip_lnth -1)==" " ))   
      {
        	  $(tst_right_name).html("&nbsp;"+right_tst);
      }//if char 
      else 
      {
        	  $(tst_right_name).html(right_tst);
      }//else
      var tst_left_length = left_tst.length;
      if (left_tst.charAt(tst_left_length -1)==" ") 
      {
        	    $(tst_left_name).html(left_tst+"&nbsp");
      } // if left
      else 
      {
             $(tst_left_name).html(left_tst);
      }//else
     $(tst_title).append(tst_left_name);
     $(tst_title).append(tst_str_name);
     $(tst_title).append(tst_right_name);
     
   }//if tst
   else 
   {
	   $(tst_search_name).css('display','none');
   } //else
}//fnct hndlr


function remove_handler()
{
 	  var tst_btn_id = this.id;
 	  var tst_ip_id = document.getElementById(this.id+"_input");
 	  $(tst_ip_id).attr('checked',false);
 	  $(tst_ip_id).parent().parent().css('background','white');
     var test_sel = $(this).parent().parent();
     $(test_sel).css('display','none');	
     var tst_num_element = document.getElementById("tst_length");
     $(tst_num_element).html('');
     var tst_local_data = JSON.parse(localStorage.getItem("slugarray"));
 	  var sel_temp_array = [];
 	  for (var i=0;i<tst_local_data.length;i++) 
     {
       if (tst_btn_id.localeCompare(tst_local_data[i][0])) 
       {
          sel_temp_array.push(tst_local_data[i]);
       }//if loc comp
     }//for loop 
     slug_array = sel_temp_array;
     localStorage.setItem("slugarray",JSON.stringify(slug_array));
     var tst = JSON.parse(localStorage.getItem("slugarray"));
     if (tst.length == 0) 
     {
     	  $(tst_num_element).html('');
     	  var tst_rem_book_btn = document.getElementsByClassName("book_btn")[0];
        $(tst_rem_book_btn).css('display','none');
        var tst_dsply_msg = document.getElementById("display_click_msg");
   	  $(tst_dsply_msg).css('display','block');
        $("#modal_test_firstpage").modal().close();
     }//if tst lnth
     else
     {
     	  var tst_rem_book_btn = document.getElementsByClassName("book_btn")[0];
        $(tst_rem_book_btn).css('display','block');
        var tst_dsply_msg = document.getElementById("display_click_msg");
   	  $(tst_dsply_msg).css('display','none');
       $(tst_num_element).html("No of tests selected"+":"+"&nbsp;"+"&nbsp;"+"&nbsp;"+tst.length+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;");
     }//else tst lnth
 }//fnctn chkng handler
 
function sel_test_list()
 {
 	  var tst_local_data = JSON.parse(localStorage.getItem("slugarray"));
 	  var tst_sel_test_list_modal = document.createElement('div');
     $(tst_sel_test_list_modal).addClass("modal");
     $(tst_sel_test_list_modal).attr('id', 'modal_test_firstpage');
     $(tst_sel_test_list_modal).css('position','relative');
     $(tst_sel_test_list_modal).css('backgroundColor','#fff');
     $(tst_sel_test_list_modal).css('paddingRight','0px');
     var tst_sel_test_close_element = document.createElement('a');
     $(tst_sel_test_close_element).addClass("close");
     $(tst_sel_test_close_element).attr('href','#');
     $(tst_sel_test_close_element).html("&times;");
     $(tst_sel_test_close_element).css('marginTop' ,'-19px');
     $(tst_sel_test_close_element).css('fontSize','26px');
     $(tst_sel_test_close_element).css('marginRight','7px');
     var tst_sel_test_head_name = document.createElement('h4');
     $(tst_sel_test_head_name).html("Selected tests");
     $(tst_sel_test_head_name).css('textAlign','center');
     $(tst_sel_test_head_name).css('fontSize','18px');
     $(tst_sel_test_head_name).css('fontWeight','bold');
     $(tst_sel_test_head_name).css('color','#5cb0cf');
     $(tst_sel_test_list_modal).append(tst_sel_test_close_element);
     $(tst_sel_test_list_modal).append(tst_sel_test_head_name);
     var tst_list_heading = document.createElement('div');
     $(tst_list_heading).html("&nbsp;"+"&nbsp;"+"Tests list");
     $(tst_list_heading).css('background','#41A7B3');
     $(tst_list_heading).css('color','white');
     $(tst_list_heading).css('fontWeight','bold');
     $(tst_list_heading).css('marginRight','20px');
     $(tst_list_heading).css('marginTop','20px');
     $(tst_list_heading).css('paddingTop','2px');
     $(tst_list_heading).css('paddingBottom','2px');
     $(tst_sel_test_list_modal).append(tst_list_heading);
     for (i=0;i<tst_local_data.length;i++) 
     {
        var tst_list_btn = document.createElement('div');
        $(tst_list_btn).addClass("list_test");
        var tst_list_remove = document.createElement('div');
        $(tst_list_remove).css('border','1px solid #ddd');
        $(tst_list_remove).attr('id','sel_test_list');
        $(tst_list_remove).addClass("row");
        var tst_list_div = document.createElement('div');
        $(tst_list_div).html("&nbsp"+"&nbsp"+"&nbsp"+tst_local_data[i][1]);
        $(tst_list_div).css('float','left');
        var tst_sel_remove_div = document.createElement('div');
        $(tst_sel_remove_div).css('paddingTop','3px');
        $(tst_sel_remove_div).css('paddingRight','3px');
        var tst_sel_remove_button = document.createElement('button');
        $(tst_sel_remove_button).attr('id',tst_local_data[i][0]);
        $(tst_sel_remove_button).html("Remove");
        $(tst_sel_remove_button).css("background" ,"#ea494f");
        $(tst_sel_remove_button).css('color','white');
        $(tst_sel_remove_button).css('border','0px');
        $(tst_sel_remove_button).css('borderRadius','5px');
        $(tst_sel_remove_button).css('width','10%');
        $(tst_sel_remove_button).css('fontWeight','bold');
        $(tst_sel_remove_button).css('float','right');
        $(tst_sel_remove_button).css('fontSize','10px');
        $(tst_sel_remove_button).on('click',remove_handler); 
        $(tst_list_remove).append(tst_list_div);
        $(tst_sel_remove_div).append(tst_sel_remove_button);
        $(tst_list_remove).append(tst_sel_remove_div);
        $(tst_list_btn).append(tst_list_remove);
        $(tst_sel_test_list_modal).append(tst_list_btn);
      }//for loop local data
     var tst_sel_close_book = document.createElement('div');
     $(tst_sel_close_book).css('marginTop','20px');
     var tst_sel_close_button = document.createElement('button');
     $(tst_sel_close_button).html("Add more");
     $(tst_sel_close_button).css("background" ,"#ea494f");
     $(tst_sel_close_button).css('color','white');
     $(tst_sel_close_button).css('border','0px');
     $(tst_sel_close_button).css('paddingLeft','6px');
     $(tst_sel_close_button).css('borderRadius','5px');
     $(tst_sel_close_button).css('paddingRight','6px');
     $(tst_sel_close_button).css('fontWeight','bold');
     var tst_sel_book_button = document.createElement('button');
     $(tst_sel_book_button).html("Book");
     $(tst_sel_book_button).css("background" ,"#ea494f");
     $(tst_sel_book_button).css('color','white');
     $(tst_sel_book_button).css('border','0px');
     $(tst_sel_book_button).css('borderRadius','5px');
     $(tst_sel_book_button).css('fontWeight','bold');
     $(tst_sel_book_button).css('float','right');
     $(tst_sel_book_button).css('marginRight','20px');
     $(tst_sel_book_button).css('paddingLeft','6px');
     $(tst_sel_book_button).css('paddingRight','6px');
     $(tst_sel_close_book).append(tst_sel_close_button);
     $(tst_sel_close_book).append(tst_sel_book_button);
     $(tst_sel_test_list_modal).append(tst_sel_close_book);
     $(tst_sel_test_close_element).on('click',function () 
     {
         $(tst_sel_test_list_modal).modal().close(); 
     });//close elmnt click
     $(tst_sel_close_button).on('click',function () 
     {
          $(tst_sel_test_list_modal).modal().close(); 
     });//close btn click
     $(tst_sel_book_button).on('click',function () 
     { 
          loadingimage_handler();
          tests_off_labs_list_handler();              	
     }); 
     $(tst_sel_test_list_modal).modal().open();
 }//sel_list fnctn ending
 
 function loadingimage_handler() 
 {
    var error_page = document.createElement('div');
    $(error_page).addClass("modal");
    $(error_page).attr('id','loading_page');
    $(error_page).css('backgroundColor','#fff');
    $(error_page).css('position','relative');
    var load_msg = document.createElement('div');
    $(load_msg).html("Please wait"+"&nbsp"+","+"&nbsp"+"while your request is being processed");
    $(load_msg).css('textAlign','center');
    var load_img = document.createElement('img');
    $(load_img).attr('id','loading_img');
    $(load_img).attr('src','images/loading.gif');
    $(load_img).css('marginLeft','256px');
    $(error_page).append(load_img);
    $(error_page).append(load_msg);
    $(error_page).modal().open();
 }//loading img fnctn 
    
 function tests_off_labs_list_handler()
 {
    var local_tst_slug = JSON.parse(localStorage.getItem("slugarray"));
    var tst_slug_arr = [];
    localStorage.setItem("final_slugarray",JSON.stringify(tst_final_slug));
    for (i=0;i<local_tst_slug.length;i++) 
    {
   	  var test_slug =local_tst_slug[i][0];
   	  tst_slug_arr.push(local_tst_slug[i][0]);
   	  var tst_slug_str = tst_slug_arr.join("|");
   	  tst_final_slug =tst_slug_str;
   	  localStorage.setItem("final_slugarray",JSON.stringify(tst_final_slug));
     }//for loop
    $.ajax({
    url:tst_host_api+"/m-checkout/offering-labs-details",
    type:'POST',
    dataType: 'json',
    data:{testSlugs:tst_slug_str},
    success:function(data)
    {    	
       var tst_dataToStore = JSON.stringify(data);
       localStorage.setItem('tst_labdata',tst_dataToStore);
       if (data.length == "0") 
       {
           var tst_labcount_alert = document.createElement('div');
           $(tst_labcount_alert).addClass("modal");
           $(tst_labcount_alert).attr('id', 'labcount_modal');
           $(tst_labcount_alert).css('position','relative');
           $(tst_labcount_alert).css('backgroundColor','#fff'); 
           $(tst_labcount_alert).css('position','relative');
           $(tst_labcount_alert).css('border','0px');
           $(tst_labcount_alert).css('borderRadius','5px');
           $(tst_labcount_alert).css('paddingRight','0px');
           $(tst_labcount_alert).modal().open(); 
           var close_action  = document.createElement('a');
           $(close_action).addClass("close");
           $(close_action).attr('href','#');
           $(close_action).html("&times;");
           $(close_action).css('marginTop' ,'-21px');
           $(close_action).css('fontSize','30px');
           $(close_action).css('marginRight','7px');
           var modal_labcount_body = document.createElement('div');
           $(modal_labcount_body).html('The tests you  selected are not in one lab');
           $(modal_labcount_body).css('padding' ,'10px');
           $(modal_labcount_body).css('position','relative');
           var modal_labcount_footer = document.createElement('div');
           $(modal_labcount_footer).css('textAlign','right');
           $(modal_labcount_footer).css('padding','15px');
           $(modal_labcount_footer).css('borderTop','1px solid #e5e5e5');
           $(modal_labcount_footer).css('marginRight','20px');
           var labcount_btnelement = document.createElement('button');
           $(labcount_btnelement).addClass("btn btn-primary");
           $(labcount_btnelement).html("Ok");
           $(close_action).on('click',function () 
           {
              $(tst_labcount_alert).modal().close(); 
           });
           $(labcount_btnelement).on('click',function () 
           {
              $(tst_labcount_alert).modal().close();
           });
           $(modal_labcount_footer).append(labcount_btnelement);
           $('#labcount_modal').append(close_action);
           $('#labcount_modal').append(modal_labcount_body);
           $('#labcount_modal').append(modal_labcount_footer);
           return false;
      }//if data length
      else 
      {	
               var tst_off_lab_list_modal = document.createElement('div');
               $(tst_off_lab_list_modal).addClass("modal");
               $(tst_off_lab_list_modal).attr('id', 'modal_test_labpage');
               $(tst_off_lab_list_modal).css('position','relative');
               $(tst_off_lab_list_modal).css('backgroundColor','#fff');
               $(tst_off_lab_list_modal).css('paddingRight','0px');
               $(tst_off_lab_list_modal).css('width','740px');
               var tst_off_lab_close_element = document.createElement('a');
               $(tst_off_lab_close_element).addClass("close");
               $(tst_off_lab_close_element).attr('href','#');
               $(tst_off_lab_close_element).html("&times;");
               $(tst_off_lab_close_element).css('marginTop' ,'-19px');
               $(tst_off_lab_close_element).css('fontSize','26px');
               $(tst_off_lab_close_element).css('marginRight','7px');
               var tst_off_lab_head_name = document.createElement('h4');
               $(tst_off_lab_head_name).html("Offering Labs");
               $(tst_off_lab_head_name).css('textAlign','center');
               $(tst_off_lab_head_name).css('fontSize','18px');
               $(tst_off_lab_head_name).css('fontWeight','bold');
               $(tst_off_lab_head_name).css('color','#5cb0cf');
               var tst_labs_table = document.createElement('table');
              $(tst_labs_table).addClass("tablesorter");
              $(tst_labs_table).attr("id","myTable");
              $(tst_labs_table).css('marginRight','20px');
              $(tst_labs_table).css('cursor','pointer');
              $(tst_labs_table).css('marginTop','12px');
              var tst_table_head = document.createElement('thead');
              $(tst_table_head).addClass("table_head");
              var tst_labs_tr = document.createElement('tr');
               $(tst_labs_tr).css("background", "#41A7B3");
              $(tst_labs_tr).css("color","white");
              var tst_labname_th = document.createElement('th');
              $(tst_labname_th).css('border', '1px solid #ddd');
              $(tst_labname_th).css('width','300px');
              var tst_labname_element = document.createElement('div');
              $(tst_labname_element).html("Lab Name");
              $(tst_labname_element).css('padding','10px');
              $(tst_labname_element).css('textAlign','center');
              $(tst_labname_element).css('float','left');
             var tst_imgs = document.createElement('div');
             $(tst_imgs).css('float','right');
             var tst_asc = document.createElement('div');
             var tst_img_asc = document.createElement('img');
             $(tst_img_asc).attr('src','images/table_sorter_asc.png');
             $(tst_img_asc).css('paddingBottom','14px');
             $(tst_img_asc).css('paddingLeft','1px');
             var tst_desc = document.createElement('div');
             var tst_img_desc = document.createElement('img');
             $(tst_img_desc).attr('src','images/table_sorter_desc.png');
             $(tst_img_desc).css('paddingTop','13px');
             var tst_labarea_th = document.createElement('th');
              $(tst_labarea_th).css('border', '1px solid #ddd');
              $(tst_labarea_th).css('width','140px');
              var tst_labarea = document.createElement('div');
              $(tst_labarea).html("Location");
              $(tst_labarea).css('textAlign','center');
              $(tst_labarea).css('float','left');
              $(tst_labarea).css('padding','10px');
              var tst_area_imgs = document.createElement('div');
              $(tst_area_imgs).css('float','right');
              var tst_area_asc = document.createElement('div');
              var tst_area_img_asc = document.createElement('img');
              $(tst_area_img_asc).attr('src','images/table_sorter_asc.png');
              $(tst_area_img_asc).css('paddingBottom','14px');
              $(tst_area_img_asc).css('paddingLeft','1px');
             var tst_area_desc = document.createElement('div');
             var tst_area_img_desc = document.createElement('img');
             $(tst_area_img_desc).attr('src','images/table_sorter_desc.png');
             $(tst_area_img_desc).css('paddingTop','13px');
             var tst_labprice_th = document.createElement('th');
              $(tst_labprice_th).css('border', '1px solid #ddd');
              $(tst_labprice_th).css('width','90px');
              var tst_labprice = document.createElement('div');
              $(tst_labprice).html("Price");
              $(tst_labprice).css('float', 'left');
              $(tst_labprice).css('textAlign','center');
              $(tst_labprice).css('padding','10px');
              var tst_labprice_imgs = document.createElement('div');
              $(tst_labprice_imgs).css('float','right');
              var tst_price_asc = document.createElement('div');
              var tst_price_img_asc = document.createElement('img');
              $(tst_price_img_asc).attr('src','images/table_sorter_asc.png');
              $(tst_price_img_asc).css('paddingBottom','14px');
              $(tst_price_img_asc).css('paddingLeft','1px');
             var tst_price_desc = document.createElement('div');
             var tst_price_img_desc = document.createElement('img');
             $(tst_price_img_desc).attr('src','images/table_sorter_desc.png');
             $(tst_price_img_desc).css('paddingTop','13px');
             $(tst_price_desc).append(tst_price_img_desc);
             $(tst_price_asc).append(tst_price_img_asc);
             $(tst_labprice_imgs).append(tst_price_desc);
             $(tst_labprice_imgs).append(tst_price_asc);
             $(tst_labprice_th).append(tst_labprice);
             $(tst_labprice_th).append(tst_labprice_imgs);
             var tst_labdiscount_th = document.createElement('th');
              $(tst_labdiscount_th).css('border', '1px solid #ddd');
              $(tst_labdiscount_th).css('width','105px');
               var tst_labdiscount = document.createElement('div');
              $(tst_labdiscount).html("Discount");
              $(tst_labdiscount).css('float', 'left');
              $(tst_labdiscount).css('textAlign','center');
              $(tst_labdiscount).css('padding','10px');
              var tst_labdiscount_imgs = document.createElement('div');
              $(tst_labdiscount_imgs).css('float','right');
              var tst_discount_asc = document.createElement('div');
              var tst_discount_img_asc = document.createElement('img');
              $(tst_discount_img_asc).attr('src','images/table_sorter_asc.png');
              $(tst_discount_img_asc).css('paddingBottom','14px');
              $(tst_discount_img_asc).css('paddingLeft','1px');
             var tst_discount_desc = document.createElement('div');
             var tst_discount_img_desc = document.createElement('img');
             $(tst_discount_img_desc).attr('src','images/table_sorter_desc.png');
             $(tst_discount_img_desc).css('paddingTop','13px');
              var tst_book_th = document.createElement('th');
              $(tst_book_th).html("Book");
              $(tst_book_th).css('textAlign','center');
              $(tst_book_th).css('padding','10px');
              $(tst_book_th).css('width','60px');
             $(tst_discount_desc).append(tst_discount_img_desc);
             $(tst_discount_asc).append(tst_discount_img_asc);
             $(tst_labdiscount_imgs).append(tst_discount_desc);
             $(tst_labdiscount_imgs).append(tst_discount_asc);
             $(tst_labdiscount_th).append(tst_labdiscount);
             $(tst_labdiscount_th).append(tst_labdiscount_imgs);
              $(tst_area_desc).append(tst_area_img_desc);
             $(tst_area_asc).append(tst_area_img_asc);
             $(tst_area_imgs).append(tst_area_desc);
             $(tst_area_imgs).append(tst_area_asc);
             $(tst_labarea_th).append(tst_labarea);
             $(tst_labarea_th).append(tst_area_imgs);
             $(tst_asc).append(tst_img_asc);
             $(tst_desc).append(tst_img_desc);
             $(tst_imgs).append(tst_desc);
             $(tst_imgs).append(tst_asc);
             $(tst_labname_th).append(tst_labname_element);
             $(tst_labname_th).append(tst_imgs);
             $(tst_labs_tr).append(tst_labname_th);
             $(tst_labs_tr).append(tst_labarea_th);
             $(tst_labs_tr).append(tst_labprice_th);
             $(tst_labs_tr).append(tst_labdiscount_th);
             $(tst_labs_tr).append(tst_book_th);
              
             $(tst_table_head).append(tst_labs_tr);
            var tst_table_body = document.createElement('tbody');
             for (i=0;i<data.length;i++) 
             {
             	var tst_lab_details_tr = document.createElement('tr');
             	$(tst_lab_details_tr).attr('id','tst_details');
             	 $(tst_lab_details_tr).attr('data-tst-discount', data[i].labDiscount);
             	 $(tst_lab_details_tr).attr('data-tst-mrp',data[i].labMRP);
             	 $(tst_lab_details_tr).attr('data-tst-fp',data[i].labFinalPrice);
             	 $(tst_lab_details_tr).attr('data-tst-labname',data[i].labName);
             	 $(tst_lab_details_tr).attr('data-tst-labslug',data[i].labSlug);
             	 $(tst_lab_details_tr).attr('data-tst-labtstslug',data[i].labTestSlugs);
             	 $(tst_lab_details_tr).attr('data-tst-labarea',data[i].labArea);
             	 $(tst_lab_details_tr).attr('data-tst-labaddress',data[i].labAddress);
             	 $(tst_lab_details_tr).attr('data-tst-labpin',data[i].labPincode);
             	 $(tst_lab_details_tr).attr('data-tst-onreports',data[i].onlineReports);
             	 $(tst_lab_details_tr).attr('data-tst-visit',data[i].visitType);
             	 var tst_labname_td = document.createElement('td');
             	  $(tst_labname_td).html(data[i].labName);
             	  $(tst_labname_td).css('border', '1px solid #ddd');
             	  $(tst_labname_td).css('paddingLeft','6px'); 
             	 var tst_labarea_td = document.createElement('td');
             	 $(tst_labarea_td).html(data[i].labArea);
             	 $(tst_labarea_td).css('border', '1px solid #ddd'); 
             	 $(tst_labarea_td).css('paddingLeft','6px');
             	 var tst_price_td = document.createElement('td');
              	 var tst_div_td = document.createElement('div');
                $(tst_div_td).html(data[i].labFinalPrice+"&nbsp"+"(");
                
              	 $(tst_price_td).css('border', '1px solid #ddd');
              	 $(tst_div_td).css('float','left');
              	 $(tst_price_td).css('padding-left',	'4px');
              	  if ((data[i].labFinalPrice.length == "4") &&(data[i].labMRP.length == "4"))
              	 {
              	 	$(tst_price_td).css('padding-left',	'4px');
              	 }//if price lnth

              	 if ((data[i].labFinalPrice.length == "3") &&(data[i].labMRP.length == "4"))
              	 {
              	 	$(tst_price_td).css('padding-left',	'18px');
              	 }//if price lnth
              	 if ((data[i].labFinalPrice.length == "3") &&(data[i].labMRP.length == "3"))
              	 {
              	 	$(tst_price_td).css('padding-left',	'24px');
              	 }//if price lnth
              	 var tst_fp = document.createElement('div');
              	 var tst_finalprice = document.createElement('div');
              	 $(tst_finalprice).html(data[i].labMRP);
              	 $(tst_finalprice).css('textDecoration','line-through');
              	 $(tst_finalprice).css('color','rgb(236,73,73)');
              	 $(tst_finalprice).css('position','relative');
              	 $(tst_finalprice).css('float','left');
              	 var tst_close_bracket = document.createElement('div');
              	 $(tst_close_bracket).html(")");
              	 $(tst_close_bracket).css('position','relative');
              	 $(tst_fp).append(tst_finalprice);
              	 $(tst_fp).append(tst_close_bracket);
              	 $(tst_price_td).append(tst_div_td);
              	 $(tst_price_td).append(tst_fp);
              	 var tst_discount_td = document.createElement('td');
              	 $(tst_discount_td).html(data[i].labDiscount+"%");
              	 $(tst_discount_td).css('border', '1px solid #ddd');
              	 $(tst_discount_td).css('padding','6px');
              	 $(tst_discount_td).css('textAlign','center');
              	 var tst_book_td = document.createElement('td');
              	 $(tst_book_td).css('paddingLeft','6px');
              	 $(tst_book_td).css('paddingRight','6px');
              	 $(tst_book_td).css('border', '1px solid #ddd');
              	 var tst_book_div = document.createElement('div');
              	 $(tst_book_div).addClass("view_btn");
              	 $(tst_book_div).css("background","#ea494f");
              	 $(tst_book_div).css('borderRadius','5px');
              	 $(tst_book_div).css("color","white");
              	 $(tst_book_div).css('border','0px');
              	 $(tst_book_div).css('height','18px');
              	 $(tst_book_div).css('width','32px');
              	 $(tst_book_div).css('marginLeft','10px');
              	 var tst_book_view_div = document.createElement('div');
              	 $(tst_book_view_div).html("Book");
              	 $(tst_book_view_div).css('fontSize','10px');
              	 $(tst_book_view_div).css('paddingTop','2px');
              	 $(tst_book_view_div).css('paddingLeft','5px');
              	 $(tst_book_view_div).css('paddingRight','5px');
              	 $(tst_book_div).append(tst_book_view_div);
              	 $(tst_book_td).append(tst_book_div);
              	 $(tst_lab_details_tr).append(tst_labname_td);
              	 $(tst_lab_details_tr).append(tst_labarea_td);
              	 $(tst_lab_details_tr).append(tst_price_td);
              	 $(tst_lab_details_tr).append(tst_discount_td);
              	 $(tst_lab_details_tr).append(tst_book_td);
              	 $(tst_table_body).append(tst_lab_details_tr);
              	 $(tst_labs_table).append(tst_table_head);
              	 $(tst_labs_table).append(tst_table_body);
              	 $(tst_lab_details_tr).on('click',function () 
              	 {
                    var tst_sel_labname =$(this).data('tst-labname');
                    var tst_sel_labslug = $(this).data('tst-labslug');
                    var tst_sel_labtest_slug = $(this).data('tst-labtstslug');
                    var tst_sel_fp = $(this).data('tst-fp');   
                    var tst_sel_mrp = $(this).data('tst-mrp');
                    var tst_sel_discount = $(this).data('tst-discount');
                    var tst_sel_labarea = $(this).data('tst-labarea');
                    var tst_sel_labaddress=$(this).data('tst-labaddress');
                    var tst_sel_labpin = $(this).data('tst-labpin');
             	     var tst_sel_onlinereport = $(this).data('tst-onreports');
             	     var tst_sel_type = $(this).data('tst-onreports');
                    tst_form_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin);   
                              	 	
              	 	});//click

             } //for loop        
    $(tst_labs_tr).on('click',function () 
    {
        
         $("#myTable").tablesorter( {sortList: [[0,1], [1,0],[2,0]]} ); 
        
     });//row on click
               var tst_back_btn = document.createElement('button');
                 $(tst_back_btn).html("Back");
                 $(tst_back_btn).css('float','left');
                 $(tst_back_btn).css('background', '#ea494f');
                 $(tst_back_btn).css('marginTop','16px');
                 $(tst_back_btn).css('color','white');
                 $(tst_back_btn).css('width','60px');
                 $(tst_back_btn).css('borderRadius','6px');
                 $(tst_back_btn).css('border','0px');
                 $(tst_back_btn).css('fontWeight','bold');
                 $(tst_off_lab_list_modal).append(tst_off_lab_close_element);
                 $(tst_off_lab_list_modal).append(tst_off_lab_head_name); 
                 $(tst_off_lab_list_modal).append(tst_labs_table);
                 $(tst_off_lab_list_modal).append(tst_back_btn);
                 $(tst_back_btn).on('click',function () 
                 {
                 	   sel_test_list();
                 	});
                $(tst_off_lab_close_element).on('click',function () 
                 {
                 	 
               	  $(tst_off_lab_list_modal).modal().close(); 
                 });//click
                $(tst_off_lab_list_modal).modal().open();
             }//else  
             }//success
            });
              }//fnctn handler
              
 function local_off_labs_list()
 {
            var tst_localdata = JSON.parse(localStorage.getItem('tst_labdata')); 
             var local_tst_off_lab_list_modal = document.createElement('div');
               $(local_tst_off_lab_list_modal).addClass("modal");
               $(local_tst_off_lab_list_modal).attr('id', 'modal_test_labpage');
               $(local_tst_off_lab_list_modal).css('position','relative');
               $(local_tst_off_lab_list_modal).css('backgroundColor','#fff');
               $(local_tst_off_lab_list_modal).css('paddingRight','0px');
               $(local_tst_off_lab_list_modal).css('width','740px');
               var local_tst_off_lab_close_element = document.createElement('a');
               $(local_tst_off_lab_close_element).addClass("close");
               $(local_tst_off_lab_close_element).attr('href','#');
               $(local_tst_off_lab_close_element).html("&times;");
               $(local_tst_off_lab_close_element).css('marginTop' ,'-19px');
               $(local_tst_off_lab_close_element).css('fontSize','26px');
               $(local_tst_off_lab_close_element).css('marginRight','7px');
               var local_tst_off_lab_head_name = document.createElement('h4');
               $(local_tst_off_lab_head_name).html("Offering Labs");
               $(local_tst_off_lab_head_name).css('textAlign','center');
               $(local_tst_off_lab_head_name).css('fontSize','18px');
               $(local_tst_off_lab_head_name).css('fontWeight','bold');
               $(local_tst_off_lab_head_name).css('color','#5cb0cf');
               $(local_tst_off_lab_list_modal).append(local_tst_off_lab_close_element);
               $(local_tst_off_lab_list_modal).append(local_tst_off_lab_head_name);
               var local_tst_labs_table = document.createElement('table');
              $(local_tst_labs_table).addClass("tablesorter");
              $(local_tst_labs_table).attr("id","myTable");
              $(local_tst_labs_table).css('marginRight','20px');
              $(local_tst_labs_table).css('cursor','pointer');
              $(local_tst_labs_table).css('marginTop','12px');
              var local_tst_table_head = document.createElement('thead');
              $(local_tst_table_head).addClass("tst-table_head");
              var local_tst_labs_tr = document.createElement('tr');
               $(local_tst_labs_tr).css("background", "#41A7B3");
              $(local_tst_labs_tr).css("color","white");
              var local_tst_labname_th = document.createElement('th');
              $(local_tst_labname_th).css('border', '1px solid #ddd');
              $(local_tst_labname_th).css('width','300px');
              var local_tst_labname_element = document.createElement('div');
              $(local_tst_labname_element).html("Lab Name");
              $(local_tst_labname_element).css('padding','10px');
              $(local_tst_labname_element).css('textAlign','center');
              $(local_tst_labname_element).css('float','left');
             var local_tst_imgs = document.createElement('div');
             $(local_tst_imgs).css('float','right');
             var local_tst_asc = document.createElement('div');
             var local_tst_img_asc = document.createElement('img');
             $(local_tst_img_asc).attr('src','images/table_sorter_asc.png');
             $(local_tst_img_asc).css('paddingBottom','14px');
             $(local_tst_img_asc).css('paddingLeft','1px');
             var local_tst_desc = document.createElement('div');
             var local_tst_img_desc = document.createElement('img');
             $(local_tst_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_tst_img_desc).css('paddingTop','13px');
             var local_tst_labarea_th = document.createElement('th');
              $(local_tst_labarea_th).css('border', '1px solid #ddd');
              $(local_tst_labarea_th).css('width','140px');
              var local_tst_labarea = document.createElement('div');
              $(local_tst_labarea).html("Location");
              $(local_tst_labarea).css('textAlign','center');
              $(local_tst_labarea).css('float','left');
              $(local_tst_labarea).css('padding','10px');
              var local_tst_area_imgs = document.createElement('div');
              $(local_tst_area_imgs).css('float','right');
              var local_tst_area_asc = document.createElement('div');
              var local_tst_area_img_asc = document.createElement('img');
              $(local_tst_area_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_tst_area_img_asc).css('paddingBottom','14px');
              $(local_tst_area_img_asc).css('paddingLeft','1px');
             var local_tst_area_desc = document.createElement('div');
             var local_tst_area_img_desc = document.createElement('img');
             $(local_tst_area_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_tst_area_img_desc).css('paddingTop','13px');
             var local_tst_labprice_th = document.createElement('th');
              $(local_tst_labprice_th).css('border', '1px solid #ddd');
              $(local_tst_labprice_th).css('width','90px');
              var local_tst_labprice = document.createElement('div');
              $(local_tst_labprice).html("Price");
              $(local_tst_labprice).css('float', 'left');
              $(local_tst_labprice).css('textAlign','center');
              $(local_tst_labprice).css('padding','10px');
              var local_tst_labprice_imgs = document.createElement('div');
              $(local_tst_labprice_imgs).css('float','right');
              var local_tst_price_asc = document.createElement('div');
              var local_tst_price_img_asc = document.createElement('img');
              $(local_tst_price_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_tst_price_img_asc).css('paddingBottom','14px');
              $(local_tst_price_img_asc).css('paddingLeft','1px');
             var local_tst_price_desc = document.createElement('div');
             var local_tst_price_img_desc = document.createElement('img');
             $(local_tst_price_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_tst_price_img_desc).css('paddingTop','13px');
             $(local_tst_price_desc).append(local_tst_price_img_desc);
             $(local_tst_price_asc).append(local_tst_price_img_asc);
             $(local_tst_labprice_imgs).append(local_tst_price_desc);
             $(local_tst_labprice_imgs).append(local_tst_price_asc);
             $(local_tst_labprice_th).append(local_tst_labprice);
             $(local_tst_labprice_th).append(local_tst_labprice_imgs);
             var local_tst_labdiscount_th = document.createElement('th');
              $(local_tst_labdiscount_th).css('border', '1px solid #ddd');
              $(local_tst_labdiscount_th).css('width','105px');
               var local_tst_labdiscount = document.createElement('div');
              $(local_tst_labdiscount).html("Discount");
              $(local_tst_labdiscount).css('float', 'left');
              $(local_tst_labdiscount).css('textAlign','center');
              $(local_tst_labdiscount).css('padding','10px');
              var local_tst_labdiscount_imgs = document.createElement('div');
              $(local_tst_labdiscount_imgs).css('float','right');
              var local_tst_discount_asc = document.createElement('div');
              var local_tst_discount_img_asc = document.createElement('img');
              $(local_tst_discount_img_asc).attr('src','images/table_sorter_asc.png');
              $(local_tst_discount_img_asc).css('paddingBottom','14px');
              $(local_tst_discount_img_asc).css('paddingLeft','1px');
             var local_tst_discount_desc = document.createElement('div');
             var local_tst_discount_img_desc = document.createElement('img');
             $(local_tst_discount_img_desc).attr('src','images/table_sorter_desc.png');
             $(local_tst_discount_img_desc).css('paddingTop','13px');
              var local_tst_book_th = document.createElement('th');
              $(local_tst_book_th).html("Book");
              $(local_tst_book_th).css('textAlign','center');
              $(local_tst_book_th).css('padding','10px');
              $(local_tst_book_th).css('width','60px');
             $(local_tst_discount_desc).append(local_tst_discount_img_desc);
             $(local_tst_discount_asc).append(local_tst_discount_img_asc);
             $(local_tst_labdiscount_imgs).append(local_tst_discount_desc);
             $(local_tst_labdiscount_imgs).append(local_tst_discount_asc);
             $(local_tst_labdiscount_th).append(local_tst_labdiscount);
             $(local_tst_labdiscount_th).append(local_tst_labdiscount_imgs);
              $(local_tst_area_desc).append(local_tst_area_img_desc);
             $(local_tst_area_asc).append(local_tst_area_img_asc);
             $(local_tst_area_imgs).append(local_tst_area_desc);
             $(local_tst_area_imgs).append(local_tst_area_asc);
             $(local_tst_labarea_th).append(local_tst_labarea);
             $(local_tst_labarea_th).append(local_tst_area_imgs);
             $(local_tst_asc).append(local_tst_img_asc);
             $(local_tst_desc).append(local_tst_img_desc);
             $(local_tst_imgs).append(local_tst_desc);
             $(local_tst_imgs).append(local_tst_asc);
             $(local_tst_labname_th).append(local_tst_labname_element);
             $(local_tst_labname_th).append(local_tst_imgs);
             $(local_tst_labs_tr).append(local_tst_labname_th);
             $(local_tst_labs_tr).append(local_tst_labarea_th);
             $(local_tst_labs_tr).append(local_tst_labprice_th);
             $(local_tst_labs_tr).append(local_tst_labdiscount_th);
             $(local_tst_labs_tr).append(local_tst_book_th);
             
             $(local_tst_table_head).append(local_tst_labs_tr);
            var local_tst_table_body = document.createElement('tbody');
             for (i=0;i<tst_localdata.length;i++) 
             {
             	var local_tst_lab_details_tr = document.createElement('tr');
             	$(local_tst_lab_details_tr).attr('id','tst_details');
             	 $(local_tst_lab_details_tr).attr('data-tst-discount', tst_localdata[i].labDiscount);
             	 $(local_tst_lab_details_tr).attr('data-tst-mrp',tst_localdata[i].labMRP);
             	 $(local_tst_lab_details_tr).attr('data-tst-fp',tst_localdata[i].labFinalPrice);
             	 $(local_tst_lab_details_tr).attr('data-tst-labname',tst_localdata[i].labName);
             	 $(local_tst_lab_details_tr).attr('data-tst-labslug',tst_localdata[i].labSlug);
             	 $(local_tst_lab_details_tr).attr('data-tst-labtstslug',tst_localdata[i].labTestSlugs);
             	 $(local_tst_lab_details_tr).attr('data-tst-labarea',tst_localdata[i].labArea);
             	 $(local_tst_lab_details_tr).attr('data-tst-labaddress',tst_localdata[i].labAddress);
             	 $(local_tst_lab_details_tr).attr('data-tst-labpin',tst_localdata[i].labPincode);
             	 $(local_tst_lab_details_tr).attr('data-tst-onreports',tst_localdata[i].onlineReports);
             	 $(local_tst_lab_details_tr).attr('data-tst-visit',tst_localdata[i].visitType);
             	 var local_tst_labname_td = document.createElement('td');
             	  $(local_tst_labname_td).html(tst_localdata[i].labName);
             	  $(local_tst_labname_td).css('border', '1px solid #ddd');
             	  $(local_tst_labname_td).css('paddingLeft','6px'); 
             	 var local_tst_labarea_td = document.createElement('td');
             	 $(local_tst_labarea_td).html(tst_localdata[i].labArea);
             	 $(local_tst_labarea_td).css('border', '1px solid #ddd');
             	 $(local_tst_labarea_td).css('paddingLeft','6px'); 
             	 var local_tst_price_td = document.createElement('td');
              	 var local_tst_div_td = document.createElement('div');
                $(local_tst_div_td).html(tst_localdata[i].labFinalPrice+"&nbsp"+"(");
                $(local_tst_price_td).css('border', '1px solid #ddd');
              	 $(local_tst_div_td).css('float','left');
              	 $(local_tst_price_td).css('padding-left',	'1%');
              	 var local_tst_fp = document.createElement('div');
              	 var local_tst_finalprice = document.createElement('div');
              	 $(local_tst_finalprice).html(tst_localdata[i].labMRP);
              	 $(local_tst_finalprice).css('textDecoration','line-through');
              	 $(local_tst_finalprice).css('color','rgb(236,73,73)');
              	 $(local_tst_finalprice).css('position','relative');
              	 $(local_tst_finalprice).css('float','left');
              	 var local_tst_close_bracket = document.createElement('div');
              	 $(local_tst_close_bracket).html(")");
              	 $(local_tst_close_bracket).css('position','relative');
              	 $(local_tst_fp).append(local_tst_finalprice);
              	 $(local_tst_fp).append(local_tst_close_bracket);
              	 $(local_tst_price_td).append(local_tst_div_td);
              	 $(local_tst_price_td).append(local_tst_fp);
              	  var local_tst_discount_td = document.createElement('td');
              	 $(local_tst_discount_td).html(tst_localdata[i].labDiscount+"%");
              	 $(local_tst_discount_td).css('border', '1px solid #ddd');
              	 $(local_tst_discount_td).css('padding','6px');
              	 $(local_tst_discount_td).css('textAlign','center');
              	 var local_tst_book_td = document.createElement('td');
              	 $(local_tst_book_td).css('paddingLeft','6px');
              	 $(local_tst_book_td).css('paddingRight','6px');
              	 $(local_tst_book_td).css('border', '1px solid #ddd');
              	 var local_tst_book_div = document.createElement('div');
              	 $(local_tst_book_div).addClass("view_btn");
              	 $(local_tst_book_div).css("background","#ea494f");
              	 $(local_tst_book_div).css('borderRadius','5px');
              	 $(local_tst_book_div).css("color","white");
              	 $(local_tst_book_div).css('border','0px');
              	 $(local_tst_book_div).css('height','18px');
              	 $(local_tst_book_div).css('width','32px');
              	 $(local_tst_book_div).css('marginLeft','10px');
              	 var local_tst_book_view_div = document.createElement('div');
              	 $(local_tst_book_view_div).html("Book");
              	 $(local_tst_book_view_div).css('fontSize','10px');
              	 $(local_tst_book_view_div).css('paddingTop','2px');
              	 $(local_tst_book_view_div).css('paddingLeft','5px');
              	 $(local_tst_book_view_div).css('paddingRight','5px');
              	 $(local_tst_book_div).append(local_tst_book_view_div);
              	 $(local_tst_book_td).append(local_tst_book_div);
              	 $(local_tst_lab_details_tr).append(local_tst_labname_td);
              	 $(local_tst_lab_details_tr).append(local_tst_labarea_td);
              	 $(local_tst_lab_details_tr).append(local_tst_price_td);
              	 $(local_tst_lab_details_tr).append(local_tst_discount_td);
              	 $(local_tst_lab_details_tr).append(local_tst_book_td);
              	 $(local_tst_table_body).append(local_tst_lab_details_tr);
              	 $(local_tst_labs_table).append(local_tst_table_head);
                $(local_tst_labs_table).append(local_tst_table_body);
              	 $(local_tst_lab_details_tr).on('click',function () 
              	 {
                    var tst_sel_labname =$(this).data('tst-labname');
                    var tst_sel_labslug = $(this).data('tst-labslug');
                    var tst_sel_labtest_slug = $(this).data('tst-labtstslug');
                    var tst_sel_fp = $(this).data('tst-fp');   
                    var tst_sel_mrp = $(this).data('tst-mrp');
                    var tst_sel_discount = $(this).data('tst-discount');
                    var tst_sel_labarea = $(this).data('tst-labarea');
                    var tst_sel_labaddress=$(this).data('tst-labaddress');
                    var tst_sel_labpin = $(this).data('tst-labpin');
             	     var tst_sel_onlinereport = $(this).data('tst-onreports');
             	     var tst_sel_type = $(this).data('tst-onreports');
                     tst_form_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin);   
                              	 	
              	 	});//click

             } //for loop        
                $(local_tst_labs_tr).on('click',function () 
             {
                	 $("#myTable").tablesorter( {sortList: [[0,1], [1,0],[2,0]]} );
                });
              
              $(local_tst_off_lab_list_modal).append(local_tst_labs_table);
               var local_tst_back_btn = document.createElement('button');
                 $(local_tst_back_btn).html("Back");
                 $(local_tst_back_btn).css('float','left');
                 $(local_tst_back_btn).css('background', '#ea494f');
                 $(local_tst_back_btn).css('marginTop','16px');
                 $(local_tst_back_btn).css('color','white');
                 $(local_tst_back_btn).css('width','60px');
                 $(local_tst_back_btn).css('borderRadius','6px');
                 $(local_tst_back_btn).css('border','0px');
                 $(local_tst_back_btn).css('fontWeight','bold');
                 $(local_tst_off_lab_list_modal).append(local_tst_back_btn);
                 $(local_tst_back_btn).on('click',function () 
                 {
                 	   sel_test_list();
                 	});
                $(local_tst_off_lab_close_element).on('click',function () 
                 {
                 	 
               	  $(local_tst_off_lab_list_modal).modal().close(); 
                 });//click
                $(local_tst_off_lab_list_modal).modal().open();
      }//fnctn ending
              
function tst_form_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin)           
  {      	        
                 var tst_booking_page = document.createElement('div');
                  $(tst_booking_page).addClass("modal");
                  $(tst_booking_page).attr('id','tst_modal_formpage');
                  $(tst_booking_page).css('backgroundColor','#fff');
                  $(tst_booking_page).css('height','578px');
                  $(tst_booking_page).css('paddingRight','0px');
                  $(tst_booking_page).modal().open();
                  var tst_form_close_element = document.createElement('a');
                  $(tst_form_close_element).addClass("close");
                  $(tst_form_close_element).attr('href','#');
                  $(tst_form_close_element).html("&times;");
                  $(tst_form_close_element).css('marginTop' ,'-19px');
                  $(tst_form_close_element).css('fontSize','26px');
                  $(tst_form_close_element).css('marginRight','7px');
                  $(tst_form_close_element).attr('id','modal_close');
                  var tst_contact_heading = document.createElement('h4');
                  $(tst_contact_heading).html("Patient Information");
                  $(tst_contact_heading).css('textAlign','center');
                  $(tst_contact_heading).css('fontSize','18px');
                  $(tst_contact_heading).css('fontWeight','bold');
                  $(tst_contact_heading).css('color','#5cb0cf');
                  var tst_lab_details = document.createElement('div');
                  $(tst_lab_details).html(tst_sel_labname);
                  $(tst_lab_details).css('textAlign' ,'right');
                  $(tst_lab_details).css('paddingRight','17px');
                  $(tst_lab_details).css('fontWeight','bold');
                  $(tst_lab_details).css('marginTop','6px');  
                  $(tst_lab_details).css('marginRight','20px');
                  $(tst_lab_details).css('fontSize','12px');
                  var tst_deal_name  = document.createElement('div');
                  $(tst_deal_name).css('textAlign' ,'right');
                  $(tst_deal_name).css('paddingRight','14px');
                  $(tst_deal_name).css('fontWeight','bold');
                  $(tst_deal_name).css('marginTop','6px');
                  $(tst_deal_name).css('marginRight','20px');
                  $(tst_deal_name).css('fontSize','12px');
                  var tst_parent_wizard = document.createElement('div');
                  $(tst_parent_wizard).attr('id','tmm-form-wizard');
                  $(tst_parent_wizard).addClass('container substrate');
                  $(tst_parent_wizard).css('width','100%');
                  $(tst_parent_wizard).css('paddingTop','1px');
                  var tst_form_element = document.createElement('form');
                  $(tst_form_element).attr('method','post');
                  $(tst_form_element).attr('id','patient_info'); 
                  $(tst_form_element).attr('name','patient_info');
                  $(tst_form_element).attr('action','#');
                  $(tst_form_element).attr('role','form');
                  $(tst_form_element).css('marginRight','20px');
                  var tst_wizard_element = document.createElement('div');
                  $(tst_wizard_element).addClass("form-wizard");
                  $(tst_wizard_element).css('padding-top','0px');
                  var tst_row_element = document.createElement('div');
                  $(tst_row_element).addClass("row");
                  var tst_col_element = document.createElement('div');
                  $(tst_col_element).addClass("col-md-12 no-pad");
                  var tst_form_class = document.createElement('form-wizard');
                  $(tst_form_class).addClass("form-wizard");
                  $(tst_form_class).css('border','0px');
                  $(tst_form_class).css('paddingTop','4px');
                  var tst_second_row = document.createElement('div');
                  $(tst_second_row).addClass("row");
                   var tst_col_class_element = document.createElement('div');
                  $(tst_col_class_element).addClass("col-md-12 col-sm-12");
                  $(tst_col_class_element).css('paddingTop','5px');
                  var tst_name_row = document.createElement('div');
                  $(tst_name_row).addClass("row");
                  var tst_name_col_class = document.createElement('div');
                  $(tst_name_col_class).addClass("col-md-12 col-sm-12");
                  var tst_fieldset_element = document.createElement('fieldset');
                  $(tst_fieldset_element).addClass("input-block");
                  var tst_label_ptntname = document.createElement('label');
                  $(tst_label_ptntname).attr('for','patient_name');
                  $(tst_label_ptntname).html("Full Name");
                  var tst_input_element = document.createElement('input');
                  $(tst_input_element).attr('type','text');
                  $(tst_input_element).attr('id', 'tst_patient_name');
                  $(tst_input_element).attr('name','patient_name');
                  $(tst_input_element).attr('value','');
                  $(tst_input_element).addClass("form-icon form-icon-user");
                  $(tst_input_element).attr('placeholder','Please enter your name');
                  $(tst_input_element).attr('required','');
                  var tst_email_row = document.createElement('div');
                  $(tst_email_row).addClass("row");
                  var tst_email_col_class = document.createElement('div');
                  $(tst_email_col_class).addClass("col-md-12 col-sm-12");
                  var tst_fieldset_email = document.createElement('fieldset');
                  $(tst_fieldset_email).addClass("input-block");
                  var tst_label_email = document.createElement('label');
                  $(tst_label_email).attr('for','email');
                  $(tst_label_email).html("Email");
                  var tst_input_email = document.createElement('input');
                  $(tst_input_email).attr('type','text');
                  $(tst_input_email).attr('id','tst_email');
                  $(tst_input_email).attr('name','patient_email');
                  $(tst_input_email).attr('value','');
                  $(tst_input_email).addClass('form-icon form-icon-mail');
                  $(tst_input_email).attr('placeholder','Please enter your email ID');
                  $(tst_input_email).attr('required','required');
                  var tst_address_row = document.createElement('div');
                  $(tst_address_row).addClass("row");
                  var tst_address_col_class = document.createElement('div');
                  $(tst_address_col_class).addClass("col-md-12 col-sm-12");
                  var tst_fieldset_address = document.createElement('fieldset');
                  $(tst_fieldset_address).addClass("input-block");
                  var tst_label_address = document.createElement('label');
                  $(tst_label_address).attr('for','Address');
                  $(tst_label_address).html("Address");
                  var tst_input_address = document.createElement('input');
                  $(tst_input_address).attr('type','text');
                  $(tst_input_address).attr('id','tst_address');
                  $(tst_input_address).attr('name','patient_address');
                  $(tst_input_address).attr('value','');
                  $(tst_input_address).css('width','468px');
                  $(tst_input_address).css('border','1px solid #c4cdcf');
                  $(tst_input_address).attr('placeholder','Please enter your Address');
                  $(tst_input_address).attr('required','required');
                  $(tst_input_address).css('paddingRight','11px');
                  var tst_phno_row = document.createElement('div');
                  $(tst_phno_row).addClass("row");
                  var tst_phno_col_class = document.createElement('div');
                  $(tst_phno_col_class).addClass("col-md-6 col-sm-12");
                  var tst_fieldset_phno = document.createElement('fieldset');
                  $(tst_fieldset_phno).addClass("input-block");
                  var tst_label_phno = document.createElement('label');
                  $(tst_label_phno).attr('for','phone1');
                  $(tst_label_phno).html('Mobile No:');
                  var tst_input_phno = document.createElement('input');
                  $(tst_input_phno).attr('type','text');
                  $(tst_input_phno).attr('id','tst_phone');
                  $(tst_input_phno).attr('name','patient_mobile');
                  $(tst_input_phno).attr('value','');
                  $(tst_input_phno).addClass('form-icon form-icon-phone');
                  $(tst_input_phno).attr('placeholder','Number');
                  $(tst_input_phno).attr('required','required');
                  var tst_apptime_col_class = document.createElement('div');
                  $(tst_apptime_col_class).addClass('col-md-6 col-sm-12');
                  var tst_fieldset_booking = document.createElement('fieldset');
                  $(tst_fieldset_booking).addClass("input-block");
                  var tst_label_booking = document.createElement('label');
                  $(tst_label_booking).attr('for','app_time');
                  $(tst_label_booking).html('Appointment Timing:');
                  var tst_input_booking = document.createElement('input');
                  $(tst_input_booking).attr('type','text');
                  $(tst_input_booking).attr('id','tst_app_time');
                  $(tst_input_booking).attr('name','appointment_time');
                  $(tst_input_booking).attr('value','');
                  $(tst_input_booking).attr('placeholder','Select Timeslot');
                  $(tst_input_booking).addClass("form_datetime");
                  $(tst_input_booking).attr('required','required');
                  var tst_information_row = document.createElement('row');
                  $(tst_information_row).addClass("row");
                  var tst_note_col_class = document.createElement('div');
                  $(tst_note_col_class).addClass("col-md-12 col-sm-12");
                  var tst_font_element = document.createElement('font');
                  $(tst_font_element).html("*Note: Patient Information is kept confidential and is used only for booking appointments and to improve the service.");
                  $(tst_font_element).css('fontSize','10px');
                  var tst_prevbtn_element = document.createElement('div');
                  $(tst_prevbtn_element).css('marginLeft','30px');
                  $(tst_prevbtn_element).addClass('prev');
                  var tst_backbtn = document.createElement('button');
                  $(tst_backbtn).attr('id','tst_step2_back_btn');
                  $(tst_backbtn).addClass("button button-control");
                  $(tst_backbtn).attr('type','button');
                  var tst_span_backbtn = document.createElement('span');
                  $(tst_span_backbtn).html("Back");
                  $(tst_backbtn).append(tst_span_backbtn);
                  var tst_backbtn_divider = document.createElement('div');
                  $(tst_backbtn_divider).addClass("button-divider");
                  var tst_nextbtn_element = document.createElement('div');
                  $(tst_nextbtn_element).css('marginLeft','50px');
                  $(tst_nextbtn_element).addClass('next');
                  var tst_nextbtn = document.createElement('button');
                  $(tst_nextbtn).attr('id','tst_step2_next_btn');
                  $(tst_nextbtn).addClass("button button-control");
                  $(tst_nextbtn).attr('type','button');
                  var tst_span_nextbtn = document.createElement('span');
                  $(tst_span_nextbtn).html("Next");
                  $(tst_nextbtn).append(tst_span_nextbtn);
                  var tst_nextbtn_divider = document.createElement('div');
                  $(tst_nextbtn_divider).addClass("button-divider");
                  $(tst_fieldset_element).append(tst_label_ptntname);
                  $(tst_fieldset_element).append(tst_input_element);
                  $(tst_fieldset_email).append(tst_label_email);
                  $(tst_fieldset_email).append(tst_input_email);
                  $(tst_fieldset_phno).append(tst_label_phno);
                  $(tst_fieldset_phno).append(tst_input_phno);
                  $(tst_fieldset_booking).append(tst_label_booking);
                  $(tst_fieldset_booking).append(tst_input_booking);
                  $(tst_fieldset_address).append(tst_label_address);
                  $(tst_fieldset_address).append(tst_input_address);
                  $(tst_name_col_class).append(tst_fieldset_element);
                  $(tst_email_col_class).append(tst_fieldset_email);
                  $(tst_phno_col_class).append(tst_fieldset_phno);
                  $(tst_apptime_col_class).append(tst_fieldset_booking);
                  $(tst_address_col_class).append(tst_fieldset_address);
                  $(tst_note_col_class).append(tst_font_element);
                  $(tst_name_row).append(tst_name_col_class);
                  $(tst_email_row).append(tst_email_col_class);
                  $(tst_phno_row).append(tst_phno_col_class);
                  $(tst_phno_row).append(tst_apptime_col_class);
                  $(tst_address_row).append(tst_address_col_class);
                  $(tst_information_row).append(tst_note_col_class);
                  $(tst_col_class_element).append(tst_name_row);
                  $(tst_col_class_element).append(tst_email_row);
                  $(tst_col_class_element).append(tst_phno_row);
                  $(tst_col_class_element).append(tst_address_row);
                  $(tst_col_class_element).append(tst_information_row);
                  $(tst_second_row).append(tst_col_class_element);
                  $(tst_form_class).append(tst_second_row);
                  $(tst_col_element).append(tst_form_class);
                  $(tst_row_element).append(tst_col_element);
                  $(tst_prevbtn_element).append(tst_backbtn);
                  $(tst_prevbtn_element).append(tst_backbtn_divider);
                  $(tst_row_element).append(tst_prevbtn_element);
                  $(tst_nextbtn_element).append(tst_nextbtn);
                  $(tst_nextbtn_element).append(tst_nextbtn_divider);
                  $(tst_row_element).append(tst_nextbtn_element);
                  $(tst_wizard_element).append(tst_row_element);
                  $(tst_form_element).append(tst_wizard_element);
                  $(tst_parent_wizard).append(tst_form_element);
                  var tst_error_display = document.createElement('div');
                  $(tst_error_display).addClass("pkg_display_error");
                  $(tst_error_display).css('height','30px');
                 var tst_name_element = document.createElement('div');
                 $(tst_name_element).addClass("err_msg");
                 $(tst_name_element).attr('id','tst_err_name');
                 $(tst_name_element).css('color','rgb(236,73,73)');
                 $(tst_name_element).css('textAlign','left');
                 $(tst_name_element).css('marginLeft','16px');
                 $(tst_name_element).css('display','none');
                 $(tst_name_element).css('fontSize','12px');
                  var tst_star_element = document.createElement('span');
                  $(tst_star_element).addClass('star');
                  $(tst_star_element).html("&#x2605");
                  $(tst_star_element).css('float','left');
                  var tst_error_name_element = document.createElement('div');
                  $(tst_error_name_element).html('Enter Full Name');
                  $(tst_name_element).append(tst_star_element);
                  $(tst_name_element).append(tst_error_name_element);
                  var tst_email_element = document.createElement('div');
               	$(tst_email_element).addClass("err_msg");
                  $(tst_email_element).attr('id','tst_err_email');
                  $(tst_email_element).css('color','rgb(236,73,73)');
                  $(tst_email_element).css('textAlign','left');
                  $(tst_email_element).css('marginLeft','16px');
                  $(tst_email_element).css('display','none');
                  var tst_star_email = document.createElement('span');
                  $(tst_star_email).addClass('star');
                  $(tst_star_email).html("&#x2605");
                  $(tst_star_email).css('float','left');
                  var tst_error_email_element = document.createElement('div');
                  $(tst_error_email_element).html('Enter valid e-mail id');
                 	$(tst_email_element).append(tst_star_email);
                 	$(tst_email_element).append(tst_error_email_element);
                  var tst_mbno_element = document.createElement('div');
                 	$(tst_mbno_element).addClass("err_msg");
                 	$(tst_mbno_element).attr('id','tst_err_mbno');
                  $(tst_mbno_element).css('color','rgb(236,73,73)');
                  $(tst_mbno_element).css('textAlign','left');
                 	$(tst_mbno_element).css('marginLeft','16px');
                  $(tst_mbno_element).css('display','none');
                  var tst_star_mbno = document.createElement('span');
                  $(tst_star_mbno).addClass('star');
                  $(tst_star_mbno).html("&#x2605");
                  $(tst_star_mbno).css('float','left');
                  var tst_error_mbno_element = document.createElement('div');
                  $(tst_error_mbno_element).html('Enter correct mobile number');
                  $(tst_mbno_element).append(tst_star_mbno);
                  $(tst_mbno_element).append(tst_error_mbno_element);
                  var tst_phno_element = document.createElement('div');
                  $(tst_phno_element).addClass("err_msg");
                  $(tst_phno_element).css('color','rgb(236,73,73)');
                  $(tst_phno_element).css('textAlign','left');
                  $(tst_phno_element).css('marginLeft','16px');
                  $(tst_phno_element).css('display','none');
                  var tst_star_phno = document.createElement('span');
                  $(tst_star_phno).addClass('star');
                  $(tst_star_phno).html("&#x2605");
                  $(tst_star_phno).css('float','left');
                  var tst_error_phno_element = document.createElement('div');
                  $(tst_error_phno_element).html('Mobile number is not valid');
                  $(tst_phno_element).append(tst_star_phno);
                  $(tst_phno_element).append(tst_error_phno_element);
                  var tst_address_element = document.createElement('div');
                  $(tst_address_element).addClass("err_msg");
                  $(tst_address_element).attr('id','tst_err_address');
                  $(tst_address_element).css('color','rgb(236,73,73)');
                  $(tst_address_element).css('textAlign','left');
                  $(tst_address_element).css('marginLeft','16px');
                  $(tst_address_element).css('display','none');
                  var tst_star_address = document.createElement('span');
                  $(tst_star_address).addClass('star');
                  $(tst_star_address).html("&#x2605");
                  $(tst_star_address).css('float','left');
                  var tst_error_address_element = document.createElement('div');
                  $(tst_error_address_element).html('Enter your address');
                  $(tst_address_element).append(tst_star_address);
                  $(tst_address_element).append(tst_error_address_element);
                  var tst_apptime_element = document.createElement('div');
                 	$(tst_apptime_element).attr('id','tst_err_apptime');
                 	$(tst_apptime_element).addClass("err_msg");
                  $(tst_apptime_element).css('color','rgb(236,73,73)');
                 	$(tst_apptime_element).css('textAlign','left');
                 	$(tst_apptime_element).css('marginLeft','16px');
                 	$(tst_apptime_element).css('display','none');
                 	var tst_star_apptime = document.createElement('span');
                 	$(tst_star_apptime).addClass('star');
                 	$(tst_star_apptime).html("&#x2605");
                 	$(tst_star_apptime).css('float','left');
                  var tst_error_apptime_element = document.createElement('div');
                  $(tst_error_apptime_element).html('Please select Appointment Time');
               	 $(tst_apptime_element).append(tst_star_apptime);
                   $(tst_apptime_element).append(tst_error_apptime_element);
                  var tst_app_time_element = document.createElement('div');
                   $(tst_app_time_element).attr('id','tst_err_app_time');
                   $(tst_app_time_element).addClass("err_msg");
                   $(tst_app_time_element).css('color','rgb(236,73,73)');
                   $(tst_app_time_element).css('textAlign','left');
                   $(tst_app_time_element).css('marginLeft','16px');
                 	 $(tst_app_time_element).css('display','none');
                   var tst_star_app_time = document.createElement('span');
                    $(tst_star_app_time).addClass('star');
                    $(tst_star_app_time).html("&#x2605");
                    $(tst_star_app_time).css('float','left');
                    var tst_error_app_time_element = document.createElement('div');
                     $(tst_error_app_time_element).html('You have given past time.Give future time');
                     $(tst_app_time_element).append(tst_star_app_time);
                     $(tst_app_time_element).append(tst_error_app_time_element);
                     $(tst_error_display).append(tst_name_element);
                     $(tst_error_display).append(tst_email_element);
                     $(tst_error_display).append(tst_mbno_element);
                     $(tst_error_display).append(tst_apptime_element);
                     $(tst_error_display).append(tst_app_time_element);
                     $(tst_error_display).append(tst_address_element);
                     $("#tst_modal_formpage").append(tst_form_close_element);
                     $("#tst_modal_formpage").append(tst_contact_heading);
                     $("#tst_modal_formpage").append(tst_lab_details);
                     $("#tst_modal_formpage").append(tst_deal_name);
                     $("#tst_modal_formpage").append(tst_error_display);
                     $("#tst_modal_formpage").append(tst_parent_wizard);
                   $(tst_input_booking).on('keyup' ,function (event)
                      { 
                         event.preventDefault();
                    	 });//keyup
                   $(tst_input_booking).on('keypress' ,function (event)
                      {
                    	    event.preventDefault();
                      });//keypress	
                   $(tst_input_booking).on('keydown' ,function (event) 
                     {
                   	  event.preventDefault();
                  	});//keydown
                  	 
                  $("#modal_close").on('click',function ()
                     {
                     	 if(typeof(Storage)!=="undefined")
                          {
                            tst_datastore_handler();
                          }//if
               	    $("#modal_secondpage").modal().close(); 
                     });//click
                  var tst_body_element = document.getElementsByClassName("themodal-lock")[0];
                    	 $(tst_body_element).on('keyup' ,function (event)
                    	 {
                             if(event.keyCode == 27)
                             {
                             	 
                        	    if(typeof(Storage)!=="undefined")
                               {
                                 tst_datastore_handler();
                                }//if storage
                              }//if keycode
                         });//key fnctn
                          
                  var tst_today = new Date();  
                 var tst_minutes = tst_today.getMinutes();
                 
                 if((tst_minutes >= '0'))  
                {
                     
               	 $('.form_datetime').datetimepicker
                   ({ 
                     
                     format:'dd/M/yyyy HH:ii P',
                     startDate: new Date(tst_today.getFullYear(), tst_today.getMonth(), tst_today.getDate(),tst_today.getHours()+1,tst_today.getMinutes()-tst_today.getMinutes()),
                     weekStart: 1,
                     todayBtn:  0,
                     autoclose: 1,
                     todayHighlight: 1,
                     startView: 2,
                     forceParse: 0,
                     minuteStep: 30,
                 }); //datetimepicker	
                }//if
                 
                  $('.form_datetime').datetimepicker('setHoursDisabled', '0,1,2,3,4,5,22,23,24'); 
                   
                 var tst_pat_name = $("#tst_patient_name").val();
                 var tst_pat_email = $("#tst_email").val();
                 var tst_pat_phno = $("#tst_phone").val();
                 var tst_pat_apptime = $("#tst_app_time").val();
                      if ((tst_pat_name == "") && (tst_pat_email =="") && (tst_pat_phno == "") && (tst_pat_apptime == ""))
                     {
                       tst_Filling_localdata(); 
                     }//
                    $('#tst_step2_back_btn').on('click',function () 
                    {
                       local_off_labs_list();
                             
                     	});//back btn click
                    $('#tst_step2_next_btn').on('click', function()
                    {
                     			if(typeof(Storage)!=="undefined")
                       { 
                     	 tst_datastore_handler();
                       }//if  
                        var tst_patient_name = $('#tst_patient_name').val();
                         var tst_patient_email = $('#tst_email').val();
                       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        var tst_mobile_number = $('#tst_phone').val();
                         var tst_patient_apptime =  $('#tst_app_time').val();
                         if(typeof(Storage)!=="undefined")
                       { 
                     	 tst_datastore_handler();
                       }//if
                      
                   var tst_appt_time = localStorage.getItem("patient_app_time");
                   var  tst_tday = new Date();
                     
                   var i;
                   function addZero(i) 
                     {
                         if (i < 10) 
                           {
                               i = "0" + i;
                           }//if i	
                       return i;
                      }//fnctn
                          var tst_year = tst_tday.getFullYear();
                          var tst_date = addZero(tst_tday.getDate());
                          var tst_month = addZero(tst_tday.getMonth()+1);
                          var tst_hours = addZero(tst_tday.getHours());
                          var tst_mnt = addZero(tst_tday.getMinutes());
                          var tst_sec =  addZero(tst_tday.getSeconds());
                          var tst_selected_time =tst_year+"-"+tst_month+"-"+tst_date+" "+tst_hours +":"+ tst_mnt+":"+tst_sec;
                         
                          
                          var tst_currenttime = new Date();
                          var tst_current_year = tst_currenttime.getFullYear();
                          var tst_current_month = addZero(tst_currenttime.getMonth()+1);
                          
                          var tst_current_date = addZero(tst_currenttime.getDate());
                          var tst_current_hours = addZero(tst_currenttime.getHours());
                          var tst_current_minutes = addZero(tst_currenttime.getMinutes());
                          var tst_current_time = tst_current_year+"-"+tst_current_month+"-"+tst_current_date+" "+tst_current_hours+":"+tst_current_minutes;
                     if((document.getElementById("tst_err_email").style.display ='none') && (document.getElementById('tst_err_mbno').style.display = 'none') &&(document.getElementById('tst_err_apptime').style.display = 'none') &&(document.getElementById('tst_err_app_time').style.display = 'none') &&(document.getElementById('tst_err_address').style.display = 'none'))  
                    { 
                      if ( !(tst_patient_name.length >= 6 && tst_patient_name.length <= 26) || tst_patient_name.match(/[^a-zA-Z ]/)  )
                        {
                           $(tst_name_element).css('display','block');
                          return false;
                        
                        }//if patient name
                      if(document.getElementById('tst_err_name').style.display = 'block')
                        {
                            document.getElementById('tst_err_name').style.display = 'none';
                           
                        }//if err_name
                      }//if 
                     if((document.getElementById("tst_err_name").style.display ='none') && (document.getElementById('tst_err_mbno').style.display = 'none') &&(document.getElementById('tst_err_apptime').style.display = 'none') &&(document.getElementById('tst_err_app_time').style.display = 'none') &&(document.getElementById('tst_err_address').style.display = 'none')) 
                    {
                    	 if(!filter.test(tst_patient_email))
                       {
                         $(tst_email_element).css('display','block');
                        return false;
                       }//if email
                     if(document.getElementById('tst_err_email').style.display = 'block')
                       {
                          document.getElementById('tst_err_email').style.display = 'none';
                          
                       }//if err_email
                       }//if
                       if((document.getElementById("tst_err_email").style.display ='none') && (document.getElementById('tst_err_name').style.display = 'none') &&(document.getElementById('tst_err_apptime').style.display = 'none') &&(document.getElementById('tst_err_app_time').style.display = 'none') &&(document.getElementById('tst_err_address').style.display = 'none'))
                       {
                       	 if((tst_mobile_number.match(/[^0-9]/) || tst_mobile_number.length != 10) || (!(tst_mobile_number.charAt(0)=="9" || tst_mobile_number.charAt(0)=="8" || tst_mobile_number.charAt(0)=="7")))
                       {
                       	 $(tst_mbno_element).css('display','block');
                       	 return false;
                       }//if mble
                        if(document.getElementById('tst_err_mbno').style.display = 'block')
                       {
                       	
                          document.getElementById('tst_err_mbno').style.display = 'none';
                         
                       }//if err_mbno
                       }//if
                      
                       if((document.getElementById("tst_err_email").style.display ='none') && (document.getElementById('tst_err_mbno').style.display = 'none') &&(document.getElementById('tst_err_name').style.display = 'none') &&(document.getElementById('tst_err_app_time').style.display = 'none') &&(document.getElementById('tst_err_address').style.display = 'none'))
                     {
                     	
                     	if(! ($('#tst_app_time').val()))   
                       {
                         	$(tst_apptime_element).css('display','block');
                           return false;
                       }//if app_time
                       
                       var tst_val_time = tst_date+"-"+tst_month+"-"+tst_year+" "+tst_hours +":"+ tst_mnt+":"+tst_sec;                         
                          var tst_sel_month_name = tst_appt_time.substr(3,3);
    
    
    if (tst_sel_month_name == 'Jan') 
     {
    	 var tst_sel_month = '01';
    	 
     }//if mnth 1
    if (tst_sel_month_name == 'Feb') 
     {
        var  tst_sel_month = '02';
     }//if mnth 2
    if (tst_sel_month_name == 'Mar') 
     {
    	 var tst_sel_month = '03';
     }//if mnth 3
    if (tst_sel_month_name == 'Apr') 
     {
    	var tst_sel_month = '04';
  	  }//if mnth 4
    if (tst_sel_month_name == 'May') 
  	  {
    		var tst_sel_month = '05';
    	}//if mnth 5
    if (tst_sel_month_name == 'Jun') 
  	  {
    		var tst_sel_month = '06';
     }//if mnth 6
    if (tst_sel_month_name == 'Jul') 
     {
    		var tst_sel_month = '07';
     }//if mnth 7
    if (tst_sel_month_name == 'Aug') 
     {
    		var tst_sel_month = '08';
     	}//if mnth 8
     if (tst_sel_month_name == 'Sep') 
    	{
    		var tst_sel_month = '09';
    	}//if mnth 9
    	if (tst_sel_month_name == 'Oct') 
    	{
    		var tst_sel_month = '10';
    	}//if mnth 10
    	if (tst_sel_month_name == 'Nov') 
    	{
    			var tst_sel_month = '11';
    	}//if mnth 11
    	if (tst_sel_month_name == 'Dec') 
    	{
    		var tst_sel_month = '12';
    	}//if mnth 12
    	 var tst_tday = new Date();
    	       var tst_sel_year = tst_appt_time.substr(7,4);
             var tst_sel_date = tst_appt_time.substr(0,2);
             var tst_sel_hours = tst_appt_time.substr(12,2);
             var tst_sel_minutes = tst_appt_time.substr(15,2);
             var tst_sel_sec = addZero(tst_tday.getSeconds());
             var tst_sel_meridian = tst_appt_time.substr(18,2);
             var tst_sel_hours_meridian = tst_sel_hours +" "+ tst_sel_meridian;
             if (tst_sel_meridian == "AM") 
             {
             	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
             	
              }//if AM
              if (tst_sel_hours_meridian == "12 PM")
              {
              	   var tst_sel_hours = "12";
              	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
              	}//if 12
             if (tst_sel_hours_meridian == "01 PM")
              {
              	   var tst_sel_hours = "13";
              	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
              	}//if 01
              	if (tst_sel_hours_meridian == "02 PM")
               {
              	   var tst_sel_hours = "14";
                  var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
                }//if 02
               	if (tst_sel_hours_meridian == "03 PM")
                  {
              	      var tst_sel_hours = "15";
                      var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                     
                 }//if 03
                 if (tst_sel_hours_meridian == "04 PM")
                 {
              	    var tst_sel_hours = "16";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 04
                  if (tst_sel_hours_meridian == "05 PM")
                 {
              	    var tst_sel_hours = "17";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 05
                   if (tst_sel_hours_meridian == "06 PM")
                 {
              	    var tst_sel_hours = "18";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 06
                   if (tst_sel_hours_meridian == "07 PM")
                 {
              	    var tst_sel_hours = "19";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 07
                   if (tst_sel_hours_meridian == "08 PM")
                 {
              	    var tst_sel_hours = "20";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 08
                   if (tst_sel_hours_meridian == "09 PM")
                 {
              	    var tst_sel_hours = "21";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 09
                       if(!(tst_sel_time.match(/\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}/)))
                     
                        {
                       	  
                         $(tst_apptime_element).css('display','block');
                        
                         return false;
                       }//if val time 
                        if(document.getElementById('tst_err_apptime').style.display = 'block')
                       {
                          document.getElementById('tst_err_apptime').style.display = 'none';
                          
                       }
                       }//if
                          if((document.getElementById("tst_err_email").style.display ='none') && (document.getElementById('tst_err_mbno').style.display = 'none') &&(document.getElementById('tst_err_name').style.display = 'none') &&(document.getElementById('tst_err_apptime').style.display = 'none') &&(document.getElementById('tst_err_address').style.display = 'none')) 
                      {
                          if(tst_current_time > tst_sel_time)
                          {
                          	
                          	$(tst_app_time_element).css('display','block');
                          	return false;
                          	}//if time
                         if (document.getElementById('tst_err_app_time').style.display = 'block') 
                          {
                          	  document.getElementById('tst_err_app_time').style.display = 'none';
                          	  
                           }//if err_time    
                         }//if
                         if(tst_sel_type.length == "13")
                      {
                       if((document.getElementById('tst_err_name').style.display = 'none') && (document.getElementById("tst_err_email").style.display ='none') && (document.getElementById('tst_err_mbno').style.display = 'none') &&(document.getElementById('tst_err_apptime').style.display = 'none') &&(document.getElementById('tst_err_app_time').style.display = 'none'))
                       {
                            if(! ($('#tst_address').val()))  
                          {
                             $(tst_address_element).css('display','block');
                              return false;
                          }// if visit type
                       
                         if (document.getElementById('tst_err_address').style.display = 'block') 
                          {
                          	  document.getElementById('tst_err_address').style.display = 'none';
                          	  
                           }//if err_visittype
                       }//if display
                      }// if length*/          
                 	      tst_preview_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin);
                    });//btn onclick handler
                    
                
          }//form_handler 
          function tst_datastore_handler()
    {
   	  var tst_ptnt_name = document.getElementById("tst_patient_name");
        var tst_ptnt_email = document.getElementById("tst_email");
        var tst_ptnt_phone = document.getElementById("tst_phone");
        var tst_ptnt_apptime = document.getElementById("tst_app_time");
        var tst_ptnt_address = document.getElementById("tst_address");
        localStorage.setItem("patient_name",tst_ptnt_name.value);
        localStorage.setItem("patient_email" ,tst_ptnt_email.value);
        localStorage.setItem("patient_phone" ,tst_ptnt_phone.value);
        localStorage.setItem("patient_app_time" ,tst_ptnt_apptime.value);
        localStorage.setItem("patient_address",tst_ptnt_address.value);
    } //fnctn handler
    function tst_Filling_localdata()
    {
     	    document.getElementById("tst_patient_name").value = localStorage.getItem("patient_name");
          document.getElementById("tst_email").value = localStorage.getItem("patient_email");
          document.getElementById("tst_phone").value = localStorage.getItem("patient_phone");
          document.getElementById("tst_app_time").value = localStorage.getItem("patient_app_time");
          document.getElementById("tst_address").value = localStorage.getItem("patient_address");
    }//fnctn handler
     
        
     function tst_preview_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin)
     {
     	            var tst_ptnt_address = localStorage.getItem("patient_address");
     	            var tst_order_page = document.createElement('div');
                  $(tst_order_page).addClass("modal");
                  $(tst_order_page).attr('id','tst_modal_thirdpage');
                  $(tst_order_page).css('backgroundColor','#fff');
                  $(tst_order_page).css('position','relative');
                  $(tst_order_page).css('paddingRight','0px');
                  $(tst_order_page).modal().open();
                  var tst_closing_element = document.createElement('a');
                  $(tst_closing_element).addClass("close");
                  $(tst_closing_element).attr('href','#');
                  $(tst_closing_element).html("&times;");
                  $(tst_closing_element).css('marginTop' ,'-19px');
                  $(tst_closing_element).css('fontSize','26px');
                  $(tst_closing_element).css('marginRight','7px');
                  $(tst_closing_element).attr('id','modal_close');
                  var tst_preview_box = document.createElement('div');
                  $(tst_preview_box).addClass("tst_preview_details");
                  $(tst_preview_box).css('padding','10px');
                  $(tst_preview_box).css('marginRight','20px');
                  var tst_preview_heading = document.createElement('h4');
                  $(tst_preview_heading).html("Order Preview");
                  $(tst_preview_heading).css('textAlign','center');
                  $(tst_preview_heading).css('fontSize','18px');
                  $(tst_preview_heading).css('fontWeight','bold');
                  $(tst_preview_heading).css('color','#5cb0cf');
                  var tst_time_error = document.createElement('div');
                   var tst_preview_pkg_info = document.createElement('div');
                  $(tst_preview_pkg_info).html("Lab & Price Information");
                  $(tst_preview_pkg_info).css('background','rgb(65, 167, 179)');
                  $(tst_preview_pkg_info).css('color','white');
                  $(tst_preview_pkg_info).css('fontWeight','bold');
                  $(tst_preview_pkg_info).css('paddingLeft','6px');
                  $(tst_preview_pkg_info).css('marginTop','10px');
                  $(tst_preview_pkg_info).css('marginBottom','2px');
                  $(tst_preview_pkg_info).css('height','21px');
                  var tst_table_dealname = document.createElement('table');
                  $(tst_table_dealname).css('float','left');
                  $(tst_table_dealname).css('marginBottom','15px');
                  $(tst_table_dealname).css('width','316px');
                  var tst_tr_dealname = document.createElement('tr');
                  var tst_td_dealname = document.createElement('td');
                  $(tst_td_dealname).html("&nbsp"+"&nbsp"+"&nbsp"+tst_sel_labname);
                  $(tst_td_dealname).css('fontWeight','bold');
                  $(tst_td_dealname).css('paddingTop','3px');
                  var tst_tr_labname = document.createElement('tr');
                  var tst_td_labname = document.createElement('td');
                  var tst_td_loc_div = document.createElement('div');
                  $(tst_td_loc_div).css('float','left');
                  $(tst_td_loc_div).html("&nbsp"+"&nbsp"+"&nbsp");
                  var tst_td_loc_img = document.createElement('img');
                  $(tst_td_loc_img).attr('src','images/location-bi.png');
                  $(tst_td_loc_img).css('height','17px');
                  $(tst_td_loc_img).css('width','12px');
                  $(tst_td_loc_div).append(tst_td_loc_img);
                  var tst_td_loc_detail = document.createElement('div');
                  $(tst_td_loc_detail).html("&nbsp;"+tst_sel_labaddress+","+tst_sel_labarea+","+tst_sel_labpin);
                  $(tst_td_loc_detail).css('float','right');
                  $(tst_td_loc_detail).css('width','290px');
                  $(tst_td_labname).append(tst_td_loc_div);
                  $(tst_td_labname).append(tst_td_loc_detail);
                  $(tst_tr_labname).append(tst_td_labname);
                  $(tst_tr_dealname).append(tst_td_dealname);
                  $(tst_table_dealname).append(tst_tr_dealname);
                  $(tst_table_dealname).append(tst_tr_labname);
                  var tst_ptnt_info_heading = document.createElement('div');
                 if (tst_sel_onlinereport == "yes") 
                {
                 	 var tst_onlinereports_tr = document.createElement('tr');
                   var tst_onlinereports_element = document.createElement('td');
               	$(tst_onlinereports_element).addClass("err_msg");
                  $(tst_onlinereports_element).attr('id','tst_reports_msg');
                  $(tst_onlinereports_element).css('color','rgb(236,73,73)');
                  $(tst_onlinereports_element).css('textAlign','left');
                  $(tst_onlinereports_element).css('fontSize','10px');
                  $(tst_onlinereports_element).css('display','block');
                  var tst_star_onlinereports = document.createElement('span');
                  $(tst_star_onlinereports).addClass('star');
                  $(tst_star_onlinereports).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                  $(tst_star_onlinereports).css('float','left');
                  var tst_error_onlinereports_element = document.createElement('div');
                  $(tst_error_onlinereports_element).html("Online reports  available");
                 	$(tst_onlinereports_element).append(tst_star_onlinereports);
                 	$(tst_onlinereports_element).append(tst_error_onlinereports_element);
                   $(tst_onlinereports_tr).append(tst_onlinereports_element);
                   $(tst_table_dealname).append(tst_onlinereports_tr);
                   
                	} 
                	
                	 if(tst_sel_type.length == "13")
                   {
                   	   var tst_homevisit_tr_one_element = document.createElement('tr');
                      var tst_homevisit_one_element = document.createElement('td');
               	    $(tst_homevisit_one_element).addClass("err_msg");
                      $(tst_homevisit_one_element).attr('id','tst_reports_msg');
                       $(tst_homevisit_one_element).css('color','rgb(236,73,73)');
                     $(tst_homevisit_one_element).css('textAlign','left');
                     
                    $(tst_homevisit_one_element).css('fontSize','10px');
                    
                    $(tst_homevisit_one_element).css('display','block');
                    var tst_star_homevisit_one = document.createElement('span');
                    $(tst_star_homevisit_one).addClass('star');
                    $(tst_star_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                    $(tst_star_homevisit_one).css('float','left');
                    var tst_error_homevisit_one_element = document.createElement('div');
                    $(tst_error_homevisit_one_element).html('Home visit only');
                 	  $(tst_homevisit_one_element).append(tst_star_homevisit_one);
                 	  $(tst_homevisit_one_element).append(tst_error_homevisit_one_element);
                     $(tst_homevisit_tr_one_element).append(tst_homevisit_one_element);   
                    $(tst_table_dealname).append(tst_homevisit_tr_one_element);        
                  }//if home visit 
                   if(tst_sel_type.length > "13")
                   {
                   	   var tst_labvisit_homevisit_tr_one_element = document.createElement('tr');
                      var tst_labvisit_homevisit_one_element = document.createElement('td');
               	    $(tst_labvisit_homevisit_one_element).addClass("err_msg");
                      $(tst_labvisit_homevisit_one_element).attr('id','pkg_reports_msg');
                       $(tst_labvisit_homevisit_one_element).css('color','rgb(236,73,73)');
                     $(tst_labvisit_homevisit_one_element).css('textAlign','left');
                     
                    $(tst_labvisit_homevisit_one_element).css('fontSize','10px');
                    
                    $(tst_labvisit_homevisit_one_element).css('display','block');
                    var tst_star_labvisit_homevisit_one = document.createElement('span');
                    $(tst_star_labvisit_homevisit_one).addClass('star');
                    $(tst_star_labvisit_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                    $(tst_star_labvisit_homevisit_one).css('float','left');
                    var tst_error_labvisit_homevisit_one_element = document.createElement('div');
                    $(tst_error_labvisit_homevisit_one_element).html('Home visit and lab visit available');
                 	  $(tst_labvisit_homevisit_one_element).append(tst_star_labvisit_homevisit_one);
                 	  $(tst_labvisit_homevisit_one_element).append(tst_error_labvisit_homevisit_one_element);
                  $(tst_labvisit_homevisit_tr_one_element).append(tst_labvisit_homevisit_one_element);   
                  $(tst_table_dealname).append(tst_labvisit_homevisit_tr_one_element);   
                          
                  }//if home visit 
                  var tst_price_details = document.createElement('div');
                  $(tst_price_details).css('float','right');
                  $(tst_price_details).css('paddingTop','6px');
                  $(tst_price_details).css('paddingRight','12px');
                  var tst_price_details_price = document.createElement('div');
                   $(tst_price_details_price).html("Rs."+tst_sel_fp);
                   $(tst_price_details_price).css('textAlign','center');
                   $(tst_price_details_price).css('fontSize','22px');
                   $(tst_price_details_price).css('color','rgb(236,73,73)');
                  var tst_price_details_mrp = document.createElement('div');
                  $(tst_price_details_mrp).css('fontSize','18px');
                  var tst_mrp_bracket_div = document.createElement('div');
                  $(tst_mrp_bracket_div).css('float','left');
                  var tst_mrp_openbracket = document.createElement('div');
                  $(tst_mrp_openbracket).html("("+"&nbsp");
                  $(tst_mrp_openbracket).css('float','left');
                  var tst_mrp_price = document.createElement('div');
                  $(tst_mrp_price).html("Rs."+"&nbsp"+tst_sel_mrp);
                  $(tst_mrp_price).css('textDecoration','line-through');
                  $(tst_mrp_price).css('float','left');
                  var tst_mrp_closebracket = document.createElement('div');
                  $(tst_mrp_closebracket).html("&nbsp"+")");
                  $(tst_mrp_closebracket).css('float','right');
                  $(tst_mrp_bracket_div).append(tst_mrp_openbracket);
                   $(tst_mrp_bracket_div).append(tst_mrp_price);
                   $(tst_mrp_bracket_div).append(tst_mrp_closebracket);
                   $(tst_price_details_mrp).append(tst_mrp_bracket_div);
                   var tst_discount_det = document.createElement('div');
                   $(tst_discount_det).html("&nbsp"+tst_sel_discount+"%");
                   $(tst_discount_det).css('float','right');
                   $(tst_price_details_mrp).append(tst_discount_det);
                  $(tst_price_details).append(tst_price_details_price);
                  $(tst_price_details).append(tst_price_details_mrp);
                  var tst_patient_details_table = document.createElement('table');
                  $(tst_patient_details_table).css('marginBottom','30px');
                  $(tst_patient_details_table).css('width','532px');
                  $(tst_patient_details_table).addClass("tst_ptnt_details");
                  var tst_patient_table_head_tr = document.createElement('tr');
                  $(tst_patient_table_head_tr).css('background','rgb(65, 167, 179)');
                  $(tst_patient_table_head_tr).css('border','1px solid rgb(65, 167, 179)');
                  $(tst_patient_table_head_tr).css('height','21px');
                  var tst_patient_table_head_td =document.createElement('td');
                  $(tst_patient_table_head_td).html("&nbsp"+"&nbsp"+"Patient Information");
                  $(tst_patient_table_head_td).css('color','white');
                  $(tst_patient_table_head_td).css('fontWeight','bold');
                  $(tst_patient_table_head_tr).append(tst_patient_table_head_td);
                  var tst_patient_table_head_td_2 = document.createElement('td');
                  $(tst_patient_table_head_td_2).html("-");
                  $(tst_patient_table_head_td_2).css('color','rgb(65, 167, 179)');
                  $(tst_patient_table_head_tr).append(tst_patient_table_head_td_2);
                  var tst_tr_patient = document.createElement('tr');
                   $(tst_tr_patient).addClass("tst_preview_info");
                   $(tst_tr_patient).css('border' ,'1px solid rgb(221, 221, 221)');
                  var tst_td_patientname = document.createElement('td');
                  $(tst_td_patientname).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
                  $(tst_td_patientname).css('border','1px solid #ddd');
                  $(tst_td_patientname).css('width','265px');
                  var tst_td_patient_name = document.createElement('td');
                  $(tst_td_patient_name).html("&nbsp"+localStorage.getItem("patient_name"));
                  $(tst_td_patient_name).css('width','265px');
                  var tst_tr_email = document.createElement('tr');
                  $(tst_tr_email).addClass("tst_preview_info");
                  $(tst_tr_email).css('border' ,'1px solid rgb(221, 221, 221)');
                  var tst_td_emailheading = document.createElement('td');
                  $(tst_td_emailheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Email");
                  $(tst_td_emailheading).css('border','1px solid #ddd');
                  $(tst_td_email_heading).css('width','265px');
                  var tst_td_email_heading = document.createElement('td');
                  $(tst_td_email_heading).html("&nbsp"+localStorage.getItem("patient_email"));
                  $(tst_td_email_heading).css('width','265px');
                  var tst_tr_phno = document.createElement('tr');
                  $(tst_tr_phno).addClass("tst_preview_info");
                  $(tst_tr_phno).css('border' ,'1px solid rgb(221, 221, 221)');
                  var tst_td_phnoheading = document.createElement('td');
                  $(tst_td_phnoheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Mobile No");
                  $(tst_td_phnoheading).css('border','1px solid #ddd');
                  $(tst_td_phnoheading).css('width','265px');
                  var tst_td_phno_heading = document.createElement('td');
                  $(tst_td_phno_heading).html("&nbsp"+localStorage.getItem("patient_phone"));
                  $(tst_td_phno_heading).css('width','265px');
                  var tst_tr_apptime = document.createElement('tr');
                  $(tst_tr_apptime).addClass("tst_preview_info");
                  $(tst_tr_apptime).css('border' ,'1px solid rgb(221, 221, 221)');
                  var tst_td_apptimeheading = document.createElement('td');
                  $(tst_td_apptimeheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
                  $(tst_td_apptimeheading).css('border','1px solid #ddd');
                  $(tst_td_apptimeheading).css('width','265px');
                  var tst_td_apptime_heading = document.createElement('td');
                  $(tst_td_apptime_heading).html("&nbsp"+localStorage.getItem("patient_app_time"));
                  $(tst_td_apptime_heading).css('width','265px');
                  var tst_tr_address = document.createElement('tr');
                  $(tst_tr_address).addClass("tst_preview_info");
                  $(tst_tr_address).css('border' ,'1px solid rgb(221, 221, 221)');
                  var tst_td_address_heading = document.createElement('td');
                  $(tst_td_address_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Address");
                  $(tst_td_address_heading).css('border','1px solid rgb(221, 221, 221)');
                  $(tst_td_address_heading).css('width','265px');
                  var tst_td_address = document.createElement('td');
                  $(tst_td_address).html("&nbsp"+localStorage.getItem("patient_address"));
                  $(tst_td_address).css('width','265px');
                  $(tst_tr_address).append(tst_td_address_heading);
                  $(tst_tr_address).append(tst_td_address);
                  var tst_back_button = document.createElement('button');
                  $(tst_back_button).html("Back");
                  $(tst_back_button).css('float','left');
                  $(tst_back_button).css('backgroundColor','#ec4949');
                  $(tst_back_button).css('width','98px');
                  $(tst_back_button).css('borderRadius','3px');
                  $(tst_back_button).css('border','0px');
                  $(tst_back_button).css('marginTop','11px');
                  var tst_order_button = document.createElement('button');
                  $(tst_order_button).html("Order");
                  $(tst_order_button).css('float','right');
                  $(tst_order_button).css('backgroundColor','#ec4949');
                  $(tst_order_button).css('width','98px');
                  $(tst_order_button).css('borderRadius','3px');
                  $(tst_order_button).css('border','0px');
                  $(tst_order_button).css('marginTop','11px');
                  var tst_tmm_form_element = document.createElement('div');
                  $(tst_tmm_form_element).addClass("row");
                  $(tst_tmm_form_element).attr('id','tmm-form-wizard');
                  $(tst_tmm_form_element).css('marginTop','6px');
                  var tst_prevbtn_element = document.createElement('div');
                  $(tst_prevbtn_element).css('margin','0px');
                  $(tst_prevbtn_element).addClass('prev');
                  var tst_backbtn = document.createElement('button');
                  $(tst_backbtn).attr('id','step2_back_btn');
                  $(tst_backbtn).addClass("button button-control");
                  $(tst_backbtn).attr('type','button');
                  var tst_span_backbtn = document.createElement('span');
                  $(tst_span_backbtn).html("Back");
                  var tst_backbtn_divider = document.createElement('div');
                  $(tst_backbtn_divider).addClass("button-divider");
                  var tst_orderbtn_element = document.createElement('div');
                  $(tst_orderbtn_element).css('margin','0px');
                  $(tst_orderbtn_element).addClass('next');
                  var tst_nextbtn = document.createElement('button');
                  $(tst_nextbtn).attr('id','step2_next_btn');
                  $(tst_nextbtn).addClass("button button-control");
                  $(tst_nextbtn).attr('type','button');
                  var tst_span_nextbtn = document.createElement('span');
                  $(tst_span_nextbtn).html("Order");
                  var tst_nextbtn_divider = document.createElement('div');
                  $(tst_nextbtn_divider).addClass("button-divider");
                  $(tst_backbtn).append(tst_span_backbtn);
                  $(tst_prevbtn_element).append(tst_backbtn);
                  $(tst_prevbtn_element).append(tst_backbtn_divider);
                  $(tst_nextbtn).append(tst_span_nextbtn);
                  $(tst_orderbtn_element).append(tst_nextbtn);
                  $(tst_orderbtn_element).append(tst_nextbtn_divider);
                  $(tst_tr_patient).append(tst_td_patientname);
                  $(tst_tr_patient).append(tst_td_patient_name);
                  $(tst_tr_email).append(tst_td_emailheading);
                  $(tst_tr_email).append(tst_td_email_heading);
                  $(tst_tr_phno).append(tst_td_phnoheading);
                  $(tst_tr_phno).append(tst_td_phno_heading);
                  $(tst_tr_apptime).append(tst_td_apptimeheading);
                  $(tst_tr_apptime).append(tst_td_apptime_heading);
                    $(tst_patient_details_table).append(tst_patient_table_head_tr);
                  $(tst_patient_details_table).append(tst_tr_patient);
                  $(tst_patient_details_table).append(tst_tr_email);
                  $(tst_patient_details_table).append(tst_tr_phno);
                  $(tst_patient_details_table).append(tst_tr_address);
                  if ( tst_ptnt_address == "") 
      	        {
      	      	  
      	      	 $(tst_tr_address).detach();

      	      } 
                 
                  $(tst_patient_details_table).append(tst_tr_apptime);
                  $(tst_tmm_form_element).append(tst_prevbtn_element);
                  $(tst_tmm_form_element).append(tst_orderbtn_element);
                  $("#tst_modal_thirdpage").append(tst_closing_element);
                  $(tst_preview_box).append(tst_preview_heading);
                  $(tst_preview_box).append(tst_preview_pkg_info);
                  $(tst_preview_box).append(tst_table_dealname); 
                  $(tst_preview_box).append(tst_price_details);
                  $(tst_preview_box).append(tst_patient_details_table);
                  var tst_preview_sel_tst_head = document.createElement('div');
                  $(tst_preview_sel_tst_head).addClass("row");
                  var tst_preview_sel_tst_head_element = document.createElement('h5');
                  $(tst_preview_sel_tst_head_element).addClass("preview_test_head");
                  $(tst_preview_sel_tst_head_element).html("&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"Tests");
                  $(tst_preview_sel_tst_head_element).css('background','rgb(65, 167, 179)');
                  $(tst_preview_sel_tst_head_element).css('color','white');
                  $(tst_preview_sel_tst_head_element).css('fontWeight','bold');
                  $(tst_preview_sel_tst_head).append(tst_preview_sel_tst_head_element);
                  var tst_local_slug = JSON.parse(localStorage.getItem("slugarray"));
                  var index=0;
                  while (index<tst_local_slug.length)
                  {
                     var tst_row = document.createElement('div');
                     $(tst_row).addClass("row");
                     $(tst_row).attr('id','prvw_test_name');
                     var tst_left_row = document.createElement('div');
                     $(tst_left_row).addClass("col-md-6");
                     $(tst_left_row).attr('id','prvw_test_left_name')
                     $(tst_left_row).html(tst_local_slug[index][1]);
                     $(tst_row).append(tst_left_row);
                     index++;
                     if (index<tst_local_slug.length) 
                     {
                     	var tst_right_row = document.createElement('div');
                     	$(tst_right_row).addClass("col-md-6");
                     	$(tst_right_row).attr('id','prvw_test_right_name');
                     	$(tst_right_row).html(tst_local_slug[index][1]);
                     	$(tst_row).append(tst_right_row);
                     }//if
                     index++;
                     $(tst_preview_sel_tst_head).append(tst_row);
                   }//while loop
                  $(tst_preview_box).append(tst_preview_sel_tst_head);
                  $(tst_preview_box).append(tst_tmm_form_element);
                  $(".close").on('click',function () 
                 {
                 	  $(tst_order_page).modal().close();
               	   
                 });//click
                   $("#tst_modal_thirdpage").append(tst_preview_box);  
                    
                     $(tst_prevbtn_element).on('click', function ()
                      {
                    
                                        tst_form_handler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin);           	  
                     	});//click fnctn  
                     	$(tst_orderbtn_element).on('click',function ()
                     	 {
                               
                            loadingimage_handler();
                            tst_confirm_pagehandler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin);               		
                                                  		
                     	      
                     		});//click        
             }//fnctn hndlr
             
   function tst_confirm_pagehandler(tst_sel_onlinereport,tst_sel_type,tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin)
 {
 		   
  	 var tst_pnt_name =localStorage.getItem("patient_name");
    var tst_pnt_mobileno = localStorage.getItem("patient_phone");
    var tst_mail = localStorage.getItem("patient_email");
    var tst_appt_time = localStorage.getItem("patient_app_time");
    var tst_address = localStorage.getItem("patient_address");
    
    var tst_sel_month_name = tst_appt_time.substr(3,3);
    
    
    if (tst_sel_month_name == 'Jan') 
     {
    	 var tst_sel_month = '01';
    	 
     }//if mnth 1
    if (tst_sel_month_name == 'Feb') 
     {
        var  tst_sel_month = '02';
     }//if mnth 2
    if (tst_sel_month_name == 'Mar') 
     {
    	 var tst_sel_month = '03';
     }//if mnth 3
    if (tst_sel_month_name == 'Apr') 
     {
    	var tst_sel_month = '04';
  	  }//if mnth 4
    if (tst_sel_month_name == 'May') 
  	  {
    		var tst_sel_month = '05';
    	}//if mnth 5
    if (tst_sel_month_name == 'Jun') 
  	  {
    		var tst_sel_month = '06';
     }//if mnth 6
    if (tst_sel_month_name == 'Jul') 
     {
    		var tst_sel_month = '07';
     }//if mnth 7
    if (tst_sel_month_name == 'Aug') 
     {
    		var tst_sel_month = '08';
     	}//if mnth 8
     if (tst_sel_month_name == 'Sep') 
    	{
    		var tst_sel_month = '09';
    	}//if mnth 9
    	if (tst_sel_month_name == 'Oct') 
    	{
    		var tst_sel_month = '10';
    	}//if mnth 10
    	if (tst_sel_month_name == 'Nov') 
    	{
    			var tst_sel_month = '11';
    	}//if mnth 11
    	if (tst_sel_month_name == 'Dec') 
    	{
    		var tst_sel_month = '12';
    	}//if mnth 12
    	   var i ;
         function addZero(i)
         {
            if (i < 10) 
            {
               i = "0" + i;
            }//if i
              return i;
            }//fnctn
                       
    	       var tst_tday = new Date();
    	       var tst_sel_year = tst_appt_time.substr(7,4);
             var tst_sel_date = tst_appt_time.substr(0,2);
             var tst_sel_hours = tst_appt_time.substr(12,2);
             var tst_sel_minutes = tst_appt_time.substr(15,2);
             var tst_sel_sec = addZero(tst_tday.getSeconds());
             var tst_sel_meridian = tst_appt_time.substr(18,2);
             var tst_sel_hours_meridian = tst_sel_hours +" "+ tst_sel_meridian;
             if (tst_sel_meridian == "AM") 
             {
             	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
             	
              }//if AM
              if (tst_sel_hours_meridian == "12 PM")
              {
              	   var tst_sel_hours = "12";
              	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
              	}//if 12
             if (tst_sel_hours_meridian == "01 PM")
              {
              	   var tst_sel_hours = "13";
              	 var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
              	}//if 01
              	if (tst_sel_hours_meridian == "02 PM")
               {
              	   var tst_sel_hours = "14";
                  var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                 
                }//if 02
               	if (tst_sel_hours_meridian == "03 PM")
                  {
              	      var tst_sel_hours = "15";
                      var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                     
                 }//if 03
                 if (tst_sel_hours_meridian == "04 PM")
                 {
              	    var tst_sel_hours = "16";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 04
                  if (tst_sel_hours_meridian == "05 PM")
                 {
              	    var tst_sel_hours = "17";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 05
                   if (tst_sel_hours_meridian == "06 PM")
                 {
              	    var tst_sel_hours = "18";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                  
                  }// if 06
                   if (tst_sel_hours_meridian == "07 PM")
                 {
              	    var tst_sel_hours = "19";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 07
                   if (tst_sel_hours_meridian == "08 PM")
                 {
              	    var tst_sel_hours = "20";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 08
                   if (tst_sel_hours_meridian == "09 PM")
                 {
              	    var tst_sel_hours = "21";
                   var tst_sel_time = tst_sel_year+"-"+tst_sel_month+"-"+tst_sel_date+" "+tst_sel_hours+":"+tst_sel_minutes+":"+tst_sel_sec;
                   
                  }// if 09
                  (tst_sel_labslug,tst_sel_labname,tst_sel_labarea,tst_sel_fp,tst_sel_mrp,tst_sel_discount,tst_sel_labaddress,tst_sel_labpin)
var tst_final_slug = JSON.parse(localStorage.getItem("final_slugarray"));
                       
         $.ajax({
         url:tst_host_api+"/m-checkout/book-order",
         type:'POST',
         dataType:'json',
         data:{labSlug:tst_sel_labslug,testSlugs:tst_final_slug,patientName:tst_pnt_name,patientMobile:tst_pnt_mobileno,patientEmail:tst_mail,apptTime:tst_sel_time},
          success:function(data)
          {
          	
          	 if(data.error)
          	{
          	     var tst_error_page = document.createElement('div');
                  $(tst_error_page).addClass("modal");
                  $(tst_error_page).attr('id','test_modal_errorpage');
                  $(tst_error_page).css('backgroundColor','#fff');
                  $(tst_error_page).css('position','relative');
                  $(tst_error_page).css('paddingRight','0px');
                  $(tst_error_page).modal().open();
                   var tst_error_closing = document.createElement('a');
                  $(tst_error_closing).addClass("confirm_close");
                  $(tst_error_closing).attr('href','#');
                  $(tst_error_closing).html("&times;");
                  $(tst_error_closing).css('marginTop' ,'-24px');
                   $(tst_error_closing).css('marginRight','8px');
                  $(tst_error_closing).css('fontSize','26px');
                  $(tst_error_closing).css('float','right');
                  var tst_error_heading = document.createElement('h4');
                  $(tst_error_heading).html("Order Confirmation failed");
                   $(tst_error_heading).css('color','#5cb0cf');
                  $(tst_error_heading).css('textAlign','center');
                  var tst_error_detail = document.createElement('div');
                  $(tst_error_detail).html(data.error);
                  $(tst_error_detail).css('marginTop','16px');
                  $(tst_error_detail).css('marginLeft','16px');
                  var tst_error_close = document.createElement('button');
                  $(tst_error_close).addClass("close_modal");
                  $(tst_error_close).attr('type','button');
                  $(tst_error_close).html("Close");
                  $(tst_error_close).css('float','right');
                  $(tst_error_close).css('marginTop','8px');
                  $(tst_error_close).css('width','80px');
                  $(tst_error_close).css('borderRadius','5px');
                  $(tst_error_close).css('color','white');
                  $(tst_error_close).css('background','rgb(236,73,73)');
                  $(tst_error_close).css('border','0px');
                  $(tst_error_close).css('marginRight','20px');
                   $("#test_modal_errorpage").append(tst_error_closing);
                   $("#test_modal_errorpage").append(tst_error_heading);
                   $("#test_modal_errorpage").append(tst_error_detail);
                   $("#test_modal_errorpage").append(tst_error_close);
                   $(tst_error_closing).on('click',function () 
                   {
                   	$(tst_error_page).modal().close();
                   	});
                   $(tst_error_close).on('click',function () 
                   {
                   	$(tst_error_page).modal().close();
                   	});
          	}//if error
          	else
          	 {
          	 	  var tst_local_slug_array = JSON.parse(localStorage.getItem("slugarray"));
     	           for (var i=0;i<tst_local_slug_array.length;i++) 
     	           {
     	             	 var tst_input_checked = document.getElementById(tst_local_slug_array[i][0]+"_input");
     	             	 $(tst_input_checked).attr('checked',false);
     	             }//for local strg arry
     	             var empty_slug_array = [];
     	             var empty_tst_final_slug = [];
          	 	    slug_array =empty_slug_array;
                   tst_final_slug = empty_tst_final_slug;
                  localStorage.setItem("slugarray",JSON.stringify(slug_array));
                  localStorage.setItem("slugarray",JSON.stringify(tst_final_slug));
                  var tst_confirm_page = document.createElement('div');
                  $(tst_confirm_page).addClass("modal");
                  $(tst_confirm_page).attr('id','tst_modal_fourthpage');
                  $(tst_confirm_page).css('backgroundColor','#fff');
                  $(tst_confirm_page).css('position','relative');
                  $(tst_confirm_page).css('paddingRight','0px');
                  $(tst_confirm_page).modal().open();
                  var tst_confirm_closing = document.createElement('a');
                  $(tst_confirm_closing).addClass("tst_confirm_close");
                  $(tst_confirm_closing).attr('href','#');
                  $(tst_confirm_closing).html("&times;");
                  $(tst_confirm_closing).css('marginTop' ,'-23px');
                  $(tst_confirm_closing).css('fontSize','26px');
                  $(tst_confirm_closing).css('float','right');
                  $(tst_confirm_closing).css('marginRight','8px');
                  var tst_order_element = document.createElement('div');
                  $(tst_order_element).addClass("order_details");
                  $(tst_order_element).css('marginTop','9px');
                  var tst_booking_heading = document.createElement('h4');
                  $(tst_booking_heading).html("Order Confirmation");
                  $(tst_booking_heading).css('textAlign','center');
                  $(tst_booking_heading).css('fontSize','18px');
                  $(tst_booking_heading).css('fontWeight','bold');
                  $(tst_booking_heading).css('color','#5cb0cf');
                  var tst_success_element = document.createElement('div');
                  $(tst_success_element).html("Your order is successfully placed."+"&nbsp"+"&nbsp"+"Please check your mail for details.");
                  $(tst_success_element).css('marginLeft','24px');
                  $(tst_success_element).css('marginTop','8px');
                  var tst_ordered_table = document.createElement('table');
                  $(tst_ordered_table).css('marginTop','8px');
                  $(tst_ordered_table).css('width','552px');
                  var tst_labname_tr = document.createElement('tr');
                  $(tst_labname_tr).addClass("tst_order_class");
                  $(tst_labname_tr).attr('id','tst_ordered_lab');
                  var tst_labname_td= document.createElement('td');
                  $(tst_labname_td).addClass("success_det");
                  $(tst_labname_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Lab name");
                  $(tst_labname_td).css('borderRight','1px solid #ddd');
                  var tst_lab_name_td = document.createElement('td');
                  $(tst_lab_name_td).addClass("success_det");
                  $(tst_lab_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.labName);
                  var tst_orderid_tr = document.createElement('tr');
                  $(tst_orderid_tr).addClass("tst_order_class");
                  var tst_orderid_td = document.createElement('td');
                  $(tst_orderid_td).addClass("success_det");
                  $(tst_orderid_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"OrderId");
                  $(tst_orderid_td).css('borderRight','1px solid #ddd');
                  var tst_order_id_td = document.createElement('td');
                  $(tst_order_id_td).addClass("success_det");
                  $(tst_order_id_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.orderId);
                  var tst_ptnt_name_tr = document.createElement('tr');
                  $(tst_ptnt_name_tr).addClass("tst_order_class");
                  $(tst_ptnt_name_tr).attr('id','order_name');
                  var tst_ptnt_name_td = document.createElement('td');
                  $(tst_ptnt_name_td).addClass("success_det");
                  $(tst_ptnt_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
                  $(tst_ptnt_name_td).css('borderRight','1px solid #ddd');
                  var tst_ptntname_td = document.createElement('td');
                  $(tst_ptntname_td).addClass("success_det");
                  $(tst_ptntname_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.patientName);
                  var tst_apptime_tr = document.createElement('tr');
                  $(tst_apptime_tr).addClass("tst_order_class");
                  var tst_apptime_td = document.createElement('td');
                  $(tst_apptime_td).addClass("success_det");
                  $(tst_apptime_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
                  $(tst_apptime_td).css('borderRight','1px solid #ddd');
                  var tst_appt_time_td = document.createElement('td');
                  $(tst_appt_time_td).addClass("success_det");
                  $(tst_appt_time_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.apptTime);
                  var tst_close_button = document.createElement('button');
                  $(tst_close_button).addClass("tst_close_modal");
                  $(tst_close_button).attr('type','button');
                  $(tst_close_button).html("Close");
                  $(tst_close_button).css('float','right');
                  $(tst_close_button).css('marginTop','8px');
                  $(tst_close_button).css('width','80px');
                  $(tst_close_button).css('borderRadius','5px');
                  $(tst_close_button).css('color','white');
                  $(tst_close_button).css('background','rgb(236,73,73)');
                  $(tst_close_button).css('border','0px');
                  $(tst_close_button).css('marginRight','20px');
                  $(tst_labname_tr).append(tst_labname_td);
                  $(tst_labname_tr).append(tst_lab_name_td);
                  $(tst_orderid_tr).append(tst_orderid_td);
                  $(tst_orderid_tr).append(tst_order_id_td);
                  $(tst_ptnt_name_tr).append(tst_ptnt_name_td);
                  $(tst_ptnt_name_tr).append(tst_ptntname_td);
                  $(tst_apptime_tr).append(tst_apptime_td);
                  $(tst_apptime_tr).append(tst_appt_time_td);
                  $(tst_ordered_table).append(tst_labname_tr);
                  $(tst_ordered_table).append(tst_orderid_tr);
                  $(tst_ordered_table).append(tst_ptnt_name_tr);
                  $(tst_ordered_table).append(tst_apptime_tr);
                  $(tst_order_element).append(tst_booking_heading);
                  $(tst_order_element).append(tst_success_element);
                  $(tst_order_element).append(tst_ordered_table);
                  $(tst_order_element).append(tst_close_button);
                  $("#tst_modal_fourthpage").append(tst_confirm_closing);
                  $("#tst_modal_fourthpage").append(tst_order_element);
                 
                   $(".tst_confirm_close").on('click',function () 
                 {
               	  $(tst_confirm_page).modal().close(); 
                 });//click
                  $(".tst_close_modal").on('click',function () 
                  {
                  	 $(tst_confirm_page).modal().close(); 
                 	});//click btn
                  }//else
                   }//success
                 
                  });//ajax   
 }//fnctn handler
 