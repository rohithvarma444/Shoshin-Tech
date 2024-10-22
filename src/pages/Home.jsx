import Sidebar from '../components/dashboard/Sidebar'
import Navbar from '../components/dashboard/Navbar'
import ReportCard from '../components/dashboard/ReportCard'
import GraphCard from '../components/dashboard/GraphCard'
import ActivityCard from '../components/dashboard/ActivityCard'
import InfoCard from '../components/dashboard/InfoCard'
import { reportCardData } from '../constants/reportCardData'
import { combinedCardsData } from '../constants/combinedCardData'
import { announcementData } from '../constants/announcementData'
import { scheduleData } from '../constants/scheduleData'


function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Navbar />
        
        <main className="flex-grow p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            
            <div className="lg:w-2/3 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2 sm:flex sm: lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl mx-auto">
                {reportCardData.map((card, index) => (
                  <ReportCard
                    key={index}
                    color={card.color}
                    title={card.title}
                    count={card.count}
                    message={card.message}
                  />
                ))}
              </div>
              
              {/* Graph Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {combinedCardsData.map((card, index) => (
                  <GraphCard
                    key={index}
                    title={card.title}
                    total={card.total}
                    men={card.men}
                    women={card.women}
                    percentage={card.percentage}
                    data={card.data}
                  />
                ))}
              </div>

              <div className="bg-white rounded-lg shadow w-full">
                <InfoCard title="Announcement" items={announcementData} announcements={true}/>
              </div>

            </div>
            
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white rounded-lg shadow">
                <ActivityCard activityCount={12} />
              </div>
              <div className="bg-white rounded-lg shadow w-full ">
                <InfoCard title="Upcoming Schedule" items={scheduleData} announcements={false}/>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
