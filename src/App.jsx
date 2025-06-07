import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const [activities, setActivities] = useState([]);
  const [timeframe, setTimeframe] = useState("daily");

  useEffect(function () {
    async function getActivities() {
      try {
        const res = await fetch("/data/data.json");
        if (!res.ok) throw new Error("No response");
        const data = await res.json();
        setActivities(data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    }

    getActivities();
  }, []);

  function handleTimeframe(timeframe) {
    setTimeframe(timeframe);
  }

  return (
    <main className="min-h-screen text-lg flex items-center justify-center font-rubik text-white bg-Navy950">
      <div className="m-6 grid sm:grid-cols-3 lg:grid-cols-4 gap-6 w-full sm:max-w-2xl lg:max-w-5xl">
        <Header timeframe={timeframe} onClick={handleTimeframe} />
        {activities.map((activity, index) => (
          <Card
            index={index}
            image={`images/icon-${activity.title
              .replace(/\s/g, "-")
              .toLowerCase()}.svg`}
            title={activity.title}
            current={activity.timeframes[timeframe].current}
            previous={activity.timeframes[timeframe].previous}
            key={activity.title}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
