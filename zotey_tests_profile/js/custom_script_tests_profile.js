var tst_profile_slug ="random-blood-sugar";
var tst_profile_host = "http://beta.zotey.com/m-api";
var tst_profile_tstname;
var tst_profile_tstslug;
function test_profile_details_handler()
{
	$.ajax({
   url:tst_profile_host+"/d-tests/profile",
   type:'GET',
   dataType: 'json',
   data:{testSlug:tst_profile_slug},
   success:function(data)
   {
   	tst_profile_tstname = data.testInfo.testName;
   	tst_profile_tstslug = data.testInfo.testSlug;
      var tst_profile_loading = document.getElementById("tst_profile_loader");
      $(tst_profile_loading).css('display','none');
      var cust_profile_container = document.getElementsByClassName("cust-container")[0];
	   var tst_profile_heading_row = document.createElement('div');
	   $(tst_profile_heading_row).addClass("row");
	   var tst_profile_details_col = document.createElement('div');
	   $(tst_profile_details_col).addClass("col-md-9 col-sm-3");
	   var tst_profile_cust_wrapper = document.createElement('div');
	   $(tst_profile_cust_wrapper).addClass("cust_profile_wrapper");
	   var tst_profile_testname_row = document.createElement('div');
	   $(tst_profile_testname_row).addClass("row");
	   var tst_profile_name = document.createElement('div');
	   $(tst_profile_name).html(data.testInfo.testName);
	   $(tst_profile_name).css('textAlign','center');
	   $(tst_profile_name).css('color','rgb(65, 167, 179)');
	   $(tst_profile_name).css('fontWeight','bold');
	   $(tst_profile_name).css('fontSize','18px');
	   $(tst_profile_name).css('paddingTop','8px');
	   var tst_profile_description = document.createElement('div');
	   $(tst_profile_description).html("Description");
	   $(tst_profile_description).css('fontWeight','bold');
	   $(tst_profile_description).css('color','rgb(65, 167, 179)');
	   $(tst_profile_description).css('fontSize','16px');
	   $(tst_profile_description).css('marginBottom','6px');
	   var tst_profile_description_data = document.createElement('div');
	   $(tst_profile_description_data).html(data.testInfo.testDesc);
	   $(tst_profile_description_data).css('textAlign','justify');
	   var tst_profile_offering_labs = document.createElement('div');
	   $(tst_profile_offering_labs).html("Offering Labs");
	   $(tst_profile_offering_labs).css('color','rgb(65, 167, 179)');
	   $(tst_profile_offering_labs).css('fontWeight','bold');
	   $(tst_profile_offering_labs).css('paddingTop','11px');
	   $(tst_profile_offering_labs).css('fontSize','16px');
	   $(tst_profile_offering_labs).css('paddingBottom','11px');
	   var tst_profile_labs_table = document.createElement('table');
	   $(tst_profile_labs_table).addClass("tablesorter");
	   $(tst_profile_labs_table).attr('id','tst_profile_tab');
	   $(tst_profile_labs_table).css('width','100%');
	   $(tst_profile_labs_table).css('fontSize','13px');
	   var tst_profile_table_head = document.createElement('thead');
      $(tst_profile_table_head).addClass("table_head");
      var tst_profile_labs_tr = document.createElement('tr');
      $(tst_profile_labs_tr).css("background", "#41A7B3");
      $(tst_profile_labs_tr).css("color","white");
      $(tst_profile_labs_tr).css('cursor','pointer');
      var tst_profile_labname_th = document.createElement('th');
      $(tst_profile_labname_th).css('border', '1px solid #ddd');
      $(tst_profile_labname_th).css('width','25%');
      var tst_profile_labname_element = document.createElement('div');
      $(tst_profile_labname_element).html("Lab Name");
      $(tst_profile_labname_element).css('padding','10px');
      $(tst_profile_labname_element).css('textAlign','center');
      $(tst_profile_labname_element).css('float','left');
      var tst_profile_imgs = document.createElement('div');
      $(tst_profile_imgs).css('float','right');
      var tst_profile_asc = document.createElement('div');
      var tst_profile_img_asc = document.createElement('img');
      $(tst_profile_img_asc).attr('src','images/table_sorter_asc.png');
      $(tst_profile_img_asc).css('paddingBottom','14px');
      $(tst_profile_img_asc).css('paddingLeft','1px');
      var tst_profile_desc = document.createElement('div');
      var tst_profile_img_desc = document.createElement('img');
      $(tst_profile_img_desc).attr('src','images/table_sorter_desc.png');
      $(tst_profile_img_desc).css('paddingTop','13px');
       var tst_profile_labaddress_th = document.createElement('th');
      $(tst_profile_labaddress_th).css('border', '1px solid #ddd');
      $(tst_profile_labaddress_th).css('width','25%');
      var tst_profile_labaddress = document.createElement('div');
      $(tst_profile_labaddress).html("Address");
      $(tst_profile_labaddress).css('textAlign','center');
      $(tst_profile_labaddress).css('float','left');
      $(tst_profile_labaddress).css('padding','10px');
      var tst_profile_address_imgs = document.createElement('div');
      $(tst_profile_address_imgs).css('float','right');
      var tst_profile_address_asc = document.createElement('div');
      var tst_profile_address_img_asc = document.createElement('img');
      $(tst_profile_address_img_asc).attr('src','images/table_sorter_asc.png');
      $(tst_profile_address_img_asc).css('paddingBottom','14px');
      $(tst_profile_address_img_asc).css('paddingLeft','1px');
      var tst_profile_address_desc = document.createElement('div');
      var tst_profile_address_img_desc = document.createElement('img');
      $(tst_profile_address_img_desc).attr('src','images/table_sorter_desc.png');
      $(tst_profile_address_img_desc).css('paddingTop','13px');
      var tst_profile_labarea_th = document.createElement('th');
      $(tst_profile_labarea_th).css('border', '1px solid #ddd');
      $(tst_profile_labarea_th).css('width','20%');
      var tst_profile_labarea = document.createElement('div');
      $(tst_profile_labarea).html("Location");
      $(tst_profile_labarea).css('textAlign','center');
      $(tst_profile_labarea).css('float','left');
      $(tst_profile_labarea).css('padding','10px');
      var tst_profile_area_imgs = document.createElement('div');
      $(tst_profile_area_imgs).css('float','right');
      var tst_profile_area_asc = document.createElement('div');
      var tst_profile_area_img_asc = document.createElement('img');
      $(tst_profile_area_img_asc).attr('src','images/table_sorter_asc.png');
      $(tst_profile_area_img_asc).css('paddingBottom','14px');
      $(tst_profile_area_img_asc).css('paddingLeft','1px');
      var tst_profile_area_desc = document.createElement('div');
      var tst_profile_area_img_desc = document.createElement('img');
      $(tst_profile_area_img_desc).attr('src','images/table_sorter_desc.png');
      $(tst_profile_area_img_desc).css('paddingTop','13px');
      var tst_profile_labprice_th = document.createElement('th');
      $(tst_profile_labprice_th).css('border', '1px solid #ddd');
      $(tst_profile_labprice_th).css('width','10%');
      var tst_profile_labprice = document.createElement('div');
      $(tst_profile_labprice).html("Price");
      $(tst_profile_labprice).css('float', 'left');
      $(tst_profile_labprice).css('textAlign','center');
      $(tst_profile_labprice).css('padding','10px');
      var tst_profile_labprice_imgs = document.createElement('div');
      $(tst_profile_labprice_imgs).css('float','right');
      var tst_profile_price_asc = document.createElement('div');
      var tst_profile_price_img_asc = document.createElement('img');
      $(tst_profile_price_img_asc).attr('src','images/table_sorter_asc.png');
      $(tst_profile_price_img_asc).css('paddingBottom','14px');
      $(tst_profile_price_img_asc).css('paddingLeft','1px');
      var tst_profile_price_desc = document.createElement('div');
      var tst_profile_price_img_desc = document.createElement('img');
      $(tst_profile_price_img_desc).attr('src','images/table_sorter_desc.png');
      $(tst_profile_price_img_desc).css('paddingTop','13px');
      $(tst_profile_price_desc).append(tst_profile_price_img_desc);
      $(tst_profile_price_asc).append(tst_profile_price_img_asc);
      $(tst_profile_labprice_imgs).append(tst_profile_price_desc);
      $(tst_profile_labprice_imgs).append(tst_profile_price_asc);
      $(tst_profile_labprice_th).append(tst_profile_labprice);
      $(tst_profile_labprice_th).append(tst_profile_labprice_imgs);
      var tst_profile_labdiscount_th = document.createElement('th');
      $(tst_profile_labdiscount_th).css('border', '1px solid #ddd');
      $(tst_profile_labdiscount_th).css('width','13%');
      var tst_profile_labdiscount = document.createElement('div');
      $(tst_profile_labdiscount).html("Discount");
      $(tst_profile_labdiscount).css('float', 'left');
      $(tst_profile_labdiscount).css('textAlign','center');
      $(tst_profile_labdiscount).css('padding','10px');
      var tst_profile_labdiscount_imgs = document.createElement('div');
      $(tst_profile_labdiscount_imgs).css('float','right');
      var tst_profile_discount_asc = document.createElement('div');
      var tst_profile_discount_img_asc = document.createElement('img');
      $(tst_profile_discount_img_asc).attr('src','images/table_sorter_asc.png');
      $(tst_profile_discount_img_asc).css('paddingBottom','14px');
      $(tst_profile_discount_img_asc).css('paddingLeft','1px');
      var tst_profile_discount_desc = document.createElement('div');
      var tst_profile_discount_img_desc = document.createElement('img');
      $(tst_profile_discount_img_desc).attr('src','images/table_sorter_desc.png');
      $(tst_profile_discount_img_desc).css('paddingTop','13px');
      var tst_profile_book_th = document.createElement('th');
      $(tst_profile_book_th).html("Book");
      $(tst_profile_book_th).css('textAlign','center');
      $(tst_profile_book_th).css('padding','10px');
      $(tst_profile_book_th).css('width','7%');
      $(tst_profile_address_desc).append(tst_profile_address_img_desc);
      $(tst_profile_address_asc).append(tst_profile_address_img_asc);
      $(tst_profile_address_imgs).append(tst_profile_address_desc);
      $(tst_profile_address_imgs).append(tst_profile_address_asc);
      $(tst_profile_labaddress_th).append(tst_profile_labaddress);
      $(tst_profile_labaddress_th).append(tst_profile_address_imgs);
      $(tst_profile_discount_desc).append(tst_profile_discount_img_desc);
      $(tst_profile_discount_asc).append(tst_profile_discount_img_asc);
      $(tst_profile_labdiscount_imgs).append(tst_profile_discount_desc);
      $(tst_profile_labdiscount_imgs).append(tst_profile_discount_asc);
      $(tst_profile_labdiscount_th).append(tst_profile_labdiscount);
      $(tst_profile_labdiscount_th).append(tst_profile_labdiscount_imgs);
      $(tst_profile_area_desc).append(tst_profile_area_img_desc);
      $(tst_profile_area_asc).append(tst_profile_area_img_asc);
      $(tst_profile_area_imgs).append(tst_profile_area_desc);
      $(tst_profile_area_imgs).append(tst_profile_area_asc);
      $(tst_profile_labarea_th).append(tst_profile_labarea);
      $(tst_profile_labarea_th).append(tst_profile_area_imgs);
      $(tst_profile_asc).append(tst_profile_img_asc);
      $(tst_profile_desc).append(tst_profile_img_desc);
      $(tst_profile_imgs).append(tst_profile_desc);
      $(tst_profile_imgs).append(tst_profile_asc);
      $(tst_profile_labname_th).append(tst_profile_labname_element);
      $(tst_profile_labname_th).append(tst_profile_imgs);
      $(tst_profile_labs_tr).append(tst_profile_labname_th);
      $(tst_profile_labs_tr).append(tst_profile_labaddress_th);
      $(tst_profile_labs_tr).append(tst_profile_labarea_th);
      $(tst_profile_labs_tr).append(tst_profile_labprice_th);
      $(tst_profile_labs_tr).append(tst_profile_labdiscount_th);
      $(tst_profile_labs_tr).append(tst_profile_book_th);
      $(tst_profile_table_head).append(tst_profile_labs_tr);
      $(tst_profile_labs_table).append(tst_profile_table_head);
      var tst_profile_table_body = document.createElement('tbody');
      for (var i=0;i<data.offeringLabs.length;i++) 
      {
          var tst_profile_lab_details_tr = document.createElement('tr');
          $(tst_profile_lab_details_tr).attr('id','tst_profile_details');
          var tst_profile_labname_td = document.createElement('td');
          $(tst_profile_labname_td).css('border', '1px solid #ddd');
          $(tst_profile_labname_td).css('paddingLeft','6px'); 
          $(tst_profile_labname_td).css('cursor','pointer');
          var tst_profile_labname_a = document.createElement('a');
          $(tst_profile_labname_a).html(data.offeringLabs[i].labName);
          $(tst_profile_labname_a).addClass("profile_lab_page");
          $(tst_profile_labname_a).attr('href',data.offeringLabs[i].labProfilePageURL);
          $(tst_profile_labname_a).attr('target','_blank');
          $(tst_profile_labname_td).append(tst_profile_labname_a);
          var tst_profile_labaddress_td = document.createElement('td');
          $(tst_profile_labaddress_td).html(data.offeringLabs[i].labAddress);
          $(tst_profile_labaddress_td).css('border', '1px solid #ddd');
          $(tst_profile_labaddress_td).css('paddingLeft','6px');
          var tst_profile_labarea_td = document.createElement('td');
          $(tst_profile_labarea_td).html(data.offeringLabs[i].labArea);
          $(tst_profile_labarea_td).css('border', '1px solid #ddd'); 
          $(tst_profile_labarea_td).css('paddingLeft','6px');
          var tst_profile_price_td = document.createElement('td');
          var tst_profile_div_td = document.createElement('div');
          $(tst_profile_div_td).html(data.offeringLabs[i].labTestDiscountedPrice+"&nbsp"+"(");
          $(tst_profile_price_td).css('border', '1px solid #ddd');
          $(tst_profile_div_td).css('float','left');
          $(tst_profile_price_td).css('padding-left',	'7px');
          var tst_profile_dp = document.createElement('div');
          var tst_profile_discountedprice = document.createElement('div');
          $(tst_profile_discountedprice).html(data.offeringLabs[i].labTestMRP);
          $(tst_profile_discountedprice).css('textDecoration','line-through');
          $(tst_profile_discountedprice).css('color','rgb(236,73,73)');
          $(tst_profile_discountedprice).css('position','relative');
          $(tst_profile_discountedprice).css('float','left');
          var tst_profile_close_bracket = document.createElement('div');
          $(tst_profile_close_bracket).html(")");
          $(tst_profile_close_bracket).css('position','relative');
          $(tst_profile_dp).append(tst_profile_discountedprice);
          $(tst_profile_dp).append(tst_profile_close_bracket);
          $(tst_profile_price_td).append(tst_profile_div_td);
          $(tst_profile_price_td).append(tst_profile_dp);
          var tst_profile_discount_td = document.createElement('td');
          $(tst_profile_discount_td).html(data.offeringLabs[i].labTestDiscount+"%");
          $(tst_profile_discount_td).css('border', '1px solid #ddd');
          $(tst_profile_discount_td).css('padding','6px');
          $(tst_profile_discount_td).css('textAlign','center');
          var tst_profile_book_td = document.createElement('td');
          $(tst_profile_book_td).attr('data-tst-profile-discount', data.offeringLabs[i].labTestDiscount);
          $(tst_profile_book_td).attr('data-tst-profile-mrp', data.offeringLabs[i].labTestMRP);
          $(tst_profile_book_td).attr('data-tst-profile-dp', data.offeringLabs[i].labTestDiscountedPrice);
          $(tst_profile_book_td).attr('data-tst-profile-labname', data.offeringLabs[i].labName);
          $(tst_profile_book_td).attr('data-tst-profile-labslug', data.offeringLabs[i].labSlug);
          $(tst_profile_book_td).attr('data-tst-profile-labarea', data.offeringLabs[i].labArea);
          $(tst_profile_book_td).attr('data-tst-profile-labaddress', data.offeringLabs[i].labAddress);
          $(tst_profile_book_td).attr('data-tst-profile-labpin', data.offeringLabs[i].labPincode);
          $(tst_profile_book_td).attr('data-tst-profile-onlineReport',data.offeringLabs[i].onlineReports);
          $(tst_profile_book_td).attr('data-tst-profile-labvisit',data.offeringLabs[i].visitType);
          $(tst_profile_book_td).css('paddingLeft','6px');
          $(tst_profile_book_td).css('paddingRight','6px');
          $(tst_profile_book_td).css('border', '1px solid #ddd');
          $(tst_profile_book_td).css('cursor','pointer');
          $(tst_profile_book_td).on('click',tst_profile_details_hander);
          var tst_profile_book_div = document.createElement('div');
          $(tst_profile_book_div).addClass("view_btn");
          $(tst_profile_book_div).css("background","#ea494f");
          $(tst_profile_book_div).css('borderRadius','5px');
          $(tst_profile_book_div).css("color","white");
          $(tst_profile_book_div).css('border','0px');
          $(tst_profile_book_div).css('height','18px');
          $(tst_profile_book_div).css('width','32px');
          $(tst_profile_book_div).css('marginLeft','10px');
          var tst_profile_book_view_div = document.createElement('div');
          $(tst_profile_book_view_div).html("Book");
          $(tst_profile_book_view_div).css('fontSize','10px');
          $(tst_profile_book_view_div).css('paddingTop','2px');
          $(tst_profile_book_view_div).css('paddingLeft','5px');
          $(tst_profile_book_view_div).css('paddingRight','5px');
          $(tst_profile_book_div).append(tst_profile_book_view_div);
          $(tst_profile_book_td).append(tst_profile_book_div);
          $(tst_profile_lab_details_tr).append(tst_profile_labname_td);
          $(tst_profile_lab_details_tr).append(tst_profile_labaddress_td);
          $(tst_profile_lab_details_tr).append(tst_profile_labarea_td);
          $(tst_profile_lab_details_tr).append(tst_profile_price_td);
          $(tst_profile_lab_details_tr).append(tst_profile_discount_td);
          $(tst_profile_lab_details_tr).append(tst_profile_book_td);
          $(tst_profile_table_body).append(tst_profile_lab_details_tr);
          $(tst_profile_labs_table).append(tst_profile_table_body); 
       }       	      
       $(tst_profile_labs_tr).on('click',function () 
       {
          $("#tst_profile_tab").tablesorter( {sortList: [[0,0], [1,0],[2,0],[3,0],[4,0]]} ); 
       });//row on click
       var tst_profile_img_col = document.createElement('div');
	   $(tst_profile_img_col).addClass("col-md-3 col-sm-3");
	   $(tst_profile_img_col).attr('id','cloud_tests');
      $(tst_profile_testname_row).append(tst_profile_name);
	   $(tst_profile_testname_row).append(tst_profile_description);
	   $(tst_profile_testname_row).append(tst_profile_description_data);
	   $(tst_profile_testname_row).append(tst_profile_offering_labs);
	   $(tst_profile_testname_row).append(tst_profile_labs_table);
	   $(tst_profile_cust_wrapper).append(tst_profile_testname_row);
	   $(tst_profile_details_col).append(tst_profile_cust_wrapper);
	   $(tst_profile_heading_row).append(tst_profile_details_col);
	   if (data.relatedTests.length == 0) 
	   {
	   var tst_profile_popular_head = document.createElement('div');
	   $(tst_profile_popular_head).html("Popular Tests");
	   $(tst_profile_popular_head).css('fontSize','16px');
	   $(tst_profile_popular_head).css('color','rgb(65, 167, 179)');
	   $(tst_profile_popular_head).css('fontWeight','bold');
	   $(tst_profile_popular_head).css('marginBottom','13px');
	   $(tst_profile_popular_head).css('textAlign','center');
	   $(tst_profile_img_col).append(tst_profile_popular_head);
	   for (var i=0;i<data.popular_tests.length;i++) 
	   {
	   	var tst_profile_pop_test = document.createElement('a');
	   	$(tst_profile_pop_test).attr('href',data.popular_tests[i].testProfilePageURL);
	   	$(tst_profile_pop_test).addClass("pop_test");
	   	$(tst_profile_pop_test).html("&nbsp"+"&nbsp"+data.popular_tests[i].testName);
	   	$(tst_profile_img_col).append(tst_profile_pop_test);
	   }//for loop pop tsts
	   $(tst_profile_heading_row).append(tst_profile_img_col);	
	   $(cust_profile_container).append(tst_profile_heading_row);
	   }//if for rltd tsts
	   else 
	   {
	   	var tst_profile_related_head = document.createElement('div');
	      $(tst_profile_related_head).html("Related Tests");
	      $(tst_profile_related_head).css('fontSize','16px');
	      $(tst_profile_related_head).css('color','rgb(65, 167, 179)');
	      $(tst_profile_related_head).css('fontWeight','bold');
	      $(tst_profile_related_head).css('marginBottom','13px');
	      $(tst_profile_related_head).css('textAlign','center');
	      $(tst_profile_img_col).append(tst_profile_related_head);
	     for (var i=0;i<data.relatedTests.length;i++) 
	     {
	   	  var tst_profile_rel_test = document.createElement('a');
	   	  $(tst_profile_rel_test).attr('href',data.relatedTests[i].testProfilePageURL);
	   	  $(tst_profile_rel_test).addClass("pop_test");
	   	  $(tst_profile_rel_test).html("&nbsp"+"&nbsp"+data.relatedTests[i].testName);
	   	  $(tst_profile_img_col).append(tst_profile_rel_test);
	     }//for loop pop tsts
	   $(tst_profile_heading_row).append(tst_profile_img_col);	
	   $(cust_profile_container).append(tst_profile_heading_row);
	  }//else for rltd tsts
	   
	 }//success fnctn
	});//ajax
}//profile detail ending fnctn
window.onload =test_profile_details_handler();
function tst_profile_details_hander()
{
	var tst_pfl_labname = $(this).data('tst-profile-labname');
	var tst_pfl_labslug = $(this).data('tst-profile-labslug');
	var tst_pfl_discount = $(this).data('tst-profile-discount');
	var tst_pfl_mrp = $(this).data('tst-profile-mrp');
	var tst_pfl_dp =$(this).data('tst-profile-dp');
	var tst_pfl_labarea =$(this).data('tst-profile-labarea');
	var tst_pfl_labaddress = $(this).data('tst-profile-labaddress');
	var tst_pfl_labaddress_pin = $(this).data('tst-profile-labpin');
	var tst_pfl_online_rpt = $(this).data('tst-profile-onlineReports');
	var tst_pfl_vst_type = $(this).data('tst-profile-labvisit');
  
  tst_profile_form_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin);
}

function tst_profile_form_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin)
{
   var tst_pfl_booking_page = document.createElement('div');
   $(tst_pfl_booking_page).addClass("modal");
   $(tst_pfl_booking_page).attr('id','tst_pfl_modal_formpage');
   $(tst_pfl_booking_page).css('backgroundColor','#fff');
   $(tst_pfl_booking_page).css('height','578px');
   $(tst_pfl_booking_page).css('paddingRight','0px');
   $(tst_pfl_booking_page).modal().open();
   var tst_pfl_form_close_element = document.createElement('a');
   $(tst_pfl_form_close_element).addClass("close");
   $(tst_pfl_form_close_element).attr('href','#');
   $(tst_pfl_form_close_element).html("&times;");
   $(tst_pfl_form_close_element).css('marginTop' ,'-19px');
   $(tst_pfl_form_close_element).css('fontSize','26px');
   $(tst_pfl_form_close_element).css('marginRight','7px');
   $(tst_pfl_form_close_element).attr('id','modal_close');
   var tst_pfl_contact_heading = document.createElement('h4');
   $(tst_pfl_contact_heading).html("Patient Information");
   $(tst_pfl_contact_heading).css('textAlign','center');
   $(tst_pfl_contact_heading).css('fontSize','18px');
   $(tst_pfl_contact_heading).css('fontWeight','bold');
   $(tst_pfl_contact_heading).css('color','#5cb0cf');
   var tst_pfl_lab_details = document.createElement('div');
   $(tst_pfl_lab_details).html(tst_pfl_labname);
   $(tst_pfl_lab_details).css('textAlign' ,'right');
   $(tst_pfl_lab_details).css('paddingRight','17px');
   $(tst_pfl_lab_details).css('fontWeight','bold');
   $(tst_pfl_lab_details).css('marginTop','6px');  
   $(tst_pfl_lab_details).css('marginRight','20px');
   $(tst_pfl_lab_details).css('fontSize','12px');
   var tst_pfl_deal_name  = document.createElement('div');
   $(tst_pfl_deal_name).css('textAlign' ,'right');
   $(tst_pfl_deal_name).css('paddingRight','14px');
   $(tst_pfl_deal_name).css('fontWeight','bold');
   $(tst_pfl_deal_name).css('marginTop','6px');
   $(tst_pfl_deal_name).css('marginRight','20px');
   $(tst_pfl_deal_name).css('fontSize','12px');
   var tst_pfl_parent_wizard = document.createElement('div');
   $(tst_pfl_parent_wizard).attr('id','tmm-form-wizard');
   $(tst_pfl_parent_wizard).addClass('container substrate');
   $(tst_pfl_parent_wizard).css('width','100%');
   $(tst_pfl_parent_wizard).css('paddingTop','1px');
   var tst_pfl_form_element = document.createElement('form');
   $(tst_pfl_form_element).attr('method','post');
   $(tst_pfl_form_element).attr('id','patient_info'); 
   $(tst_pfl_form_element).attr('name','patient_info');
   $(tst_pfl_form_element).attr('action','#');
   $(tst_pfl_form_element).attr('role','form');
   $(tst_pfl_form_element).css('marginRight','20px');
   var tst_pfl_wizard_element = document.createElement('div');
   $(tst_pfl_wizard_element).addClass("form-wizard");
   $(tst_pfl_wizard_element).css('padding-top','0px');
   var tst_pfl_row_element = document.createElement('div');
   $(tst_pfl_row_element).addClass("row");
   var tst_pfl_col_element = document.createElement('div');
   $(tst_pfl_col_element).addClass("col-md-12 no-pad");
   var tst_pfl_form_class = document.createElement('form-wizard');
   $(tst_pfl_form_class).addClass("form-wizard");
   $(tst_pfl_form_class).css('border','0px');
   $(tst_pfl_form_class).css('paddingTop','4px');
   var tst_pfl_second_row = document.createElement('div');
   $(tst_pfl_second_row).addClass("row");
   var tst_pfl_col_class_element = document.createElement('div');
   $(tst_pfl_col_class_element).addClass("col-md-12 col-sm-12");
   $(tst_pfl_col_class_element).css('paddingTop','5px');
   var tst_pfl_name_row = document.createElement('div');
   $(tst_pfl_name_row).addClass("row");
   var tst_pfl_name_col_class = document.createElement('div');
   $(tst_pfl_name_col_class).addClass("col-md-12 col-sm-12");
   var tst_pfl_fieldset_element = document.createElement('fieldset');
   $(tst_pfl_fieldset_element).addClass("input-block");
   var tst_pfl_label_ptntname = document.createElement('label');
   $(tst_pfl_label_ptntname).attr('for','patient_name');
   $(tst_pfl_label_ptntname).html("Full Name");
   var tst_pfl_input_element = document.createElement('input');
   $(tst_pfl_input_element).attr('type','text');
   $(tst_pfl_input_element).attr('id', 'tst_pfl_patient_name');
   $(tst_pfl_input_element).attr('name','patient_name');
   $(tst_pfl_input_element).attr('value','');
   $(tst_pfl_input_element).addClass("form-icon form-icon-user");
   $(tst_pfl_input_element).attr('placeholder','Please enter your name');
   $(tst_pfl_input_element).attr('required','');
   var tst_pfl_email_row = document.createElement('div');
   $(tst_pfl_email_row).addClass("row");
   var tst_pfl_email_col_class = document.createElement('div');
   $(tst_pfl_email_col_class).addClass("col-md-12 col-sm-12");
   var tst_pfl_fieldset_email = document.createElement('fieldset');
   $(tst_pfl_fieldset_email).addClass("input-block");
   var tst_pfl_label_email = document.createElement('label');
   $(tst_pfl_label_email).attr('for','email');
   $(tst_pfl_label_email).html("Email");
   var tst_pfl_input_email = document.createElement('input');
   $(tst_pfl_input_email).attr('type','text');
   $(tst_pfl_input_email).attr('id','tst_pfl_email');
   $(tst_pfl_input_email).attr('name','patient_email');
   $(tst_pfl_input_email).attr('value','');
   $(tst_pfl_input_email).addClass('form-icon form-icon-mail');
   $(tst_pfl_input_email).attr('placeholder','Please enter your email ID');
   $(tst_pfl_input_email).attr('required','required');
   var tst_pfl_address_row = document.createElement('div');
   $(tst_pfl_address_row).addClass("row");
   var tst_pfl_address_col_class = document.createElement('div');
   $(tst_pfl_address_col_class).addClass("col-md-12 col-sm-12");
   var tst_pfl_fieldset_address = document.createElement('fieldset');
   $(tst_pfl_fieldset_address).addClass("input-block");
   var tst_pfl_label_address = document.createElement('label');
   $(tst_pfl_label_address).attr('for','Address');
   $(tst_pfl_label_address).html("Address");
   var tst_pfl_input_address = document.createElement('input');
   $(tst_pfl_input_address).attr('type','text');
   $(tst_pfl_input_address).attr('id','tst_pfl_address');
   $(tst_pfl_input_address).attr('name','patient_address');
   $(tst_pfl_input_address).attr('value','');
   $(tst_pfl_input_address).css('border','1px solid #c4cdcf');
   $(tst_pfl_input_address).attr('placeholder','Please enter your Address');
   $(tst_pfl_input_address).attr('required','required');
   $(tst_pfl_input_address).css('paddingRight','11px');
   var tst_pfl_phno_row = document.createElement('div');
   $(tst_pfl_phno_row).addClass("row");
   var tst_pfl_phno_col_class = document.createElement('div');
   $(tst_pfl_phno_col_class).addClass("col-md-6 col-sm-12");
   var tst_pfl_fieldset_phno = document.createElement('fieldset');
   $(tst_pfl_fieldset_phno).addClass("input-block");
   var tst_pfl_label_phno = document.createElement('label');
   $(tst_pfl_label_phno).attr('for','phone1');
   $(tst_pfl_label_phno).html('Mobile No:');
   var tst_pfl_input_phno = document.createElement('input');
   $(tst_pfl_input_phno).attr('type','text');
   $(tst_pfl_input_phno).attr('id','tst_pfl_phone');
   $(tst_pfl_input_phno).attr('name','patient_mobile');
   $(tst_pfl_input_phno).attr('value','');
   $(tst_pfl_input_phno).addClass('form-icon form-icon-phone');
   $(tst_pfl_input_phno).attr('placeholder','Number');
   $(tst_pfl_input_phno).attr('required','required');
   var tst_pfl_apptime_col_class = document.createElement('div');
   $(tst_pfl_apptime_col_class).addClass('col-md-6 col-sm-12');
   var tst_pfl_fieldset_booking = document.createElement('fieldset');
   $(tst_pfl_fieldset_booking).addClass("input-block");
   var tst_pfl_label_booking = document.createElement('label');
   $(tst_pfl_label_booking).attr('for','app_time');
   $(tst_pfl_label_booking).html('Appointment Timing:');
   var tst_pfl_input_booking = document.createElement('input');
   $(tst_pfl_input_booking).attr('type','text');
   $(tst_pfl_input_booking).attr('id','tst_pfl_app_time');
   $(tst_pfl_input_booking).attr('name','appointment_time');
   $(tst_pfl_input_booking).attr('value','');
   $(tst_pfl_input_booking).attr('placeholder','Select Timeslot');
   $(tst_pfl_input_booking).addClass("form_datetime");
   $(tst_pfl_input_booking).attr('required','required');
   var tst_pfl_information_row = document.createElement('row');
   $(tst_pfl_information_row).addClass("row");
   var tst_pfl_note_col_class = document.createElement('div');
   $(tst_pfl_note_col_class).addClass("col-md-12 col-sm-12");
   var tst_pfl_font_element = document.createElement('font');
   $(tst_pfl_font_element).html("*Note: Patient Information is kept confidential and is used only for booking appointments and to improve the service.");
   $(tst_pfl_font_element).css('fontSize','10px');
   var tst_pfl_prevbtn_element = document.createElement('div');
   $(tst_pfl_prevbtn_element).css('marginLeft','30px');
   $(tst_pfl_prevbtn_element).addClass('prev');
   var tst_pfl_backbtn = document.createElement('button');
   $(tst_pfl_backbtn).attr('id','tst_pfl_step2_back_btn');
   $(tst_pfl_backbtn).addClass("button button-control");
   $(tst_pfl_backbtn).attr('type','button');
   var tst_pfl_span_backbtn = document.createElement('span');
   $(tst_pfl_span_backbtn).html("Back");
   $(tst_pfl_backbtn).append(tst_pfl_span_backbtn);
   var tst_pfl_backbtn_divider = document.createElement('div');
   $(tst_pfl_backbtn_divider).addClass("button-divider");
   var tst_pfl_nextbtn_element = document.createElement('div');
   $(tst_pfl_nextbtn_element).css('marginLeft','50px');
   $(tst_pfl_nextbtn_element).addClass('next');
   var tst_pfl_nextbtn = document.createElement('button');
   $(tst_pfl_nextbtn).attr('id','tst_pfl_step2_next_btn');
   $(tst_pfl_nextbtn).addClass("button button-control");
   $(tst_pfl_nextbtn).attr('type','button');
   var tst_pfl_span_nextbtn = document.createElement('span');
   $(tst_pfl_span_nextbtn).html("Next");
   $(tst_pfl_nextbtn).append(tst_pfl_span_nextbtn);
   var tst_pfl_nextbtn_divider = document.createElement('div');
   $(tst_pfl_nextbtn_divider).addClass("button-divider");
   $(tst_pfl_fieldset_element).append(tst_pfl_label_ptntname);
   $(tst_pfl_fieldset_element).append(tst_pfl_input_element);
   $(tst_pfl_fieldset_email).append(tst_pfl_label_email);
   $(tst_pfl_fieldset_email).append(tst_pfl_input_email);
   $(tst_pfl_fieldset_phno).append(tst_pfl_label_phno);
   $(tst_pfl_fieldset_phno).append(tst_pfl_input_phno);
   $(tst_pfl_fieldset_booking).append(tst_pfl_label_booking);
   $(tst_pfl_fieldset_booking).append(tst_pfl_input_booking);
   $(tst_pfl_fieldset_address).append(tst_pfl_label_address);
   $(tst_pfl_fieldset_address).append(tst_pfl_input_address);
   $(tst_pfl_name_col_class).append(tst_pfl_fieldset_element);
   $(tst_pfl_email_col_class).append(tst_pfl_fieldset_email);
   $(tst_pfl_phno_col_class).append(tst_pfl_fieldset_phno);
   $(tst_pfl_apptime_col_class).append(tst_pfl_fieldset_booking);
   $(tst_pfl_address_col_class).append(tst_pfl_fieldset_address);
   $(tst_pfl_note_col_class).append(tst_pfl_font_element);
   $(tst_pfl_name_row).append(tst_pfl_name_col_class);
   $(tst_pfl_email_row).append(tst_pfl_email_col_class);
   $(tst_pfl_phno_row).append(tst_pfl_phno_col_class);
   $(tst_pfl_phno_row).append(tst_pfl_apptime_col_class);
   $(tst_pfl_address_row).append(tst_pfl_address_col_class);
   $(tst_pfl_information_row).append(tst_pfl_note_col_class);
   $(tst_pfl_col_class_element).append(tst_pfl_name_row);
   $(tst_pfl_col_class_element).append(tst_pfl_email_row);
   $(tst_pfl_col_class_element).append(tst_pfl_phno_row);
   $(tst_pfl_col_class_element).append(tst_pfl_address_row);
   $(tst_pfl_col_class_element).append(tst_pfl_information_row);
   $(tst_pfl_second_row).append(tst_pfl_col_class_element);
   $(tst_pfl_form_class).append(tst_pfl_second_row);
   $(tst_pfl_col_element).append(tst_pfl_form_class);
   $(tst_pfl_row_element).append(tst_pfl_col_element);
   $(tst_pfl_prevbtn_element).append(tst_pfl_backbtn);
   $(tst_pfl_prevbtn_element).append(tst_pfl_backbtn_divider);
   $(tst_pfl_row_element).append(tst_pfl_prevbtn_element);
   $(tst_pfl_nextbtn_element).append(tst_pfl_nextbtn);
   $(tst_pfl_nextbtn_element).append(tst_pfl_nextbtn_divider);
   $(tst_pfl_row_element).append(tst_pfl_nextbtn_element);
   $(tst_pfl_wizard_element).append(tst_pfl_row_element);
   $(tst_pfl_form_element).append(tst_pfl_wizard_element);
   $(tst_pfl_parent_wizard).append(tst_pfl_form_element);
   var tst_pfl_error_display = document.createElement('div');
   $(tst_pfl_error_display).addClass("pkg_display_error");
   $(tst_pfl_error_display).css('height','30px');
   var tst_pfl_name_element = document.createElement('div');
   $(tst_pfl_name_element).addClass("err_msg");
   $(tst_pfl_name_element).attr('id','tst_pfl_err_name');
   $(tst_pfl_name_element).css('color','rgb(236,73,73)');
   $(tst_pfl_name_element).css('textAlign','left');
   $(tst_pfl_name_element).css('marginLeft','16px');
   $(tst_pfl_name_element).css('display','none');
   var tst_pfl_star_element = document.createElement('span');
   $(tst_pfl_star_element).addClass('star');
   $(tst_pfl_star_element).html("&#x2605");
   $(tst_pfl_star_element).css('float','left');
   var tst_pfl_error_name_element = document.createElement('div');
   $(tst_pfl_error_name_element).html('Enter Full Name');
   $(tst_pfl_name_element).append(tst_pfl_star_element);
   $(tst_pfl_name_element).append(tst_pfl_error_name_element);
   var tst_pfl_email_element = document.createElement('div');
   $(tst_pfl_email_element).addClass("err_msg");
   $(tst_pfl_email_element).attr('id','tst_pfl_err_email');
   $(tst_pfl_email_element).css('color','rgb(236,73,73)');
   $(tst_pfl_email_element).css('textAlign','left');
   $(tst_pfl_email_element).css('marginLeft','16px');
   $(tst_pfl_email_element).css('display','none');
   var tst_pfl_star_email = document.createElement('span');
   $(tst_pfl_star_email).addClass('star');
   $(tst_pfl_star_email).html("&#x2605");
   $(tst_pfl_star_email).css('float','left');
   var tst_pfl_error_email_element = document.createElement('div');
   $(tst_pfl_error_email_element).html('Enter valid e-mail id');
   $(tst_pfl_email_element).append(tst_pfl_star_email);
   $(tst_pfl_email_element).append(tst_pfl_error_email_element);
   var tst_pfl_mbno_element = document.createElement('div');
   $(tst_pfl_mbno_element).addClass("err_msg");
   $(tst_pfl_mbno_element).attr('id','tst_pfl_err_mbno');
   $(tst_pfl_mbno_element).css('color','rgb(236,73,73)');
   $(tst_pfl_mbno_element).css('textAlign','left');
   $(tst_pfl_mbno_element).css('marginLeft','16px');
   $(tst_pfl_mbno_element).css('display','none');
   var tst_pfl_star_mbno = document.createElement('span');
   $(tst_pfl_star_mbno).addClass('star');
   $(tst_pfl_star_mbno).html("&#x2605");
   $(tst_pfl_star_mbno).css('float','left');
   var tst_pfl_error_mbno_element = document.createElement('div');
   $(tst_pfl_error_mbno_element).html('Enter correct mobile number');
   $(tst_pfl_mbno_element).append(tst_pfl_star_mbno);
   $(tst_pfl_mbno_element).append(tst_pfl_error_mbno_element);
   var tst_pfl_phno_element = document.createElement('div');
   $(tst_pfl_phno_element).addClass("err_msg");
   $(tst_pfl_phno_element).css('color','rgb(236,73,73)');
   $(tst_pfl_phno_element).css('textAlign','left');
   $(tst_pfl_phno_element).css('marginLeft','16px');
   $(tst_pfl_phno_element).css('display','none');
   var tst_pfl_star_phno = document.createElement('span');
   $(tst_pfl_star_phno).addClass('star');
   $(tst_pfl_star_phno).html("&#x2605");
   $(tst_pfl_star_phno).css('float','left');
   var tst_pfl_error_phno_element = document.createElement('div');
   $(tst_pfl_error_phno_element).html('Mobile number is not valid');
   $(tst_pfl_phno_element).append(tst_pfl_star_phno);
   $(tst_pfl_phno_element).append(tst_pfl_error_phno_element);
   var tst_pfl_address_element = document.createElement('div');
   $(tst_pfl_address_element).addClass("err_msg");
   $(tst_pfl_address_element).attr('id','tst_pfl_err_address');
   $(tst_pfl_address_element).css('color','rgb(236,73,73)');
   $(tst_pfl_address_element).css('textAlign','left');
   $(tst_pfl_address_element).css('marginLeft','16px');
   $(tst_pfl_address_element).css('display','none');
   var tst_pfl_star_address = document.createElement('span');
   $(tst_pfl_star_address).addClass('star');
   $(tst_pfl_star_address).html("&#x2605");
   $(tst_pfl_star_address).css('float','left');
   var tst_pfl_error_address_element = document.createElement('div');
   $(tst_pfl_error_address_element).html('Enter your address');
   $(tst_pfl_address_element).append(tst_pfl_star_address);
   $(tst_pfl_address_element).append(tst_pfl_error_address_element);
   var tst_pfl_apptime_element = document.createElement('div');
   $(tst_pfl_apptime_element).attr('id','tst_pfl_err_apptime');
   $(tst_pfl_apptime_element).addClass("err_msg");
   $(tst_pfl_apptime_element).css('color','rgb(236,73,73)');
   $(tst_pfl_apptime_element).css('textAlign','left');
   $(tst_pfl_apptime_element).css('marginLeft','16px');
   $(tst_pfl_apptime_element).css('display','none');
   var tst_pfl_star_apptime = document.createElement('span');
   $(tst_pfl_star_apptime).addClass('star');
   $(tst_pfl_star_apptime).html("&#x2605");
  	$(tst_pfl_star_apptime).css('float','left');
   var tst_pfl_error_apptime_element = document.createElement('div');
   $(tst_pfl_error_apptime_element).html('Please select Appointment Time');
   $(tst_pfl_apptime_element).append(tst_pfl_star_apptime);
   $(tst_pfl_apptime_element).append(tst_pfl_error_apptime_element);
   var tst_pfl_app_time_element = document.createElement('div');
   $(tst_pfl_app_time_element).attr('id','tst_pfl_err_app_time');
   $(tst_pfl_app_time_element).addClass("err_msg");
   $(tst_pfl_app_time_element).css('color','rgb(236,73,73)');
   $(tst_pfl_app_time_element).css('textAlign','left');
   $(tst_pfl_app_time_element).css('marginLeft','16px');
   $(tst_pfl_app_time_element).css('display','none');
   var tst_pfl_star_app_time = document.createElement('span');
   $(tst_pfl_star_app_time).addClass('star');
   $(tst_pfl_star_app_time).html("&#x2605");
   $(tst_pfl_star_app_time).css('float','left');
   var tst_pfl_error_app_time_element = document.createElement('div');
   $(tst_pfl_error_app_time_element).html('You have given past time.Give future time');
   $(tst_pfl_app_time_element).append(tst_pfl_star_app_time);
   $(tst_pfl_app_time_element).append(tst_pfl_error_app_time_element);
   $(tst_pfl_error_display).append(tst_pfl_name_element);
   $(tst_pfl_error_display).append(tst_pfl_email_element);
   $(tst_pfl_error_display).append(tst_pfl_mbno_element);
   $(tst_pfl_error_display).append(tst_pfl_apptime_element);
   $(tst_pfl_error_display).append(tst_pfl_app_time_element);
   $(tst_pfl_error_display).append(tst_pfl_address_element);
   $("#tst_pfl_modal_formpage").append(tst_pfl_form_close_element);
   $("#tst_pfl_modal_formpage").append(tst_pfl_contact_heading);
   $("#tst_pfl_modal_formpage").append(tst_pfl_lab_details);
   $("#tst_pfl_modal_formpage").append(tst_pfl_deal_name);
   $("#tst_pfl_modal_formpage").append(tst_pfl_error_display);
   $("#tst_pfl_modal_formpage").append(tst_pfl_parent_wizard);
   $(tst_pfl_input_booking).on('keyup' ,function (event)
   { 
        event.preventDefault();
   });//keyup
   $(tst_pfl_input_booking).on('keypress' ,function (event)
   {
        event.preventDefault();
   });//keypress	
   $(tst_pfl_input_booking).on('keydown' ,function (event) 
   {
        event.preventDefault();
   });//keydown
   $("#modal_close").on('click',function ()
   {
       if(typeof(Storage)!=="undefined")
       {
            tst_pfl_datastore_handler();
        }//if
        $("#tst_pfl_modal_formpage").modal().close(); 
    });//click
    var tst_pfl_body_element = document.getElementsByClassName("themodal-lock")[0];
    $(tst_pfl_body_element).on('keyup' ,function (event)
    {
         if(event.keyCode == 27)
        {
            if(typeof(Storage)!=="undefined")
            {
                tst_pfl_datastore_handler();
            }//if storage
         }//if keycode
     });//key fnctn
     var tst_pfl_today = new Date();  
     var tst_pfl_minutes = tst_pfl_today.getMinutes();
     if((tst_pfl_minutes >= '0'))  
     {
         $('.form_datetime').datetimepicker
         ({ 
             format:'dd/M/yyyy HH:ii P',
             startDate: new Date(tst_pfl_today.getFullYear(), tst_pfl_today.getMonth(), tst_pfl_today.getDate(),tst_pfl_today.getHours()+1,tst_pfl_today.getMinutes()-tst_pfl_today.getMinutes()),
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
      var tst_pfl_pat_name = $("#tst_pfl_patient_name").val();
      var tst_pfl_pat_email = $("#tst_pfl_email").val();
      var tst_pfl_pat_phno = $("#tst_pfl_phone").val();
      var tst_pfl_pat_apptime = $("#tst_pfl_app_time").val();
      if ((tst_pfl_pat_name == "") && (tst_pfl_pat_email =="") && (tst_pfl_pat_phno == "") && (tst_pfl_pat_apptime == ""))
      {
          tst_pfl_Filling_localdata(); 
      }//
       $('#tst_pfl_step2_back_btn').on('click',function () 
       {
            $("#tst_pfl_modal_formpage").modal().close();
       });//back btn click
       $('#tst_pfl_step2_next_btn').on('click', function()
       {
            if(typeof(Storage)!=="undefined")
            { 
                tst_pfl_datastore_handler();
            }//if  
            var tst_pfl_patient_name = $('#tst_pfl_patient_name').val();
            var tst_pfl_patient_email = $('#tst_pfl_email').val();
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var tst_pfl_mobile_number = $('#tst_pfl_phone').val();
            var tst_pfl_patient_apptime =  $('#tst_pfl_app_time').val();
            if(typeof(Storage)!=="undefined")
            { 
                tst_pfl_datastore_handler();
            }//if
            var tst_pfl_appt_time = localStorage.getItem("patient_app_time");
            var tst_pfl_tday = new Date();
            var i;
            function addZero(i) 
             {
                 if (i < 10) 
                 {
                      i = "0" + i;
                 }//if i	
                 return i;
              }//fnctn
              var tst_pfl_year = tst_pfl_tday.getFullYear();
              var tst_pfl_date = addZero(tst_pfl_tday.getDate());
              var tst_pfl_month = addZero(tst_pfl_tday.getMonth()+1);
              var tst_pfl_hours = addZero(tst_pfl_tday.getHours());
              var tst_pfl_mnt = addZero(tst_pfl_tday.getMinutes());
              var tst_pfl_sec =  addZero(tst_pfl_tday.getSeconds());
              var tst_pfl_selected_time =tst_pfl_year+"-"+tst_pfl_month+"-"+tst_pfl_date+" "+tst_pfl_hours +":"+ tst_pfl_mnt+":"+tst_pfl_sec;
              var tst_pfl_currenttime = new Date();
              var tst_pfl_current_year = tst_pfl_currenttime.getFullYear();
              var tst_pfl_current_month = addZero(tst_pfl_currenttime.getMonth()+1);
              var tst_pfl_current_date = addZero(tst_pfl_currenttime.getDate());
              var tst_pfl_current_hours = addZero(tst_pfl_currenttime.getHours());
              var tst_pfl_current_minutes = addZero(tst_pfl_currenttime.getMinutes());
              var tst_pfl_current_time = tst_pfl_current_year+"-"+tst_pfl_current_month+"-"+tst_pfl_current_date+" "+tst_pfl_current_hours+":"+tst_pfl_current_minutes;
              if((document.getElementById("tst_pfl_err_email").style.display ='none') && (document.getElementById('tst_pfl_err_mbno').style.display = 'none') &&(document.getElementById('tst_pfl_err_apptime').style.display = 'none') &&(document.getElementById('tst_pfl_err_app_time').style.display = 'none') &&(document.getElementById('tst_pfl_err_address').style.display = 'none'))  
              {
                  if ( !(tst_pfl_patient_name.length >= 6 && tst_pfl_patient_name.length <= 26) || tst_pfl_patient_name.match(/[^a-zA-Z ]/)  )
                  {
                     $(tst_pfl_name_element).css('display','block');
                      return false;
                  }//if patient name
                  if(document.getElementById('tst_pfl_err_name').style.display = 'block')
                  {
                      document.getElementById('tst_pfl_err_name').style.display = 'none';
                  }//if err_name
              }//if 
              if((document.getElementById("tst_pfl_err_name").style.display ='none') && (document.getElementById('tst_pfl_err_mbno').style.display = 'none') &&(document.getElementById('tst_pfl_err_apptime').style.display = 'none') &&(document.getElementById('tst_pfl_err_app_time').style.display = 'none') &&(document.getElementById('tst_pfl_err_address').style.display = 'none')) 
              {
                  if(!filter.test(tst_pfl_patient_email))
                  {
                     $(tst_pfl_email_element).css('display','block');
                      return false;
                  }//if email
                  if(document.getElementById('tst_pfl_err_email').style.display = 'block')
                  {
                      document.getElementById('tst_pfl_err_email').style.display = 'none';
                  }//if err_email
               }//if
               if((document.getElementById("tst_pfl_err_email").style.display ='none') && (document.getElementById('tst_pfl_err_name').style.display = 'none') &&(document.getElementById('tst_pfl_err_apptime').style.display = 'none') &&(document.getElementById('tst_pfl_err_app_time').style.display = 'none') &&(document.getElementById('tst_pfl_err_address').style.display = 'none'))
               {
                   if((tst_pfl_mobile_number.match(/[^0-9]/) || tst_pfl_mobile_number.length != 10) || (!(tst_pfl_mobile_number.charAt(0)=="9" || tst_pfl_mobile_number.charAt(0)=="8" || tst_pfl_mobile_number.charAt(0)=="7")))
                   {
                       	 $(tst_pfl_mbno_element).css('display','block');
                       	 return false;
                   }//if mble
                   if(document.getElementById('tst_pfl_err_mbno').style.display = 'block')
                   {
                       document.getElementById('tst_pfl_err_mbno').style.display = 'none';
                   }//if err_mbno
                 }//if
                 if((document.getElementById("tst_pfl_err_email").style.display ='none') && (document.getElementById('tst_pfl_err_mbno').style.display = 'none') &&(document.getElementById('tst_pfl_err_name').style.display = 'none') &&(document.getElementById('tst_pfl_err_app_time').style.display = 'none') &&(document.getElementById('tst_pfl_err_address').style.display = 'none'))
                 {
                      if(! ($('#tst_pfl_app_time').val()))   
                      {
                         	$(tst_pfl_apptime_element).css('display','block');
                           return false;
                      }//if app_time
                     var tst_pfl_val_time = tst_pfl_date+"-"+tst_pfl_month+"-"+tst_pfl_year+" "+tst_pfl_hours +":"+ tst_pfl_mnt+":"+tst_pfl_sec;                         
                     var tst_pfl_sel_month_name = tst_pfl_appt_time.substr(3,3);
                     if (tst_pfl_sel_month_name == 'Jan') 
                     {
    	                    var tst_pfl_sel_month = '01';
    	               }//if mnth 1
                     if (tst_pfl_sel_month_name == 'Feb') 
                     {             
                         var  tst_pfl_sel_month = '02';
                     }//if mnth 2
                     if (tst_pfl_sel_month_name == 'Mar') 
                     {
    	                  var tst_pfl_sel_month = '03';
                     }//if mnth 3
                     if (tst_pfl_sel_month_name == 'Apr') 
                     {
    	                  var tst_pfl_sel_month = '04';
  	                  }//if mnth 4
                     if (tst_pfl_sel_month_name == 'May') 
  	                  {
    		                var tst_pfl_sel_month = '05';
    	               }//if mnth 5
                     if (tst_pfl_sel_month_name == 'Jun') 
  	                  {
    		               var tst_pfl_sel_month = '06';
                     }//if mnth 6
                     if (tst_pfl_sel_month_name == 'Jul') 
                     {
    		               var tst_pfl_sel_month = '07';
                     }//if mnth 7
                    if (tst_pfl_sel_month_name == 'Aug') 
                    {
    		              var tst_pfl_sel_month = '08';
     	              } //if mnth 8
                    if (tst_pfl_sel_month_name == 'Sep') 
    	              {
    		             var tst_pfl_sel_month = '09';
    	              }//if mnth 9
    	              if (tst_pfl_sel_month_name == 'Oct') 
    	              {
    		               var tst_pfl_sel_month = '10';
    	              }//if mnth 10
    	              if (tst_pfl_sel_month_name == 'Nov') 
    	              {
    			          var tst_pfl_sel_month = '11';
    	              }//if mnth 11
    	              if (tst_pfl_sel_month_name == 'Dec') 
    	              {
    		            var tst_pfl_sel_month = '12';
    	              }//if mnth 12
    	             var tst_pfl_tday = new Date();
    	             var tst_pfl_sel_year = tst_pfl_appt_time.substr(7,4);
                   var tst_pfl_sel_date = tst_pfl_appt_time.substr(0,2);
                   var tst_pfl_sel_hours = tst_pfl_appt_time.substr(12,2);
                   var tst_pfl_sel_minutes = tst_pfl_appt_time.substr(15,2);
                   var tst_pfl_sel_sec = addZero(tst_pfl_tday.getSeconds());
                   var tst_pfl_sel_meridian = tst_pfl_appt_time.substr(18,2);
                   var tst_pfl_sel_hours_meridian = tst_pfl_sel_hours +" "+ tst_pfl_sel_meridian;
                   if (tst_pfl_sel_meridian == "AM") 
                   {
             	        var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
             	    }//if AM
                   if (tst_pfl_sel_hours_meridian == "12 PM")
                   {
              	       var tst_pfl_sel_hours = "12";
              	       var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                   }//if 12
                  if (tst_pfl_sel_hours_meridian == "01 PM")
                  {
              	       var tst_pfl_sel_hours = "13";
              	       var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                  }//if 01
              	   if (tst_pfl_sel_hours_meridian == "02 PM")
                  {
              	       var tst_pfl_sel_hours = "14";
                      var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                  }//if 02
               	if (tst_pfl_sel_hours_meridian == "03 PM")
                  {
              	      var tst_pfl_sel_hours = "15";
                     var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                  }//if 03
                 if (tst_pfl_sel_hours_meridian == "04 PM")
                 {
              	    var tst_pfl_sel_hours = "16";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 04
                 if (tst_pfl_sel_hours_meridian == "05 PM")
                 {
              	    var tst_pfl_sel_hours = "17";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 05
                 if (tst_pfl_sel_hours_meridian == "06 PM")
                 {
              	    var tst_pfl_sel_hours = "18";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 06
                 if (tst_pfl_sel_hours_meridian == "07 PM")
                 {
              	    var tst_pfl_sel_hours = "19";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 07
                 if (tst_pfl_sel_hours_meridian == "08 PM")
                 {
              	    var tst_pfl_sel_hours = "20";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 08
                 if (tst_pfl_sel_hours_meridian == "09 PM")
                 {
              	    var tst_pfl_sel_hours = "21";
                   var tst_pfl_sel_time = tst_pfl_sel_year+"-"+tst_pfl_sel_month+"-"+tst_pfl_sel_date+" "+tst_pfl_sel_hours+":"+tst_pfl_sel_minutes+":"+tst_pfl_sel_sec;
                 }// if 09
                 if(!(tst_pfl_sel_time.match(/\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}/)))
                 {
                     $(tst_pfl_apptime_element).css('display','block');
                     return false;
                 }//if val time 
                 if(document.getElementById('tst_pfl_err_apptime').style.display = 'block')
                 {
                     document.getElementById('tst_pfl_err_apptime').style.display = 'none';
                 }
              }//if
              if((document.getElementById("tst_pfl_err_email").style.display ='none') && (document.getElementById('tst_pfl_err_mbno').style.display = 'none') &&(document.getElementById('tst_pfl_err_name').style.display = 'none') &&(document.getElementById('tst_pfl_err_apptime').style.display = 'none') &&(document.getElementById('tst_pfl_err_address').style.display = 'none')) 
              {
                  if(tst_pfl_current_time > tst_pfl_sel_time)
                  {
                      $(tst_pfl_app_time_element).css('display','block');
                       return false;
                  }//if time
                  if (document.getElementById('tst_pfl_err_app_time').style.display = 'block') 
                  {
                      document.getElementById('tst_pfl_err_app_time').style.display = 'none';
                  }//if err_time    
               }//if
               if(tst_pfl_vst_type.length > 7)
               {
                   if((document.getElementById('tst_pfl_err_name').style.display = 'none') && (document.getElementById("tst_pfl_err_email").style.display ='none') && (document.getElementById('tst_pfl_err_mbno').style.display = 'none') &&(document.getElementById('tst_pfl_err_apptime').style.display = 'none') &&(document.getElementById('tst_pfl_err_app_time').style.display = 'none'))
                   {
                       if(! ($('#tst_pfl_address').val()))  
                       {
                          $(tst_pfl_address_element).css('display','block');
                          return false;
                       }// if visit type
                       if (document.getElementById('tst_pfl_err_address').style.display = 'block') 
                       {
                          document.getElementById('tst_pfl_err_address').style.display = 'none';
                       }//if err_visittype
                      }//if display
                 }// if length*/
                 tst_pfl_preview_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin);          
             });//btn onclick handler
           }//form_handler 
           
 function tst_pfl_datastore_handler()
 {
    var tst_pfl_ptnt_name = document.getElementById("tst_pfl_patient_name");
    var tst_pfl_ptnt_email = document.getElementById("tst_pfl_email");
    var tst_pfl_ptnt_phone = document.getElementById("tst_pfl_phone");
    var tst_pfl_ptnt_apptime = document.getElementById("tst_pfl_app_time");
    var tst_pfl_ptnt_address = document.getElementById("tst_pfl_address");
    localStorage.setItem("patient_name",tst_pfl_ptnt_name.value);
    localStorage.setItem("patient_email" ,tst_pfl_ptnt_email.value);
    localStorage.setItem("patient_phone" ,tst_pfl_ptnt_phone.value);
    localStorage.setItem("patient_app_time" ,tst_pfl_ptnt_apptime.value);
    localStorage.setItem("patient_address",tst_pfl_ptnt_address.value);
 } //fnctn handler
 function tst_pfl_Filling_localdata()
  {
     document.getElementById("tst_pfl_patient_name").value = localStorage.getItem("patient_name");
     document.getElementById("tst_pfl_email").value = localStorage.getItem("patient_email");
     document.getElementById("tst_pfl_phone").value = localStorage.getItem("patient_phone");
     document.getElementById("tst_pfl_app_time").value = localStorage.getItem("patient_app_time");
     document.getElementById("tst_pfl_address").value = localStorage.getItem("patient_address");
 }//fnctn handler
 
 function tst_pfl_preview_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin)
 {
     var tst_pfl_ptnt_address = localStorage.getItem("patient_address");
     var tst_pfl_order_page = document.createElement('div');
     $(tst_pfl_order_page).addClass("modal");
     $(tst_pfl_order_page).attr('id','tst_pfl_preview_modal');
     $(tst_pfl_order_page).css('backgroundColor','#fff');
     $(tst_pfl_order_page).css('position','relative');
     $(tst_pfl_order_page).css('paddingRight','0px');
     $(tst_pfl_order_page).modal().open();
     var tst_pfl_closing_element = document.createElement('a');
     $(tst_pfl_closing_element).addClass("close");
     $(tst_pfl_closing_element).attr('href','#');
     $(tst_pfl_closing_element).html("&times;");
     $(tst_pfl_closing_element).css('marginTop' ,'-19px');
     $(tst_pfl_closing_element).css('fontSize','26px');
     $(tst_pfl_closing_element).css('marginRight','7px');
     $(tst_pfl_closing_element).attr('id','modal_close');
     var tst_pfl_preview_box = document.createElement('div');
     $(tst_pfl_preview_box).addClass("tst_preview_details");
     $(tst_pfl_preview_box).css('padding','10px');
     $(tst_pfl_preview_box).css('marginRight','20px');
     $(tst_pfl_preview_box).css('border','1px solid #ddd');
     var tst_pfl_preview_heading = document.createElement('h4');
     $(tst_pfl_preview_heading).html("Order Preview");
     $(tst_pfl_preview_heading).css('textAlign','center');
     $(tst_pfl_preview_heading).css('fontSize','18px');
     $(tst_pfl_preview_heading).css('fontWeight','bold');
     $(tst_pfl_preview_heading).css('color','#5cb0cf');
     var tst_pfl_time_error = document.createElement('div');
     var tst_pfl_preview_pkg_info = document.createElement('div');
     $(tst_pfl_preview_pkg_info).html("Lab & Price Information");
     $(tst_pfl_preview_pkg_info).css('background','rgb(65, 167, 179)');
     $(tst_pfl_preview_pkg_info).css('color','white');
     $(tst_pfl_preview_pkg_info).css('fontWeight','bold');
     $(tst_pfl_preview_pkg_info).css('paddingLeft','6px');
     $(tst_pfl_preview_pkg_info).css('marginTop','10px');
     $(tst_pfl_preview_pkg_info).css('marginBottom','2px');
     $(tst_pfl_preview_pkg_info).css('height','21px');
     var tst_pfl_table_dealname = document.createElement('table');
     $(tst_pfl_table_dealname).css('float','left');
     $(tst_pfl_table_dealname).css('marginBottom','15px');
     $(tst_pfl_table_dealname).css('width','316px');
     var tst_pfl_tr_dealname = document.createElement('tr');
     var tst_pfl_td_dealname = document.createElement('td');
     $(tst_pfl_td_dealname).html("&nbsp"+"&nbsp"+"&nbsp"+tst_pfl_labname);
     $(tst_pfl_td_dealname).css('fontWeight','bold');
     $(tst_pfl_td_dealname).css('paddingTop','3px');
     var tst_pfl_tr_labname = document.createElement('tr');
     var tst_pfl_td_labname = document.createElement('td');
     var tst_pfl_td_loc_div = document.createElement('div');
     $(tst_pfl_td_loc_div).css('float','left');
     $(tst_pfl_td_loc_div).html("&nbsp"+"&nbsp"+"&nbsp");
     var tst_pfl_td_loc_img = document.createElement('img');
     $(tst_pfl_td_loc_img).attr('src','images/location-bi.png');
     $(tst_pfl_td_loc_img).css('height','17px');
     $(tst_pfl_td_loc_img).css('width','12px');
     $(tst_pfl_td_loc_div).append(tst_pfl_td_loc_img);
     var tst_pfl_td_loc_detail = document.createElement('div');
     $(tst_pfl_td_loc_detail).html("&nbsp;"+tst_pfl_labaddress+","+tst_pfl_labarea+","+tst_pfl_labaddress_pin);
     $(tst_pfl_td_loc_detail).css('float','right');
     $(tst_pfl_td_loc_detail).css('width','290px');
     $(tst_pfl_td_labname).append(tst_pfl_td_loc_div);
     $(tst_pfl_td_labname).append(tst_pfl_td_loc_detail);
     $(tst_pfl_tr_labname).append(tst_pfl_td_labname);
     $(tst_pfl_tr_dealname).append(tst_pfl_td_dealname);
     $(tst_pfl_table_dealname).append(tst_pfl_tr_dealname);
     $(tst_pfl_table_dealname).append(tst_pfl_tr_labname);
     var tst_pfl_ptnt_info_heading = document.createElement('div');
     if (tst_pfl_online_rpt == "yes") 
     {
          var tst_pfl_onlinereports_tr = document.createElement('tr');
          var tst_pfl_onlinereports_element = document.createElement('td');
          $(tst_pfl_onlinereports_element).addClass("err_msg");
          $(tst_pfl_onlinereports_element).attr('id','tst_reports_msg');
          $(tst_pfl_onlinereports_element).css('color','rgb(236,73,73)');
          $(tst_pfl_onlinereports_element).css('textAlign','left');
          $(tst_pfl_onlinereports_element).css('fontSize','10px');
          $(tst_pfl_onlinereports_element).css('display','block');
          var tst_pfl_star_onlinereports = document.createElement('span');
          $(tst_pfl_star_onlinereports).addClass('star');
          $(tst_pfl_star_onlinereports).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
          $(tst_pfl_star_onlinereports).css('float','left');
          var tst_pfl_error_onlinereports_element = document.createElement('div');
          $(tst_pfl_error_onlinereports_element).html("Online reports  available");
          $(tst_pfl_onlinereports_element).append(tst_pfl_star_onlinereports);
          $(tst_pfl_onlinereports_element).append(tst_pfl_error_onlinereports_element);
          $(tst_pfl_onlinereports_tr).append(tst_pfl_onlinereports_element);
          $(tst_pfl_table_dealname).append(tst_pfl_onlinereports_tr);
        } 
         if(tst_pfl_vst_type.length == "13")
         {
             var tst_pfl_homevisit_tr_one_element = document.createElement('tr');
             var tst_pfl_homevisit_one_element = document.createElement('td');
             $(tst_pfl_homevisit_one_element).addClass("err_msg");
             $(tst_pfl_homevisit_one_element).attr('id','tst_reports_msg');
             $(tst_pfl_homevisit_one_element).css('color','rgb(236,73,73)');
             $(tst_pfl_homevisit_one_element).css('textAlign','left');
             $(tst_pfl_homevisit_one_element).css('fontSize','10px');
             $(tst_pfl_homevisit_one_element).css('display','block');
             var tst_pfl_star_homevisit_one = document.createElement('span');
             $(tst_pfl_star_homevisit_one).addClass('star');
             $(tst_pfl_star_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
             $(tst_pfl_star_homevisit_one).css('float','left');
             var tst_pfl_error_homevisit_one_element = document.createElement('div');
             $(tst_pfl_error_homevisit_one_element).html('Home visit only');
             $(tst_pfl_homevisit_one_element).append(tst_pfl_star_homevisit_one);
             $(tst_pfl_homevisit_one_element).append(tst_pfl_error_homevisit_one_element);
             $(tst_pfl_homevisit_tr_one_element).append(tst_pfl_homevisit_one_element);   
             $(tst_pfl_table_dealname).append(tst_pfl_homevisit_tr_one_element);        
          }//if home visit 
          if(tst_pfl_vst_type.length > "13")
          {
                var tst_pfl_labvisit_homevisit_tr_one_element = document.createElement('tr');
                var tst_pfl_labvisit_homevisit_one_element = document.createElement('td');
                $(tst_pfl_labvisit_homevisit_one_element).addClass("err_msg");
                $(tst_pfl_labvisit_homevisit_one_element).attr('id','pkg_reports_msg');
                $(tst_pfl_labvisit_homevisit_one_element).css('color','rgb(236,73,73)');
                $(tst_pfl_labvisit_homevisit_one_element).css('textAlign','left');
                $(tst_pfl_labvisit_homevisit_one_element).css('fontSize','10px');
                $(tst_pfl_labvisit_homevisit_one_element).css('display','block');
                var tst_pfl_star_labvisit_homevisit_one = document.createElement('span');
                $(tst_pfl_star_labvisit_homevisit_one).addClass('star');
                $(tst_pfl_star_labvisit_homevisit_one).html("&nbsp"+"&nbsp"+"&nbsp"+"&#x2605");
                $(tst_pfl_star_labvisit_homevisit_one).css('float','left');
                var tst_pfl_error_labvisit_homevisit_one_element = document.createElement('div');
                $(tst_pfl_error_labvisit_homevisit_one_element).html('Home visit and lab visit available');
                $(tst_pfl_labvisit_homevisit_one_element).append(tst_pfl_star_labvisit_homevisit_one);
                $(tst_pfl_labvisit_homevisit_one_element).append(tst_pfl_error_labvisit_homevisit_one_element);
                $(tst_pfl_labvisit_homevisit_tr_one_element).append(tst_pfl_labvisit_homevisit_one_element);   
                $(tst_pfl_table_dealname).append(tst_pfl_labvisit_homevisit_tr_one_element);   
             }//if home visit 
             var tst_pfl_price_details = document.createElement('div');
             $(tst_pfl_price_details).css('float','right');
             $(tst_pfl_price_details).css('paddingTop','6px');
             $(tst_pfl_price_details).css('paddingRight','12px');
             $(tst_pfl_price_details).css('marginBottom','11px');
             var tst_pfl_price_details_price = document.createElement('div');
             $(tst_pfl_price_details_price).html("Rs."+tst_pfl_dp);
             $(tst_pfl_price_details_price).css('textAlign','center');
             $(tst_pfl_price_details_price).css('fontSize','22px');
             $(tst_pfl_price_details_price).css('color','rgb(236,73,73)');
             var tst_pfl_price_details_mrp = document.createElement('div');
             $(tst_pfl_price_details_mrp).css('fontSize','18px');
             var tst_pfl_mrp_bracket_div = document.createElement('div');
             $(tst_pfl_mrp_bracket_div).css('float','left');
             var tst_pfl_mrp_openbracket = document.createElement('div');
             $(tst_pfl_mrp_openbracket).html("("+"&nbsp");
             $(tst_pfl_mrp_openbracket).css('float','left');
             var tst_pfl_mrp_price = document.createElement('div');
             $(tst_pfl_mrp_price).html("Rs."+"&nbsp"+tst_pfl_mrp);
             $(tst_pfl_mrp_price).css('textDecoration','line-through');
             $(tst_pfl_mrp_price).css('float','left');
             var tst_pfl_mrp_closebracket = document.createElement('div');
             $(tst_pfl_mrp_closebracket).html("&nbsp"+")");
             $(tst_pfl_mrp_closebracket).css('float','right');
             $(tst_pfl_mrp_bracket_div).append(tst_pfl_mrp_openbracket);
             $(tst_pfl_mrp_bracket_div).append(tst_pfl_mrp_price);
             $(tst_pfl_mrp_bracket_div).append(tst_pfl_mrp_closebracket);
             $(tst_pfl_price_details_mrp).append(tst_pfl_mrp_bracket_div);
             var tst_pfl_discount_det = document.createElement('div');
             $(tst_pfl_discount_det).html("&nbsp"+tst_pfl_discount+"%");
             $(tst_pfl_discount_det).css('float','right');
             $(tst_pfl_price_details_mrp).append(tst_pfl_discount_det);
             $(tst_pfl_price_details).append(tst_pfl_price_details_price);
             $(tst_pfl_price_details).append(tst_pfl_price_details_mrp);
             var tst_pfl_testinfo_head_table = document.createElement('table');
             $(tst_pfl_testinfo_head_table).css('width','531px');
             $(tst_pfl_testinfo_head_table).css('marginBottom','16px');
             var tst_pfl_testinfo_head_tr = document.createElement('tr');
             $(tst_pfl_testinfo_head_tr).css('border','1px solid rgb(65, 167, 179)');
             var tst_pfl_testinfo_head = document.createElement('th');
             $(tst_pfl_testinfo_head).html("Test Information");
             $(tst_pfl_testinfo_head).css('background','rgb(65, 167, 179)');
             $(tst_pfl_testinfo_head).css('color','white');
             $(tst_pfl_testinfo_head).css('fontWeight','bold');
             $(tst_pfl_testinfo_head_tr).append(tst_pfl_testinfo_head);
             var tst_pfl_testname_tr = document.createElement('tr');
             $(tst_pfl_testname_tr).css('border','1px solid rgb(221, 221, 221)');
             var tst_pfl_testname  = document.createElement('td');
             $(tst_pfl_testname).html(tst_profile_tstname);
             $(tst_pfl_testname).css('background', 'rgba(236,246,248,0.99)');
             $(tst_pfl_testname_tr).append(tst_pfl_testname);
             $(tst_pfl_testinfo_head_table).append(tst_pfl_testinfo_head_tr);
             $(tst_pfl_testinfo_head_table).append(tst_pfl_testname_tr);
             var tst_pfl_patient_details_table = document.createElement('table');
             $(tst_pfl_patient_details_table).css('marginBottom','30px');
             $(tst_pfl_patient_details_table).css('width','531px');
             $(tst_pfl_patient_details_table).addClass("tst_ptnt_details");
             var tst_pfl_patient_table_head_tr = document.createElement('tr');
             $(tst_pfl_patient_table_head_tr).css('background','rgb(65, 167, 179)');
             $(tst_pfl_patient_table_head_tr).css('border','1px solid rgb(65, 167, 179)');
             $(tst_pfl_patient_table_head_tr).css('height','21px');
             var tst_pfl_patient_table_head_td =document.createElement('td');
             $(tst_pfl_patient_table_head_td).html("&nbsp"+"&nbsp"+"Patient Information");
             $(tst_pfl_patient_table_head_td).css('color','white');
             $(tst_pfl_patient_table_head_td).css('fontWeight','bold');
             $(tst_pfl_patient_table_head_tr).append(tst_pfl_patient_table_head_td);
             var tst_pfl_patient_table_head_td_2 = document.createElement('td');
             $(tst_pfl_patient_table_head_td_2).html("-");
             $(tst_pfl_patient_table_head_td_2).css('color','rgb(65, 167, 179)');
             $(tst_pfl_patient_table_head_tr).append(tst_pfl_patient_table_head_td_2);
             var tst_pfl_tr_patient = document.createElement('tr');
             $(tst_pfl_tr_patient).addClass("tst_pfl_preview_info");
             $(tst_pfl_tr_patient).css('border' ,'1px solid rgb(221, 221, 221)');
             var tst_pfl_td_patientname = document.createElement('td');
             $(tst_pfl_td_patientname).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
             $(tst_pfl_td_patientname).css('border','1px solid #ddd');
             $(tst_pfl_td_patientname).css('width','265px');
             var tst_pfl_td_patient_name = document.createElement('td');
             $(tst_pfl_td_patient_name).html("&nbsp"+localStorage.getItem("patient_name"));
             $(tst_pfl_td_patient_name).css('width','265px');
             var tst_pfl_tr_email = document.createElement('tr');
             $(tst_pfl_tr_email).addClass("tst_pfl_preview_info");
             $(tst_pfl_tr_email).css('border' ,'1px solid rgb(221, 221, 221)');
             var tst_pfl_td_emailheading = document.createElement('td');
             $(tst_pfl_td_emailheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Email");
             $(tst_pfl_td_emailheading).css('border','1px solid #ddd');
             $(tst_pfl_td_email_heading).css('width','265px');
             var tst_pfl_td_email_heading = document.createElement('td');
             $(tst_pfl_td_email_heading).html("&nbsp"+localStorage.getItem("patient_email"));
             $(tst_pfl_td_email_heading).css('width','265px');
             var tst_pfl_tr_phno = document.createElement('tr');
             $(tst_pfl_tr_phno).addClass("tst_pfl_preview_info");
             $(tst_pfl_tr_phno).css('border' ,'1px solid rgb(221, 221, 221)');
             var tst_pfl_td_phnoheading = document.createElement('td');
             $(tst_pfl_td_phnoheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Mobile No");
             $(tst_pfl_td_phnoheading).css('border','1px solid #ddd');
             $(tst_pfl_td_phnoheading).css('width','265px');
             var tst_pfl_td_phno_heading = document.createElement('td');
             $(tst_pfl_td_phno_heading).html("&nbsp"+localStorage.getItem("patient_phone"));
             $(tst_pfl_td_phno_heading).css('width','265px');
             var tst_pfl_tr_apptime = document.createElement('tr');
             $(tst_pfl_tr_apptime).addClass("tst_pfl_preview_info");
             $(tst_pfl_tr_apptime).css('border' ,'1px solid rgb(221, 221, 221)');
             var tst_pfl_td_apptimeheading = document.createElement('td');
             $(tst_pfl_td_apptimeheading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
             $(tst_pfl_td_apptimeheading).css('border','1px solid #ddd');
             $(tst_pfl_td_apptimeheading).css('width','265px');
             var tst_pfl_td_apptime_heading = document.createElement('td');
             $(tst_pfl_td_apptime_heading).html("&nbsp"+localStorage.getItem("patient_app_time"));
             $(tst_pfl_td_apptime_heading).css('width','265px');
             var tst_pfl_tr_address = document.createElement('tr');
             $(tst_pfl_tr_address).addClass("tst_pfl_preview_info");
             $(tst_pfl_tr_address).css('border' ,'1px solid rgb(221, 221, 221)');
             var tst_pfl_td_address_heading = document.createElement('td');
             $(tst_pfl_td_address_heading).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Address");
             $(tst_pfl_td_address_heading).css('border','1px solid rgb(221, 221, 221)');
             $(tst_pfl_td_address_heading).css('width','265px');
             var tst_pfl_td_address = document.createElement('td');
             $(tst_pfl_td_address).html("&nbsp"+localStorage.getItem("patient_address"));
             $(tst_pfl_td_address).css('width','265px');
             $(tst_pfl_tr_address).append(tst_pfl_td_address_heading);
             $(tst_pfl_tr_address).append(tst_pfl_td_address);
             var tst_pfl_back_button = document.createElement('button');
             $(tst_pfl_back_button).html("Back");
             $(tst_pfl_back_button).css('float','left');
             $(tst_pfl_back_button).css('backgroundColor','#ec4949');
             $(tst_pfl_back_button).css('width','98px');
             $(tst_pfl_back_button).css('borderRadius','3px');
             $(tst_pfl_back_button).css('border','0px');
             $(tst_pfl_back_button).css('marginTop','11px');
             var tst_pfl_order_button = document.createElement('button');
             $(tst_pfl_order_button).html("Order");
             $(tst_pfl_order_button).css('float','right');
             $(tst_pfl_order_button).css('backgroundColor','#ec4949');
             $(tst_pfl_order_button).css('width','98px');
             $(tst_pfl_order_button).css('borderRadius','3px');
             $(tst_pfl_order_button).css('border','0px');
             $(tst_pfl_order_button).css('marginTop','11px');
             var tst_pfl_tmm_form_element = document.createElement('div');
             $(tst_pfl_tmm_form_element).addClass("row");
             $(tst_pfl_tmm_form_element).attr('id','tmm-form-wizard');
             $(tst_pfl_tmm_form_element).css('marginTop','6px');
             var tst_pfl_prevbtn_element = document.createElement('div');
             $(tst_pfl_prevbtn_element).css('margin','0px');
             $(tst_pfl_prevbtn_element).addClass('prev');
             var tst_pfl_backbtn = document.createElement('button');
             $(tst_pfl_backbtn).attr('id','step2_back_btn');
             $(tst_pfl_backbtn).addClass("button button-control");
             $(tst_pfl_backbtn).attr('type','button');
             var tst_pfl_span_backbtn = document.createElement('span');
             $(tst_pfl_span_backbtn).html("Back");
             var tst_pfl_backbtn_divider = document.createElement('div');
             $(tst_pfl_backbtn_divider).addClass("button-divider");
             var tst_pfl_orderbtn_element = document.createElement('div');
             $(tst_pfl_orderbtn_element).css('margin','0px');
             $(tst_pfl_orderbtn_element).addClass('next');
             var tst_pfl_nextbtn = document.createElement('button');
             $(tst_pfl_nextbtn).attr('id','step2_next_btn');
             $(tst_pfl_nextbtn).addClass("button button-control");
             $(tst_pfl_nextbtn).attr('type','button');
             var tst_pfl_span_nextbtn = document.createElement('span');
             $(tst_pfl_span_nextbtn).html("Order");
             var tst_pfl_nextbtn_divider = document.createElement('div');
             $(tst_pfl_nextbtn_divider).addClass("button-divider");
             $(tst_pfl_backbtn).append(tst_pfl_span_backbtn);
             $(tst_pfl_prevbtn_element).append(tst_pfl_backbtn);
             $(tst_pfl_prevbtn_element).append(tst_pfl_backbtn_divider);
             $(tst_pfl_nextbtn).append(tst_pfl_span_nextbtn);
             $(tst_pfl_orderbtn_element).append(tst_pfl_nextbtn);
             $(tst_pfl_orderbtn_element).append(tst_pfl_nextbtn_divider);
             $(tst_pfl_tr_patient).append(tst_pfl_td_patientname);
             $(tst_pfl_tr_patient).append(tst_pfl_td_patient_name);
             $(tst_pfl_tr_email).append(tst_pfl_td_emailheading);
             $(tst_pfl_tr_email).append(tst_pfl_td_email_heading);
             $(tst_pfl_tr_phno).append(tst_pfl_td_phnoheading);
             $(tst_pfl_tr_phno).append(tst_pfl_td_phno_heading);
             $(tst_pfl_tr_apptime).append(tst_pfl_td_apptimeheading);
             $(tst_pfl_tr_apptime).append(tst_pfl_td_apptime_heading);
             $(tst_pfl_patient_details_table).append(tst_pfl_patient_table_head_tr);
             $(tst_pfl_patient_details_table).append(tst_pfl_tr_patient);
             $(tst_pfl_patient_details_table).append(tst_pfl_tr_email);
             $(tst_pfl_patient_details_table).append(tst_pfl_tr_phno);
             $(tst_pfl_patient_details_table).append(tst_pfl_tr_address);
             if ( tst_pfl_ptnt_address == "") 
      	    {
      	        $(tst_pfl_tr_address).detach();
      	    } 
             $(tst_pfl_patient_details_table).append(tst_pfl_tr_apptime);
             $(tst_pfl_tmm_form_element).append(tst_pfl_prevbtn_element);
             $(tst_pfl_tmm_form_element).append(tst_pfl_orderbtn_element);
             $("#tst_pfl_preview_modal").append(tst_pfl_closing_element);
             $(tst_pfl_preview_box).append(tst_pfl_preview_heading);
             $(tst_pfl_preview_box).append(tst_pfl_preview_pkg_info);
             $(tst_pfl_preview_box).append(tst_pfl_table_dealname); 
             $(tst_pfl_preview_box).append(tst_pfl_price_details);
             $(tst_pfl_preview_box).append(tst_pfl_testinfo_head_table);
             $(tst_pfl_preview_box).append(tst_pfl_patient_details_table);
             $(tst_pfl_preview_box).append(tst_pfl_tmm_form_element);
             $("#tst_pfl_preview_modal").append(tst_pfl_preview_box);
             $(".close").on('click',function () 
             {
                $(tst_pfl_order_page).modal().close();
             });//click
             $(tst_pfl_prevbtn_element).on('click',function () 
             { 
              tst_profile_form_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin);
             });
              $(tst_pfl_orderbtn_element).on('click',function ()
              {
                   tst_pfle_booking_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin);           
              });
 }//prvw fnctn endnf
 
function tst_pfle_booking_handler(tst_pfl_online_rpt,tst_pfl_vst_type,tst_pfl_labname,tst_pfl_labslug,tst_pfl_discount,tst_pfl_mrp,tst_pfl_dp,tst_pfl_labarea,tst_pfl_labaddress,tst_pfl_labaddress_pin)
{
    var tst_pfl_book_pnt_name =localStorage.getItem("patient_name");
    var tst_pfl_book_pnt_mobileno = localStorage.getItem("patient_phone");
    var tst_pfl_book_pnt_mail = localStorage.getItem("patient_email");
    var tst_pfl_book_pnt_appt_time = localStorage.getItem("patient_app_time");
    var tst_pfl_book_pnt_address = localStorage.getItem("patient_address");
    var tst_pfl_book_sel_month_name = tst_pfl_book_pnt_appt_time.substr(3,3);
    if (tst_pfl_book_sel_month_name == 'Jan') 
     {
    	 var tst_pfl_book_sel_month = '01';
    	 
     }//if mnth 1
    if (tst_pfl_book_sel_month_name == 'Feb') 
     {
        var  tst_pfl_book_sel_month = '02';
     }//if mnth 2
    if (tst_pfl_book_sel_month_name == 'Mar') 
     {
    	 var tst_pfl_book_sel_month = '03';
     }//if mnth 3
    if (tst_pfl_book_sel_month_name == 'Apr') 
     {
    	var tst_pfl_book_sel_month = '04';
  	  }//if mnth 4
    if (tst_pfl_book_sel_month_name == 'May') 
  	  {
    		var tst_pfl_book_sel_month = '05';
    	}//if mnth 5
    if (tst_pfl_book_sel_month_name == 'Jun') 
  	  {
    		var tst_pfl_book_sel_month = '06';
     }//if mnth 6
    if (tst_pfl_book_sel_month_name == 'Jul') 
     {
    		var tst_pfl_book_sel_month = '07';
     }//if mnth 7
    if (tst_pfl_book_sel_month_name == 'Aug') 
     {
    		var tst_pfl_book_sel_month = '08';
     	}//if mnth 8
     if (tst_pfl_book_sel_month_name == 'Sep') 
    	{
    		var tst_pfl_book_sel_month = '09';
    	}//if mnth 9
    	if (tst_pfl_book_sel_month_name == 'Oct') 
    	{
    		var tst_pfl_book_sel_month = '10';
    	}//if mnth 10
    	if (tst_pfl_book_sel_month_name == 'Nov') 
    	{
    			var tst_pfl_book_sel_month = '11';
    	}//if mnth 11
    	if (tst_pfl_book_sel_month_name == 'Dec') 
    	{
    		var tst_pfl_book_sel_month = '12';
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
                       
    	       var tst_pfl_book_tday = new Date();
    	       var tst_pfl_book_sel_year = tst_pfl_book_pnt_appt_time.substr(7,4);
             var tst_pfl_book_sel_date = tst_pfl_book_pnt_appt_time.substr(0,2);
             var tst_pfl_book_sel_hours = tst_pfl_book_pnt_appt_time.substr(12,2);
             var tst_pfl_book_sel_minutes = tst_pfl_book_pnt_appt_time.substr(15,2);
             var tst_pfl_book_sel_sec = addZero(tst_pfl_book_tday.getSeconds());
             var tst_pfl_book_sel_meridian = tst_pfl_book_pnt_appt_time.substr(18,2);
             var tst_pfl_book_sel_hours_meridian = tst_pfl_book_sel_hours +" "+ tst_pfl_book_sel_meridian;
             if (tst_pfl_book_sel_meridian == "AM") 
             {
             	 var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
             	
              }//if AM
              if (tst_pfl_book_sel_hours_meridian == "12 PM")
              {
              	   var tst_pfl_book_sel_hours = "12";
              	 var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                 
              	}//if 12
             if (tst_pfl_book_sel_hours_meridian == "01 PM")
              {
              	   var tst_pfl_book_sel_hours = "13";
              	 var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                 
              	}//if 01
              	if (tst_pfl_book_sel_hours_meridian == "02 PM")
               {
              	   var tst_pfl_book_sel_hours = "14";
                  var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                 
                }//if 02
               	if (tst_pfl_book_sel_hours_meridian == "03 PM")
                  {
              	      var tst_pfl_book_sel_hours = "15";
                      var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                     
                 }//if 03
                 if (tst_pfl_book_sel_hours_meridian == "04 PM")
                 {
              	    var tst_pfl_book_sel_hours = "16";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                  
                  }// if 04
                  if (tst_pfl_book_sel_hours_meridian == "05 PM")
                 {
              	    var tst_pfl_book_sel_hours = "17";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                  
                  }// if 05
                   if (tst_pfl_book_sel_hours_meridian == "06 PM")
                 {
              	    var tst_pfl_book_sel_hours = "18";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                  
                  }// if 06
                   if (tst_pfl_book_sel_hours_meridian == "07 PM")
                 {
              	    var tst_pfl_book_sel_hours = "19";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                   
                  }// if 07
                   if (tst_pfl_book_sel_hours_meridian == "08 PM")
                 {
              	    var tst_pfl_book_sel_hours = "20";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                   
                  }// if 08
                   if (tst_pfl_book_sel_hours_meridian == "09 PM")
                 {
              	    var tst_pfl_book_sel_hours = "21";
                   var tst_pfl_book_sel_time = tst_pfl_book_sel_year+"-"+tst_pfl_book_sel_month+"-"+tst_pfl_book_sel_date+" "+tst_pfl_book_sel_hours+":"+tst_pfl_book_sel_minutes+":"+tst_pfl_book_sel_sec;
                   
                  }// if 09        
       $.ajax({
       url:tst_profile_host+"/m-checkout/book-order",
       type:'POST',
       dataType:'json',
       data:{labSlug:tst_pfl_labslug,testSlugs:tst_profile_tstslug,patientName:tst_pfl_book_pnt_name,patientMobile:tst_pfl_book_pnt_mobileno,patientEmail:tst_pfl_book_pnt_mail,apptTime:tst_pfl_book_sel_time},
          success:function(data)
         {
         	if (data.error) 
         	{
         	      var tst_pfl_error_page = document.createElement('div');
                  $(tst_pfl_error_page).addClass("modal");
                  $(tst_pfl_error_page).attr('id','test_pfl_modal_errorpage');
                  $(tst_pfl_error_page).css('backgroundColor','#fff');
                  $(tst_pfl_error_page).css('position','relative');
                  $(tst_pfl_error_page).css('paddingRight','0px');
                  $(tst_pfl_error_page).modal().open();
                   var tst_pfl_error_closing = document.createElement('a');
                  $(tst_pfl_error_closing).addClass("confirm_close");
                  $(tst_pfl_error_closing).attr('href','#');
                  $(tst_pfl_error_closing).html("&times;");
                  $(tst_pfl_error_closing).css('marginTop' ,'-24px');
                  $(tst_pfl_error_closing).css('marginRight','8px');
                  $(tst_pfl_error_closing).css('fontSize','26px');
                  $(tst_pfl_error_closing).css('float','right');
                  var tst_pfl_error_heading = document.createElement('h4');
                  $(tst_pfl_error_heading).html("Order Confirmation failed");
                   $(tst_pfl_error_heading).css('color','#5cb0cf');
                  $(tst_pfl_error_heading).css('textAlign','center');
                  var tst_pfl_error_detail = document.createElement('div');
                  $(tst_pfl_error_detail).html(data.error);
                  $(tst_pfl_error_detail).css('marginTop','16px');
                  $(tst_pfl_error_detail).css('marginLeft','16px');
                  var tst_pfl_error_close = document.createElement('button');
                  $(tst_pfl_error_close).addClass("close_modal");
                  $(tst_pfl_error_close).attr('type','button');
                  $(tst_pfl_error_close).html("Close");
                  $(tst_pfl_error_close).css('float','right');
                  $(tst_pfl_error_close).css('marginTop','8px');
                  $(tst_pfl_error_close).css('width','80px');
                  $(tst_pfl_error_close).css('borderRadius','5px');
                  $(tst_pfl_error_close).css('color','white');
                  $(tst_pfl_error_close).css('background','rgb(236,73,73)');
                  $(tst_pfl_error_close).css('border','0px');
                  $(tst_pfl_error_close).css('marginRight','20px');
                   $("#test_pfl_modal_errorpage").append(tst_pfl_error_closing);
                   $("#test_pfl_modal_errorpage").append(tst_pfl_error_heading);
                   $("#test_pfl_modal_errorpage").append(tst_pfl_error_detail);
                   $("#test_pfl_modal_errorpage").append(tst_pfl_error_close);
                   $(tst_pfl_error_closing).on('click',function () 
                   {
                   	$(tst_pfl_error_page).modal().close();
                 	});// srror click close
                   $(tst_pfl_error_close).on('click',function () 
                   {
                   	$(tst_pfl_error_page).modal().close();
                  });//tst error close fnctn

          	}//if error
       else 
       {
       	  var tst_pfl_confirm_page = document.createElement('div');
           $(tst_pfl_confirm_page).addClass("modal");
           $(tst_pfl_confirm_page).attr('id','tst_pfl_modal_confirmpage');
           $(tst_pfl_confirm_page).css('backgroundColor','#fff');
           $(tst_pfl_confirm_page).css('position','relative');
           $(tst_pfl_confirm_page).css('paddingRight','0px');
           $(tst_pfl_confirm_page).modal().open();
           var tst_pfl_confirm_closing = document.createElement('a');
           $(tst_pfl_confirm_closing).addClass("tst_pfl_confirm_close");
           $(tst_pfl_confirm_closing).attr('href','#');
           $(tst_pfl_confirm_closing).html("&times;");
           $(tst_pfl_confirm_closing).css('marginTop' ,'-23px');
           $(tst_pfl_confirm_closing).css('fontSize','26px');
           $(tst_pfl_confirm_closing).css('float','right');
           $(tst_pfl_confirm_closing).css('marginRight','8px');
           var tst_pfl_order_element = document.createElement('div');
           $(tst_pfl_order_element).addClass("order_details");
           $(tst_pfl_order_element).css('marginTop','9px');
           var tst_pfl_booking_heading = document.createElement('h4');
           $(tst_pfl_booking_heading).html("Order Confirmation");
           $(tst_pfl_booking_heading).css('textAlign','center');
           $(tst_pfl_booking_heading).css('fontSize','18px');
           $(tst_pfl_booking_heading).css('fontWeight','bold');
           $(tst_pfl_booking_heading).css('color','#5cb0cf');
          var tst_pfl_success_element = document.createElement('div');
          $(tst_pfl_success_element).html("Your order is successfully placed."+"&nbsp"+"&nbsp"+"Please check your mail for details.");
          $(tst_pfl_success_element).css('marginLeft','24px');
          $(tst_pfl_success_element).css('marginTop','8px');
          var tst_pfl_ordered_table = document.createElement('table');
          $(tst_pfl_ordered_table).css('marginTop','8px');
          $(tst_pfl_ordered_table).css('width','552px');
          var tst_pfl_labname_tr = document.createElement('tr');
          $(tst_pfl_labname_tr).addClass("tst_pfl_order_class");
          $(tst_pfl_labname_tr).attr('id','tst_ordered_lab');
          var tst_pfl_labname_td= document.createElement('td');
          $(tst_pfl_labname_td).addClass("tst_pfl_success_det");
          $(tst_pfl_labname_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Lab name");
          $(tst_pfl_labname_td).css('borderRight','1px solid #ddd');
          var tst_pfl_lab_name_td = document.createElement('td');
          $(tst_pfl_lab_name_td).addClass("tst_pfl_success_det");
          $(tst_pfl_lab_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.labName);
          var tst_pfl_orderid_tr = document.createElement('tr');
          $(tst_pfl_orderid_tr).addClass("tst_pfl_order_class");
          var tst_pfl_orderid_td = document.createElement('td');
          $(tst_pfl_orderid_td).addClass("tst_pfl_success_det");
          $(tst_pfl_orderid_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"OrderId");
          $(tst_pfl_orderid_td).css('borderRight','1px solid #ddd');
          var tst_pfl_order_id_td = document.createElement('td');
          $(tst_pfl_order_id_td).addClass("tst_pfl_success_det");
          $(tst_pfl_order_id_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.orderId);
          var tst_pfl_ptnt_name_tr = document.createElement('tr');
          $(tst_pfl_ptnt_name_tr).addClass("tst_pfl_order_class");
          $(tst_pfl_ptnt_name_tr).attr('id','order_name');
          var tst_pfl_ptnt_name_td = document.createElement('td');
          $(tst_pfl_ptnt_name_td).addClass("tst_pfl_success_det");
          $(tst_pfl_ptnt_name_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Name");
          $(tst_pfl_ptnt_name_td).css('borderRight','1px solid #ddd');
          var tst_pfl_ptntname_td = document.createElement('td');
          $(tst_pfl_ptntname_td).addClass("tst_pfl_success_det");
          $(tst_pfl_ptntname_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.patientName);
          var tst_pfl_apptime_tr = document.createElement('tr');
          $(tst_pfl_apptime_tr).addClass("tst_pfl_order_class");
          var tst_pfl_apptime_td = document.createElement('td');
           $(tst_pfl_apptime_td).addClass("tst_pfl_success_det");
           $(tst_pfl_apptime_td).html("&nbsp"+"&nbsp"+"&nbsp"+"&nbsp"+"Appointment Timing");
           $(tst_pfl_apptime_td).css('borderRight','1px solid #ddd');
           var tst_pfl_appt_time_td = document.createElement('td');
           $(tst_pfl_appt_time_td).addClass("tst_pfl_success_det");
           $(tst_pfl_appt_time_td).html("&nbsp"+"&nbsp"+"&nbsp"+data.apptTime);
           var tst_pfl_close_button = document.createElement('button');
           $(tst_pfl_close_button).addClass("tst_pfl_close_modal");
           $(tst_pfl_close_button).attr('type','button');
           $(tst_pfl_close_button).html("Close");
           $(tst_pfl_close_button).css('float','right');
           $(tst_pfl_close_button).css('marginTop','8px');
           $(tst_pfl_close_button).css('width','80px');
           $(tst_pfl_close_button).css('borderRadius','5px');
           $(tst_pfl_close_button).css('color','white');
           $(tst_pfl_close_button).css('background','rgb(236,73,73)');
           $(tst_pfl_close_button).css('border','0px');
           $(tst_pfl_close_button).css('marginRight','20px');
           $(tst_pfl_labname_tr).append(tst_pfl_labname_td);
           $(tst_pfl_labname_tr).append(tst_pfl_lab_name_td);
           $(tst_pfl_orderid_tr).append(tst_pfl_orderid_td);
           $(tst_pfl_orderid_tr).append(tst_pfl_order_id_td);
           $(tst_pfl_ptnt_name_tr).append(tst_pfl_ptnt_name_td);
           $(tst_pfl_ptnt_name_tr).append(tst_pfl_ptntname_td);
           $(tst_pfl_apptime_tr).append(tst_pfl_apptime_td);
           $(tst_pfl_apptime_tr).append(tst_pfl_appt_time_td);
           $(tst_pfl_ordered_table).append(tst_pfl_labname_tr);
           $(tst_pfl_ordered_table).append(tst_pfl_orderid_tr);
           $(tst_pfl_ordered_table).append(tst_pfl_ptnt_name_tr);
           $(tst_pfl_ordered_table).append(tst_pfl_apptime_tr);
           $(tst_pfl_order_element).append(tst_pfl_booking_heading);
           $(tst_pfl_order_element).append(tst_pfl_success_element);
           $(tst_pfl_order_element).append(tst_pfl_ordered_table);
           $(tst_pfl_order_element).append(tst_pfl_close_button);
           $("#tst_pfl_modal_confirmpage").append(tst_pfl_confirm_closing);
           $("#tst_pfl_modal_confirmpage").append(tst_pfl_order_element);
           $(".tst_pfl_confirm_close").on('click',function () 
           {
               $(tst_pfl_confirm_page).modal().close(); 
           });//click
           $(".tst_pfl_close_modal").on('click',function () 
           {
               $(tst_pfl_confirm_page).modal().close(); 
           });//click btn
          }//else
        }//success
        });//ajax
     }//fnctn endng  