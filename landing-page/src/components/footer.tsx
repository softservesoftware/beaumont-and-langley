import { footerNavigation } from "../App";

export default function Footer(props: { navigation: typeof footerNavigation }) {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="h-7"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Company name"
          />
          <div className="mt-16 grid sm:grid-cols-4 grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {Object.keys(props.navigation).map((header) => (
              <div key={header}>
                <h3 className="text-sm font-semibold leading-6 text-white capitalize">
                  {header}
                </h3>
                <ul className="mt-6 space-y-4">
                  {props.navigation[
                    header as keyof typeof footerNavigation
                  ].map((item: { name: string; href: string }) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
