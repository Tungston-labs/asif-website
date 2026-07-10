// testimonialsData.ts

export interface Testimonial {
  id: number;
  image: string;
  name: string;
  place: string;
  content: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    image: "/images/AjayanVarghese.jpeg",
    name: "Ajayan Varghese ",
    place: "Kottayam",
    content:
      "Your ability to balance aesthetic elegance with functional, everyday design is truly impressive. From our initial concepts to the final execution, your guidance and expertise ensured that the project surpassed all my expectations. The structure stands as a testament to your talent and vision.",
  },
  {
    id: 2,
    image: "/images/PramothSakthi.jpeg",
    name: "Pramoth Sakthi",
    place: "Bangalore ",
    content:
      "Huge thanks to Asif and his team for bringing our dream home to life and exceeding all our expectations.You managed the project beautifully, and the team's talent truly shines through in every corner.",
  },
  {
    id: 3,
    image: "/images/Aflah.jpeg",
    name: "Aflah",
    place: "Iritty ",
    content:
      "Our dream home became a reality thanks to Ar. Asif Ahmad. His creativity, attention to detail, and commitment to excellence are reflected in every corner of our home. The design is modern, functional, and perfectly suited to our lifestyle. We are truly grateful for his outstanding work and highly recommend him to anyone planning to build their dream home.",
  },
  {
    id: 4,
    image: "/images/JohnT.M.jpeg",
    name: "John T.M",
    place: "Koothattukulam",
    content:
      "We had a great experience working with Architect Asif Ahmad. He understood our requirements perfectly and designed a beautiful home that exceeded our expectations.",
  },
  {
    id: 5,
    image: "/images/Junaidsidhique.jpeg",
    name: "Junaid sidhique ",
    place: "Mangalam , Tirur",
    content:
      "From the first sketch to the final detail, you understood our dream perfectly. In a world full of similar designs, your work stands out with its own unique signature. Thank you for giving us a home that is beautiful, meaningful, and filled with heart. Your work will be part of our family’s memories forever.",
  },
  {
    id: 6,
    image: "/images/Jasykumaran.jpeg",
    name: "Jasy kumaran ",
    place: "Kanichukulangara Alappuzha",
    content:
      "We are absolutely delighted with our beautiful home, La Grande Vue, Kanichukulangara.Our architect Mr. Asif and his team transformed our vision into reality with a stunning design and exceptional attention even to the small details. The project was professionally supervised from start to finish , ensuring outstanding quality throughout. We truly appreciate the creativity, dedication, and commitment, and highly recommend their services to anyone looking for an architect who delivers excellence.",
  },
];
