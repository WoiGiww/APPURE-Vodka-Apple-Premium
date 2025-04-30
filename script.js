const vodkas = [
    {
      name: "Apple Fuji 150 mL",
      price: "Rp 1.400.000",
      desc: "Vodka apel Fuji segar, distilasi 5x, rasa lembut.",
      image: "fuji150.jpg"
    },
    {
      name: "Apple Fuji 200 mL",
      price: "Rp 1.553.000",
      desc: "Volume lebih besar, cocok untuk berbagi bersama teman.",
      image: "fuji200.jpg"
    },
    {
      name: "Apple Fuji 250 mL",
      price: "Rp 1.684.000",
      desc: "Porsi lebih besar, kualitas tetap premium, cocok hadiah.",
      image: "fuji250.jpg"
    },
    {
      name: "Wangshan 150 mL",
      price: "Rp 1.533.000",
      desc: "Rasa khas apel Wangshan dengan keaslian rasa alami.",
      image: "wangshan150.jpg"
    },
    {
      name: "Wangshan 200 mL",
      price: "Rp 1.669.000",
      desc: "Pilihan tengah bagi pecinta rasa apel Wangshan.",
      image: "wangshan200.jpg"
    },
    {
      name: "Wangshan 250 mL",
      price: "Rp 1.750.000",
      desc: "Ukuran maksimal untuk pengalaman maksimal.",
      image: "wangshan250.jpg"
    }
  ];
  
  const container = document.getElementById("catalog-container");
  
  vodkas.forEach(vodka => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${vodka.image}" width="100%">
    <h4>${vodka.name}</h4>
    <p>${vodka.price}</p>
  `;
    container.appendChild(card);
  });
  
  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function toggleDropdown() {
    const dropdown = document.getElementById("location-list");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
  