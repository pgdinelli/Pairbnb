import { Link } from "react-router-dom"

function NotFound() {
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-6xl font-bold">Erro 404</h1>
            <h2 className="text-4xl font-semibold mb-3.5">Ops... parece que esta página não existe.</h2>
            <p className="text-3xl">Volte para a Home <Link to='/' className="font-semibold underline">clicando aqui!</Link></p>
        </div>
    )
}

export default NotFound