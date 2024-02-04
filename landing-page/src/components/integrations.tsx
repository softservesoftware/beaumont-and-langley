export default function Integrations(props: {
  mainHeading: string;
  subHeading: string;
  customers: { name: string; logo: string }[];
}) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {props.mainHeading}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {props.subHeading}
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            {props.customers.map((customer) => (
              <img
                key={customer.name}
                className="max-h-12 w-full object-contain object-left"
                src={customer.logo}
                alt={customer.name}
                width={158}
                height={48}
              />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}
