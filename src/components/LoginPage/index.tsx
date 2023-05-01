import { Link } from "react-router-dom"
import { Container } from "./style"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string,
    exampleRequired: string,
};

export default function LoginPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="email" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>É necessário informar o Email</span>}
                <input  type="password" placeholder="senha" {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>É necessário informar a Senha</span>}

                <input type="submit" />
            </form>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}
