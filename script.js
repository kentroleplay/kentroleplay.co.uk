// script.js

function submitApplication() {
    const robloxUsername = document.getElementById('robloxUsername').value;
    const discordUsername = document.getElementById('discordUsername').value;
    const whyRole = document.getElementById('whyRole').value;
    const whatChange = document.getElementById('whatChange').value;
  
    const applicationData = {
      robloxUsername,
      discordUsername,
      whyRole,
      whatChange,
    };
  
    const embed = {
      title: 'New Role Application',
      color: 0x3498db, // Discord Blue
      fields: [
        { name: 'Roblox Username', value: robloxUsername },
        { name: 'Discord Username', value: discordUsername },
        { name: 'Why you want the role', value: whyRole },
        { name: 'What would you change', value: whatChange },
      ],
    };
  
    // Send data to Discord webhook with embed
    const webhookURL = 'https://discord.com/api/webhooks/1181522880123633754/HET4R1_HJWLZ1MiFKDrcdk0pLNWBVWLc7QmJh2UW6icG35o0nc9FWvZ6yZqXtkMVBHr5';
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ embeds: [embed] }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        alert('Application submitted successfully!');
      })
      .catch(error => {
        console.error('Error submitting application:', error);
        alert('Failed to submit application. Please try again later.');
      });
  }