document.getElementById('startGame').addEventListener('click', function() {
  document.getElementById('gameStatus').innerText = 'Heist in Progress';
  // Logic to initiate the game or display game board
});

document.getElementById('incapacitateNPC').addEventListener('click', function() {
  // Logic for incapacitating an NPC
  // Update the alarm level
  let currentAlarmLevel = parseInt(document.getElementById('alarmLevel').innerText);
  document.getElementById('alarmLevel').innerText = currentAlarmLevel + 1;
});

document.getElementById('triggerAlarm').addEventListener('click', function() {
  // Logic to simulate triggering an alarm
  let currentAlarmLevel = parseInt(document.getElementById('alarmLevel').innerText);
  document.getElementById('alarmLevel').innerText = currentAlarmLevel + 1;
});

document.getElementById('completeObjective').addEventListener('click', function() {
  // Logic to complete an objective
  // Check for win/loss conditions
});
