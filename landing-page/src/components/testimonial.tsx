

export default function Testimonial(props: {testimonal: string, name: string, title: string, image: string}) {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-3xl">
       
        <blockquote className="mt-10 text-3xl font-semibold leading-8 tracking-tight text-gray-900 sm:leading-9">
          <p>
            “{props.testimonal}”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            className="h-12 w-12 rounded-full bg-gray-50"
            src={props.image}
            alt={`${props.name}'s professional headshot`}
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">{props.name}</div>
            <div className="mt-0.5 text-gray-600">{props.title}</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
