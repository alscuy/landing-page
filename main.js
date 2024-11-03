function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["IPA" , "Ilmu Pengetahuan Alam"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}
// Fungsi untuk toggle konten
function toggleContent(toggleId, contentId) {
  const toggle = document.getElementById(toggleId);
  const content = document.getElementById(contentId);
  
  if (toggle && content) {
      toggle.addEventListener('click', function() {
          if (content.style.display === "none" || content.style.display === "") {
              content.style.display = "block";
          } else {
              content.style.display = "none";
          }
      });
  }
}

// Panggil fungsi untuk setiap project box
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open modal with content
function openModal(title, content, imageSrc) {
    document.getElementById("modalTitle").textContent = title;
    var modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = content;
    if (imageSrc) {
        var img = document.createElement("img");
        img.src = imageSrc;
        modalContent.appendChild(img);
    }
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Add click event to project box
document.getElementById("toggleText1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default action
    openModal(
        "Hakikat Ilmu Sains dan Metode Ilmiah",
        "<p>Ilmu sains merupakan suatu sistem pengetahuan yang diperoleh melalui pengamatan, eksperimen, dan analisis yang sistematis. Hakikat ilmu sains terletak pada kemampuannya untuk menjelaskan fenomena alam dengan menggunakan metode ilmiah, yang meliputi langkah-langkah seperti perumusan hipotesis, pengujian melalui eksperimen, dan penarikan kesimpulan berdasarkan data yang diperoleh. Metode ilmiah ini memastikan bahwa pengetahuan yang dihasilkan bersifat objektif dan dapat diuji ulang, sehingga memberikan landasan yang kuat bagi perkembangan ilmu pengetahuan. Dengan demikian, ilmu sains tidak hanya berfokus pada hasil, tetapi juga pada proses yang sistematis dan terukur dalam mencari kebenaran.</p>",
        "hakikat.jpg"
    );
});
document.getElementById("toggleText2").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Zat dan Perubahannya",
      "<p>Materi adalah segala sesuatu yang memiliki massa dan menempati ruang, dan dapat ditemukan dalam berbagai bentuk, termasuk padat, cair, dan gas. Zat dapat mengalami berbagai perubahan, baik fisik maupun kimia. Perubahan fisik adalah perubahan yang tidak mengubah identitas zat, seperti perubahan bentuk atau keadaan (misalnya, es yang mencair menjadi air), sedangkan perubahan kimia melibatkan transformasi zat menjadi zat baru dengan sifat yang berbeda (seperti pembakaran kayu menjadi abu dan gas). Pemahaman tentang materi dan perubahannya sangat penting dalam ilmu pengetahuan, karena membantu kita memahami reaksi dan interaksi yang terjadi di sekitar kita.</p>",
      "gas.jpg"
  );
});
document.getElementById("toggleText3").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Suhu, Kalor, dan Perubahannya",
      "<p>Suhu adalah ukuran tingkat panas atau dingin suatu zat, yang berpengaruh pada energi kinetik partikel-partikel dalam zat tersebut. Kalor, di sisi lain, adalah energi yang berpindah dari satu benda ke benda lain akibat perbedaan suhu. Proses perpindahan kalor dapat terjadi melalui konduksi, konveksi, dan radiasi. Ketika zat menerima kalor, suhunya dapat meningkat, menyebabkan perubahan keadaan (misalnya, dari padat menjadi cair), atau dapat menyebabkan perubahan dalam sifat fisik atau kimia zat tersebut. Pemahaman tentang suhu dan kalor sangat penting dalam berbagai aplikasi, mulai dari teknologi pendinginan hingga reaksi kimia.</p>",
      "atis.jpg"
  );
});
document.getElementById("toggleText4").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Gerak dan Gaya",
      "<p>Gerak adalah perubahan posisi suatu benda terhadap titik acuan dalam waktu tertentu, sedangkan gaya adalah dorongan atau tarikan yang dapat menyebabkan benda bergerak, berhenti, atau berubah arah. Dalam fisika, gaya diukur dalam satuan Newton (N) dan dapat bersifat kontak, seperti gaya gesek, atau non-kontak, seperti gaya gravitasi. Hukum Newton menjelaskan hubungan antara gerak dan gaya, di mana hukum pertama menyatakan bahwa benda akan tetap dalam keadaan diam atau bergerak lurus dengan kecepatan konstan kecuali ada gaya yang bekerja padanya. Pemahaman tentang gerak dan gaya sangat penting dalam berbagai aspek kehidupan sehari-hari, seperti dalam rekayasa, olahraga, dan ilmu pengetahuan.</p>",
      "gay.jpeg"
  );
});
document.getElementById("toggleText5").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Klasifikasi Makhluk Hidup",
      "<p>Klasifikasi makhluk hidup adalah proses pengelompokan organisme berdasarkan kesamaan dan perbedaan yang ada di antara mereka. Sistem klasifikasi ini membantu ilmuwan dalam memahami hubungan evolusi dan karakteristik spesifik dari berbagai spesies. Klasifikasi makhluk hidup umumnya dibagi menjadi beberapa tingkatan, mulai dari domain, kingdom, filum, kelas, ordo, famili, genus, hingga spesies. Dengan menggunakan sistem binomial nomenklatur, setiap spesies diberi nama ilmiah yang terdiri dari dua bagian: genus dan spesies. Klasifikasi ini tidak hanya penting untuk identifikasi spesies, tetapi juga untuk studi ekologi, konservasi, dan penelitian biologi lainnya.</p>",
      "kwok.jpg"
  );
});
document.getElementById("toggleText6").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Ekosistem dan Keanekaragaman Hayati",
      "<p>Ekosistem adalah suatu sistem yang terdiri dari komunitas makhluk hidup (biotik) dan lingkungan fisik (abiotik) yang saling berinteraksi dalam suatu area tertentu. Keanekaragaman hayati, yang mencakup variasi di antara spesies, gen, dan ekosistem, adalah indikator penting dari kesehatan ekosistem. Keanekaragaman hayati berperan dalam menjaga keseimbangan ekosistem, memberikan sumber daya alam, dan mendukung berbagai proses ekologis, seperti siklus nutrisi dan penyerbukan. Pelestarian keanekaragaman hayati sangat penting untuk keberlanjutan kehidupan di Bumi, karena penurunan keanekaragaman dapat mengakibatkan kerusakan ekosistem dan hilangnya spesies.</p>",
      "hot.jpg"
  );
});
document.getElementById("toggleText7").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent any default action
  openModal(
      "Tata Surya",
      "<p>Tata Surya adalah sistem yang terdiri dari Matahari sebagai pusatnya, bersama dengan delapan planet, bulan, asteroid, komet, dan berbagai benda langit lainnya yang terikat oleh gaya gravitasi. Planet-planet dalam tata surya ini, mulai dari yang terdekat dengan Matahari, yaitu Merkurius, Venus, Bumi, dan Mars, hingga planet gas raksasa seperti Jupiter, Saturnus, Uranus, dan Neptunus, memiliki karakteristik dan komposisi yang berbeda. Selain itu, terdapat juga sabuk asteroid antara Mars dan Jupiter serta sabuk Kuiper yang terletak di luar Neptunus, yang merupakan rumah bagi banyak objek kecil dan es. Penelitian tentang tata surya sangat penting untuk memahami asal-usul dan evolusi planet serta potensi kehidupan di luar Bumi.</p>",
      "surya.jpeg"
  );
});
// Prevent the project box hover effect from changing the title color
document.querySelectorAll('.project-box').forEach(function(box) {
    box.addEventListener('mouseenter', function() {
        this.querySelector('h3').style.color = 'var(--color-white)';
    });
    box.addEventListener('mouseleave', function() {
        this.querySelector('h3').style.color = 'var(--color-white)';
    });
});ddEventListener('scroll', scrollActive)