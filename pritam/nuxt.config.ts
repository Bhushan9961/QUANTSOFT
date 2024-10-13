import dotenv from 'dotenv';
dotenv.config();
export default defineNuxtConfig({
   
  app: {
      head: {
         title: "Quantsoft",
         htmlAttrs: {
            lang: "en",
         },
         meta: [
            {
               name: "title",
               content: "Quantsoft",
            },
            {
               name: "description",
               content: "Quantity Estimation, Quantity Surveying, Bill of Quantities, Costing, Material Take Off, Detailed Quantity Estimation",
            }, 
            {
               name: "robots",
               content: "index, follow",
            },
            {
               "http-equiv": "Content-Type",
               content: "text/html",
               charset: "utf-8",
            },
            {
               name: "language",
               content: "English",
            },
            { property: "og:title", content: "Quantsoft" },
            { property: "og:site_name", content: "Quantsoft" },
            { property: "og:url", content: "#" },
            { property: "og:description", content: "Quantity Estimation, Quantity Surveying, Bill of Quantities, Costing, Material Take Off, Detailed Quantity Estimation" },
            { property: "og:type", content: "website" },
            { property: "og:image", content: "/favicon.ico" },
 
         ],
         link: [
            { rel: "stylesheet", href: "https://unpkg.com/@icon/unicons/unicons.css" },
            { rel: "canonical", href: "#" },
         ],
      },
   },
   plugins: [{ src: "~/plugins/globalComponents.js", mode: "client" },],
 
});
