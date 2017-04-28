jQuery(function(){
	jQuery('#watchProduct').on("click", function(){
		chrome.tabs.getSelected(null, function(tab) {
			var $form = jQuery('#watchProductForm');
			
			if(isEmail($form.find('input[name="email"]').val())) {
				if(jQuery.isNumeric($form.find('input[name="alertvalue"]').val())) {
					jQuery('#main-form').hide();
					jQuery('#loader').show();
					
					var newInput = jQuery('<input type="hidden" name="url" />');
					
					newInput.val(tab.url);
					
					$form.append(newInput);
					$form.submit();
					
					sleep(2000);
					
					jQuery('#loader').hide();
					jQuery('#thanks').show();
				} else {
					alert("Please enter a valid watch price value, eg. 47.55, £60, $33.50");
				}
			} else {
				alert("Please enter a valid email address");
			}
		});
	});
});

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}