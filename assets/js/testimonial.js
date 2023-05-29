const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Arjun Morse",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text:
      "Coinvex rewarded me with 1700 Robux for completing a task. User-friendly platform, enjoyable task. Smooth Robux redemption process, excellent customer support. Highly recommended for Roblox enthusiasts!"
  },
  {
    name: "Philip Adams",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Netflix gave me a 1-year Netflix account for completing a task. User-friendly platform, engaging task. Smooth account activation process, excellent customer support. Highly recommended for premium Netflix access!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Grateful for the site that gave me Account 25 Usdt for a task. Exceptional platform, easy process. Received reward quickly. Highly recommend for effortless cryptocurrency earning."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text:
      "I am thrilled to share my experience with Coinvex Site that generously rewarded me with 1500 UC for completing a task. This platform goes above and beyond to provide its users with valuable incentives. The task was engaging and enjoyable, and the UC reward was promptly delivered to my account. I highly recommend this site to anyone seeking rewarding experiences and valuable incentives."
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "I am beyond impressed with Coinvex, the site that granted me 10k Instagram followers for completing a task. It's an incredible platform that delivers tangible results. The task was simple, and the followers were genuine and engaging, instantly boosting my social media presence. I highly recommend Coinvex to anyone looking to grow their Instagram following effectively."
  }
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
