function Card({ image, title, current, previous, index }) {
  const colors = [
    "bg-Orange300",
    "bg-Blue300",
    "bg-Pink400",
    "bg-Green400",
    "bg-Purple700",
    "bg-Yellow300",
  ];

  function checkHours(hour) {
    return hour < 1 ? "-" : hour > 1 ? `${hour}hrs` : `${hour}hr`;
  }

  return (
    <section className={`${colors[index]} rounded-t-2xl rounded-b-4xl z-0`}>
      <div className="relative h-10 lg:h-12 overflow-hidden">
        <img
          src={image}
          alt="Icon"
          className="absolute -top-1/12 right-1/16 -z-1"
        />
      </div>
      <div className="bg-Navy900 p-6 rounded-2xl hover:bg-Navy800 cursor-pointer">
        <div className="flex justify-between items-center sm:mb-2 lg:mb-4">
          <p className="font-medium">{title}</p>
          <img
            src="images/icon-ellipsis.svg"
            alt="Image of an Ellipsis"
            className="h-full"
          />
        </div>
        <div className="flex justify-between items-center sm:flex-col sm:items-start">
          <h2 className="font-light text-4xl my-2">{checkHours(current)}</h2>
          <p className="text-base text-Navy200">
            Last Week - {checkHours(previous)}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
