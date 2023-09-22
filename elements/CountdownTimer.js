import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CountdownTimer = ({ targetTime }) => {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.timerText}>Jalsa</Text>
        <Text style={styles.timerText}>Countdown</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timeUnit}>{remainingTime.days}</Text>
        <Text style={styles.timeLabel}>Days</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timeUnit}>{remainingTime.hours}</Text>
        <Text style={styles.timeLabel}>Hours</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timeUnit}>{remainingTime.minutes}</Text>
        <Text style={styles.timeLabel}>Minutes</Text>
      </View>
      <View style={styles.timer}>
        <Text style={styles.timeUnit}>{remainingTime.seconds}</Text>
        <Text style={styles.timeLabel}>Seconds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "hotpink",
  },
  title: {
    flexDirection: "column",
  },
  timerText: {
    fontSize: 15,
    color: "#fff",
    marginRight: 10,
  },
  timer: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
  },
  timeUnit: {
    fontSize: 20,
    color: "#fff",
  },
  timeLabel: {
    fontSize: 14,
    color: "#fff",
  },
});

export default CountdownTimer;
