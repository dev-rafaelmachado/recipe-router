import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Recipe from "./routes/Recipe";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const listRecipes = [
  {
    id: 1,
    nome: "Bolo de cenoura",
    img: "https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg",
    ingredientes: ["Cenoura", "Açúcar", "Farinha", "Óleo"],
    preparo: "Misture tudo e asse no forno por 40 minutos",
    tipo: "Sobremesa",
    tempo: "45 minutos",
  },
  {
    id: 2,
    nome: "Pão de queijo",
    img: "http://s.glbimg.com/po/rc/media/2015/05/29/11_57_38_693_nanuuuuu.jpg",
    ingredientes: ["Polvilho", "Queijo", "Óleo", "Ovos"],
    preparo: "Misture tudo e asse no forno por 20 minutos",
    tipo: "Lanche",
    tempo: "25 minutos",
  },
  {
    id: 3,
    nome: "Lasanha à bolonhesa",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-lasanha-bolonhesa-1.jpg",
    ingredientes: [
      "Massa de lasanha",
      "Carne moída",
      "Queijo",
      "Molho de tomate",
    ],
    preparo:
      "Cozinhe a massa e refogue a carne. Monte a lasanha intercalando camadas de massa, carne, queijo e molho. Asse por 30 minutos.",
    tipo: "Prato principal",
    tempo: "1 hora",
  },
  {
    id: 4,
    nome: "Frango assado",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-frango-assado-2.jpg",
    ingredientes: ["Frango inteiro", "Limão", "Alho", "Azeite"],
    preparo:
      "Tempere o frango com limão, alho e azeite. Asse no forno por 1 hora e meia, virando o frango na metade do tempo.",
    tipo: "Prato principal",
    tempo: "2 horas",
  },
  {
    id: 5,
    nome: "Arroz à grega",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-arroz-a-grega-1.jpg",
    ingredientes: ["Arroz", "Cenoura", "Pimentão", "Ervilha"],
    preparo: "Cozinhe o arroz e refogue os legumes. Misture tudo e sirva.",
    tipo: "Acompanhamento",
    tempo: "30 minutos",
  },
  {
    id: 6,
    nome: "Sopa de legumes",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-sopa-de-legumes.jpg",
    ingredientes: ["Legumes variados", "Caldo de legumes", "Água", "Sal"],
    preparo:
      "Cozinhe os legumes no caldo de legumes e água. Tempere com sal a gosto.",
    tipo: "Prato principal",
    tempo: "1 hora",
  },
  {
    id: 7,
    nome: "Arroz de carreteiro",
    img: "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/f4322f4b99edd0f839d72ddf8908df79.jpg",
    ingredientes: ["Arroz", "Carne seca", "Cebola", "Tomate"],
    preparo:
      "Cozinhe o arroz. Refogue a carne seca com cebola e tomate. Misture o arroz com a carne refogada e sirva.",
    tipo: "Prato principal",
    tempo: "1 hora",
  },
  {
    id: 8,
    nome: "Torta de frango",
    img: "https://www.sabornamesa.com.br/media/k2/items/cache/8d967de4fb0deac392e6fc1838a87d15_XL.jpg",
    ingredientes: ["Frango desfiado", "Farinha de trigo", "Manteiga", "Leite"],
    preparo:
      "Misture o frango desfiado com a farinha de trigo, manteiga e leite. Coloque a mistura em uma forma e asse no forno por 30 minutos.",
    tipo: "Prato principal",
    tempo: "45 minutos",
  },
  {
    id: 9,
    nome: "Guacamole",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-guacamole-1.jpg",
    ingredientes: ["Abacate", "Tomate", "Cebola", "Limão"],
    preparo:
      "Amasse o abacate e misture com tomate, cebola e limão. Tempere com sal a gosto.",
    tipo: "Acompanhamento",
    tempo: "20 minutos",
  },
  {
    id: 10,
    nome: "Pudim de leite",
    img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-pudim-de-leite.jpg",
    ingredientes: ["Leite condensado", "Leite", "Ovos", "Açúcar"],
    preparo:
      "Bata o leite condensado, leite e ovos no liquidificador. Faça uma calda de açúcar em uma forma e despeje a mistura. Asse em banho-maria no forno por 1 hora.",
    tipo: "Sobremesa",
    tempo: "1 hora e 30 minutos",
  },
];

function Index() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App recipes={listRecipes} />,
        },
        {
          path: "recipe/:id",
          element: <Recipe recipes={listRecipes} />,
        },
      ])}
    ></RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
