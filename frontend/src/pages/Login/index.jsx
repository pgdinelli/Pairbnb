import { Link } from "react-router-dom"

function Login() {
    return(
        <section className="flex items-center">
            <div className="flex flex-col items-center mx-auto max-w-96 w-full gap-4">
                <h1 className="text-3xl font-bold">Entre com sua conta</h1>
                <form className="flex flex-col gap-1 w-full">
                    <div className="mb-4">
                        <label htmlFor="email" className="px-3.5">Email</label>
                        <input placeholder="Digite seu e-mail" type="email" className="w-full rounded-full border border-gray-300 px-4 py-2" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="px-3.5">Senha</label>
                        <input placeholder="Digite sua senha" type="password" className="w-full rounded-full border border-gray-300 px-4 py-2" />
                    </div>
                    <button className="bg-primary-400 text-white font-bold cursor-pointer rounded-full py-2">Entrar</button>
                </form>
                <p>Ainda não tem uma conta? <Link to='/cadastrar' className="font-semibold underline">Cadastre-se aqui!</Link></p>
            </div>
      </section>
    )
}

export default Login