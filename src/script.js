function formatDate() {
  const date = new Date();
  const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
  const fullDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });

  document.getElementById('weekday').textContent = weekday;
  document.getElementById('date').textContent = fullDate;
}

formatDate();

function checkTaskProgress() {
  const taskProgress = document.querySelector('.taskProgress');
  let progressCount = parseInt(taskProgress.textContent, 10);

  if (progressCount === 0) {
    alert('Congrates!!! You have completed all the current task');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const taskCounter = document.querySelector('.totalTasks');
  const assignedCounter = document.querySelector('.taskProgress');
  const activityLog = document.querySelector('.activity-log');
  const buttons = document.querySelectorAll('.completed');

  let assignedCount = parseInt(assignedCounter.textContent, 10);
  let progressCount = parseInt(taskCounter.textContent, 10);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (assignedCount > 0) {
        assignedCount--;
        progressCount++;

        assignedCounter.textContent = `0${assignedCount}`;
        taskCounter.textContent =
          progressCount < 10 ? `0${progressCount}` : progressCount;

        button.disabled = true;
        button.classList.add('opacity-50', 'cursor-not-allowed');

        const taskTitle = button
          .closest('.p-4')
          .querySelector('h2').textContent;

        const now = new Date();
        const timeString = now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });

        const logEntry = document.createElement('p');
        logEntry.textContent = `You have completed the task "${taskTitle}" at ${timeString}`;
        logEntry.classList.add(
          'text-[16]',
          'bg-[#F4F7FF]',
          'p-2.5',
          'rounded-md',
          'shadow',
          'mb-7'
        );

        activityLog.appendChild(logEntry);
      }
      alert('Board Updated Successfully!');
      checkTaskProgress();
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeButton');
  const body = document.body;

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  themeButton.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeButton');
  const body = document.body;
  let rotation = 0;

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  themeButton.addEventListener('click', () => {
    body.style.backgroundColor = getRandomColor();

    rotation += 20;
    themeButton.style.transform = `rotate(${rotation}deg)`;
  });
});

function clearActivityLog() {
  const activityLog = document.querySelector('.activity-log');
  activityLog.innerHTML = ''; // Clears all contents of the activity log
}

document
  .querySelector('.clearHistoryButton')
  .addEventListener('click', clearActivityLog);
