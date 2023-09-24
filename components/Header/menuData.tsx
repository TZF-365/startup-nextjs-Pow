import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Pow Series",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "POW Series",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Content",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Pow Series",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Pow Newsletter",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Financial Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "AI Database",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Ecosystem Database",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Savcur Brands",
        path: "/signin",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Roadmap",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 53,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 54,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 55,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 56,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 57,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 58,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },

];
export default menuData;
