async function buscaCep() {
    const cep = document.getElementById('cep').value;
    const cepRegex = /^\d{8}$/;
    if (!cep) {
        alert("por favor, digite o cep");
        return;
    }    
    else if (!cepRegex.test(cep)) {
        alert("Por favor, insira um CEP válido com 8 números e sem traço.");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);

        document.getElementById('RespostaLogradouro').innerHTML = data.logradouro;
        document.getElementById('RespostaBairro').innerHTML = data.bairro;
        document.getElementById('RespostaLocalidade').innerHTML = data.localidade;


    }catch (error){
        console.log(error.message);
    }
}



async function previsao() {
    const latitude = document.getElementById('latutude').value;
    const longitude = document.getElementById('longitude').value;

    if (!latitude || !longitude) {
        alert("Por favor, preencha os campos de Latitude e Longitude.");
        return;
    } else if (isNaN(latitude) || isNaN(longitude) || latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
        alert("Por favor, insira valores válidos para Latitude e Longitude.");
        return;
    }


    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);

        document.getElementById('respostaPrevisao').innerHTML = `Previsão de tempo de acordo com a região: ${data.hourly.temperature_2m[0]}°C`

    }catch (error){
        aconsole.log(error.message);
    }

}