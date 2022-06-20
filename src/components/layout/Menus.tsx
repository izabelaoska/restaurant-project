import React from "react"
import { Link } from "react-router-dom"

export const Menus = () => {
  return (
    <>
      <div className="min-h-[450px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-full">
        <div className="h-[400px]">
          <p className="mb-4 text-center text-md text-[#DD5903]">
            FRESH TASTE BUDS
          </p>
          <h2 className="mt-3 mb-8 text-3xl text-center">
            STARTERS
          </h2>
          <div className="text-lg">Purple Corn Tostada</div>
          <p className="mb-8 text-xs">
            Ricotta, goat cheese, beetroot and datterini.
          </p>
          <div className="text-lg">Bruno's Scribble</div>
          <p className="mb-8 text-xs">
            Culatello, Spalla Cotta, Mortadella, Culacciona.
          </p>
          <div className="text-lg">Fresh Oysters Dozen</div>
          <p className="mb-8 text-xs">
            Our selection of fresh oysters, limes.
          </p>
          <div className="text-lg">
            Wild Mushroom Arancini
          </div>
          <p className="mb-5 text-xs">
            Porcini purée, parmesan, basil.
          </p>
        </div>
        <div className="h-[400px] ">
          <p className="mb-4 text-center text-md text-[#DD5903]">
            TOP RATED DISHES
          </p>
          <h2 className="mt-3 mb-8 text-3xl text-center">
            MAIN DISHES
          </h2>
          <div className="text-lg">Crispy Skin Chicken</div>
          <p className="mb-8 text-xs">
            Ricotta, radicchio, prosciutto salad, cabernet.
          </p>
          <div className="text-lg">Flank Steak</div>
          <p className="mb-8 text-xs">
            Served medium rare, salad, mushroom sauce.
          </p>
          <div className="text-lg">Ebony Fillet Steak</div>
          <p className="mb-8 text-xs">
            Truffle mash, pepper sauce.
          </p>
          <div className="text-lg">Fish & Chips</div>
          <p className="mb-8 text-xs">
            Atlantic cod fillet, chips, salad, tartare,
            lemon.
          </p>
        </div>
        <div className="h-[400px ">
          <p className="mb-4 text-center text-md text-[#DD5903]">
            DRINK & WINES
          </p>
          <h2 className="mt-3 mb-8 text-3xl text-center">
            BEVERAGE
          </h2>
          <div className="text-lg">Prickly Pear Tonic</div>
          <p className="mb-8 text-xs">
            Prickly Pear, Chancaca, Key Lime, and Tonic.
          </p>
          <div className="text-lg">Tommy's Margarita</div>
          <p className="mb-8 text-xs">
            Tequila, fresh lime juice, and orange liqueur.
          </p>
          <div className="text-lg">Chicha Morada</div>
          <p className="mb-8 text-xs">
            Purple Corn, Pineapple, Apple, Cinnamon.
          </p>
          <div className="text-lg">Better Boy</div>
          <p className="mb-8 text-xs">
            Tomato, Salt, Black Pepper, Lemon.
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-center gap-8 px-10 pb-10 ">
          <Link
            to={"/specials"}
            className="px-5 py-2 text-sm duration-300 border-2 border-black hover:bg-black hover:text-white"
          >
            BROWSE MENUS
          </Link>
          <button className="px-5 py-2 text-sm duration-300 border-2 border-black hover:bg-black hover:text-white">
            ORDER ONLINE
          </button>
        </div>
      </div>
    </>
  )
}
