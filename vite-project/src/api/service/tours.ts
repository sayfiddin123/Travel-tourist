export interface Tour {
    id: number;
    name: string;
    category: string;
    price: number;
    location: string;
    description: string;
    image: string
  }
  
  export const tours: Tour[] = [
    {
      id: 1,
      name: "Parij – Sevgi shahri",
      category: "Evropa",
      price: 1200000,
      location: "Parij, Fransiya",
      description: "Parijning tarixiy joylari va Eyfel minorasi.",
      image: "https://std.uz/images/news/Parij-Olimpiya.jpg"
    },
    {
      id: 2,
      name: "Maldiv orollari",
      category: "Ekzotik",
      price: 8000000,
      location: "Maldiv orollari",
      description: "Toza suv, oq qum va sokin muhit.",
      image: "https://robbreport.com/wp-content/uploads/2019/09/vommuli-island-med-1.jpg?w=1000"
    },
    {
      id: 3,
      name: "Istanbul – Sharq va G‘arb tutashgan joy",
      category: "Osiyo",
      price: 2500000,
      location: "Istanbul, Turkiya",
      description: "Buyuk tarix va zamonaviylik uyg‘unligi.",
      image: "https://media.admiddleeast.com/photos/66d7003461ef204c55e466bc/2:3/w_3848,h_5772,c_limit/GettyImages-1467862508.jpg"
    },
    {
      id: 4,
      name: "Dubai – Kelajak shahri",
      category: "Osiyo",
      price: 5000000,
      location: "Dubai, BAA",
      description: "Ulkan osmono‘par binolar va hashamatli hayot.",
      image: "https://st.depositphotos.com/1761942/1917/i/450/depositphotos_19171727-stock-photo-dubai-uae-burj-al-arab.jpg"
    },
    {
      id: 5,
      name: "London – Qirollik shahri",
      category: "Evropa",
      price: 3000000,
      location: "London, Angliya",
      description: "",
      image: "https://images.photowall.com/products/57404/london-1.jpg?h=699&q=85"
    }
  ];
  