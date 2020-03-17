    const checks = document.querySelectorAll('.form-check-input');
        for (let c=0; c<checks.length; c++){
        // console.log (checks[c]);
            checks[c].addEventListener('change', checkFun);
            function checkFun(){
                if (checks[c].checked) {
        console.log('Выбран '+ [c]);
	            }
	            else {
		console.log('Не выбран');
                }
            }
        }