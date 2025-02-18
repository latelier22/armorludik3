"use client";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const init = async () => {
      const { Tooltip, initTE } = await import("tw-elements");
      initTE({ Tooltip });
    };
    init();
  }, []);



   // Définir les menus et les routes
   const menuItems = [
    { label: "Accueil", route: "/" },
    { label: "Activités", route: "/activites" },
    { label: "Anniversaires", route: "/anniversaires" },
    { label: "Boutique", route: "/boutique" },
    { label: "Réservez", route: "/reservations" },
    { label: "Tarifs", route: "/tarifs" },
    { label: "Horaires", route: "/horaires" },
    { label: "Contact", route: "/contact" },
  ];

  // Définir un tableau d'objets pour les photos du footer
  const photoFooter = [
    // { url: "photo-toit1.png", alt: "gallery" },
    // { url: "photo-fuite1.png", alt: "gallery" },
    // { url: "photo-fuite2.png", alt: "gallery" },
    // { url: "photo-maconnerie1.png", alt: "gallery" },
    // { url: "photo-maconnerie2.png", alt: "gallery" },
  ];

  return (
    <footer className="bg-orange-500 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden md:block">
          <span>Restons en contact sur les réseaux sociaux</span>
        </div>
        <div className="flex justify-center items-center">
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 576 512"
            >
              <path
                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#!" className="mr-6 text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a href="#!" className="text-neutral-600 dark:text-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mx-6 pt-8 pb-4 text-center">
        {/* <div className="mb-6 bg-black">
          <h5 className="mb-2 text-white font-bold uppercase">
            Une fuite ou une fissure dans votre toiture ?
          </h5>

          <p className="mb-4 text-orange-500">Il faut agir vite !</p>
          <p className="mb-4 text-white">
            Nous intervenons 7/7 J - 24/24h en cas d&apos;urgences ou fuites de
            votre toiture.
          </p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold text-white dark:text-neutral-200">
              Qui sommes-nous?
            </h5>

            <ul className="mb-0 list-none text-yellow-500">
              <li>Armor ludiK - Repaire des p&apos;tits loups</li>
              <li>43, rue de Cornouaille</li>
              <li>22600 LOUDEAC</li>
              <li>0296251736</li>
              <li className=" text-white">N° de SIRET 91785987800014</li>
            </ul>
          </div>

          <div className="mb-6 flex-col flex items-center">
            <img src="logo.png" className="h-60" alt="..." />
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold  text-white  dark:text-neutral-200">
              Nos services
            </h5>

            <ul className="mb-0 list-none">
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <a
                    href={menuItem.route}
                    className=" text-white hover:text-sky-400 dark:text-neutral-200"
                  >
                    {menuItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="relative mb-7">
  <form action="">
    <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mb-6">
     
      <div className="md:ml-auto">
        <p className="font-bold">Sign up for our newsletter</p>
      </div>

     
      <div>
        <label for="inputSignUp" className="sr-only">
          Small input
        </label>
        <input
          type="email"
          id="inputSignUp"
          placeholder="Your address"
          className="w-full block rounded-lg border dark:border-none dark:bg-neutral-700 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
      </div>

     
      <div className="md:mr-auto">
        <button
          type="submit"
          className="inline-block rounded bg-indigo-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-indigo-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-indigo-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-indigo-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        >
          Subscribe
        </button>
      </div>
    </div>
  </form>
</div> */}

        <div className="mb-7 flex justify-center gap-x-5">
          {photoFooter.map((photo, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-lg"
            >
              <img src={photo.url} className="w-full" alt={photo.alt} />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700 flex justify-center items-center">
        <span>&copy; 2023 Copyright: </span>

        <a className="mx-3" href="#">
          <img
            src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
            className="h-5"
            alt="TE Logo"
            loading="lazy"
          />
        </a>

        <a
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="www.latelier22.fr"
        >
          L&apos;Atelier - Webdesign
        </a>
      </div>
    </footer>
  );
};

export default Footer;
