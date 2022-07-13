alert("Primer fecha")
let primerdía = prompt("Digite el día de nacimiento");
let primermes = prompt("Digite el mes de nacimiento en letras (minúsculas)");


let signo1 = ""
let signo2 = ""

//Primer fecha

if (primerdía >= 21 && primermes == "marzo" || primerdía <= 20 && primermes == "abril"){
  alert("Su signo es Aries")
  signo1 = "aries"
}

if (primerdía >= 21 && primermes == "abril" || primerdía <= 21 && primermes == "mayo"){
  alert("Su signo es Tauro")
  signo1 = "tauro"
}

if (primerdía >= 22 && primermes == "mayo" || primerdía <= 21 && primermes == "junio"){
  alert("Su signo es Géminis")
  signo1 = "géminis"
}

if (primerdía >= 22 && primermes == "junio" || primerdía <= 22 && primermes == "julio"){
  alert("Su signo es Cáncer")
  signo1 = "cáncer"
}

if (primerdía >= 23 && primermes == "julio" || primerdía <= 22 && primermes == "agosto"){
  alert("Su signo es Leo")
  signo1 = "leo"
}

if (primerdía >= 23 && primermes == "agosto" || primerdía <= 22 && primermes == "setiembre"){
  alert("Su signo es Virgo")
  signo1 = "virgo"
}

if (primerdía >= 23 && primermes == "setiembre" || primerdía <= 22 && primermes == "octubre"){
  alert("Su signo es Libra")
  signo1 = "libra"
}

if (primerdía >= 23 && primermes == "octubre" || primerdía <= 22 && primermes == "noviembre"){
  alert("Su signo es Escorpio")
  signo1 = "escorpio"
}

if (primerdía >= 23 && primermes == "noviembre" || primerdía <= 21 && primermes == "diciembre"){
  alert("Su signo es Sagitario")
  signo1 = "sagitario"
}

if (primerdía >= 22 && primermes == "diciembre" || primerdía <= 20 && primermes == "enero"){
  alert("Su signo es Capricornio")
  signo1 = "capricornio"
}

if (primerdía >= 21 && primermes == "enero" || primerdía <= 19 && primermes == "febrero"){
  alert("Su signo es Acuario")
  signo1 = "acuario"
}

if (primerdía >= 20 && primermes == "febrero" || primerdía <= 20 && primermes == "marzo"){
  alert("Su signo es Piscis")
  signo1 = "piscis"
}

alert("Segunda fecha")
let segundodía = prompt("Digite el día de nacimiento");
let segundomes= prompt("Digite el mes de nacimiento en letras");

//Segunda fecha

if (segundodía >= 21 && segundomes == "marzo" || segundodía <= 20 && segundomes == "abril"){
  alert("Su signo es Aries")
  signo2 = "aries"
}

if (segundodía >= 21 && segundomes == "abril" || segundodía <= 21 && segundomes == "mayo"){
  alert("Su signo es Tauro")
  signo2 = "tauro"
}

if (segundodía >= 22 && segundomes == "mayo" || segundodía <= 21 && segundomes == "junio"){
  alert("Su signo es Géminis")
  signo2 = "géminis"
}

if (segundodía >= 22 && segundomes == "junio" || segundodía <= 22 && segundomes == "julio"){
  alert("Su signo es Cáncer")
  signo2 = "cáncer"
}

if (segundodía >= 23 && segundomes == "julio" || segundodía <= 22 && segundomes == "agosto"){
  alert("Su signo es Leo")
  signo2 = "leo"
}

if (segundodía >= 23 && segundomes == "agosto" || segundodía <= 22 && segundomes == "setiembre"){
  alert("Su signo es Virgo")
  signo2 = "virgo"
}

if (segundodía >= 23 && segundomes == "setiembre" || segundodía <= 22 && segundomes == "octubre"){
  alert("Su signo es Libra")
  signo2 = "libra"
}

if (segundodía >= 23 && segundomes == "octubre" || segundodía <= 22 && segundomes == "noviembre"){
  alert("Su signo es Escorpio")
  signo2 = "escorpio"
}

if (segundodía >= 23 && segundomes == "noviembre" || segundodía <= 21 && segundomes == "diciembre"){
  alert("Su signo es Sagitario")
  signo2 = "sagitario"
}

if (segundodía >= 22 && segundomes == "diciembre" || segundodía <= 20 && segundomes == "enero"){
  alert("Su signo es Capricornio")
  signo2 = "capricornio"
}

if (segundodía >= 21 && segundomes == "enero" || segundodía <= 19 && segundomes == "febrero"){
  alert("Su signo es Acuario")
  signo2 = "acuario"
}

if (segundodía >= 20 && segundomes == "febrero" || segundodía <= 20 && segundomes == "marzo"){
  alert("Su signo es Piscis")
  signo2 = "piscis"
}

//Compatibilidad

alert("Compatibilidad")

//Aries

if(signo1 == "aries" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "piscis"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "aries" && signo2 == "escorpio"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "aries" && signo2 == "tauro"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "aries" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "cáncer"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "aries" && signo2 == "sagitario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "acuario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "aries"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "aries" && signo2 == "virgo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "aries" && signo2 == "capricornio"){
  alert("No son compatibles")
  alert("Relación: no")
}

//Tauro

if(signo1 == "tauro" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "tauro" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "tauro" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "tauro" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "tauro" && signo2 == "libra"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "tauro" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "tauro" && signo2 == "sagitario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "tauro" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "tauro" && signo2 == "acuario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "tauro" && signo2 == "aries"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "tauro" && signo2 == "virgo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "tauro" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

//Géminis

if(signo1 == "géminis" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "géminis" && signo2 == "piscis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "géminis" && signo2 == "escorpio"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "géminis" && signo2 == "tauro"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "géminis" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "géminis" && signo2 == "cáncer"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "géminis" && signo2 == "sagitario"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "géminis" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "géminis" && signo2 == "acuario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "géminis" && signo2 == "aries"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "géminis" && signo2 == "virgo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "géminis" && signo2 == "capricornio"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}


//Cáncer

if(signo1 == "cáncer" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "cáncer" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "cáncer" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "cáncer" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "cáncer" && signo2 == "libra"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "cáncer" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "cáncer" && signo2 == "sagitario"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "cáncer" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "cáncer" && signo2 == "acuario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "cáncer" && signo2 == "aries"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "cáncer" && signo2 == "virgo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "cáncer" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

//Leo

if(signo1 == "leo" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "leo" && signo2 == "piscis"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "leo" && signo2 == "escorpio"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "leo" && signo2 == "tauro"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "leo" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "leo" && signo2 == "cáncer"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "leo" && signo2 == "sagitario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "leo" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "leo" && signo2 == "acuario"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "leo" && signo2 == "aries"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "leo" && signo2 == "virgo"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "leo" && signo2 == "capricornio"){
  alert("No son compatibles")
  alert("Relación: no")
}

//Virgo

if(signo1 == "virgo" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "virgo" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "virgo" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "virgo" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "virgo" && signo2 == "libra"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "virgo" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "virgo" && signo2 == "sagitario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "virgo" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "virgo" && signo2 == "acuario"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "virgo" && signo2 == "aries"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "virgo" && signo2 == "virgo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "virgo" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

//Libra

if(signo1 == "libra" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "libra" && signo2 == "piscis"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "libra" && signo2 == "escorpio"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "libra" && signo2 == "tauro"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "libra" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "libra" && signo2 == "cáncer"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "libra" && signo2 == "sagitario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "libra" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "libra" && signo2 == "acuario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "libra" && signo2 == "aries"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "libra" && signo2 == "virgo"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "libra" && signo2 == "capricornio"){
  alert("No son compatibles")
  alert("Relación: no")
}

//Escorpio

if(signo1 == "escorpio" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "escorpio" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "escorpio" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "escorpio" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "escorpio" && signo2 == "libra"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "escorpio" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "escorpio" && signo2 == "sagitario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "escorpio" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "escorpio" && signo2 == "acuario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "escorpio" && signo2 == "aries"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "escorpio" && signo2 == "virgo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "escorpio" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

//Sagitario

if(signo1 == "sagitario" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "piscis"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "sagitario" && signo2 == "escorpio"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "sagitario" && signo2 == "tauro"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "sagitario" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "cáncer"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "sagitario" && signo2 == "sagitario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "acuario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "aries"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "sagitario" && signo2 == "virgo"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "sagitario" && signo2 == "capricornio"){
  alert("No son compatibles")
  alert("Relación: no")
}

//Capricornio

if(signo1 == "capricornio" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "capricornio" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "capricornio" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "capricornio" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "capricornio" && signo2 == "libra"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "capricornio" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "capricornio" && signo2 == "sagitario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "capricornio" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "capricornio" && signo2 == "acuario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "capricornio" && signo2 == "aries"){
  alert("No son compatibles")
}

if(signo1 == "capricornio" && signo2 == "virgo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "capricornio" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

//Acuario

if(signo1 == "acuario" && signo2 == "géminis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "piscis"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "acuario" && signo2 == "escorpio"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "acuario" && signo2 == "tauro"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "acuario" && signo2 == "libra"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "cáncer"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "acuario" && signo2 == "sagitario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "leo"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "acuario"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "aries"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "acuario" && signo2 == "virgo"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "acuario" && signo2 == "capricornio"){
  alert("No son compatibles")
  alert("Relación: no")
}

//Piscis

if(signo1 == "piscis" && signo2 == "géminis"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "piscis" && signo2 == "piscis"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "piscis" && signo2 == "escorpio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "piscis" && signo2 == "tauro"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "piscis" && signo2 == "libra"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "piscis" && signo2 == "cáncer"){
  alert("Si son compatibles")
  alert("Relación: sí")
}

if(signo1 == "piscis" && signo2 == "sagitario"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "piscis" && signo2 == "leo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "piscis" && signo2 == "acuario"){
  alert("No son compatibles")
  alert("Relación: no")
}

if(signo1 == "piscis" && signo2 == "aries"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "piscis" && signo2 == "virgo"){
  alert("Compatibilidad intermedia")
  alert("Relación: tal vez")
}

if(signo1 == "piscis" && signo2 == "capricornio"){
  alert("Si son compatibles")
  alert("Relación: sí")
}