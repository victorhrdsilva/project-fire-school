import { Link } from "react-router-dom"
import { Container } from "./style"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginFormSchema = z.object({
    email: z.string().email({ message: 'Insira um email válido' }).transform((email) => email.toLocaleLowerCase),
    password: z.string().min(6, { message: 'Senha requer ao menos 6 dígitos' }),
});

type loginFormData = z.infer<typeof loginFormSchema>

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<loginFormData>({
        resolver: zodResolver(loginFormSchema),
    });
    
    async function handleLoginSubmit(data:loginFormData) {
        console.log(data)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit(handleLoginSubmit)}>
                <input type="email" placeholder="email" {...register('email')} />
                {errors.email?.message && <span>{errors.email?.message}</span>}
                <input type="password" placeholder="senha" {...register('password', { required: true })} />
                {errors.password?.message && <span>{errors.password?.message}</span>}

                <input type="submit" />
            </form>
            <Link to={"/register"}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </Container>
    );
}
