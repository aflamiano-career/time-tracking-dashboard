function Header({ timeframe, onClick }) {
  return (
    <header className="rounded-2xl bg-Navy900 sm:col-span-3 lg:col-span-1 lg:row-span-2">
      <div className="bg-Purple600 flex items-center gap-6 p-8 rounded-[inherit] lg:flex-col lg:items-start">
        <img
          src="images/image-jeremy.png"
          alt="Picture of Jeremy Robson"
          className="max-w-16 h-full outline-4 outline-white rounded-full"
        />
        <div>
          <p className="text-base text-Navy200">Report for</p>
          <h1 className="font-light text-2xl">Jeremy Robson</h1>
        </div>
      </div>
      <nav className="my-6 flex justify-around sm:justify-center sm:gap-2 lg:flex-col text-Purple500">
        <div
          className={`cursor-pointer hover:text-white sm:px-8 ${
            timeframe === "daily" && "text-white"
          }`}
          onClick={() => onClick("daily")}
        >
          Daily
        </div>
        <div
          className={`cursor-pointer hover:text-white  sm:px-8 ${
            timeframe === "weekly" && "text-white"
          }`}
          onClick={() => onClick("weekly")}
        >
          Weekly
        </div>
        <div
          className={`cursor-pointer hover:text-white  sm:px-8 ${
            timeframe === "monthly" && "text-white"
          }`}
          onClick={() => onClick("monthly")}
        >
          Monthly
        </div>
      </nav>
    </header>
  );
}

export default Header;
