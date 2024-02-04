
export default function Header(props: {
  header: string;
  body: string;
  heroImage: string;
  mainButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
}) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6">
            <div>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 ">
                {props.header}
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0">
                <p className="text-lg leading-8 text-gray-600">{props.body}</p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href={props.mainButton.href}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {props.mainButton.text}
                  </a>
                  <a
                    href={props.secondaryButton.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {props.secondaryButton.text} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <img
              src={props.heroImage}
              alt=""
              className="mt-4 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
