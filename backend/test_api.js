(async () => {
  const base = 'http://localhost:5000';
  try {
    console.log('Registering user...');
    let res = await fetch(base + '/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Test User', email: 'test@example.com', password: 'Password123' })
    });
    let data = await res.json();
    console.log('Register response:', data);

    console.log('Logging in...');
    res = await fetch(base + '/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com', password: 'Password123' })
    });
    data = await res.json();
    console.log('Login response:', data);

    const token = data.token;
    console.log('Token:', token);

    console.log('Fetching profile with token...');
    res = await fetch(base + '/api/users/profile', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token }
    });
    data = await res.json();
    console.log('Profile response:', data);
  } catch (err) {
    console.error('Error during API test:', err);
  }
})();
