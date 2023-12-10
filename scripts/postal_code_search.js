var postalCodeList;
/************************************/

function load_postal_codes_list(question) {
  var country;

  postalCodeList = [];
  if (question == "Core_Q6_3a") 
  {
    country = api.fn.answers().Core_Q6_3a;
  } 
  else if (question == "Core_Q6_4a") 
  {
    country = api.fn.answers().Core_Q6_4a;
  } 

  if (country == 2) {
    postalCodeList = JSON.parse(postalCodeAustria); //Austria
  }
  else 
  {
    postalCodeList = JSON.parse(postalCodeGermany); //Germany
  }

  for (i = 0; i < postalCodeList.length; i++) {
    postalCodeList[i].Show = postalCodeList[i].Name;
  }

  aui_init_search_list(postalCodeList);
  console.log("load_postal_code_code done!");
}

function save_postal_code_value(question, value) {
  console.log("question:", question);
  console.log("value:", value);

  if (question == "Core_Q6_3a") 
  {
    api.fn.answers({Core_Q6_3a_PostalCode: value}); 
  } 
  else if (question == "Core_Q6_4a") 
  {
    api.fn.answers({Core_Q6_4a_PostalCode: value}); 
  } 

  console.log("save postal_code  done!");
}

function show_postal_code_search_box(question) {
  load_postal_codes_list(question);
  
  var defaultValue = "";

  aui_show_external_search_box(question, defaultValue);
  
  $('.external-search-box').show(); 
}

function hide_postal_code_search_box() {
  aui_hide_external_search_box();
}