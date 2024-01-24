function formatDuration (seconds) {
 
    let secs = seconds; 
    if (secs === 0) {
      return 'now'
    }
    
    if (secs < 60) {
      return formatTime(undefined, undefined, undefined, undefined, secs, seconds)
    }
    
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    
    if (minutes < 60) {
      return formatTime(undefined, undefined, undefined, minutes, secs, seconds)
    }
    
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    
    if (hours < 24) {
      return formatTime(undefined, undefined, hours, minutes, secs, seconds)
    }
    
    let days = Math.floor(hours / 24)
    hours = hours % 24
    
    if (days < 365) {
      return formatTime(undefined, days, hours, minutes, secs, seconds)
    }
    
    let years = Math.floor(days / 365)
    days = days % 365
    
    return formatTime(years, days, hours, minutes, secs, seconds)
    
    function formatTime(years = 0, days = 0, hours = 0, minutes = 0, seconds = 0, input) {
      
      let output = '';
      
      output += years > 0 ? (years > 1 ? years + ' years' : '1' + ' year') : '';
      
      output += input > 3.154e+7 ? (days > 0 ? (seconds === 0 && minutes === 0 && hours === 0 ? ' and ' : ', ') : '') : '';
      
      output += days > 0 ? (days > 1 ? days + ' days' : '1' + ' day') : '';
      
      output += input > 86400 ? (hours > 0 ? (seconds === 0 && minutes === 0 ? ' and ' : ', ') : '') : '';
      
      output += hours > 0 ? (hours > 1 ? hours + ' hours' : '1' + ' hour') : '';
      
      output += input > 3600 ? (minutes > 0 ? (seconds === 0 ? ' and ' : ', ') : '') : '';
      
      output += minutes > 0 ? (minutes > 1 ? minutes + ' minutes' : '1' + ' minute') : '';
      
      output += input > 60 ? (secs > 0 ? ' and ' : '') : ''
      
      output += seconds > 0 ? (seconds > 1 ? seconds + ' seconds' : '1' + ' second') : '';
      
      return output;
    }
    
  }