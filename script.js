/*alert("\nOlá, tudo bem?\n\nEu sou o Rubio, estou em transição de carreira e criei esse currículo utilizando:\n\nHTML, CSS, JS e Bootstrap.")
*/
/*Alert (acima) é o anterior e o (abaixo) é o novo*/

function greetingMessage() {
    let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
    let d = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    if (h <= 5)
        return 'Boa madrugada! Hoje é ' + d;
    if (h < 12)
        return 'Bom dia! Hoje é ' + d;
    if (h < 18)
        return 'Boa tarde! Hoje é ' + d;
    return 'Boa noite! Hoje é ' + d;
} 
  
   function exibeAlert() { 
       alert((greetingMessage()) + "\n\nEu sou o Rubio, atualmente em transição de carreira e criei esse currículo utilizando:\n\nHTML, CSS, JS e Bootstrap!"); 
   } 
   onload=exibeAlert()

