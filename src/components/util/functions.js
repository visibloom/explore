export const greetings = () => {
  const greetings = [
    { start: 0, end: 11, greet: "Good Morning" },
    { start: 12, end: 17, greet: "Good Afternoon" },
    { start: 18, end: 23, greet: "Good Evening" },
  ];
  const hour = new Date().getHours();
  const greeting = greetings.find(
    ({ start, end }) => hour >= start && hour <= end
  )?.greet;
  return greeting;
};