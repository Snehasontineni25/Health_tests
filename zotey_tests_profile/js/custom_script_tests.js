 var tst_host_api = "http://beta.zotey.com/m-api"; 
 var tst_categories = "All-Categories";
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
         	console.log(data.testsList);
	         var cust_container = document.getElementsByClassName("cust-container")[0];
            var tst_heading_row = document.createElement('div');
            $(tst_heading_row).addClass("row m-z");
            var tst_list = document.createElement('div');
            $(tst_list).addClass("test-cat-list");
            var tst_list_col = document.createElement('div');
            $(tst_list_col).addClass("col-md-6");
            var tst_row_deals_head = document.createElement('div');
            $(tst_row_deals_head).addClass("row s-deals-heading");
            var tst_head_element = document.createElement('h2');
            $(tst_head_element).html("Health Tests");
            $(tst_row_deals_head).append(tst_head_element);
            $(tst_list_col).append(tst_row_deals_head);
            var tst_search_col = document.createElement('div');
            $(tst_search_col).addClass("col-md-3");
            var tst_search_cont = document.createElement('div');
            $(tst_search_cont).addClass("search-container");
            var tst_search_form = document.createElement('div');
            $(tst_search_form).addClass("form-group cust-input" );
            $(tst_search_form).css('width','244px');
            $(tst_search_form).css('marginLeft','-5px');
            $(tst_search_form).css('marginTop','8px');
            var tst_search_input = document.createElement('input');
            $(tst_search_input).addClass("form-control");
            $(tst_search_input).attr('id','search');
            $(tst_search_input).attr('type','text');
            $(tst_search_input).attr('placeholder','search');
            var tst_input_span = document.createElement('span');
            var tst_input_span_i = document.createElement('i');
            $(tst_input_span_i).addClass("fa fa-search");
            var tst_btn_div = document.createElement('div');
            $(tst_btn_div).css('float','right');
            $(tst_btn_div).css('paddingRight','7%');
            $(tst_btn_div).css('paddingTop','1%');
            var tst_book_button = document.createElement('button');
            $(tst_book_button).html("Book Now");
            $(tst_book_button).css('background','#ec4949');
            $(tst_book_button).css('color','white');
            $(tst_book_button).css('border','0px');
            $(tst_book_button).css('fontWeight','bold');
            $(tst_book_button).css('borderRadius','3px');
            $(tst_btn_div).append(tst_book_button);
            
            $(tst_input_span).append(tst_input_span_i);
            $(tst_search_form).append(tst_search_input);
            $(tst_search_form).append(tst_input_span);
            $(tst_search_cont).append(tst_search_form);
            $(tst_search_col).append(tst_search_cont);
            $(tst_list).append(tst_list_col);
            $(tst_list).append(tst_search_col);
            $(tst_list).append(tst_btn_div);
            $(tst_heading_row).append(tst_list);
            $(cust_container).append(tst_heading_row);
            var tst_list_row = document.createElement('div');
            $(tst_list_row).addClass("row");
            $(tst_list_row).css('background','#fff');
            var tst_prjct_col = document.createElement('div');
            $(tst_prjct_col).addClass("col-md-3 pad0");
            var tst_prjct_list_cont = document.createElement('div');
            $(tst_prjct_list_cont).addClass("projct-list-cont");
            var tst_prjct_list = document.createElement('div');
            $(tst_prjct_list).addClass("project-list");
            var tst_prjct_ul = document.createElement('ul');
            var tst_prjct_li_alltests= document.createElement('li');
            var tst_prjct_a_alltests = document.createElement('a');
            $(tst_prjct_a_alltests).addClass("test-active-color");
            $(tst_prjct_a_alltests).attr('href','/health-tests');
            $(tst_prjct_a_alltests).html("All Tests");
            $(tst_prjct_li_alltests).append(tst_prjct_a_alltests);
            var tst_prjct_li_allergytests = document.createElement('li');
            var tst_prjct_a_allergytest = document.createElement('a');
            $(tst_prjct_a_allergytest).attr('href','health-tests?c_id=30');
            $(tst_prjct_a_allergytest).addClass("");
            $(tst_prjct_a_allergytest).html("Allergy Tests");
            $(tst_prjct_li_allergytests).append(tst_prjct_a_allergytest);
            var tst_prjct_li_cardiactests = document.createElement('li');
            var tst_prjct_a_cardiactests = document.createElement('a');
            $(tst_prjct_a_cardiactests).attr('href','health-tests?c_id=31');
            $(tst_prjct_a_cardiactests).addClass("");
            $(tst_prjct_a_cardiactests).html("Cardiac Tests");
            $(tst_prjct_li_cardiactests).append(tst_prjct_a_cardiactests);
            var tst_prjct_li_diabetictests = document.createElement('li');
            var tst_prjct_a_diabetictests = document.createElement('a');
            $(tst_prjct_a_diabetictests).attr('href','health-tests?c_id=29');
            $(tst_prjct_a_diabetictests).addClass("");
            $(tst_prjct_a_diabetictests).html("Diabetic Tests");
            $(tst_prjct_li_diabetictests).append(tst_prjct_a_diabetictests);
            $(tst_prjct_ul).append(tst_prjct_li_alltests);
            $(tst_prjct_ul).append(tst_prjct_li_allergytests);
            $(tst_prjct_ul).append(tst_prjct_li_cardiactests);
            $(tst_prjct_ul).append(tst_prjct_li_diabetictests);
            $(tst_prjct_list).append(tst_prjct_ul);
            $(tst_prjct_list_cont).append(tst_prjct_list);
            $(tst_prjct_col).append(tst_prjct_list_cont);
            $(tst_list_row).append(tst_prjct_col);
            //$(cust_container).append(tst_list_row); 
            //console.log(data.testsList[1].testName);
            var tst_test_list_col =  document.createElement('div');
            $(tst_test_list_col).addClass("col-md-9");
            var tst_list_row_style = document.createElement('div');
            $(tst_list_row_style).addClass("row g-style");
            for (i=0;i<data.testsList.length;i++) 
            {
            	 
            	 var tst_test_list_row = document.createElement('div');
                $(tst_test_list_row).addClass("test_element");
                //$(tst_test_list_row).css('height','96px');
                var tst_test_list_row_col = document.createElement('div');
                $(tst_test_list_row_col).addClass("col-md-4");
                var tst_hlth_tst_row = document.createElement('div');
                $(tst_hlth_tst_row).addClass("row");
                var tst_hlth_tst_box = document.createElement('div');
                $(tst_hlth_tst_box).addClass("health_test-box");
                var tst_hlth_tst_head = document.createElement('div');
                $(tst_hlth_tst_head).addClass("health_test-head");
                //$(tst_hlth_tst_head).css('height','61px');
                var tst_checkbox = document.createElement('div');
                $(tst_checkbox).addClass("pkg_chck-box");
                var tst_chkbox_input = document.createElement('input');
                $(tst_chkbox_input).addClass("package_chk");
                $(tst_chkbox_input).attr('type','checkbox');
                $(tst_chkbox_input).attr('id','test_check');
                 $(tst_chkbox_input).attr('name','test_checked');
                 $(tst_chkbox_input).attr('value',data.testsList[i].testName);
                $(tst_chkbox_input).attr('data-testname',data.testsList[i].testName);
                $(tst_chkbox_input).attr('data-testslug',data.testsList[i].testSlug);
                $(tst_checkbox).append(tst_chkbox_input);
                var tst_hlth_tst_heading = document.createElement('h4');
                $(tst_hlth_tst_heading).html(data.testsList[i].testName);
                $(tst_hlth_tst_head).append(tst_checkbox);
                $(tst_hlth_tst_head).append(tst_hlth_tst_heading);
                $(tst_hlth_tst_box).append(tst_hlth_tst_head);
                $(tst_hlth_tst_row).append(tst_hlth_tst_box);
                $(tst_test_list_row_col).append(tst_hlth_tst_row);
                $(tst_test_list_row).append(tst_test_list_row_col);
                $(tst_list_row_style).append(tst_test_list_row);
                $(tst_test_list_col).append(tst_list_row_style);
                //$(cust_container).append(tst_test_list_col);
                $(tst_list_row).append(tst_test_list_col);
            }//for loop
            $(tst_btn_div).on('click',function () 
            {
               //alert(document.getElementById('test_check').checked);
               //console.log($('input:checkbox:checked').val());
               var chkboxarray = [];
               var new_array = [];
            $('input[name="test_checked"]:checked').each(function() 
            {
             
               chkboxarray.push($(this).val());
               //console.log(chkboxarray);
                new_array.push($(this).data('testslug'));
              
              });    
               console.log(new_array);
              console.log(chkboxarray);
              //console.log(chkboxarray.length);
              var chkbox_lnth = chkboxarray.length;
              sel_test_list(chkboxarray,new_array);
             // console.log($('input[name="test_checked"]:checked').length);   	
            	});
            $(cust_container).append(tst_list_row); 
      }//success
  });//ajax
}//fnct hndlr
window.onload = tests_list_handler();
function sel_test_list(chkboxarray,new_array)
 {
 	            //console.log(check_value);
 	            var tst_checked = $('input[name="test_checked"]:checked').length;
 	            
               //console.log(tst_checked);
              
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
               $(tst_list_heading).html("Tests list");
               //$(tst_list_heading).addClass("sel_test_list");
               $(tst_list_heading).css('background','#41A7B3');
               $(tst_list_heading).css('color','white');
               $(tst_list_heading).css('fontWeight','bold');
               $(tst_list_heading).css('textAlign','center');
               $(tst_list_heading).css('marginRight','3%');
               $(tst_list_heading).css('marginTop','3%');
                $(tst_sel_test_list_modal).append(tst_list_heading);
                var tst_list_table = document.createElement('table');
                //console.log(chkboxarray.length);
                for (i=0;i<chkboxarray.length;i++) 
                {
                	//var split_array = chkboxarray;
                	//var s_array = split_array.split("");
                	//console.log(s_array);
                //var tst_list_tr = document.createElement('tr');
                //$(tst_list_tr).addClass("sel_test_list");
                //var tst_list_td = document.createElement('td');
                //$(tst_list_td).html(chkboxarray[i]);
                //$(tst_list_tr).append(tst_list_td);
                //$(tst_list_table).append(tst_list_tr);
                var tst_list_div = document.createElement('div');
                $(tst_list_div).addClass("sel_test_list");
                $(tst_list_div).html("&nbsp"+"&nbsp"+"&nbsp"+chkboxarray[i]);
                $(tst_list_div).css('border','1px solid #ddd');
                $(tst_sel_test_list_modal).append(tst_list_div);
                }
                //$(tst_sel_test_list_modal).append(tst_list_heading);
                //$(tst_sel_test_list_modal).append(tst_list_table);
                 var tst_sel_close_button = document.createElement('button');
               $(tst_sel_close_button).html("Close");
               $(tst_sel_close_button).css("background" ,"#ea494f");
               $(tst_sel_close_button).css('color','white');
               $(tst_sel_close_button).css('border','0px');
               $(tst_sel_close_button).css('marginTop','3%');
               //$(tst_sel_close_button).css('marginRight','23px');
               $(tst_sel_close_button).css('borderRadius','5px');
               $(tst_sel_close_button).css('width','10%');
               $(tst_sel_close_button).css('fontWeight','bold');
                var tst_sel_book_button = document.createElement('button');
               $(tst_sel_book_button).html("Book");
               $(tst_sel_book_button).css("background" ,"#ea494f");
               $(tst_sel_book_button).css('color','white');
               $(tst_sel_book_button).css('border','0px');
               $(tst_sel_book_button).css('marginTop','3%');
               //$(tst_sel_close_button).css('marginRight','23px');
               $(tst_sel_book_button).css('borderRadius','5px');
               $(tst_sel_book_button).css('width','10%');
               $(tst_sel_book_button).css('fontWeight','bold');
               $(tst_sel_book_button).css('float','right');
               $(tst_sel_book_button).css('marginRight','3%');
               $(tst_sel_test_list_modal).append(tst_sel_close_button);
                 $(tst_sel_test_list_modal).append(tst_sel_book_button);
                 $(tst_sel_test_close_element).on('click',function () 
                 {
                 	 
               	  $(tst_sel_test_list_modal).modal().close(); 
                 });//click
                 
                 $(tst_sel_close_button).on('click',function () 
                 {
                 	 
               	  $(tst_sel_test_list_modal).modal().close(); 
                 });//click
                 
                 $(tst_sel_book_button).on('click',function () 
                 {
                   	
                     //tst_off_lab_handler(chkboxarray,new_array); 
                     loadingimage_handler();
                     tests_off_labs_list_handler(chkboxarray,new_array);              	
                 	}); 
               $(tst_sel_test_list_modal).modal().open();
              
             
   }
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
    } 
    function tst_off_lab_handler(chkboxarray,new_array)
    {
             var str_array = new_array;
               var new_str = str_array.join("|");
               console.log(new_str);
               	 $.ajax({
                    url:tst_host_api+"/m-checkout/offering-labs-counts",
                    type:'POST',
                    dataType: 'json',
                     data:{testSlugs:new_str},
                     success:function(data)
         {    	
            console.log(data);
            if (data.totalLabsCount == "0") 
            {
            	
            	 var  tst_labcount_alert = document.createElement('div');
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
                $(modal_labcount_body).html('The tests you have selected are not in one lab');
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
            }//if
            else
             {
               var tst_off_lab_list_modal = document.createElement('div');
               $(tst_off_lab_list_modal).addClass("modal");
               $(tst_off_lab_list_modal).attr('id', 'modal_test_labpage');
               $(tst_off_lab_list_modal).css('position','relative');
               $(tst_off_lab_list_modal).css('backgroundColor','#fff');
               $(tst_off_lab_list_modal).css('paddingRight','0px');
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
               $(tst_off_lab_list_modal).append(tst_off_lab_close_element);
               $(tst_off_lab_list_modal).append(tst_off_lab_head_name);
               console.log(new_array);
               console.log(data);
                $(tst_off_lab_close_element).on('click',function () 
                 {
                 	 
               	  $(tst_off_lab_list_modal).modal().close(); 
                 });//click
                $(tst_off_lab_list_modal).modal().open();
              }//else
   }//success
   });//ajax
   }//fnctn hndlr
   
    function tests_off_labs_list_handler(chkboxarray,new_array)
   {
   	         var str_array = new_array;
               var new_str = str_array.join("|");
               console.log(new_str);
                $.ajax({
                    url:tst_host_api+"/m-checkout/offering-labs-details",
                    type:'POST',
                    dataType: 'json',
                     data:{testSlugs:new_str},
                     success:function(data)
                    {    	
                   console.log(data);
               var tst_off_lab_list_modal = document.createElement('div');
               $(tst_off_lab_list_modal).addClass("modal");
               $(tst_off_lab_list_modal).attr('id', 'modal_test_labpage');
               $(tst_off_lab_list_modal).css('position','relative');
               $(tst_off_lab_list_modal).css('backgroundColor','#fff');
               $(tst_off_lab_list_modal).css('paddingRight','0px');
               $(tst_off_lab_list_modal).css('width','51%');
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
               $(tst_off_lab_list_modal).append(tst_off_lab_close_element);
               $(tst_off_lab_list_modal).append(tst_off_lab_head_name);
               console.log(new_array);
               //console.log(data);
               var tst_labs_table = document.createElement('table');
              $(tst_labs_table).addClass("tablesorter");
              $(tst_labs_table).attr("id","myTable");
              $(tst_labs_table).css('marginRight','20px');
              $(tst_labs_table).css('cursor','pointer');
              $(tst_labs_table).css('marginTop','3%');
              var tst_table_head = document.createElement('thead');
              $(tst_table_head).addClass("tst-table_head");
              var tst_labs_tr = document.createElement('tr');
               $(tst_labs_tr).css("background", "#41A7B3");
              $(tst_labs_tr).css("color","white");
              var tst_labname_th = document.createElement('th');
              $(tst_labname_th).css('border', '1px solid #ddd');
              $(tst_labname_th).css('width','34%');
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
              //$(tst_labarea_th).css('width','16%');
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
              $(tst_labprice_th).css('width','14%');
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
             	 var tst_labname_td = document.createElement('td');
             	  $(tst_labname_td).html(data[i].labName);
             	  $(tst_labname_td).css('border', '1px solid #ddd'); 
             	 var tst_labarea_td = document.createElement('td');
             	 $(tst_labarea_td).html(data[i].labArea);
             	 $(tst_labarea_td).css('border', '1px solid #ddd'); 
             	 var tst_price_td = document.createElement('td');
              	 var tst_div_td = document.createElement('div');
                $(tst_div_td).html(data[i].labFinalPrice+"&nbsp"+"(");
                
              	 $(tst_price_td).css('border', '1px solid #ddd');
              	 $(tst_div_td).css('float','left');
              	 //$(tst_price_td).css('padding-left',	'9px');
              	 $(tst_price_td).css('padding-left',	'1%');
              	 /* if(data[i].labFinalPrice.length == "4" && data[i].labMRP.length =="4") 
              	  {
              	    $(tst_price_td).css('padding-left',	'2%');
              	  }  
              	  //$(tst_price_td).css('padding-left',	'1%');
              	 else if(data[i].labFinalPrice.length == "3" && data[i].labMRP.length =="3") 
              	  {
              	    $(tst_price_td).css('padding-left',	'3%');
              	  }  
              	  else if((data[i].labFinalPrice.length == "3" && data[i].labMRP.length =="4") || (data[i].labFinalPrice.length == "4" && data[i].labMRP.length =="3"))
                 {
                   $(tst_price_td).css('padding-left',	'2%');
                 }*/ 
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
              	 //$(tst_book_view_div).css('height','16px');
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
              	 $(tst_table_head).append(tst_lab_details_tr);
              	 $(tst_lab_details_tr).on('click',function () 
              	 {
                    var tst_sel_labname =$(this).data('tst-labname');
                    var tst_sel_labslug = $(this).data('tst-labslug');
                    var tst_sel_labtest_slug = $(this).data('tst-labtstslug');
                    var tst_sel_fp = $(this).data('tst-fp');   
                    var tst_sel_mrp = $(this).data('tst-mrp');
                    var tst_sel_discount = $(this).data('tst-discount');
                    tst_form_handler()   
                    //console.log(tst_sel_labname, tst_sel_labslug, tst_sel_labtest_slug, tst_sel_fp, tst_sel_mrp, tst_sel_discount);          	 	
              	 	});//click

             } //for loop            
              $(tst_labs_table).append(tst_table_head);
              $(tst_off_lab_list_modal).append(tst_labs_table);
                $(tst_off_lab_close_element).on('click',function () 
                 {
                 	 
               	  $(tst_off_lab_list_modal).modal().close(); 
                 });//click
                $(tst_off_lab_list_modal).modal().open();
               
             }//success
            });
              }//fnctn handler
              
          //function  tst_form_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount)     
       function tst_form_handler()       
      {      	         
                  var tst_booking_page = document.createElement('div');
                  $(tst_booking_page).addClass("modal");
                  $(tst_booking_page).attr('id','tst_modal_formpage');
                  $(tst_booking_page).css('backgroundColor','#fff');
                  $(tst_booking_page).css('height','128%');
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
                  //$(tst_lab_details).html(local_package_labname);
                  $(tst_lab_details).css('textAlign' ,'right');
                  $(tst_lab_details).css('paddingRight','17px');
                  $(tst_lab_details).css('fontWeight','bold');
                  $(tst_lab_details).css('marginTop','6px');  
                  $(tst_lab_details).css('marginRight','20px');
                  var tst_deal_name  = document.createElement('div');
                  //$(tst_deal_name).html(package_name);
                  $(tst_deal_name).css('textAlign' ,'right');
                  $(tst_deal_name).css('paddingRight','14px');
                  $(tst_deal_name).css('fontWeight','bold');
                  $(tst_deal_name).css('marginTop','6px');
                  $(tst_deal_name).css('marginRight','20px');
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
                  $(tst_input_element).attr('id', 'pkg_patient_name');
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
                  $(tst_input_email).attr('id','pkg_email');
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
                  $(tst_input_address).attr('id','pkg_address');
                  $(tst_input_address).attr('name','patient_address');
                  $(tst_input_address).attr('value','');
                  $(tst_input_address).css('width','468px');
                  $(tst_input_address).css('border','1px solid #c4cdcf');
                  //$(pkg_input_address).addClass('form-icon form-icon-lock');
                  $(tst_input_address).attr('placeholder','Please enter your Address');
                  $(tst_input_address).attr('required','required');
                   
                  //$(pkg_input_address).attr('maxlength','56');
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
                  $(tst_input_phno).attr('id','pkg_phone');
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
                  $(tst_input_booking).attr('id','pkg_app_time');
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
                  $(tst_backbtn).attr('id','step2_back_btn');
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
                  $(tst_nextbtn).attr('id','step2_next_btn');
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
                 $(tst_name_element).attr('id','pkg_err_name');
                 $(tst_name_element).css('color','rgb(236,73,73)');
                 $(tst_name_element).css('textAlign','left');
                 $(tst_name_element).css('marginLeft','16px');
                 $(tst_name_element).css('display','none');
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
                  $(tst_email_element).attr('id','pkg_err_email');
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
                 	$(tst_mbno_element).attr('id','pkg_err_mbno');
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
                  $(tst_address_element).attr('id','pkg_err_address');
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
                 /* var pkg_address_element = document.createElement('div');
                  $(pkg_address_element).addClass("err_msg");
                  $(pkg_address_element).css('color','rgb(236,73,73)');
                  $(pkg_address_element).css('textAlign','left');
                  $(pkg_address_element).css('marginLeft','16px');
                  $(pkg_address_element).css('display','none');
                  var pkg_star_address = document.createElement('span');
                  $(pkg_star_address).addClass('star');
                  $(pkg_star_address).html("&#x2605");
                  $(pkg_star_address).css('float','left');
                  var pkg_error_address_element = document.createElement('div');
                  $(pkg_error_address_element).html('Enter your address');
                  $(pkg_address_element).append(pkg_star_address);
                  $(pkg_address_element).append(pkg_error_address_element); */
                  var tst_apptime_element = document.createElement('div');
                 	$(tst_apptime_element).attr('id','pkg_err_apptime');
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
                   $(tst_app_time_element).attr('id','pkg_err_app_time');
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
                            //pkg_datastore_handler();
                          }//if
               	    $("#modal_secondpage").modal().close(); 
                     });//click
                  var pkg_body_element = document.getElementsByClassName("themodal-lock")[0];
                    	 $(pkg_body_element).on('keyup' ,function (event)
                    	 {
                             if(event.keyCode == 27)
                             {
                             	 
                        	    if(typeof(Storage)!=="undefined")
                               {
                                 //pkg_datastore_handler();
                                }//if storage
                              }//if keycode
                         });//key fnctn
                          
                  var tst_today = new Date();  
                 var tst_minutes = tst_today.getMinutes();
                 //console.log(local_package_homevisit);
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
                   
                 var tst_pat_name = $("#pkg_patient_name").val();
                 var tst_pat_email = $("#pkg_email").val();
                 var tst_pat_phno = $("#pkg_phone").val();
                 var tst_pat_apptime = $("#pkg_app_time").val();
                      if ((tst_pat_name == "") && (tst_pat_email =="") && (tst_pat_phno == "") && (tst_pat_apptime == ""))
                     {
                       //pkg_Filling_localdata(); 
                     }//
                    $('#step2_back_btn').on('click',function () 
                    {
                       
                          pkg_form_backbtn(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);    
                     	});//back btn click
                    $('#step2_next_btn').on('click', function()
                    {
                     			if(typeof(Storage)!=="undefined")
                       { 
                     	 //pkg_datastore_handler();
                       }//if  
                        var tst_patient_name = $('#pkg_patient_name').val();
                         var tst_patient_email = $('#pkg_email').val();
                       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                        var tst_mobile_number = $('#pkg_phone').val();
                         var tst_patient_apptime =  $('#pkg_app_time').val();
                         if(typeof(Storage)!=="undefined")
                       { 
                     	 //pkg_datastore_handler();
                       }//if
                      
                   var tst_appt_time = localStorage.getItem("pkg_app_time");
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
                     if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))  
                    { 
                      if ( !(tst_patient_name.length >= 6 && tst_patient_name.length <= 26) || tst_patient_name.match(/[^a-zA-Z ]/)  )
                        {
                           $(tst_name_element).css('display','block');
                          return false;
                        
                        }//if patient name
                      if(document.getElementById('pkg_err_name').style.display = 'block')
                        {
                            document.getElementById('pkg_err_name').style.display = 'none';
                            //document.getElementById('pkg_address').style.display = 'none'
                           
                        }//if err_name
                      }//if 
                     if((document.getElementById("pkg_err_name").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none')) 
                    {
                    	 if(!filter.test(tst_patient_email))
                       {
                         $(tst_email_element).css('display','block');
                        return false;
                       }//if email
                     if(document.getElementById('pkg_err_email').style.display = 'block')
                       {
                          document.getElementById('pkg_err_email').style.display = 'none';
                          
                       }//if err_email
                       }//if
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))
                       {
                       	 if((tst_mobile_number.match(/[^0-9]/) || tst_mobile_number.length != 10) || (!(tst_mobile_number.charAt(0)=="9" || tst_mobile_number.charAt(0)=="8" || tst_mobile_number.charAt(0)=="7")))
                       {
                       	 $(tst_mbno_element).css('display','block');
                       	 return false;
                       }//if mble
                        if(document.getElementById('pkg_err_mbno').style.display = 'block')
                       {
                       	
                          document.getElementById('pkg_err_mbno').style.display = 'none';
                         
                       }//if err_mbno
                       }//if
                      
                       if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none'))
                     {
                     	
                     	if(! ($('#pkg_app_time').val()))   
                       {
                         	$(tst_apptime_element).css('display','block');
                           return false;
                       }//if app_time
                       
                       var tst_val_time = tst_date+"-"+tst_month+"-"+tst_year+" "+tst_hours +":"+ tst_mnt+":"+tst_sec;
                      //var appt_time = localStorage.getItem("app_time");
                         
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
                        if(document.getElementById('pkg_err_apptime').style.display = 'block')
                       {
                          document.getElementById('pkg_err_apptime').style.display = 'none';
                          
                       }
                       }//if
                          if((document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_name').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_address').style.display = 'none')) 
                         {
                          if(tst_current_time > tst_sel_time)
                          {
                          	
                          	$(tst_app_time_element).css('display','block');
                          	return false;
                          	}//if time
                         if (document.getElementById('pkg_err_app_time').style.display = 'block') 
                          {
                          	  document.getElementById('pkg_err_app_time').style.display = 'none';
                          	  
                           }//if err_time    
                         }//if
                        /* if(local_package_homevisit.length == "13")
                      {
                       if((document.getElementById('pkg_err_name').style.display = 'none') && (document.getElementById("pkg_err_email").style.display ='none') && (document.getElementById('pkg_err_mbno').style.display = 'none') &&(document.getElementById('pkg_err_apptime').style.display = 'none') &&(document.getElementById('pkg_err_app_time').style.display = 'none'))
                       {
                            if(! ($('#pkg_address').val()))  
                          {
                             $(pkg_address_element).css('display','block');
                              return false;
                          }// if visit type
                       
                         if (document.getElementById('pkg_err_address').style.display = 'block') 
                          {
                          	  document.getElementById('pkg_err_address').style.display = 'none';
                          	  
                           }//if err_visittype
                       }//if display
                      }// if length*/
                       //pkg_preview_handler(package_name,package_consultation,package_labname,package_slug,package_labslug,package_finalprice,package_discount,package_labarea,package_mrp) 
                       //pkg_preview_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
                        //console.log(local_package_homevisit);
                        
                 	   //console.log(local_package_onlinereport);
                 //pkg_preview_handler(package_slug,package_name,local_package_onlinereport,local_package_homevisit,local_package_labslug,local_package_labarea,local_package_labname,local_package_price,local_package_mrp,local_package_discount);
                    });//btn onclick handler
                    
                
          }//form_handler 
        
              
              