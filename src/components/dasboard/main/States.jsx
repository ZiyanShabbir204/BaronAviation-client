import ApiService from "@/api.service";
import { useAuth } from "@/contexts/auth.context";
import { states } from "@/data/dashboard";
import React, { useCallback, useEffect, useState } from "react";

export default function States() {
  const { user } = useAuth();
  const [data, setData] = useState({});

  const fetchData = useCallback(async () => {
    const hours = await ApiService.get(`/me/hours`);
    setData(hours);
  });
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user?._id]);
  const states = [
    {
      id: 1,
      title: "Total Hours",
      hours: data.total_hours,
      iconClass: "fa-solid fa-wallet text-accent-1",
    },
    {
      id: 2,
      title: "Available Hours",
      hours: data.available_hours,
      iconClass: "icon-payment text-accent-1",
    },
    {
      id: 3,
      title: "Used Hours",
      hours: data.used_hours,
      iconClass: "icon-booking text-accent-1",
    },
  ];

  return (
    <div className="row y-gap-30 pt-30 md:pt-30">
      {states.map((elm, i) => (
        <div key={i} className="col-xl-4">
          <div className="rounded-12 bg-dark-grey shadow-2 px-30 py-30 h-full">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div>{elm.title}</div>
                <div className="text-30 fw-700">{elm.hours}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
