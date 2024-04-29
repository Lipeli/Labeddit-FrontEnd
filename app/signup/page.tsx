import React from 'react';

const signup = () => {

    return (
        <div style={{ textAlign: 'center' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: 'lightgray' }}>
                <img src="https://user-images.githubusercontent.com/52434685/120907235-44d0cb80-c636-11eb-94f4-37fc890a2ceb.gif" alt="Logo" style={{ width: '40px', height: '40px', marginLeft: '10rem', }} />
                <button style={{ color: '#2b00ff', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
                    Login
                </button>
            </header>
            <div style={{ marginTop: '40px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '150px' }}>
                    Welcome to Labeddit
                </h1>
                <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input type="text" placeholder="Nickname" style={{ width: '300px', padding: '10px', marginBottom: '20px', border: '1px solid lightgray', borderRadius: '10px', }} />
                    <input type="email" placeholder="Email" style={{ width: '300px', padding: '10px', marginBottom: '20px', border: '1px solid lightgray', borderRadius: '10px', }} />
                    <input type="password" placeholder="Password" style={{ width: '300px', padding: '10px', marginBottom: '20px', border: '1px solid lightgray', borderRadius: '10px', }} />
                    <div style={{ padding: '10px', }}>
                        <p>
                            Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '20px', }}>
                        <input type="checkbox" id="terms" style={{ marginRight: '10px' }} />
                        <label htmlFor="terms">
                            Gostaria de receber emails sobre notícias
                        </label>
                    </div>
                    <button type="submit" style={{ backgroundColor: '#ff8800', color: '#fff', padding: '10px 20px', borderRadius: '20px', border: 'none', width: '350px', }}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default signup;
