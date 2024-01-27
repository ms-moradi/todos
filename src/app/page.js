
import DailyTasks from "@/component/daily-tasks";
import Navbar from "@/component/navbar/index";



export default function Home() {
  return (
    <main className="w-full flex flex-col items-start p-8 ">
      <div className="w-full ">
        <Navbar/>
      </div>
      <div className="flex justify-start items-center gap-8">
        <DailyTasks/>
        <DailyTasks/>
        <DailyTasks/>
        <DailyTasks/>
      </div>
    </main>
  );
}
