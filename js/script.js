function validateForm() {
  const nama = document.forms['contact-us']['nama'].value;
  const email = document.forms['contact-us']['email'].value;
  const minat = document.forms['contact-us']['minat'].value;

  if (nama === "" || email === "" || minat === "") {
    alert("Tidak boleh ada yang kosong!");
    return false;
  }

  return true;
}

function setSenderUI(nama, email, minat) {
  document.getElementById('nama').innerHTML = nama;
  document.getElementById('email').innerHTML = email;
  document.getElementById('minat').innerHTML = minat;
}


// autoSlide Function
let indexSlide = 1; // [0,1 2]
showSlide(1);

function nextSlide(n) {
    console.log('mextSlide: ' + n);
    showSlide(indexSlide += n);
}

// slide logic 
function showSlide(index) {
    let listImage = document.getElementsByClassName('core-item');
    console.log(listImage);
    console.log('banyak img: ' + listImage.length);

    // reset slideIndex
    if(index > listImage.length) indexSlide = 1;

    // hide all image 
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    // show onli one image
    listImage[indexSlide - 1].style.display = 'block'
    console.log('showSlide :' + index);
}

setInterval(() => nextSlide(1), 2000);

document.getElementById('btn-submit').addEventListener('click', () => validateForm());