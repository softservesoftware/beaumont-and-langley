export default function FeatureSection(props: {
  mainHeader: string;
  subHeader: string;
  textHeader: string;
  features: { name: string; icon: any; description: string }[];
  imageSide: string;
  img: string;
}) {
  // Image section remains the same
  const imageSection = (
    <div className="sm:px-6 lg:px-0">
      <img src={props.img} alt="" className="w-full" />
    </div>
  );

  // Text section now uses title and description props
  const textSection = (
    <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          {props.subHeader}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {props.mainHeader}
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {props.textHeader}
        </p>
        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
          {props.features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start ${
            props.imageSide === "right" ? "lg:grid-flow-row-dense" : ""
          }`}
        >
          {props.imageSide === "left" ? imageSection : textSection}
          {props.imageSide === "left" ? textSection : imageSection}
        </div>
      </div>
    </div>
  );
}
