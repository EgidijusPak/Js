function teigiamas(a) {
  if (a > 0) {
    console.log(`Skaicius ${a} yra teigimas`);
  } else if (a < 0) {
    console.log(`Skaicius ${a} yra neigimas`);
  } else if (a == 0) {
    console.log(`Skaicius ${a} yra neutralus`);
  } else {
    console.log("Blogai ivesti duomenys");
  }
}
let a = -10;
console.log(teigiamas(a));

let b = 3;

switch (b) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Treciadienis");
    break;
  case 4:
    console.log("Ketvirtadienis");
    break;
  case 5:
    console.log("Penktadienis");
    break;
  case 6:
    console.log("Sestadienis");
    break;
  case 7:
    console.log("Sekmadienis");
    break;
  default:
    console.log("Blogai ivesti duomenys");
}

function palyginimas() {
  let q = parseInt(prompt("Iveskite pirma skaiciu"));
  let w = parseInt(prompt("Iveskite antra skaiciu"));
  let e = parseInt(prompt("Iveskite trecia skaiciu"));

  if (q > w) {
    alert("Pirmas skaicius yra didesnis uz antra skaiciu.");
  } else if (q < w) {
    alert("Pirmas skaicius yra mazesnis uz antra skaiciu.");
  } else {
    alert("Pirmas skaicius yra lygus antram skaiciui.");
  }

  if (q > e) {
    alert("Pirmas skaicius yra didesnis uz trecia skaiciu.");
  } else if (q < e) {
    alert("Pirmas skaicius yra mazesnis uz trecia skaiciu.");
  } else {
    alert("Pirmas skaicius yra lygus treciam skaiciui.");
  }

  if (w > q) {
    alert("Antras skaicius yra didesnis uz pirma skaiciu.");
  } else if (w < q) {
    alert("Antras skaicius yra mazesnis uz pirma skaiciu.");
  } else {
    alert("Antras skaicius yra lygus pirmam skaiciui.");
  }

  if (w > e) {
    alert("Antras skaicius yra didesnis uz trecia skaiciu.");
  } else if (w < e) {
    alert("Antras skaicius yra mažesnis už trecia skaiciu.");
  } else {
    alert("Antras skaicius yra lygus treciam skaiciui.");
  }

  if (e > q) {
    alert("Trecias skaicius yra didesnis uz pirma skaiciu.");
  } else if (e < q) {
    alert("Trecias skaicius yra mazesnis uz pirma skaiciu.");
  } else {
    alert("Trecias skaicius yra lygus pirmam skaiciui.");
  }

  if (e > w) {
    alert("Trecias skaicius yra didesnis uz antra skaiciu.");
  } else if (e < w) {
    alert("Trecias skaicius yra mazesnis uz antra skaiciu.");
  } else {
    alert("Trecias skaicius yra lygus antram skaiciui.");
  }
}

palyginimas();
