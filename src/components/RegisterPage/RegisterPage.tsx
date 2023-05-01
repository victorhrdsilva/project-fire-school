import { Link } from "react-router-dom";

export default function RegisterPage() {
    function Submit () {
        console.log("foi")
    }
    return (
        <>
            <form onSubmit={Submit}>
                <input name="name" type="text" placeholder="nome"  required></input>
                <input name="email" type="email" placeholder="email" required></input>
                <input name="password" type="password" placeholder="senha" required></input>
                <input name="confirm-password" type="password" placeholder="Confirme a senha" required></input>
                <button type="submit" value="Cadastrar">Cadastrar</button>
            </form>
            <Link to={"/"}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </>
    )
}