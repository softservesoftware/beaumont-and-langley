export default function Customers(props: {customers: {name: string; logo: string}[]}) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {props.customers.map((customer) => (
              <img
                key={customer.name}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={customer.logo}
                alt={customer.name}
                width={158}
                height={48}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  

