"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, User } from "lucide-react"

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const classTypes = ["All", "Yoga", "CrossFit", "HIIT", "Zumba", "Pilates", "Strength"]

const scheduleData = [
  {
    day: "Monday",
    classes: [
      { time: "06:00 AM", name: "Morning Yoga", trainer: "Sarah", type: "Yoga" },
      { time: "08:00 AM", name: "Strength Circuit", trainer: "Kamran", type: "Strength" },
      { time: "10:00 AM", name: "Pilates Core", trainer: "Ayesha", type: "Pilates" },
      { time: "05:00 PM", name: "CrossFit Challenge", trainer: "Faisal", type: "CrossFit" },
      { time: "07:00 PM", name: "Zumba Burn", trainer: "Sarah", type: "Zumba" },
      { time: "08:30 PM", name: "HIIT Extreme", trainer: "Kamran", type: "HIIT" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "06:00 AM", name: "HIIT Morning", trainer: "Kamran", type: "HIIT" },
      { time: "08:00 AM", name: "Yoga Flow", trainer: "Sarah", type: "Yoga" },
      { time: "10:00 AM", name: "Strength Basics", trainer: "Faisal", type: "Strength" },
      { time: "05:00 PM", name: "Pilates Sculpt", trainer: "Ayesha", type: "Pilates" },
      { time: "07:00 PM", name: "CrossFit WOD", trainer: "Kamran", type: "CrossFit" },
      { time: "08:30 PM", name: "Dance Fitness", trainer: "Sarah", type: "Zumba" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "06:00 AM", name: "CrossFit Sunrise", trainer: "Faisal", type: "CrossFit" },
      { time: "08:00 AM", name: "Strength Circuit", trainer: "Kamran", type: "Strength" },
      { time: "10:00 AM", name: "Gentle Yoga", trainer: "Sarah", type: "Yoga" },
      { time: "05:00 PM", name: "HIIT & Core", trainer: "Ayesha", type: "HIIT" },
      { time: "07:00 PM", name: "Pilates Flow", trainer: "Sarah", type: "Pilates" },
      { time: "08:30 PM", name: "Zumba Party", trainer: "Ayesha", type: "Zumba" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "06:00 AM", name: "Strength & Power", trainer: "Kamran", type: "Strength" },
      { time: "08:00 AM", name: "Pilates Core", trainer: "Sarah", type: "Pilates" },
      { time: "10:00 AM", name: "CrossFit Skills", trainer: "Faisal", type: "CrossFit" },
      { time: "05:00 PM", name: "Yoga Unwind", trainer: "Sarah", type: "Yoga" },
      { time: "07:00 PM", name: "HIIT Blast", trainer: "Kamran", type: "HIIT" },
      { time: "08:30 PM", name: "Zumba Tone", trainer: "Ayesha", type: "Zumba" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "06:00 AM", name: "HIIT Express", trainer: "Ayesha", type: "HIIT" },
      { time: "08:00 AM", name: "Yoga Strength", trainer: "Sarah", type: "Yoga" },
      { time: "10:00 AM", name: "CrossFit Endurance", trainer: "Kamran", type: "CrossFit" },
      { time: "05:00 PM", name: "Pilates & Stretch", trainer: "Sarah", type: "Pilates" },
      { time: "07:00 PM", name: "Strength Fusion", trainer: "Faisal", type: "Strength" },
      { time: "08:30 PM", name: "Zumba Night", trainer: "Ayesha", type: "Zumba" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "08:00 AM", name: "Weekend Warrior", trainer: "Kamran", type: "HIIT" },
      { time: "10:00 AM", name: "Yoga Flow", trainer: "Sarah", type: "Yoga" },
      { time: "12:00 PM", name: "CrossFit Open Gym", trainer: "Faisal", type: "CrossFit" },
      { time: "04:00 PM", name: "Pilates Sculpt", trainer: "Ayesha", type: "Pilates" },
      { time: "06:00 PM", name: "Zumba Party", trainer: "Sarah", type: "Zumba" },
    ],
  },
  {
    day: "Sunday",
    classes: [
      { time: "08:00 AM", name: "Yoga & Meditation", trainer: "Sarah", type: "Yoga" },
      { time: "10:00 AM", name: "Strength Basics", trainer: "Kamran", type: "Strength" },
      { time: "12:00 PM", name: "CrossFit Light", trainer: "Faisal", type: "CrossFit" },
      { time: "04:00 PM", name: "Pilates Core", trainer: "Ayesha", type: "Pilates" },
      { time: "06:00 PM", name: "Sunday Stretch", trainer: "Sarah", type: "Yoga" },
    ],
  },
]

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("Monday")
  const [activeType, setActiveType] = useState("All")

  const filteredClasses =
    scheduleData
      .find((day) => day.day === activeDay)
      ?.classes.filter((cls) => activeType === "All" || cls.type === activeType) || []

  return (
    <section id="schedule" className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">CLASS SCHEDULE</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-3xl mx-auto">
            Find the perfect class to fit your schedule and fitness goals.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-white">Filter by Class Type</h3>
          <div className="flex flex-wrap gap-2">
            {classTypes.map((type) => (
              <Button
                key={type}
                variant={activeType === type ? "default" : "outline"}
                className={`
                  ${
                    activeType === type
                      ? "bg-gold text-dark hover:bg-gold-dark"
                      : "border-gold/30 text-white hover:border-gold hover:text-gold"
                  }
                `}
                onClick={() => setActiveType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        <Tabs defaultValue={activeDay} onValueChange={setActiveDay}>
          <TabsList className="grid grid-cols-7 mb-8 bg-dark">
            {weekdays.map((day) => (
              <TabsTrigger key={day} value={day} className="data-[state=active]:bg-gold data-[state=active]:text-dark">
                {day.substring(0, 3)}
              </TabsTrigger>
            ))}
          </TabsList>

          {weekdays.map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((cls, index) => (
                    <Card
                      key={index}
                      className="bg-dark border-gold/20 hover:border-gold/50 transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white">{cls.name}</h4>
                            <span className="text-gold text-sm">{cls.type}</span>
                          </div>
                          <span className="bg-dark-light px-3 py-1 rounded-full text-xs text-white">{cls.time}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 text-gold mr-2" />
                          60 min
                        </div>
                        <div className="flex items-center text-gray-300 text-sm mt-1">
                          <User className="h-4 w-4 text-gold mr-2" />
                          Trainer: {cls.trainer}
                        </div>
                        <Button className="w-full mt-4 bg-dark-light hover:bg-gold hover:text-dark transition-all duration-300">
                          Book Class
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-gray-400">No classes found for the selected filters.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default ScheduleSection
