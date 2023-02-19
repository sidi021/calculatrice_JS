// ------ Projet #1 ---------

//--- Etape 3 : Les différentes fonctions -------

// ---------- Fonction Addition ---------- 
function addition(nombreA, nombreB) {

    let restlat =  nombreA + nombreB;
    return restlat;
}

// ---------- Fonction Addition ---------- 
function multiplication(nombreA, nombreB) {
    let restlat =  nombreA * nombreB;
    return restlat;
}


// ---------- Fonction Soustraction ---------- 
function soustraction(nombreA, nombreB) {
    let restlat =  nombreA - nombreB;
    return restlat;
}

// ---------- Fonction Division ---------- 
function division(nombreA, nombreB) 
    {
        let restlat;
        if(nombreB == 0)
        {
            alert("Erreur division par Zéro est Impossible");
        }
        
        restlat =  nombreA / nombreB;
        return restlat;
    }           
    
//--- Etape 1 : Affiche une liste D'oppérations -------

let restart = false; // Pour refaire le calcul
do{

    do{
        var choix = Number(prompt("Que souhetez-vous faire ? \n\n" 
        +  "1 - Addition \n"     
        +  "2 - Multiplcation \n"      
        +  "3 - Soustraction \n"   
        +  "4 - Division \n"));
    } while(choix != 1 && choix != 2 && choix != 2 && choix != 3 && choix != 4);


    //--- Etape 2 : Entrer deux nombre -------

    do {
        var nombre1 = prompt(" Entrer le premier Nombre");
        var nombre2 = prompt(" Entrer le deuxième Nombre"); 
        nombre1 = parseFloat(nombre1);   
        nombre2 = parseFloat(nombre2);   
        
    } while( isNaN(nombre1)  || isNaN(nombre2)  ); // isNaN : renvoi TRUE quand la valeur saisit n'est pas un nombre !


    switch (choix){

        case 1:
            var resultat = addition(nombre1, nombre2);
            alert("le résultats de l'addition de " + nombre1 + " + " + nombre2 +  " est : " + resultat );
            break;
        case 2:
            var resultat = multiplication(nombre1, nombre2);
            alert("le résultats de la multiplication de " + nombre1 + " * " + nombre2 + " est : " + resultat );
            break;    
        case 3:
            var resultat = soustraction(nombre1, nombre2);
            alert("le résultats de la soustraction de " + nombre1 + " - " + nombre2 + " est : " + resultat )
            break;
        case 4:
            var resultat = division(nombre1, nombre2);
            if(resultat != Infinity)
            {
                alert("le résultats de la division  de " + nombre1 + " / " + nombre2 + " est : " + resultat )
            }
            break;

        default:
            alert(" L'opération n'est pas bien passé !");

    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?"); 
    // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
}while (restart) 
