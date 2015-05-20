//JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	$ ('#btn_conti') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });

  $ ('#calcular') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
   $ ('#btn_inicio') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
 
 $ ('#btn_comenzar') .on ('tap' , function () { 
    navigator .vibrate (1000);
 });
	
	
	var nombre;
    var dia;
    var mes;
    var anio;	


$(document).ready(function(e) {

	
$('#calcular').click(function(e){
		
		var diac;
		diac=$('#diacumple').val();
		var mesc;
		mesc=$('#mescumple').val();
		var anioc;
		anioc=$('#yearcumple').val();
		
		var fecha_actual = new Date ();
		//alert (fecha_actual);
		var fecha_proximo = new Date (fecha_actual.getFullYear(),mesc -1 ,diac);
		//alert (fecha_proximo);
		var fecha_actual = new Date (fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate());
		//alert (fecha_actual);
		var fecha_nacimiento = new Date (anioc,mesc-1,diac);
		//alert (fecha_nacimiento);
		var edad=fecha_actual.getFullYear()-anioc;
		
		if (fecha_proximo <= fecha_actual)
		{
			fecha_proximo = new Date (fecha_proximo.getFullYear()+1,fecha_proximo.getMonth(),fecha_proximo.getDate());
			
		}
		else
		{
			edad=edad-1
		}
		var dias_faltantes = (fecha_proximo - fecha_actual)/1000/60/60/24;
		
		dias_faltantes = Math.round(dias_faltantes);
		
		
		$('#day').text( $('#txt_nom').val() + ' FALTAN ' + dias_faltantes + ' DIAS PARA TU CUMPLEAÑOS '); 
	
		
		 $('#bird').text('TIENES '+ edad  +  ' AÑOS HOY');
		 
		if (dias_faltantes <7)
		{
				
	       $('#age').show();
		}
		else
		{
			
		   $('#age').hide();
		}
		
});
      
	 
	 $('#btn_inicio').click(function(e){
		$('#txt_nom').val('')
		$('#diacumple').val('')
		$('#mescumple').val('')
		$('#yearcumple').val('')
		
		
});

});//ready

});
