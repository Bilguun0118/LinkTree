import axios from "axios";
const LogIn = () => {
    const req = async () => {
        const result = await axios({
            url: "http://localhost:8000/api/v1/login",
            method: "POST",
            headers: {
                //'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            data: {
                email: "bilguun@gmail.com",
                password: "1234"
            },
        });
        console.log(result);
        return result
    }   
    return ( 
        <div className="container">
            <h1>Log in to your MyLinkTree</h1>
            <input type="text" placeholder="mail " />
            <input type="text" placeholder="pass" />
            <p>log in with phone number</p>
            <button onClick={req}>Log in</button>
            <p>forget pass</p>
            <h3>create accaunt</h3>

            <p>Энэ сайтыг reCAPTCHA хамгаалсан бөгөөд Google-ийн Нууцлалын бодлого, үйлчилгээний нөхцөлийг дагаж мөрдөнө</p>
        </div>
    )
}

export default LogIn