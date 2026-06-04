export type Hobby = {
  title: string;
  description: string;
  images: [string, string, string];
};

export const HOBBIES: Hobby[] = [
  {
    title: "Gaming",
    description:
      "Enjoying immersive and competitive games such as Dota 2, Red Dead Redemption 2, and Ghost of Tsushima.",
    images: [
      "/images/hobbies/gaming/dota2.jpg",
      "/images/hobbies/gaming/rdr2.jpg",
      "/images/hobbies/gaming/got1.jpg",
    ],
  },
  {
    title: "Gym & Fitness",
    description:
      "Staying active through gym workouts, strength training, and building discipline.",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      "/images/hobbies/gym/gym.jpg",
    ],
  },
  {
    title: "Calisthenics",
    description:
      "Practicing bodyweight exercises to improve strength, control, and endurance.",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "Biking",
    description:
      "Exploring new places, staying active, and enjoying long rides outdoors.",
    images: [
      "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=900&q=80",
      "/images/hobbies/bike/bike.jpg",
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "Listening to Music",
    description:
      "Spending hours on Spotify and YouTube Music to discover new songs, relax, and stay focused.",
    images: [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "Exploring AI",
    description:
      "Experimenting with AI tools, assistants, and new technologies to learn and improve productivity.",
    images: [
      "/images/hobbies/ai/ai1.jpg",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
      "/images/hobbies/ai/ai2.jpg",
    ],
  },
];
