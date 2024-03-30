import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Service from "../pages/service/Service";
import Careers from "../pages/careers/Careers";

export const Routers = [
  {
    id: 1,
    title: "About us",
    path: "/about",
    element: <About />,
  },
  {
    id: 2,
    title: "Careers",
    path: "/careers",
    element: <Careers />,
  },
  {
    id: 3,
    title: "Service",
    path: "/service",
    element: <Service />,
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    element: <Contact />,
  },
];
