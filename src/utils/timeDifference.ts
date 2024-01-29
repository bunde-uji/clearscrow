export function timeDifference(date: Date) {
    // Get current date and time in milliseconds
    const now = Date.now();
  
    // Get provided date in milliseconds
    const providedDateMs = date.getTime();
  
    // Calculate difference in milliseconds
    const diffInMs = now - providedDateMs;
  
    // Calculate difference in minutes
    const diffInMinutes = Math.round(diffInMs / 60000);
  
    // Check for same day and same hour
    const sameDay = date.getDate() === new Date().getDate();
    const sameHour = date.getHours() === new Date().getHours();
  
    // Format the output based on the time difference
    if (sameDay) {
        if (sameHour) {
          const minutes = diffInMinutes
          return `${minutes >= 2 ? `${minutes} minutes ago`: minutes > 0 ? "1 minute ago": "now"}`;
        } else {
          const hours = Math.round(diffInMinutes / 60)
          return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
        }
      } else {
        const days = Math.round(diffInMinutes / 1440)
        return `${days} ${days > 1 ? "days" : "day"} ago`;
      }
  }