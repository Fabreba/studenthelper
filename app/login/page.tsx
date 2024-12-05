import { login, signup } from '@/app/login/actions'
export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <p className="font-bold text-xl">Bem vindo ao Student Helper</p>
          <p>Crie uma conta ou conecte-se</p>

          <form className='flex flex-col gap-4'>
          <label htmlFor="username">Usuário:</label>
            <input className="p-2 outline outline-1 rounded" placeholder="Digite seu usuário" id="username" name="username" required />
            <label htmlFor="email">Email:</label>
            <input className="p-2 outline outline-1 rounded" placeholder="Digite seu E-mail" id="email" name="email" type="email" required />
            <label htmlFor="password">Senha:</label>
            <input className="p-2 outline outline-1 rounded" placeholder="Digite sua senha" id="password" name="password" type="password" required />
            <div className="flex w-full justify-evenly space-x-4">
              <button className="p-2 px-8 outline rounded" formAction={login}>
                Log in
              </button>
              <button className="p-2 px-8 outline rounded" formAction={signup}>
                Sign up
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
