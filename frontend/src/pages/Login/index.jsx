import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login({ setUser }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password)
            alert("Campos e-mail e senha não podem estar vazios!");

        try {
            const { data: userDoc } = await axios.post("/users/login", {
                email,
                password,
            });

            setUser(userDoc);
            setRedirect(true);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    if(redirect) return <Navigate to='/' />

    return (
        <section className="flex items-center">
            <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
                <h1 className="text-3xl font-bold">Entre com sua conta</h1>
                <form className="flex w-full flex-col gap-1" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="px-3.5">
                            Email
                        </label>
                        <input
                            placeholder="Digite seu e-mail"
                            type="email"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="px-3.5">
                            Senha
                        </label>
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            className="w-full rounded-full border border-gray-300 px-4 py-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="bg-primary-400 cursor-pointer rounded-full py-2 font-bold text-white">
                        Entrar
                    </button>
                </form>
                <p>
                    Ainda não tem uma conta?{" "}
                    <Link to="/cadastrar" className="font-semibold underline">
                        Cadastre-se aqui!
                    </Link>
                </p>
            </div>
        </section>
    );
}

export default Login;
