import { useState } from 'react';

function Login() {
    const [res1, setRes] = useState(null);

    async function handleLogin(event) {
        event.preventDefault();

        const username = document.getElementsByName('un')[0].value;
        const password = document.getElementsByName('pw')[0].value;

        try {
            const response = await fetch('http://localhost:8081/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ un: username, pw: password }),
            });

            const result = await response.json();

            if (result.status === 'success') {
                // Redirect to the home page
                window.location.href = '/home';
            } else {
                setRes(result.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div>
            <center>
                <p style={{ fontSize: "xx-large" }}>Login</p> <br /><br />
                <form>
                    Username: <input type="text" name="un" /> <br /><br />
                    Password: <input type="password" name="pw" /> <br /><br />
                    <button onClick={handleLogin}>Login</button><br /><br />
                    <p>{res1}</p>
                </form>
            </center>
        </div>
    );
}
export default Login