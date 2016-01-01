var tst_profile_slug ="random-blood-sugar";
var tst_profile_host = "http://beta.zotey.com/m-api";
function test_profile_details_handler()
{
	$.ajax({
   url:tst_profile_host+"/d-tests/profile",
   type:'GET',
   dataType: 'json',
   data:{testSlug:tst_profile_slug},
   success:function(data)
   {
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
	   $(tst_profile_name).html(data.testInfo[0].testName);
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
	   $(tst_profile_description_data).html(data.testInfo[0].testDesc);
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
	   $(tst_profile_labs_table).css('cursor','pointer');
	   var tst_profile_table_head = document.createElement('thead');
      $(tst_profile_table_head).addClass("table_head");
      var tst_profile_labs_tr = document.createElement('tr');
      $(tst_profile_labs_tr).css("background", "#41A7B3");
      $(tst_profile_labs_tr).css("color","white");
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
          $(tst_profile_lab_details_tr).attr('data-tst-profile-discount', data.offeringLabs[i].labTestDiscount);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-mrp', data.offeringLabs[i].labTestMRP);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-dp', data.offeringLabs[i].labTestDiscountedPrice);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-labname', data.offeringLabs[i].labName);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-labslug', data.offeringLabs[i].labSlug);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-labarea', data.offeringLabs[i].labArea);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-labaddress', data.offeringLabs[i].labAddress);
          $(tst_profile_lab_details_tr).attr('data-tst-profile-labpin', data.offeringLabs[i].labPincode);
          var tst_profile_labname_td = document.createElement('td');
          $(tst_profile_labname_td).html(data.offeringLabs[i].labName);
          $(tst_profile_labname_td).css('border', '1px solid #ddd');
          $(tst_profile_labname_td).css('paddingLeft','6px'); 
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
          $(tst_profile_price_td).css('padding-left',	'4px');
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
          $(tst_profile_book_td).css('paddingLeft','6px');
          $(tst_profile_book_td).css('paddingRight','6px');
          $(tst_profile_book_td).css('border', '1px solid #ddd');
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
	   	$(tst_profile_pop_test).attr('href','#');
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
	   	  $(tst_profile_rel_test).attr('href','#');
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