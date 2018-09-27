// Constantes
const ALIb = 7;  const ALIm = 10; const ALIa = 15;
const AIEb = 5;  const AIEm = 7;  const AIEa = 10;
const EEb  = 3;  const EEm  = 4;  const EEa  = 6;
const SEb  = 4;  const SEm  = 5;  const SEa  = 7;
const CEb  = 3;  const CEm  = 4;  const CEa  = 6;
const baixa = 0; const media = 1; const alta = 2;
const custoPF = document.getElementById("custoPF").value;
// mapeia entradas de ALI e AIE
var ALI = document.getElementById("ALI");
var AIE = document.getElementById("AIE");
function pfIndicativa() {

    // calcula a contagem indicativa
    var resultado = document.getElementById("pfIndicativa");
    var pf = ( ALI.value * 35 )  + ( AIE.value * 15 );
    
    resultado.textContent = "PF Indicativa = " + pf + " ( R$" + (pf * custoPF).toFixed(2) + " )";
}
function pfEstimada() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALIe").value);
    var AIE = Number(document.getElementById("AIEe").value);
    var EE  = Number(document.getElementById("EE").value);
    var SE  = Number(document.getElementById("SE").value);
    var CE  = Number(document.getElementById("CE").value);
    // calcula a contagem estimada
    var resultado = document.getElementById("pfEstimada");
    // Assume que ALI e AIE de baixa complexidade
    // e EE, SE e CE de média complexidade
    var pf = ( ALI * ALIb ) + ( AIE * AIEb ) + ( EE *  EEm ) + ( SE * SEm ) + ( CE * CEm );
    resultado.textContent = "PF Estimada = " + pf + " ( " + pf * custoPF + " )";

}
function pfDetalhada() {
    // obtém os valores preenchidos pelo analista de pontos de função
    var ALI = Number(document.getElementById("ALId").value);
    var AIE = Number(document.getElementById("AIEd").value);
    var EE  = Number(document.getElementById("EEd").value);
    var SE  = Number(document.getElementById("SEd").value);
    var CE  = Number(document.getElementById("CEd").value);
    var pALI = Number(document.getElementById("cpxALI").value);
    var pAIE = Number(document.getElementById("cpxAIE").value);
    var pEE  = Number(document.getElementById("cpxEE").value);
    var pSE  = Number(document.getElementById("cpxSE").value);
    var pCE  = Number(document.getElementById("cpxCE").value);
    // calcula a contagem detalhada
    var resultado = document.getElementById("pfDetalhada");
    // Busca os pesos de ALI, AIE, EE, SE e CE da dropdownlist
    // e soma os produtos destes com as ALI, AIE, EE, SE e CE informados
    var pf = ( ALI * pALI ) + ( AIE * pAIE ) + ( EE *  pEE ) + ( SE * pSE ) 
           + ( CE * pCE );
    resultado.textContent = "PF Detalhada = " + pf + " ( " + pf * custoPF + " )";
    var rlALI = document.getElementById("rlALI").value;
    var idALI = document.getElementById("idALI").value;
    var cpxALI = document.getElementById("cpxALI");
    cpxALI[peso_ALI_AIE(rlALI, idALI)].selected = true; 
    
    var rlAIE = document.getElementById("rlAIE").value;
    var idAIE = document.getElementById("idAIE").value;
    var cpxAIE = document.getElementById("cpxAIE");
    cpxAIE[peso_ALI_AIE(rlAIE, idAIE)].selected = true; 
 
    var rlEE = document.getElementById("rlEE").value;
    var idEE = document.getElementById("idEE").value;
    var cpxEE = document.getElementById("cpxEE");
    cpxEE[peso_EE(rlEE, idEE)].selected = true; 
    
    var rlSE = document.getElementById("rlSE").value;
    var idSE = document.getElementById("idSE").value;
    var cpxSE = document.getElementById("cpxSE");
    cpxSE[peso_SE_CE(rlSE, idSE)].selected = true; 
 
    var rlCE = document.getElementById("rlCE").value;
    var idCE = document.getElementById("idCE").value;
    var cpxCE = document.getElementById("cpxCE");
    cpxCE[peso_SE_CE(rlCE, idCE)].selected = true;
}
function Mudarestado(el) {
    if ( el == "secao1" ) {
        aux1 = "secao2";
        aux2 = "secao3";
    } else 
    if ( el == "secao2" ) {
        aux1 = "secao1";
        aux2 = "secao3";
    } else {
        aux1 = "secao1";
        aux2 = "secao2";
    }
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else {
        document.getElementById(el).style.display = 'block';
        document.getElementById(aux1).style.display = 'none';
        document.getElementById(aux2).style.display = 'none';
    }    
}
function abreviar() {
    var descALIs  = document.getElementsByClassName("descALI");
    var descAIEs  = document.getElementsByClassName("descAIE");
    var descRLs   = document.getElementsByClassName("RL");
    var descIDs   = document.getElementsByClassName("ID");
    var descEEs   = document.getElementsByClassName("descEE");
    var descSEs   = document.getElementsByClassName("descSE");
    var descCEs   = document.getElementsByClassName("descCE");

    // alterna entre extenso e abreviado os ALIs
    if ( descALIs[0].innerText.length > 4 )
        for( i = 0; i < descALIs.length; i++ ) {
            descALIs[i].innerText = "ALI:";
            descALIs[i].style.marginRight = "0px";
        }    
    else
        for( i = 0; i < descALIs.length; i++ ) {
            descALIs[i].innerText = "Arquivo Lógico Interno:";
            descALIs[i].style.marginRight = "64px";
        }    
    // alterna entre extenso e abreviado os AIEs
    if ( descAIEs[0].innerText.length > 4 )
        for( i = 0; i < descAIEs.length; i++ ) {
            descAIEs[i].innerText = "AIE:";
            
    } else 
        for( i = 0; i < descAIEs.length; i++ ) {
            descAIEs[i].innerText = "Arquivo de Interface Externa:";
        }
    
    // alterna entre extenso e abreviado os RLs
    if ( descRLs[0].innerText.length > 2 )
        for ( i = 0; i < descRLs.length; i++) 
            descRLs[i].innerText = "rl";
    else
        for ( i = 0; i < descRLs.length; i++) 
            descRLs[i].innerText = "Registros Lógicos";

    // alterna entre extenso e abreviado o ID
    if ( descIDs[0].innerText.length > 2 )
            for ( i = 0; i < descIDs.length; i++) 
                descIDs[i].innerText = "id";
        else
            for ( i = 0; i < descIDs.length; i++) 
                descIDs[i].innerText = "Itens de Dados";

    // alterna entre extenso e abreviado a EE
    if ( descEEs[0].innerText.length > 3 )
        for ( i = 0; i < descEEs.length; i++ ) {
            descEEs[i].innerText = "EE:";
            descEEs[i].style.marginRight = "10px";
        }    
    else
        for ( i = 0; i < descEEs.length; i++ ) {
            descEEs[i].innerText = "Entrada Externa:";
            descEEs[i].style.marginRight = "139px";
        }    
    // alterna entre extenso e abreviado a SE
    if ( descSEs[0].innerText.length > 3 )
        for ( i = 0; i < descSEs.length; i++ ) {
            descSEs[i].innerText = "SE:";
            descSEs[i].style.marginRight = "10px";
        }
    else
        for ( i = 0; i < descSEs.length; i++ ) {
            descSEs[i].innerText = "Saída Externa:";
            descSEs[i].style.marginRight = "159px";
        }    
    
    // alterna entre extenso e abreviado a CE
    if ( descCEs[0].innerText.length > 3 )
        for ( i = 0; i < descCEs.length; i++ ) {
            descCEs[i].innerText = "CE:";
            descCEs[i].style.marginRight = "10px";
        }    
    else
        for ( i = 0; i < descCEs.length; i++ ) {
            descCEs[i].innerText = "Consulta Externa:";
            descCEs[i].style.marginRight = "128px";    
        }
}
// evento para contagem de pontos de função indicativa
var btnIndicativa = document.getElementById("btnIndicativa");
btnIndicativa.addEventListener("click", pfIndicativa);
// evento para contagem de pontos de função estimada
var btnEstimada = document.getElementById("btnEstimada");
btnEstimada.addEventListener("click", pfEstimada);
// evento para contagem de pontos de função estimada
var btnDetalhada = document.getElementById("btnDetalhada");
btnDetalhada.addEventListener("click", pfDetalhada);
// Tabela para verificar a complexidade de ALI e AIE
//  RL/ID       < 20     20-50     >50
//    1        baixa     baixa    média
//   2-5       baixa     média    alta
//   > 5       média     alta     alta
function peso_ALI_AIE(rl, id) {
    if ( id < 20 ) 
        if ( rl > 5 )
            return media;
        else
            return baixa;
    else 
        if ( id > 50 )
            if ( rl == 1 )
                return media;
            else
                return alta;
        else
            if ( rl == 1 )
                return baixa;
            else 
                if ( rl > 5 )
                    return alta;
                else
                    return media;
    
}

// Tabela para verificar a complexidade de SE e CE
//  RL/ID       < 6       6-19    >19
//   <2*       baixa     baixa   média
//   2-3       baixa     média   alta
//   > 3       média     alta    alta
function peso_SE_CE(rl, id) {
    if ( id < 6 )
        if ( rl > 3 )
            return media;
        else 
            return baixa;
    else 
        if ( id > 19 )
            if ( rl < 2 )
                return media;
            else
                return alta;
        else
            if ( rl < 2 )
                return baixa;
            else
                if ( rl > 3 )
                    return alta;
                else
                    return media;

}

// Tabela para verificar a complexidade de EE
//              < 5      5-15    >15
//   < 2       baixa    baixa    média
//    2        baixa    média    alta
//   > 2       média    alta     alta
function peso_EE(rl, id) {
    if ( id < 5 )
        if ( rl > 2 )
            return media;
        else
            return baixa;
    else
        if ( id > 15 )
            if ( rl < 2 )
                return media;
            else
                return alta;
        else
            if ( rl < 2 )
                return baixa;
            else
                if ( rl > 2 )
                    return alta;
                else
                    return media;
}
var btnMaisALI = document.getElementById("btnMaisALI") 
var btnMenosALI = document.getElementById("btnMenosALI") 
function incrementa(el) {
    el.value = Number( el.value ) + 1;
}
function decrementa(el) {
    if ( Number( el.value ) > 0 ) 
        el.value = Number( el.value ) - 1;
}
btnMaisALI.addEventListener("click", incrementa(ALI));
btnMenosALI.addEventListener("click", decrementa(ALI));



