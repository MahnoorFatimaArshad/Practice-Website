"use client";

import React from "react";

export default function UserSay() {
  const users = [
    { name: "Mahnoor Fatima", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti. Veritatis architecto deleniti cupiditate error et velit nam sunt!", image: "/images/user1.jpeg" },
    { name: "Ali Raza", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti. Veritatis architecto deleniti cupiditate error et velit nam sunt.", image: "/images/user2.jpeg" },
    { name: "Zara Khan", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti. Veritatis architecto deleniti cupiditate error et velit nam sunt!", image: "/images/user3.jpeg" },
    { name: "Usman Ahmed", text: "One of the best developer communities.",  image: "/images/user4.jpeg"  },
    { name: "Hira Tariq", text: "Excellent learning resources and help!", image: "/images/user5.jpeg"  },
    { name: "Ahmed Bilal", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti.!", image: "/images/user5.jpeg" },
    { name: "Fatima Noor", text: "Perfect for upgrading skills.", image: "/images/user1.jpeg" },
    { name: "Salman Malik", text: "Collaborated with some amazing minds.", image: "/images/user5.jpeg" },
    { name: "Sana Javed", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti. Veritatis architecto deleniti cupiditate error et velit nam sunt", image: "/images/user1.jpeg" },
    { name: "Bilal Asif", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil dignissimos consequatur corrupti.!", image: "/images/user3.jpeg" },
  ];

  return (
    <section className="bg-gray-100 py-24 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl font-bold text-blue-600 mb-6 ">Users Say</h2>
        <p className="text-black text-lg">
          Hear what our users say about their journey with us and how it transformed their careers.Hear what our users say about their journey with us and how it transformed their careers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-10 pt-12">
          {users.slice(0, 3).map((user, i) => (
            <UserCard key={i} {...user} />
          ))}
        </div>

        <div className="flex flex-col gap-10 -mt-12">
          {users.slice(3, 7).map((user, i) => (
            <UserCard key={i} {...user} />
          ))}
        </div>

        <div className="flex flex-col gap-10 pt-12">
          {users.slice(7, 10).map((user, i) => (
            <UserCard key={i} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}

const UserCard = ({ name, text, image }: { name: string; text: string; image: string }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center h-full">
    <p className="text-gray-700  text-center text-base mb-8">{text}</p>

    <div className="mt-auto">
      <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mx-auto mb-2 border-2 border-blue-500" />
      <p className="text-sm font-medium text-gray-800">{name}</p>
    </div>
  </div>
);
