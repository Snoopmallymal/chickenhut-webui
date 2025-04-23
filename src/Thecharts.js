import React, { useState, useEffect, useRef } from "react";
import { GaugeComponent } from "react-gauge-component";
import * as echarts from "echarts";

/**
 * A semicircular gauge showing the latest temperature reading.
 */
export function UpdateTempGauge() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        const response = await fetch(
          "https://chickenapi.floodfam.com/homeassistant/latest"
        ); // replace with your real API URL
        const data = await response.json();
        
        // Convert string to float for gauge
        const tempValue = parseFloat(data.temperature.value);
        setTemperature(tempValue);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
  
    fetchTemp(); // fetch immediately
    const interval = setInterval(fetchTemp, 3000); // poll every 3s
  
    return () => clearInterval(interval);
  }, []);

  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        colorArray: ['#00f0ec', '#1ca800', '#a80000'],
        padding: 0.02,
        subArcs: [
          { limit: 98 },
          {},
          { limit: 103 },
          {},
          { limit: 119 }
        ]
      }}
      pointer={{ type: "blob", animationDelay: 0 }}
      minValue={60}
      maxValue={120}
      value={temperature}
      labels={{
        valueLabel: {
          formatTextValue: f => `${f}°F`,
          matchColorWithArc: true
        }
      }}
    />
  );
}

/**
 * A semicircular gauge showing the latest humidity reading.
 */
export function UpdateHumidityGauge() {
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const fetchTemp = async () => {
      try {
        const response = await fetch(
          "https://chickenapi.floodfam.com/homeassistant/latest"
        ); // replace with your real API URL
        const data = await response.json();
        
        // Convert string to float for gauge
        const tempValue = parseFloat(data.humidity.value);
        setTemperature(tempValue);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
  
    fetchTemp(); // fetch immediately
    const interval = setInterval(fetchTemp, 500); // poll every 0.5s
  
    return () => clearInterval(interval);
  }, []);

  return (
    <GaugeComponent
      type="semicircle"
      arc={{
        colorArray: ['#00f0ec', '#1ca800', '#a80000'],
        padding: 0.02,
        subArcs: [
          { limit: 50 },
          {},
          { limit: 70 },
          { limit: 75 }
        ]
      }}
      pointer={{ type: "blob", animationDelay: 0, width: 20 }}
      minValue={0}
      maxValue={80}
      value={temperature}
      labels={{
        valueLabel: {
          formatTextValue: f => `${f}%`,
          matchColorWithArc: true
        }
      }}
    />
  );
}

export function UpdateTempGraph() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const baseline = 99;

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, []);

  // Fetch and render chart
  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        const response = await fetch(
          "https://chickenapi.floodfam.com/environment"
        );
        const data = await response.json();

        // Sort data by timestamp
        data.sort((a, b) => new Date(a.recorded_at) - new Date(b.recorded_at));

        // Prepare chart data
        const times = data.map(d =>
          new Date(d.recorded_at).toLocaleTimeString()
        );
        const temps = data.map(d => d.temperature - baseline); // Offset by baseline

        const option = {
          tooltip: {
            trigger: "axis",
            formatter: (params) => {
              const temp = params[0].value + baseline;
              return `${params[0].axisValue}<br/>Temperature: ${temp.toFixed(2)}°F`;
            }
          },
          xAxis: {
            type: "category",
            data: times,
            splitLine: { show: false }
          },
          yAxis: {
            type: "value",
            axisLabel: {
              formatter: value => (value + baseline).toFixed(0) + "°F"
            },
            axisLine: { onZero: true }, // Zero line represents baseline
            splitLine: { show: false }
          },
          series: [
            {
              name: "Temperature",
              type: "bar",
              data: temps,
              emphasis: { focus: "series" },
              itemStyle: {
                color: params => (params.value >= 0 ? "#5470C6" : "#EE6666")
              },
              animationDelay: idx => idx * 10
            }
          ],
          animationEasing: "elasticOut",
          animationDelayUpdate: idx => idx * 5
        };

        chartInstanceRef.current.setOption(option);
      } catch (error) {
        console.error("Error fetching temperature data:", error);
      }
    };

    fetchAndUpdate();
    const interval = setInterval(fetchAndUpdate, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}

export function UpdateHumidityGraph() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const baseline = 50;

  // Initialize chart
  useEffect(() => {
    if (chartRef.current) {
      chartInstanceRef.current = echarts.init(chartRef.current);
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.dispose();
      }
    };
  }, []);

  // Fetch and render chart
  useEffect(() => {
    const fetchAndUpdate = async () => {
      try {
        const response = await fetch(
          "https://chickenapi.floodfam.com/environment"
        );
        const data = await response.json();

        // Sort data by timestamp
        data.sort((a, b) => new Date(a.recorded_at) - new Date(b.recorded_at));

        // Prepare chart data
        const times = data.map(d =>
          new Date(d.recorded_at).toLocaleTimeString()
        );
        const temps = data.map(d => d.humidity - baseline); // Offset by baseline

        const option = {
          tooltip: {
            trigger: "axis",
            formatter: (params) => {
              const temp = params[0].value + baseline;
              return `${params[0].axisValue}<br/>Temperature: ${temp.toFixed(2)}°F`;
            }
          },
          xAxis: {
            type: "category",
            data: times,
            splitLine: { show: false }
          },
          yAxis: {
            type: "value",
            axisLabel: {
              formatter: value => (value + baseline).toFixed(0) + "%"
            },
            axisLine: { onZero: true }, // Zero line represents baseline
            splitLine: { show: false }
          },
          series: [
            {
              name: "Humidity",
              type: "bar",
              data: temps,
              emphasis: { focus: "series" },
              itemStyle: {
                color: params => (params.value >= 0 ? "#5470C6" : "#EE6666")
              },
              animationDelay: idx => idx * 10
            }
          ],
          animationEasing: "elasticOut",
          animationDelayUpdate: idx => idx * 5
        };

        chartInstanceRef.current.setOption(option);
      } catch (error) {
        console.error("Error fetching temperature data:", error);
      }
    };

    fetchAndUpdate();
    const interval = setInterval(fetchAndUpdate, 3000);
    return () => clearInterval(interval);
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}